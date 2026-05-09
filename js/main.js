/**
 * main.js — v10.1 "MathLab Diagnóstico & Inclusão"
 * Core de Orquestração do LabTech
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { updHUD, narrarContexto, toggleMusica, toggleVoz, tocarAv, exibirGameOver } from './ui-manager.js';

let qAtual = null;

/* ============================================================
   LÓGICA HÍBRIDA DE QUESTÕES
   ============================================================ */

/**
 * Normaliza alternativas para suportar formatos legados e novos.
 */
function obterAlternativas(q) {
    if (Array.isArray(q.alternativas)) return q.alternativas;

    // Adaptador para questões legadas (converte botoes[] para o novo padrão)
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
   UTILITÁRIOS DE DOM
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

/* ============================================================
   PERSISTÊNCIA E DADOS
   ============================================================ */
function carregarDados() {
    const raw = localStorage.getItem('laboratorio_tech_data');
    if (!raw) return;
    try {
        const d = JSON.parse(raw);
        Object.assign(G, d); // Mescla dados salvos no Estado Global
    } catch(e) { console.warn("[LabTech] Erro ao carregar dados salvos."); }
}

function salvarProgresso() {
    localStorage.setItem('laboratorio_tech_data', JSON.stringify(G));
}

carregarDados();

/* ============================================================
   NAVEGAÇÃO E FLUXO
   ============================================================ */
function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '';
    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
    narrarContexto(`Olá ${G.nome}, selecione o setor de análise.`);
}

function iniciarBloco(id) {
    const nomes = { 
        1:"A Base Numérica", 2:"Números e Operações",
        3:"Grandezas e Medidas", 4:"Álgebra e Padrão", 
        5:"Estatística e Dados", 6:"Geometria e Espaço" 
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
    if (!q) return;

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

    const analise = analisarAlternativa(alternativa);
    const feedbackEl = $('fb');

    // Inicializa histórico da habilidade se não existir
    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = { desc: q.bncc_desc, acertos: 0, erros_conceito: 0, erros_calculo: 0, bloco: G.currentBlock };
    }

    // Feedback Visual nos Botões
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
    } else {
        G.erros++; G.combo = 0;
        
        // Registrar erro no Engine Diagnóstico
        registrarErro(G, analise);

        // Cálculo de Dano (Peso 3: 20hp | Peso 2: 15hp | Peso 1: 10hp)
        const dano = 5 + (analise.peso * 5);
        G.vida = Math.max(0, G.vida - dano);

        if (q.bncc) {
            if (analise.categoria === 'conceito') G.historico[q.bncc].erros_conceito++;
            else G.historico[q.bncc].erros_calculo++;
        }

        feedbackEl.className = 'fb-box erro';
        feedbackEl.innerHTML = `
            <h3>[!] Anomalia: ${analise.categoria.toUpperCase()}</h3>
            <p><strong>Diagnóstico:</strong> ${analise.descricao}</p>
            <p class="mt-2" style="font-size:0.9em; opacity:0.8">${q.passo}</p>
        `;
        tocarAv('no');
    }

    if (q.tipo === 'reta' || q.tipo === 'sinais') animarArcos(q);
    
    updHUD();
    salvarProgresso();
    $('btn-prox')?.classList.remove('hidden');

    if (G.vida <= 0) setTimeout(exibirGameOver, 1200);
}

function proximaQ() {
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

/* ============================================================
   DASHBOARD E RELATÓRIOS
   ============================================================ */
function exportarCSV() {
    let csv = 'Habilidade;Descricao;Acertos;Erros_Conceito;Erros_Calculo\n';
    for (const [cod, h] of Object.entries(G.historico)) {
        csv += `${cod};${h.desc};${h.acertos};${h.erros_conceito};${h.erros_calculo}\n`;
    }
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `Relatorio_${G.nome}.csv`);
    a.click();
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    on('btn-acessar', mostrarSeletorBlocos);
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    
    on('btn-prox', proximaQ);
    on('btn-csv', exportarCSV);
    on('btn-musica', toggleMusica);
    on('btn-voz', toggleVoz);
    on('btn-reiniciar', () => { G.vida = 100; reiniciar(); });

    console.log(`[LabTech] Engine v10.1 Ativo. Usuário: ${G.nome}`);
});
