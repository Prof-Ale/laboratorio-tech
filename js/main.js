/**
 * main.js — Versão 7.0 "MathLab Estável"
 * Correções: referência av removida, voltarAoSplash restaurada,
 * botão próximo garantido em todos os fluxos, acentuação correta.
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

/* ── Expõe funções do módulo para o HTML inline ── */
window.abrirM       = abrirM;
window.fecharM      = fecharM;
window.toggleMusica = toggleMusica;
window.toggleVoz    = toggleVoz;

/* ============================================================
   PERSISTÊNCIA
============================================================ */
function carregarDadosSalvos() {
    const backup = localStorage.getItem('laboratorio_tech_data');
    if (!backup) return;
    try {
        const dados = JSON.parse(backup);
        G.historico = dados.historico || {};
        G.nome      = dados.nome      || "";
        G.turma     = dados.turma     || "";
    } catch (e) {
        console.error("Erro ao recuperar dados salvos:", e);
    }
}

function salvarProgresso() {
    localStorage.setItem('laboratorio_tech_data', JSON.stringify({
        historico: G.historico,
        nome:      G.nome,
        turma:     G.turma
    }));
}

carregarDadosSalvos();

/* ============================================================
   NAVEGAÇÃO
============================================================ */
window.mostrarSeletorBlocos = function () {
    const inputNome  = document.getElementById("nome-cientista");
    const inputTurma = document.getElementById("turma-cientista");

    G.nome  = inputNome?.value.trim()  || "Cientista";
    G.turma = inputTurma?.value.trim() || "";

    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("block-selector").classList.remove("hidden");

    narrarContexto(
        G.turma
            ? `Olá ${G.nome} da turma ${G.turma}, escolha o setor.`
            : `Olá ${G.nome}, escolha o setor do laboratório.`
    );
};

window.voltarAoSplash = function () {
    document.getElementById("block-selector").classList.add("hidden");
    document.getElementById("splash-screen").classList.remove("hidden");
};

window.iniciarBloco = function (id) {
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

    const nomeBloco = document.getElementById("nome-bloco-display");
    if (nomeBloco) nomeBloco.textContent = blockNames[id] || `Bloco ${id}`;

    const bgm = document.getElementById("bgm");
    if (bgm && G.musica) {
        bgm.volume = 0.07;
        bgm.play().catch(() => {});
    }

    updHUD();
    narrarContexto(`Bloco ${id}: ${blockNames[id]}. Diagnóstico ativado.`);
    proximaQ();
};

window.irParaSeletor = function () {
    setAnimando(false);
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("go").classList.remove("show");
    document.getElementById("go").classList.remove("active");
    document.getElementById("block-selector").classList.remove("hidden");
};

/* ============================================================
   QUESTÕES
============================================================ */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function liberarProximo() {
    const btn = document.getElementById("btn-prox");
    if (btn) btn.classList.remove("hidden");
}

function renderQ(q) {
    if (!q) return;

    const display = document.getElementById("conta-display");
    const regra   = document.getElementById("regra-box");
    const fb      = document.getElementById("fb");
    const btnProx = document.getElementById("btn-prox");

    if (display) display.innerHTML = "<span>" + q.display + "</span>";
    if (regra)   regra.innerHTML   = q.dica || "";
    if (fb)      fb.textContent    = "";
    if (btnProx) btnProx.classList.add("hidden");

    G.respondeu = false;
    setAnimando(false);
    renderCv(q);

    const grid = document.getElementById("grid-botoes");
    if (!grid) return;

    grid.innerHTML = "";
    const botoes = shuffle(q.botoes);

    // Garante que a resposta correta não fique sempre na mesma posição
    grid.style.gridTemplateColumns = botoes.length <= 3
        ? `repeat(${botoes.length}, 1fr)`
        : "1fr 1fr";

    botoes.forEach(op => {
        const b = document.createElement("button");
        b.className = "ba";
        b.textContent = String(op);
        b.onclick = () => { if (!G.respondeu) responder(op, q); };
        grid.appendChild(b);
    });
}

function responder(opcao, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    const opStr = String(opcao);
    const ok = Array.isArray(q.res)
        ? q.res.map(String).includes(opStr)
        : opStr === String(q.res);

    // Inicializa histórico da habilidade se necessário
    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = {
            desc:            q.bncc_desc || "Habilidade BNCC",
            acertos:         0,
            erros_conceito:  0,
            erros_calculo:   0,
            bloco:           G.currentBlock
        };
    }

    // Destaca botões
    document.querySelectorAll(".ba").forEach(b => {
        b.classList.add("dis");
        const isCorreta = Array.isArray(q.res)
            ? q.res.map(String).includes(b.textContent)
            : b.textContent === String(q.res);
        if (isCorreta) b.classList.add("ok");
        if (b.textContent === opStr && !ok) b.classList.add("no");
    });

    const fb = document.getElementById("fb");
    if (ok) processarAcerto(q, fb);
    else    processarErro(opcao, q, fb);

    salvarProgresso();
    updHUD();

    if (q.tipo === "reta") animarArcos(q);
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

function processarAcerto(q, fbEl) {
    G.acertos++;
    G.combo++;
    G.consec_erros = 0;
    G.energia = Math.min(100, G.energia + 10);
    if (G.combo % 5 === 0) G.nivel++;
    if (q.bncc) G.historico[q.bncc].acertos++;

    const elogios = ["Excelente!", "Muito bem!", "Perfeito!", "Na mosca!", "Fabuloso!"];
    const msg = elogios[Math.floor(Math.random() * elogios.length)];

    if (fbEl) {
        fbEl.style.color = "var(--neon-green)";
        fbEl.innerHTML   = `✓ ${msg} <br><small>${q.passo}</small>`;
    }

    tocarAv("ok");
    narrarContexto(`${msg} ${q.passo}`);
    liberarProximo(); // sempre libera o botão
}

function processarErro(opcao, q, fbEl) {
    G.erros++;
    G.combo = 0;
    G.consec_erros++;
    G.vida = Math.max(0, G.vida - 20);

    // Clínica do Erro: usa campo erroConceito da questão quando disponível
    let tipoErro = "calculo";

    if (q.erroConceito && Array.isArray(q.erroConceito)) {
        if (q.erroConceito.map(String).includes(String(opcao))) {
            tipoErro = "conceito";
        }
    } else {
        // Fallback legado: erro de sinal inverso
        const resNum = Number(Array.isArray(q.res) ? q.res[0] : q.res);
        const opNum  = Number(String(opcao).replace(/[^\d\-.,]/g, '').replace(',', '.'));
        if (!isNaN(resNum) && !isNaN(opNum) && opNum === resNum * -1) {
            tipoErro = "conceito";
        }
    }

    if (q.bncc) {
        if (tipoErro === "conceito") G.historico[q.bncc].erros_conceito++;
        else                         G.historico[q.bncc].erros_calculo++;
    }

    const resExibida = Array.isArray(q.res) ? q.res[0] : q.res;
    const msgs = {
        conceito: `⚠️ Erro de conceito — reveja a ideia antes de calcular.<br><small>${q.passo}</small>`,
        calculo:  `⚠️ Erro de cálculo — processo certo, conta errada. Resposta: <strong>${resExibida}</strong>.<br><small>${q.passo}</small>`
    };

    if (fbEl) {
        fbEl.style.color = "var(--choco-gold)";
        fbEl.innerHTML   = msgs[tipoErro];
    }

    tocarAv("no");
    narrarContexto(tipoErro === "conceito"
        ? "Erro de conceito. " + q.passo
        : `Erro de cálculo. A resposta correta era ${resExibida}.`
    );

    liberarProximo(); // sempre libera o botão
}

window.proximaQ = function () {
    setAnimando(false);
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
};

/* ============================================================
   RELATÓRIO
============================================================ */
window.exportarRelatorioCSV = function () {
    const agora = new Date().toLocaleDateString("pt-BR");
    let csv = "Aluno;Turma;Data;Bloco;Código BNCC;Descrição;Acertos;Erros Conceito;Erros Cálculo;Total Erros;Aproveitamento\n";

    for (const cod in G.historico) {
        const h        = G.historico[cod];
        const erros    = (h.erros_conceito || 0) + (h.erros_calculo || 0);
        const total    = h.acertos + erros;
        const pct      = total ? Math.round((h.acertos / total) * 100) + "%" : "0%";
        const desc     = (h.desc || "").replace(/;/g, ',');
        csv += `${G.nome};${G.turma};${agora};${h.bloco || '?'};${cod};${desc};${h.acertos};${h.erros_conceito || 0};${h.erros_calculo || 0};${erros};${pct}\n`;
    }

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Relatorio_${G.nome.replace(/\s/g, '_')}_${G.turma || 'semTurma'}.csv`;
    link.click();
};

/* ============================================================
   PERFIL E CONTROLE
============================================================ */
window.verPerfilAluno = function () {
    const patente = G.nivel > 5 ? "Cientista Master" : "Explorador";
    const linha2  = G.turma ? `Turma: ${G.turma}\n` : "";
    narrarContexto(`${G.nome}, patente: ${patente}.`);
    alert(`Cientista: ${G.nome}\n${linha2}Patente: ${patente}\nAcertos: ${G.acertos} | Erros: ${G.erros}`);
};

window.reiniciar = function () {
    G.vida    = 100;
    G.energia = 60;
    G.combo   = 0;
    const go = document.getElementById("go");
    if (go) { go.classList.remove("show"); go.classList.remove("active"); }
    updHUD();
    proximaQ();
};

/* ============================================================
   ACESSIBILIDADE — teclado
============================================================ */
document.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.tagName === 'BUTTON') {
        document.activeElement.click();
        e.preventDefault();
    }
});
