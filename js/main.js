/**
 * main.js - Versão 6.3 "MathLab Estabilizado + UI Coerente"
 * Ajustes cirúrgicos de interface, fluxo e consistência.
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
   ESTABILIZAÇÃO DE ESCOPO GLOBAL
======================================================== */
window.abrirM = abrirM;
window.fecharM = fecharM;
window.toggleMusica = toggleMusica;
window.toggleVoz = toggleVoz;

/* ========================================================
   PERSISTÊNCIA
======================================================== */
function carregarDadosSalvos() {
    const backup = localStorage.getItem('laboratorio_tech_data');
    if (backup) {
        try {
            const dados = JSON.parse(backup);
            G.historico = dados.historico || {};
            G.nome = dados.nome || "";
            G.turma = dados.turma || "";
        } catch (e) {
            console.error("Erro ao recuperar banco de dados local", e);
        }
    }
}

function salvarProgresso() {
    const dataToSave = {
        historico: G.historico,
        nome: G.nome,
        turma: G.turma
    };
    localStorage.setItem('laboratorio_tech_data', JSON.stringify(dataToSave));
}

carregarDadosSalvos();

/* ========================================================
   NAVEGAÇÃO
======================================================== */
window.mostrarSeletorBlocos = function() {
    const inputNome = document.getElementById("nome-cientista");
    const inputTurma = document.getElementById("turma-cientista");

    G.nome = inputNome?.value.trim() || "Cientista";
    G.turma = inputTurma?.value.trim() || "";

    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");

    narrarContexto(
        G.turma
            ? `Olá ${G.nome} da turma ${G.turma}, escolha o setor.`
            : `Olá ${G.nome}, escolha o setor.`
    );
}

window.iniciarBloco = function(id) {
    const blockNames = {
        1: "Base Numérica", 
        2: "Números e Operações", 
        3: "Grandezas e Medidas",
        4: "Álgebra e Padrão", 
        5: "Estatística e Dados",
        6: "Porcentagem e Finanças"
    };

    G.currentBlock = id;
    G.vida = 100; G.energia = 60; G.combo = 0; G.nivel = 1;
    limparHistoricoSessao();

    document.getElementById("block-selector").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("av").classList.remove("hidden");
    document.getElementById("nome-bloco-display").textContent = blockNames[id];

    const bgm = document.getElementById("bgm");
    if (bgm && G.musica) {
        bgm.volume = 0.07;
        bgm.play().catch(() => {});
    }

    narrarContexto(`Bloco ${id} iniciado. Diagnóstico ativo.`);
    updHUD();
    proximaQ();
}

/* ========================================================
   QUESTÕES
======================================================== */
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

    // 🔧 evita bug acumulativo do sort
    const botoes = [...q.botoes].sort(() => Math.random() - 0.5);

    botoes.forEach(op => {
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

    const opStr = String(opcao);

    const ok = Array.isArray(q.res) 
        ? q.res.map(String).includes(opStr)
        : opStr === String(q.res);

    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = { 
            desc: q.bncc_desc || "Habilidade BNCC", 
            acertos: 0, 
            erros_conceito: 0, 
            erros_calculo: 0, 
            erros_porcentagem: 0,
            bloco: G.currentBlock 
        };
    }

    const fb = document.getElementById("fb");

    if (ok) processarAcerto(q, fb);
    else processarErro(opcao, q, fb);

    salvarProgresso();
    updHUD();
    if (q.tipo === "reta") animarArcos(q);
}

function processarAcerto(q, fbEl) {
    G.acertos++; G.combo++; G.consec_erros = 0;
    G.energia = Math.min(100, G.energia + 10);

    if (G.combo % 5 === 0) G.nivel++;
    if (q.bncc) G.historico[q.bncc].acertos++;

    fbEl.style.color = "var(--neon-green)";
    fbEl.innerHTML = `✓ Excelente! <br><small>${q.passo}</small>`;
    tocarAv("ok");

    document.getElementById("btn-prox").classList.remove("hidden");
}

function processarErro(opcao, q, fbEl) {
    G.erros++; G.combo = 0;
    G.vida = Math.max(0, G.vida - 20);

    const resEsperada = Number(Array.isArray(q.res) ? q.res[0] : q.res);
    const opNum = Number(String(opcao).replace(/[^\d-]/g, ''));

    // erro de sinal
    if (!isNaN(opNum) && opNum === resEsperada * -1) {
        registrarHistoricoErro(q.bncc, "conceito");
        fbEl.innerHTML = "⚠️ Erro de sinal. " + q.passo;
        liberarProximo();
    }
    // erro típico de porcentagem
    else if (q.tipo === "porcentagem" && opNum > resEsperada) {
        registrarHistoricoErro(q.bncc, "porcentagem");
        fbEl.innerHTML = "⚠️ Você somou em vez de aplicar desconto. " + q.passo;
        liberarProximo();
    }
    else {
        abrirClinicaManual(q);
    }

    tocarAv("no");

    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

/* 🔧 FUNÇÃO CENTRALIZADA - evita esquecer botão */
function liberarProximo() {
    document.getElementById("btn-prox").classList.remove("hidden");
}

function abrirClinicaManual(q) {
    const g = document.getElementById("grid-botoes");

    document.getElementById("conta-display").innerHTML =
        "<span style='color:var(--choco-gold)'>DIAGNÓSTICO NECESSÁRIO</span>";

    g.innerHTML = "";

    const btnC = document.createElement("button");
    btnC.className = "ba b1";
    btnC.textContent = "CONCEITO";
    btnC.onclick = () => fecharClinicaManual(q, "conceito");

    const btnK = document.createElement("button");
    btnK.className = "ba b2";
    btnK.textContent = "CÁLCULO";
    btnK.onclick = () => fecharClinicaManual(q, "calculo");

    g.appendChild(btnC);
    g.appendChild(btnK);

    narrarContexto("Identifique o tipo de erro.");
}

function registrarHistoricoErro(cod, tipo) {
    if (!cod || !G.historico[cod]) return;

    if (tipo === "conceito") G.historico[cod].erros_conceito++;
    else if (tipo === "porcentagem") G.historico[cod].erros_porcentagem++;
    else G.historico[cod].erros_calculo++;
}

function fecharClinicaManual(q, tipo) {
    registrarHistoricoErro(q.bncc, tipo);

    const fb = document.getElementById("fb");
    fb.style.color = "var(--choco-gold)";
    fb.innerHTML =
        tipo === "conceito"
            ? "Erro de conceito. " + q.passo
            : "Erro de cálculo. Revise a conta.";

    document.getElementById("grid-botoes").innerHTML = "";
    liberarProximo();

    narrarContexto("Diagnóstico registrado.");
}

window.proximaQ = function() {
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

/* ========================================================
   RELATÓRIO
======================================================== */
window.exportarRelatorioCSV = function() {
    const agora = new Date().toLocaleDateString("pt-BR");

    let csv = `Aluno;Turma;Data;Bloco;Codigo;Descricao;Acertos;Erro_Conceito;Erro_Calculo;Erro_Porcentagem;Total;Aproveitamento\n`;

    for (let cod in G.historico) {
        const h = G.historico[cod];
        const errosT = h.erros_conceito + h.erros_calculo + (h.erros_porcentagem || 0);
        const total = h.acertos + errosT;
        const pct = total ? Math.round((h.acertos / total) * 100) + "%" : "0%";

        csv += `${G.nome};${G.turma};${agora};${h.bloco};${cod};${h.desc.replace(/;/g, ',')};${h.acertos};${h.erros_conceito};${h.erros_calculo};${h.erros_porcentagem || 0};${errosT};${pct}\n`;
    }

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv' });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = `Relatorio_${G.nome.replace(/\s/g, '_')}.csv`;
    link.click();
}

/* ========================================================
   CONTROLE
======================================================== */
window.reiniciar = function() {
    G.vida = 100; G.energia = 60; G.combo = 0;

    document.getElementById("go").classList.remove("active"); // 🔧 corrigido

    updHUD();
    proximaQ();
}

window.irParaSeletor = () => {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");
}

/* ========================================================
   ACESSIBILIDADE
======================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const atv = document.activeElement;
        if (atv?.tagName === 'BUTTON') atv.click();
    }
});
