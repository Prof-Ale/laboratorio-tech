/**
 * main.js — v10.3 "MathLab QA, Debug & Voice Active"
 * Core de Orquestração com Validação, Telemetria e DUA Sonoro
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { updHUD, narrarContexto, toggleMusica, toggleVoz, tocarAv, exibirGameOver, abrirM, fecharM } from './ui-manager.js';

// Variáveis de controle global para Debug
let qAtual = null;
window.G = G; // Exposto para o console F12

/* ============================================================
   LÓGICA HÍBRIDA DE QUESTÕES
   ============================================================ */

function obterAlternativas(q) {
    if (Array.isArray(q.alternativas)) return q.alternativas;

    return (q.botoes || []).map(valor => {
        const correta = Array.isArray(q.res)
            ? q.res.map(String).includes(String(valor))
            : String(valor) === String(q.res);

        if (correta) return { valor, tipo: 'acerto' };

        const ehConceito = q.erroConceito?.map(String).includes(String(valor));
        return {
            valor,
            tipo: 'erro',
            categoria: ehConceito ? 'conceito' : 'calculo',
            erro: ehConceito ? 'erro_conceitual_generico' : 'erro_operacional_generico',
            descricao: ehConceito ? 'Falha na compreensão do conceito base.' : 'Equívoco no processo de execução.',
            peso: ehConceito ? 3 : 2
        };
    });
}

/* ============================================================
   UTILITÁRIOS DE DOM E DEBUG
   ============================================================ */
function $(id) { return document.getElementById(id); }

function on(id, fn) {
    const el = $(id);
    if (el) el.addEventListener('click', fn);
}

function ocultarTodas() {
    ['splash-screen','block-selector','game-screen'].forEach(id => {
        $(id)?.classList.add('hidden');
    });
}

/**
 * Atualiza o painel de debug na tela
 */
function updateDebug() {
    if (!$('debug-panel')) return;
    $('db-q-id').textContent = qAtual ? qAtual.id : '---';
    $('db-q-tipo').textContent = qAtual ? qAtual.tipo : '---';
    $('db-combo').textContent = G.combo;
    $('db-vida').textContent = G.vida;
    $('db-engine-status').textContent = G.respondeu ? "BLOQUEADO (Aguardando Prox)" : "PRONTO";
}

/* ============================================================
   PERSISTÊNCIA E NAVEGAÇÃO
   ============================================================ */
function carregarDados() {
    const raw = localStorage.getItem('laboratorio_tech_data');
    if (!raw) return;
    try {
        const d = JSON.parse(raw);
        Object.assign(G, d);
    } catch(e) { console.warn("[LabTech] Erro ao carregar dados salvos."); }
}

function salvarProgresso() {
    localStorage.setItem('laboratorio_tech_data', JSON.stringify(G));
}

function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '';
    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
    narrarContexto(`Olá ${G.nome}, selecione o setor de análise.`);
    salvarProgresso();
}

function iniciarBloco(id) {
    const nomes = { 
        1:"A Base Numérica", 2:"Números e Operações", 3:"Grandezas e Medidas", 
        4:"Álgebra e Padrão", 5:"Estatística e Dados", 6:"Geometria e Espaço" 
    };
    
    G.currentBlock = id;
    G.vida = 100; G.energia = 60; G.combo = 0;
    G.acertos = 0; G.erros = 0;
    limparHistoricoSessao();

    ocultarTodas();
    $('game-screen')?.classList.remove('hidden');
    if ($('nome-bloco-display')) $('nome-bloco-display').textContent = nomes[id];

    const bgm = $('bgm');
    if (bgm && G.musica) { bgm.volume = 0.05; bgm.play().catch(()=>{}); }

    updHUD();
    proximaQ();
}

/* ============================================================
   SISTEMA DE RESPOSTA E DIAGNÓSTICO
   ============================================================ */
function renderQ(q) {
    if (!q) {
        console.error("[LabTech] Erro: Tentativa de renderizar questão nula.");
        return;
    }

    const display = $('conta-display');
    const fb = $('fb');
    
    if (display) display.innerHTML = `<span>${q.display}</span>`;
    if (fb) { fb.innerHTML = ''; fb.className = 'fb-box'; }
    
    $('btn-prox')?.classList.add('hidden');
    G.respondeu = false;
    setAnimando(false);
    renderCv(q);

    const grid = $('grid-botoes');
    if (!grid) return;
    grid.innerHTML = '';

    const alternativas = [...obterAlternativas(q)].sort(() => Math.random() - 0.5);
    grid.style.gridTemplateColumns = alternativas.length <= 3 ? `repeat(${alternativas.length}, 1fr)` : '1fr 1fr';

    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = String(alt.valor);
        b.addEventListener('click', () => processarResposta(alt, q));
        grid.appendChild(b);
    });
}

function processarResposta(alternativa, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    try {
        const analise = analisarAlternativa(alternativa);
        const feedbackEl = $('fb');

        if (q.bncc && !G.historico[q.bncc]) {
            G.historico[q.bncc] = { desc: q.bncc_desc, acertos: 0, erros_conceito: 0, erros_calculo: 0, bloco: G.currentBlock };
        }

        // Feedback Visual
        document.querySelectorAll('.ba').forEach(b => {
            b.classList.add('dis');
            const ehCorreta = Array.isArray(q.res) ? q.res.map(String).includes(b.textContent) : b.textContent === String(q.res);
            if (ehCorreta) b.classList.add('ok');
            if (b.textContent === String(alternativa.valor) && !analise.correto) b.classList.add('no');
        });

        if (analise.correto) {
            G.acertos++; G.combo++; G.energia = Math.min(100, G.energia + 10);
            if (q.bncc) G.historico[q.bncc].acertos++;
            
            feedbackEl.className = 'fb-box acerto';
            feedbackEl.innerHTML = `<h3>[✓] Algoritmo Validado!</h3><p>${q.passo}</p>`;
            tocarAv('ok');
            
            // DUA SONORO: Narra o passo a passo da vitória!
            narrarContexto(q.passo);
            
        } else {
            G.erros++; G.combo = 0;
            registrarErro(G, analise);

            const dano = 5 + (analise.peso * 5);
            G.vida = Math.max(0, G.vida - dano);
            if ($('db-last-err')) $('db-last-err').textContent = analise.erro;
