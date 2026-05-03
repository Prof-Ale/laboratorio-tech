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

   /* ========================================================
   CLÍNICA DO ERRO v3 - DIAGNÓSTICO METACOGNITIVO
======================================================== */

function processarErro(opcao, q, fbEl) {
    G.erros++;
    G.combo = 0;
    G.consec_erros++;
    G.vida = Math.max(0, G.vida - 20);

    let tipoErroIdentificado = null;

    // 1. Diagnóstico Automático (Sinal trocado)
    const resEsperada = Array.isArray(q.res) ? Number(q.res[0]) : Number(q.res);
    if (!isNaN(opcao) && Number(opcao) === resEsperada * -1) {
        tipoErroIdentificado = "conceito";
        registrarHistoricoErro(q.bncc, "conceito");
        exibirFeedbackManual(fbEl, q, "conceito");
    } 
    // 2. Se não for óbvio, abrir Diagnóstico Manual para o aluno
    else {
        abrirClinicaManual(q, fbEl);
    }

    salvarProgresso();
    updHUD();
    tocarAv("no");
}

function abrirClinicaManual(q, fbEl) {
    // Usamos o seu sistema de grid de botões para o diagnóstico
    const g = document.getElementById("grid-botoes");
    document.getElementById("conta-display").innerHTML = "<span style='color:var(--choco-gold)'>DIAGNÓSTICO NECESSÁRIO</span>";
    document.getElementById("regra-box").innerHTML = "Cientista, analise seu erro:";

    g.innerHTML = "";
    
    const btnConceito = document.createElement("button");
    btnConceito.className = "ba b1"; // b1 para cor do bloco
    btnConceito.textContent = "CONCEITO (Não entendi a regra)";
    btnConceito.onclick = () => {
        registrarHistoricoErro(q.bncc, "conceito");
        fecharClinicaManual(q, "Erro de Conceito detectado. " + q.passo);
    };

    const btnCalculo = document.createElement("button");
    btnCalculo.className = "ba b2"; 
    btnCalculo.textContent = "CÁLCULO (Me distraí na conta)";
    btnCalculo.onclick = () => {
        registrarHistoricoErro(q.bncc, "calculo");
        fecharClinicaManual(q, "Erro de Cálculo detectado. Atenção aos detalhes!");
    };

    g.appendChild(btnConceito);
    g.appendChild(btnCalculo);
    
    narrarContexto("Cientista, identifique a origem da falha para prosseguirmos.");
}

function registrarHistoricoErro(cod, tipo) {
    if (cod && G.historico[cod]) {
        if (tipo === "conceito") G.historico[cod].erros_conceito++;
        else G.historico[cod].erros_calculo++;
    }
}

function fecharClinicaManual(q, mensagem) {
    const fb = document.getElementById("fb");
    fb.style.color = "var(--choco-gold)";
    fb.innerHTML = mensagem;
    narrarContexto(mensagem);
    document.getElementById("btn-prox").classList.remove("hidden");
    // Limpa o grid para não clicar de novo
    document.getElementById("grid-botoes").innerHTML = "";
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
