/**
 * main.js - Versão 6.0 "MathLab Integration"
 * Orquestrador com Persistência, Seletor de Blocos e Clínica do Erro v2.
 * Mudanças v6: campo turma, clínica do erro por conceito/cálculo, CSV enriquecido.
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import {
    updHUD,
    narrarContexto,
    toggleMusica,
    toggleVoz,
    tocarAv,
    abrirM,
    fecharM,
    exibirGameOver
} from './ui-manager.js';

let qAtual = null;

/* ========================================================
   PERSISTÊNCIA DE DADOS (LOCALSTORAGE)
======================================================== */
function carregarDadosSalvos() {
    const backup = localStorage.getItem('laboratorio_tech_data');
    if (backup) {
        try {
            const dados = JSON.parse(backup);
            G.historico = dados.historico || {};
            G.nome     = dados.nome     || "";
            G.turma    = dados.turma    || "";
        } catch (e) {
            console.error("Erro ao recuperar banco de dados local", e);
        }
    }
}

function salvarProgresso() {
    const dataToSave = {
        historico: G.historico,
        nome:  G.nome,
        turma: G.turma
    };
    localStorage.setItem('laboratorio_tech_data', JSON.stringify(dataToSave));
}

carregarDadosSalvos();

/* ========================================================
   NAVEGAÇÃO E FLUXO DO USUÁRIO
======================================================== */

window.mostrarSeletorBlocos = function() {
    const inputNome  = document.getElementById("nome-cientista");
    const inputTurma = document.getElementById("turma-cientista");

    const nomeDigitado  = inputNome  && inputNome.value.trim()  !== "" ? inputNome.value.trim()  : "Cientista";
    const turmaDigitada = inputTurma && inputTurma.value.trim() !== "" ? inputTurma.value.trim() : "";

    G.nome  = nomeDigitado;
    G.turma = turmaDigitada;

    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");

    const saudacao = G.turma
        ? `Olá ${G.nome} da turma ${G.turma}, escolha qual setor do laboratório vamos restaurar hoje.`
        : `Olá ${G.nome}, escolha qual setor do laboratório vamos restaurar hoje.`;
    narrarContexto(saudacao);
}

window.iniciarBloco = function(id) {
    const blockNames = {
        1: "Base Numérica",
        2: "Números e Operações",
        3: "Grandezas e Medidas",
        4: "Álgebra e Padrão",
        5: "Estatística e Dados"
    };

    G.currentBlock = id;
    G.vida    = 100;
    G.energia = 60;
    G.combo   = 0;
    G.nivel   = 1;
    limparHistoricoSessao();

    document.getElementById("block-selector").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("av").classList.remove("hidden");
    document.getElementById("nome-bloco-display").textContent = blockNames[id];

    const bgm = document.getElementById("bgm");
    if (bgm) {
        bgm.volume = 0.07;
        if (G.musica) bgm.play().catch(() => {});
    }

    narrarContexto(`Iniciando Bloco ${id}: ${blockNames[id]}. Sistema de diagnóstico ativado.`);
    updHUD();
    proximaQ();
}

window.irParaSeletor = function() {
    setAnimando(false);
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("go").classList.remove("show");
    document.getElementById("av").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");
}

window.voltarAoSplash = function() {
    document.getElementById("block-selector").classList.add("hidden");
    document.getElementById("splash-screen").classList.remove("hidden");
}

/* ========================================================
   MOTOR DE QUESTÕES
======================================================== */

function shuffle(array) {
    let m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m]; array[m] = array[i]; array[i] = t;
    }
    return array;
}

function renderQ(q) {
    if (!q) return;

    document.getElementById("conta-display").innerHTML = "<span>" + q.display + "</span>";
    document.getElementById("regra-box").innerHTML = q.dica || "";
    document.getElementById("fb").textContent = "";
    document.getElementById("btn-prox").classList.add("hidden");

    G.respondeu = false;
    setAnimando(false);
    renderCv(q);

    const g = document.getElementById("grid-botoes");
    g.innerHTML = "";

    const botoesEmbaralhados = shuffle([...q.botoes]);
    g.style.gridTemplateColumns = botoesEmbaralhados.length <= 3
        ? `repeat(${botoesEmbaralhados.length}, 1fr)`
        : "1fr 1fr";

    botoesEmbaralhados.forEach(op => {
        const b = document.createElement("button");
        b.className = "ba";
        b.textContent = op;
        b.onclick = () => { if (!G.respondeu) responder(op, q); };
        g.appendChild(b);
    });
}

function responder(opcao, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    const ok = Array.isArray(q.res)
        ? q.res.map(String).includes(String(opcao))
        : String(opcao) === String(q.res);

    // Inicializa histórico BNCC
    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = {
            desc:          q.bncc_desc || "Habilidade BNCC",
            acertos:       0,
            erros_conceito: 0,
            erros_calculo:  0,
            bloco:         G.currentBlock
        };
    }

    // Feedback visual nos botões
    document.querySelectorAll(".ba").forEach(b => {
        b.classList.add("dis");
        const isCorreta = Array.isArray(q.res)
            ? q.res.map(String).includes(b.textContent)
            : b.textContent === String(q.res);
        if (isCorreta) b.classList.add("ok");
        if (b.textContent === String(opcao) && !ok) b.classList.add("no");
    });

    const fb = document.getElementById("fb");

    if (ok) {
        processarAcerto(q, fb);
    } else {
        processarErro(opcao, q, fb);
    }

    salvarProgresso();
    updHUD();
    if (q.tipo === "reta") animarArcos(q);

    document.getElementById("btn-prox").classList.remove("hidden");
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

function processarAcerto(q, fbEl) {
    G.acertos++;
    G.combo++;
    G.consec_erros = 0;
    G.energia = Math.min(100, G.energia + 10);
    if (G.combo % 5 === 0) G.nivel++;
    if (q.bncc) G.historico[q.bncc].acertos++;

    const elogios = ["Excelente", "Muito bem", "Fabuloso", "Na mosca", "Perfeito"];
    const elogio  = elogios[Math.floor(Math.random() * elogios.length)];

    fbEl.style.color = "var(--neon-green)";
    fbEl.innerHTML   = `✓ ${elogio}! <br><small>${q.passo}</small>`;
    narrarContexto(`${elogio}! ${q.passo}`);
    tocarAv("ok");
}

function processarErro(opcao, q, fbEl) {
    G.erros++;
    G.combo = 0;
    G.consec_erros++;
    G.vida = Math.max(0, G.vida - 20);

    // ── CLÍNICA DO ERRO v2 ──────────────────────────────────────────────
    // Prioridade 1: verifica se a questão define respostas de erro de conceito
    // via campo `erroConceito: ["opcao1", "opcao2"]`
    let tipoErro = "calculo"; // padrão

    if (q.erroConceito && Array.isArray(q.erroConceito)) {
        if (q.erroConceito.map(String).includes(String(opcao))) {
            tipoErro = "conceito";
        }
    } else {
        // Fallback legado: erro de sinal para questões numéricas
        const resEsperada = Array.isArray(q.res) ? Number(q.res[0]) : Number(q.res);
        if (!isNaN(opcao) && Number(opcao) === resEsperada * -1) {
            tipoErro = "conceito"; // sinal errado = erro de conceito
        }
    }

    if (q.bncc) {
        if (tipoErro === "conceito") {
            G.historico[q.bncc].erros_conceito++;
        } else {
            G.historico[q.bncc].erros_calculo++;
        }
    }

    const msgConceito = `⚠️ Erro de conceito — reveja a ideia antes de calcular. ${q.passo}`;
    const msgCalculo  = `⚠️ Erro de cálculo — o caminho estava certo, mas o resultado não. Resposta: ${Array.isArray(q.res) ? q.res[0] : q.res}.`;

    fbEl.style.color = "var(--choco-gold)";
    fbEl.innerHTML   = tipoErro === "conceito" ? msgConceito : msgCalculo;
    narrarContexto(fbEl.innerText);
    tocarAv("no");
}

window.proximaQ = function() {
    setAnimando(false);
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

/* ========================================================
   RELATÓRIOS E FERRAMENTAS DO PROFESSOR
======================================================== */
window.exportarRelatorioCSV = function() {
    const agora  = new Date().toLocaleDateString("pt-BR");
    const nomeArq = `Relatorio_LabTech_${G.nome.replace(/\s/g, '_')}${G.turma ? '_' + G.turma.replace(/\s/g,'_') : ''}.csv`;

    // Cabeçalho enriquecido com turma e data
    let csv = `Aluno;Turma;Data;Bloco;Codigo_BNCC;Descricao;Acertos;Erros_Conceito;Erros_Calculo;Total_Erros;Percentual_Acerto\n`;

    for (let cod in G.historico) {
        const h = G.historico[cod];
        const totalTentativas = h.acertos + h.erros_conceito + h.erros_calculo;
        const pctAcerto = totalTentativas > 0
            ? Math.round((h.acertos / totalTentativas) * 100) + "%"
            : "0%";
        const descLimpa = (h.desc || "").replace(/;/g, ',');
        csv += `${G.nome};${G.turma || ''};${agora};${h.bloco || '?'};${cod};${descLimpa};${h.acertos};${h.erros_conceito};${h.erros_calculo};${h.erros_conceito + h.erros_calculo};${pctAcerto}\n`;
    }

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href     = url;
    link.download = nomeArq;
    link.click();
}

window.verPerfilAluno = function() {
    const patente = G.nivel > 5 ? "Cientista Master" : "Explorador";
    const info = G.turma
        ? `Cientista: ${G.nome}\nTurma: ${G.turma}\nPatente: ${patente}\nAcertos: ${G.acertos}`
        : `Cientista: ${G.nome}\nPatente: ${patente}\nAcertos: ${G.acertos}`;
    narrarContexto(`${G.nome}, sua patente atual é ${patente}.`);
    alert(info);
}

window.reiniciar = function() {
    G.vida = 100; G.energia = 60; G.combo = 0;
    document.getElementById("go").classList.remove("show");
    updHUD();
    proximaQ();
}

/* ========================================================
   DUA — ACESSIBILIDADE DE TECLADO
======================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const atv = document.activeElement;
        if (atv && atv.tagName === 'BUTTON') {
            atv.click();
            e.preventDefault();
        }
    }
});
