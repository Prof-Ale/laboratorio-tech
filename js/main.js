/**
 * main.js — v10.7 "Final Stable"
 */
import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { updHUD, narrarContexto, toggleVoz, exibirGameOver } from './ui-manager.js';

function $(id) { return document.getElementById(id); }
function on(id, fn) { const el = $(id); if (el) el.addEventListener('click', fn); }

// Funções de Modal Seguras
const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

/* CONTROLE DA ADA */
function animarAda(estado) {
    const assets = { img: $('av-img'), ok: $('vid-ok'), no: $('vid-no') };
    Object.values(assets).forEach(el => el?.classList.add('avh'));

    if (estado === 'ok' && assets.ok) {
        assets.ok.classList.remove('avh');
        assets.ok.play().catch(()=>{});
    } else if (estado === 'no' && assets.no) {
        assets.no.classList.remove('avh');
        assets.no.play().catch(()=>{});
    } else if (assets.img) {
        assets.img.classList.remove('avh');
    }
}

/* NAVEGAÇÃO */
function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value || 'Cientista';
    G.turma = $('turma-cientista')?.value || '';
    AudioCtrl.init();
    AudioCtrl.play();
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('block-selector').classList.remove('hidden');
    $('ada-command-post').classList.remove('active'); // Oculta ADA gigante no menu
}

function iniciarBloco(id) {
    G.currentBlock = id;
    G.vida = 100;
    limparHistoricoSessao();
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('game-screen').classList.remove('hidden');
    $('ada-command-post').classList.add('active'); // Mostra ADA gigante no jogo
    animarAda('idle');
    updHUD();
    proximaQ();
}

function processarResposta(alt, q) {
    if (G.respondeu) return;
    G.respondeu = true;
    const analise = analisarAlternativa(alt);
    
    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        if (b.textContent === String(q.res)) b.classList.add('ok');
        if (b.textContent === String(alt.valor) && !analise.correto) b.classList.add('no');
    });

    if (analise.correto) {
        G.acertos++; G.combo++;
        animarAda('ok');
        narrarContexto(q.passo);
    } else {
        G.erros++; G.combo = 0;
        G.vida -= (10 + (analise.peso || 1) * 5);
        animarAda('no');
        narrarContexto(q.dica || analise.descricao);
    }
    
    updHUD();
    $('btn-prox').classList.remove('hidden');
    if (G.vida <= 0) setTimeout(exibirGameOver, 1000);
}

function proximaQ() {
    G.respondeu = false;
    animarAda('idle');
    const q = selQ(G.currentBlock);
    renderQ(q);
}

function renderQ(q) {
    if(!q) return;
    $('conta-display').textContent = q.display;
    $('grid-botoes').innerHTML = '';
    $('btn-prox').classList.add('hidden');
    renderCv(q);

    const alternativas = [...(q.alternativas || [])];
    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = alt.valor;
        b.onclick = () => processarResposta(alt, q);
        $('grid-botoes').appendChild(b);
    });
}

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
    on('btn-acessar', mostrarSeletorBlocos);
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    on('btn-prox', proximaQ);
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', toggleVoz);

    // Botões de Perfil, Dash e Créditos
    on('btn-perfil', () => {
        $('perfil-nome-display').textContent = G.nome;
        $('perfil-acertos-display').textContent = G.acertos;
        $('perfil-vida-display').textContent = Math.round(G.vida);
        abrirM('mperfil');
    });
    on('btn-dash', () => abrirM('mdash'));
    on('btn-cred', () => abrirM('mcred'));
    
    // Fechar modais ao clicar no X (classe .mx)
    document.querySelectorAll('.mx').forEach(btn => {
        btn.onclick = (e) => e.target.closest('.modal').classList.remove('active');
    });

    // Botões de navegação interna (data-action="seletor")
    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            fecharM('mperfil'); // Garante que fecha o perfil se aberto
            document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
            $('block-selector').classList.remove('hidden');
            $('ada-command-post').classList.remove('active');
        };
    });

    console.log("LabTech 10.9: Protocolo Golden Tech Estabilizado.");
});
