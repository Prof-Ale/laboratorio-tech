/**
 * main.js - Versão 6.1 "MathLab Estabilizado"
 * Orquestrador com Persistência, Seletor de Blocos e Clínica do Erro v3.
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
   NAVEGAÇÃO E FLUXO DO USUÁRIO
======================================================== */
window.mostrarSeletorBlocos = function() {
    const inputNome = document.getElementById("nome-cientista");
    const inputTurma = document.getElementById("turma-cientista");

    G.nome = inputNome && inputNome.value.trim() !== "" ? inputNome.value.trim() : "Cientista";
    G.turma = inputTurma && inputTurma.value.trim() !== "" ? inputTurma.value.trim() : "";

    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");

    const saudacao = G.turma
        ? `Olá ${G.nome} da turma ${G.turma}, escolha qual setor vamos restaurar.`
        : `Olá ${G.nome}, escolha qual setor vamos restaurar.`;
    narrarContexto(saudacao);
}

window.iniciarBloco = function(id) {
    const blockNames = {
        1: "Base Numérica", 2: "Números e Operações", 3: "Grandezas e Medidas",
        4: "Álgebra e Padrão", 5: "Estatística e Dados"
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

    narrarContexto(`Iniciando Bloco ${id}: ${blockNames[id]}. Diagnóstico ativado.`);
    updHUD();
    proximaQ();
}

/* ========================================================
   MOTOR DE QUESTÕES E CLÍNICA DO ERRO v3
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
    const botoesEmbaralhados = q.botoes.sort(() => Math.random() - 0.5);

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

    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = { desc: q.bncc_desc || "Habilidade BNCC", acertos: 0, erros_conceito: 0, erros_calculo: 0, bloco: G.currentBlock };
    }

    const fb = document.getElementById("fb");
    if (ok) {
        processarAcerto(q, fb);
    } else {
        processarErro(opcao, q, fb);
    }

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

    const resEsperada = Array.isArray(q.res) ? Number(q.res[0]) : Number(q.res);
    // Diagnóstico Automático (Sinal trocado)
    if (!isNaN(opcao) && Number(opcao) === resEsperada * -1) {
        registrarHistoricoErro(q.bncc, "conceito");
        fbEl.innerHTML = "⚠️ Erro de Sinal detectado (Conceito). " + q.passo;
        document.getElementById("btn-prox").classList.remove("hidden");
    } else {
        abrirClinicaManual(q);
    }
    tocarAv("no");
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

function abrirClinicaManual(q) {
    const g = document.getElementById("grid-botoes");
    document.getElementById("conta-display").innerHTML = "<span style='color:var(--choco-gold)'>DIAGNÓSTICO NECESSÁRIO</span>";
    g.innerHTML = "";
    
    const btnC = document.createElement("button");
    btnC.className = "ba b1"; btnC.textContent = "CONCEITO (Não entendi a regra)";
    btnC.onclick = () => fecharClinicaManual(q, "conceito");

    const btnK = document.createElement("button");
    btnK.className = "ba b2"; btnK.textContent = "CÁLCULO (Me distraí na conta)";
    btnK.onclick = () => fecharClinicaManual(q, "calculo");

    g.appendChild(btnC); g.appendChild(btnK);
    narrarContexto("Cientista, identifique a origem da falha.");
}

function registrarHistoricoErro(cod, tipo) {
    if (cod && G.historico[cod]) {
        if (tipo === "conceito") G.historico[cod].erros_conceito++;
        else G.historico[cod].erros_calculo++;
    }
}

function fecharClinicaManual(q, tipo) {
    registrarHistoricoErro(q.bncc, tipo);
    const msg = tipo === "conceito" ? "Erro de Conceito. " + q.passo : "Erro de Cálculo. Atenção aos detalhes!";
    const fb = document.getElementById("fb");
    fb.style.color = "var(--choco-gold)"; fb.innerHTML = msg;
    document.getElementById("btn-prox").classList.remove("hidden");
    document.getElementById("grid-botoes").innerHTML = "";
    narrarContexto(msg);
}

window.proximaQ = function() {
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

/* ========================================================
   RELATÓRIOS E ACESSIBILIDADE
======================================================== */
window.exportarRelatorioCSV = function() {
    const agora = new Date().toLocaleDateString("pt-BR");
    let csv = `Aluno;Turma;Data;Bloco;Codigo_BNCC;Descricao;Acertos;Erros_Conceito;Erros_Calculo;Total_Erros;Percentual_Acerto\n`;

    for (let cod in G.historico) {
        const h = G.historico[cod];
        const total = h.acertos + h.erros_conceito + h.erros_calculo;
        const pct = total > 0 ? Math.round((h.acertos / total) * 100) + "%" : "0%";
        csv += `${G.nome};${G.turma};${agora};${h.bloco};${cod};${h.desc.replace(/;/g, ',')};${h.acertos};${h.erros_conceito};${h.erros_calculo};${h.erros_conceito+h.erros_calculo};${pct}\n`;
    }

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Relatorio_${G.nome.replace(/\s/g, '_')}.csv`;
    link.click();
}

window.reiniciar = function() {
    G.vida = 100; G.energia = 60; G.combo = 0;
    document.getElementById("go").classList.remove("show");
    updHUD(); proximaQ();
}

window.irParaSeletor = () => {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const atv = document.activeElement;
        if (atv && atv.tagName === 'BUTTON') atv.click();
    }
});
