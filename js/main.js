/**
 * main.js — v10.5 "LabTech Command Center"
 * Core de Orquestração com ADA Command Post, AudioController e Adaptive Engine
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; // Novo controlador
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
 * @param {string} estado - 'idle', 'ok', 'no'
 */
function animarAda(estado) {
    const img = $('av-img');
    const vOk = $('vid-ok');
    const vNo = $('vid-no');
    const container = $('ada-command-post');

    if (!container) return;
    container.classList.remove('hidden');

    // Reset geral
    [img, vOk, vNo].forEach(el => el.classList.add('avh'));

    if (estado === 'ok') {
        vOk.classList.remove('avh');
        vOk.currentTime = 0;
        vOk.play();
    } else if (estado === 'no') {
        vNo.classList.remove('avh');
        vNo.currentTime = 0;
        vNo.play();
    } else {
        img.classList.remove('avh');
    }
}

function ocultarTodas() {
    ['splash-screen','block-selector','game-screen'].forEach(id => {
        $(id)?.classList.add('hidden');
    });
}

/* ============================================================
   FLUXO DE NAVEGAÇÃO
   ============================================================ */

function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '';
    
    // Inicia áudio na primeira interação
    AudioCtrl.play(); 

    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
    $('ada-command-post')?.classList.add('hidden'); // Esconde ADA no menu
    
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
    animarAda('idle'); // Mostra a ADA grande no canto

    if ($('nome-bloco-display')) $('nome-bloco-display').textContent = nomes[id];

    updHUD();
    proximaQ();
}

/* ============================================================
   SISTEMA DE QUESTÕES ADAPTATIVAS
   ============================================================ */

function proximaQ() {
    setAnimando(false);
    animarAda('idle'); // Volta ADA para modo estático
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
    renderCv(q); // Renderiza elementos gráficos (ex: reta numérica)

    // Lógica de alternativas
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

    // Feedback Visual nos Botões
    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        if (b.textContent === String(q.res)) b.classList.add('ok');
        if (b.textContent === String(alternativa.valor) && !analise.correto) b.classList.add('no');
    });

    if (analise.correto) {
        G.acertos++; G.combo++;
        feedbackEl.className = 'fb-box acerto';
        feedbackEl.innerHTML = `<h3>[✓] SUCESSO</h3><p>${q.passo}</p>`;
        
        animarAda('ok'); // ADA comemora!
        narrarContexto(q.passo);
        
        // Ajusta intensidade da trilha se o combo estiver alto
        if (G.combo >= 4) AudioCtrl.setIntensity(true);

    } else {
        G.erros++; G.combo = 0;
        registrarErro(G, analise);
        AudioCtrl.setIntensity(false);

        const dano = 5 + (analise.peso * 5);
        G.vida = Math.max(0, G.vida - dano);

        feedbackEl.className = 'fb-box erro';
        feedbackEl.innerHTML = `<h3>[!] FALHA</h3><p>${analise.descricao}</p>`;
        
        animarAda('no'); // ADA alerta!
        const textoErro = q.dica ? `${analise.descricao}. Dica: ${q.dica}` : analise.descricao;
        narrarContexto(textoErro);
    }

    if (q.tipo === 'reta' || q.tipo === 'sinais') setTimeout(() => animarArcos(q), 100);
    
    updHUD();
    $('btn-prox')?.classList.remove('hidden');
    if (G.vida <= 0) setTimeout(exibirGameOver, 1200);
}

/* ============================================================
   INICIALIZAÇÃO E EVENTOS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa sons
    AudioCtrl.init();

    // Navegação base
    on('btn-acessar', mostrarSeletorBlocos);
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    on('btn-prox', proximaQ);

    // Controles de Áudio/Voz
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', toggleVoz);

    // Modais
    on('btn-perfil', () => {
        $('perfil-nome-display').textContent = G.nome;
        $('perfil-vida-display').textContent = Math.round(G.vida);
        $('perfil-acertos-display').textContent = G.acertos;
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

    // Delegar botões de voltar ao menu
    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            ocultarTodas();
            $('block-selector').classList.remove('hidden');
            $('ada-command-post').classList.add('hidden');
        };
    });

    console.log(`[LabTech] Engine v10.5 Online. ADA Command Center Ativo.`);
});
