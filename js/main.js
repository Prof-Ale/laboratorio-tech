/**
 * main.js — v10.6 "LabTech Stable Command"
 * Core de Orquestração com ADA Command Post, AudioController e Adaptive Engine
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { 
    updHUD, narrarContexto, toggleMusica, toggleVoz, 
    exibirGameOver, abrirM, fecharM 
} from './ui-manager.js';

// Variáveis de controle
let qAtual = null;
window.G = G; 

/* ============================================================
   UTILITÁRIOS DE UI & AVATAR
   ============================================================ */
function $(id) { return document.getElementById(id); }

function on(id, fn) {
    const el = $(id);
    if (el) el.addEventListener('click', fn);
}

/**
 * Controla o Posto de Comando da ADA (Canto Inferior Direito)
 */
function animarAda(estado) {
    const img = $('av-img');
    const vOk = $('vid-ok');
    const vNo = $('vid-no');
    const container = $('ada-command-post');

    if (!container) return;

    // Remove classes de vídeo e oculta todos os assets primeiro
    [img, vOk, vNo].forEach(el => {
        if(el) el.classList.add('avh');
    });

    // Ativa o asset correspondente ao estado
    if (estado === 'ok' && vOk) {
        vOk.classList.remove('avh');
        vOk.currentTime = 0;
        vOk.play().catch(() => {});
    } else if (estado === 'no' && vNo) {
        vNo.classList.remove('avh');
        vNo.currentTime = 0;
        vNo.play().catch(() => {});
    } else if (img) {
        img.classList.remove('avh');
    }
}

function ocultarTodas() {
    ['splash-screen','block-selector','game-screen'].forEach(id => {
        const el = $(id);
        if (el) el.classList.add('hidden');
    });
}

/* ============================================================
   FLUXO DE NAVEGAÇÃO
   ============================================================ */

function mostrarSeletorBlocos() {
    // 1. Coleta dados do usuário
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '';
    
    // 2. Inicializa e toca áudio na primeira interação do usuário (vital para navegadores)
    AudioCtrl.init();
    AudioCtrl.play(); 

    // 3. Transição de tela
    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
    
    // 4. Garante que a ADA Gigante não apareça no menu
    $('ada-command-post')?.classList.remove('active'); 
    
    narrarContexto(`Olá ${G.nome}, selecione o setor de análise.`);
    localStorage.setItem('laboratorio_tech_data', JSON.stringify(G));
}

function iniciarBloco(id) {
    const nomes = { 
        1:"Base Numérica", 2:"Operações", 3:"Medidas", 
        4:"Álgebra", 5:"Estatística", 6:"Geometria II" 
    };
    
    G.currentBlock = id;
    G.vida = 100; G.combo = 0;
    G.acertos = 0; G.erros = 0;
    limparHistoricoSessao();

    ocultarTodas();
    $('game-screen')?.classList.remove('hidden');

    // ATIVA O POSTO DE COMANDO DA ADA
    const adaPost = $('ada-command-post');
    if (adaPost) {
        adaPost.classList.add('active');
        animarAda('idle'); 
    }

    if ($('nome-bloco-display')) $('nome-bloco-display').textContent = nomes[id];

    updHUD();
    proximaQ();
}

/* ============================================================
   SISTEMA DE QUESTÕES E RESPOSTAS
   ============================================================ */

function proximaQ() {
    setAnimando(false);
    animarAda('idle'); 
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

function renderQ(q) {
    if (!q) return;

    const display = $('conta-display');
    const fb = $('fb');
    const grid = $('grid-botoes');
    
    if (display) display.innerHTML = `<span>${q.display}</span>`;
    if (fb) { fb.innerHTML = ''; fb.className = 'fb-box'; }
    if (grid) grid.innerHTML = '';

    $('btn-prox')?.classList.add('hidden');
    G.respondeu = false;
    setAnimando(false);
    renderCv(q); 

    const alternativas = [...(q.alternativas || [])].sort(() => Math.random() - 0.5);

    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = String(alt.valor);
        b.onclick = () => processarResposta(alt, q);
        grid.appendChild(b);
    });
}

function processarResposta(alternativa, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    const analise = analisarAlternativa(alternativa);
    const feedbackEl = $('fb');

    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        if (b.textContent === String(q.res)) b.classList.add('ok');
        if (b.textContent === String(alternativa.valor) && !analise.correto) b.classList.add('no');
    });

    if (analise.correto) {
        G.acertos++; G.combo++;
        feedbackEl.className = 'fb-box acerto';
        feedbackEl.innerHTML = `<h3>[✓] SUCESSO</h3><p>${q.passo}</p>`;
        
        animarAda('ok'); 
        narrarContexto(q.passo);
        if (G.combo >= 4) AudioCtrl.setIntensity(true);

    } else {
        G.erros++; G.combo = 0;
        registrarErro(G, analise);
        AudioCtrl.setIntensity(false);

        const dano = 5 + (analise.peso * 5);
        G.vida = Math.max(0, G.vida - dano);

        feedbackEl.className = 'fb-box erro';
        feedbackEl.innerHTML = `<h3>[!] FALHA</h3><p>${analise.descricao}</p>`;
        
        animarAda('no'); 
        const textoErro = q.dica ? `${analise.descricao}. Dica: ${q.dica}` : analise.descricao;
        narrarContexto(textoErro);
    }

    if (q.tipo === 'reta' || q.tipo === 'sinais') setTimeout(() => animarArcos(q), 100);
    
    updHUD();
    $('btn-prox')?.classList.remove('hidden');
    if (G.vida <= 0) setTimeout(exibirGameOver, 1200);
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Escuta cliques para os blocos
    on('btn-acessar', mostrarSeletorBlocos);
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    
    on('btn-prox', proximaQ);
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', toggleVoz);

    // Modais
    on('btn-perfil', () => {
        if($('perfil-nome-display')) $('perfil-nome-display').textContent = G.nome;
        abrirM('mperfil');
    });
    on('btn-dash', () => abrirM('mdash'));
    on('btn-fecha-dash', () => fecharM('mdash'));
    on('btn-cred', () => abrirM('mcred'));
    on('btn-fecha-cred', () => fecharM('mcred'));
    on('btn-reiniciar', () => {
        G.vida = 100;
        fecharM('go');
        iniciarBloco(G.currentBlock);
    });

    // Voltar ao seletor
    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            ocultarTodas();
            $('block-selector').classList.remove('hidden');
            $('ada-command-post').classList.remove('active');
        };
    });

    console.log(`[LabTech] Engine v10.6 Online.`);
});
