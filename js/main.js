/**
 * main.js — v10.8 "MathLab Protocol Stable"
 * Refatoração focada em estabilidade de eventos e correção de navegação.
 */
import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { updHUD, narrarContexto, toggleVoz, exibirGameOver } from './ui-manager.js';

// Helpers de DOM
const $ = (id) => document.getElementById(id);
const on = (id, fn) => {
    const el = $(id);
    if (el) el.onclick = fn; // Usando onclick direto para evitar múltiplas escutas
};

// Modais (Sincronizados com o CSS v11.0)
const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

/* ============================================================
   CONTROLE DO AVATAR ADA
   ============================================================ */
function animarAda(estado) {
    const assets = { img: $('av-img'), ok: $('vid-ok'), no: $('vid-no') };
    // Esconde todos os assets
    Object.values(assets).forEach(el => el?.classList.add('avh'));

    if (estado === 'ok' && assets.ok) {
        assets.ok.classList.remove('avh');
        assets.ok.play().catch(() => {});
    } else if (estado === 'no' && assets.no) {
        assets.no.classList.remove('avh');
        assets.no.play().catch(() => {});
    } else if (assets.img) {
        assets.img.classList.remove('avh');
    }
}

/* ============================================================
   NAVEGAÇÃO E FLUXO
   ============================================================ */
function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value || 'Cientista';
    G.turma = $('turma-cientista')?.value || '';
    
    // Inicializa áudio APÓS o primeiro clique (Regra dos navegadores)
    AudioCtrl.init();
    AudioCtrl.play();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('block-selector')?.classList.remove('hidden');
    $('ada-command-post')?.classList.remove('active'); // ADA não aparece no menu
}

function iniciarBloco(id) {
    G.currentBlock = id;
    G.vida = 100;
    G.acertos = 0;
    G.combo = 0;
    limparHistoricoSessao();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('game-screen')?.classList.remove('hidden');
    
    // Ativa o Posto de Comando da ADA (Configurado no CSS para 220px/250px)
    $('ada-command-post')?.classList.add('active');
    animarAda('idle');
    
    updHUD();
    proximaQ();
}

/* ============================================================
   LOGICA DE RESPOSTAS
   ============================================================ */
function processarResposta(alt, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    const analise = analisarAlternativa(alt);
    
    // Feedback visual nos botões
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
        G.combo = 0;
        registrarErro(G, analise);
        G.vida -= (10 + (analise.peso || 1) * 5);
        animarAda('no');
        narrarContexto(q.dica || analise.descricao);
    }
    
    updHUD();
    $('btn-prox')?.classList.remove('hidden');
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
    if ($('conta-display')) $('conta-display').textContent = q.display;
    const grid = $('grid-botoes');
    if (grid) grid.innerHTML = '';
    $('btn-prox')?.classList.add('hidden');
    
    renderCv(q); // Chama o motor gráfico (Reta/Canvas)

    const alternativas = [...(q.alternativas || [])];
    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = alt.valor;
        b.onclick = () => processarResposta(alt, q);
        grid?.appendChild(b);
    });
}

/* ============================================================
   INICIALIZAÇÃO DE EVENTOS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Botão de Login
    on('btn-acessar', mostrarSeletorBlocos);
    
    // Botões dos Blocos (1-6)
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    
    // Controles de Jogo
    on('btn-prox', proximaQ);
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', toggleVoz);

    // Botões Superiores
    on('btn-perfil', () => {
        $('perfil-nome-display').textContent = G.nome;
        $('perfil-acertos-display').textContent = G.acertos;
        $('perfil-vida-display').textContent = Math.round(G.vida);
        abrirM('mperfil');
    });
    on('btn-dash', () => abrirM('mdash'));
    on('btn-cred', () => abrirM('mcred'));
    
    // Fechar modais (botão X)
    document.querySelectorAll('.mx').forEach(btn => {
        btn.onclick = (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.remove('active');
        };
    });

    // Botões de navegação interna
    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            fecharM('mperfil');
            document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
            $('block-selector')?.classList.remove('hidden');
            $('ada-command-post')?.classList.remove('active');
        };
    });

    console.log("LabTech 10.9: Protocolo Estabilizado.");
});
