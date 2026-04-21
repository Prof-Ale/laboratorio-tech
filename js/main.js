/**
 * main.js - Versão 4.0 "Cientista de Dados"
 * Orquestrador com Persistência BNCC, Exportação CSV e Lógica de Múltiplas Respostas.
 */

import { G, selQ } from './questions.js';
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
    const backup = localStorage.getItem('laboratorio_ale_bncc');
    if (backup) {
        try {
            const dados = JSON.parse(backup);
            G.historico = dados;
        } catch (e) {
            console.error("Erro ao carregar banco de dados local", e);
        }
    }
}

function salvarProgresso() {
    localStorage.setItem('laboratorio_ale_bncc', JSON.stringify(G.historico));
}

carregarDadosSalvos();

/* ========================================================
   ACESSIBILIDADE E TECLADO (DUA)
======================================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const atv = document.activeElement;
        if (atv && (atv.tagName === 'BUTTON' || atv.classList.contains('ba') || atv.classList.contains('tb'))) {
            atv.click();
            e.preventDefault();
        }
    }
});

/* ========================================================
   NAVEGAÇÃO E LOGIN
======================================================== */
function selT(n) {
    document.querySelectorAll(".tb").forEach(b => b.classList.remove("sel"));
    const btn = document.querySelector(`[data-t="${n}"]`);
    if(btn) btn.classList.add("sel");
    G.trilha = n;
    G.nivel = 1;
}

function iniciarJogo() {
    const inputNome = document.getElementById("nome-cientista");
    G.nome = (inputNome && inputNome.value.trim() !== "") ? inputNome.value.trim() : "Cientista";
    
    if (!G.trilha) selT(1);
    
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("av").classList.remove("hidden");
    
    const nomesTrilhas = ["", "Iniciante", "Básico", "Intermediário", "Avançado"];
    document.getElementById("ltrilha").textContent = nomesTrilhas[G.trilha];
    
    const bgm = document.getElementById("bgm");
    if (bgm) { bgm.volume = 0.07; if (G.musica) bgm.play().catch(() => {}); }
    
    narrarContexto(`Bem-vindo ao laboratório, ${G.nome}. Sistema de diagnóstico ativado.`);
    updHUD();
    proximaQ();
}

function voltarMenu() {
    setAnimando(false);
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("go").classList.remove("show");
    document.getElementById("av").classList.add("hidden");
    document.getElementById("splash-screen").classList.remove("hidden");
}

/* ========================================================
   MOTOR DE QUESTÕES E MÚLTIPLAS RESPOSTAS
======================================================== */
function renderQ(q) {
    document.getElementById("conta-display").innerHTML = "<span>" + q.display + "</span>";
    document.getElementById("regra-box").innerHTML = q.dica;
    document.getElementById("fb").textContent = "";
    document.getElementById("btn-prox").style.display = "none";
    
    G.respondeu = false;
    setAnimando(false);
    renderCv(q);
    
    const g = document.getElementById("grid-botoes");
    g.innerHTML = "";
    
    g.style.gridTemplateColumns = q.botoes.length <= 3 ? `repeat(${q.botoes.length}, 1fr)` : "1fr 1fr";
    
    q.botoes.forEach(op => {
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

    let ok = false;
    if (Array.isArray(q.res)) {
        ok = q.res.map(String).includes(String(opcao));
    } else {
        ok = (String(opcao) === String(q.res));
    }
    
    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = { desc: q.bncc_desc || "Habilidade BNCC", acertos: 0, erros_sinal: 0, erros_calculo: 0 };
    }

    document.querySelectorAll(".ba").forEach(b => {
        b.classList.add("dis"); 
        if (Array.isArray(q.res)) {
            if (q.res.map(String).includes(b.textContent)) b.classList.add("ok");
        } else {
            if (b.textContent === String(q.res)) b.classList.add("ok");
        }
        if (b.textContent === String(opcao) && !ok) b.classList.add("no");
    });
    
    const fb = document.getElementById("fb");
    
    if (ok) {
        G.acertos++; G.combo++; G.consec_erros = 0; 
        G.energia = Math.min(100, G.energia + 10);
        if (G.combo % 5 === 0) G.nivel++;
        if (q.bncc) G.historico[q.bncc].acertos++;
        
        fb.style.color = "var(--neon-green)";
        fb.innerHTML = `✓ Excelente, ${G.nome}! <br><small>${q.passo}</small>`;
        narrarContexto(`Correto, ${G.nome}. ${q.passo}`);
        tocarAv("ok");
    } else {
        G.erros++; G.combo = 0; G.consec_erros++; 
        G.vida = Math.max(0, G.vida - 20); 
        
        let erroDeSinal = false;
        if (!isNaN(opcao) && !isNaN(Array.isArray(q.res) ? q.res[0] : q.res)) {
            let resPrincipal = Array.isArray(q.res) ? Number(q.res[0]) : Number(q.res);
            if (Number(opcao) === (resPrincipal * -1)) erroDeSinal = true;
        }

        if (erroDeSinal) {
            if (q.bncc) G.historico[q.bncc].erros_sinal++;
            fb.innerHTML = `⚠️ Quase, ${G.nome}! Você acertou o valor, mas inverteu o sentido (sinal).`;
        } else {
            if (q.bncc) G.historico[q.bncc].erros_calculo++;
            fb.innerHTML = `⚠️ Erro de processamento. A resposta esperada era ${Array.isArray(q.res) ? q.res.join(' ou ') : q.res}.`;
        }
        
        fb.style.color = "var(--choco-gold)";
        narrarContexto(fb.innerText);
        tocarAv("no");
    }
    
    salvarProgresso();
    updHUD();
    if (q.tipo === "reta") animarArcos(q);
    document.getElementById("btn-prox").style.display = "block";
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

function proximaQ() {
    setAnimando(false);
    qAtual = selQ();
    renderQ(qAtual);
}

/* ========================================================
   RELATÓRIOS E EXPORTAÇÃO (SISTEMA DO PROFESSOR)
======================================================== */
function exportarRelatorioCSV() {
    let csv = "Codigo_BNCC;Descricao;Acertos;Erros_Sinal;Erros_Calculo\n";
    
    for (let cod in G.historico) {
        let h = G.historico[cod];
        let descLimpa = h.desc.replace(/;/g, ',');
        csv += `${cod};${descLimpa};${h.acertos};${h.erros_sinal};${h.erros_calculo}\n`;
    }

    const blob = new Blob(["\ufeff" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Relatorio_LabTech_${G.nome.replace(/\s/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function verPerfilAluno() {
    let titulo = G.nivel > 5 ? "Mestre Algébrico" : G.nivel > 2 ? "Explorador" : "Cientista Júnior";
    let msg = `Perfil: ${G.nome}\nPatente: ${titulo}\nAcertos Totais: ${G.acertos}`;
    narrarContexto(`Relatório de perfil: ${G.nome}, você é um ${titulo}.`);
    alert(msg);
}

function reiniciar() {
    G.vida = 100; G.energia = 60; G.combo = 0; G.nivel = 1; 
    G.acertos = 0; G.erros = 0;
    document.getElementById("go").classList.remove("show");
    updHUD(); proximaQ();
}

/* ========================================================
   EXPOSIÇÃO GLOBAL
======================================================== */
window.selT = selT;
window.iniciarJogo = iniciarJogo;
window.voltarMenu = voltarMenu;
window.proximaQ = proximaQ;
window.reiniciar = reiniciar;
window.abrirM = abrirM;
window.fecharM = fecharM;
window.verPerfilAluno = verPerfilAluno;
window.exportarRelatorioCSV = exportarRelatorioCSV;
window.toggleMusica = toggleMusica;
window.toggleVoz = toggleVoz;
