/**
 * main.js
 * Orquestrador Principal do Jogo - Versão 3.1 (Identidade & Clínica do Erro)
 * Gere o Game Loop, Acessibilidade de Teclado, e a Categorização de Erros.
 */

import { G, selQ } from './questions.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { 
    updHUD, 
    narrarContexto, 
    toggleSom, 
    tocarAv, 
    abrirM, 
    fecharM, 
    exibirGameOver 
} from './ui-manager.js';

let qAtual = null;

// Inicializa variáveis de controlo
G.consec_erros = 0; 
G.nome = "Cientista"; // Variável para guardar o nome do aluno

/* ========================================================
   ACESSIBILIDADE POR TECLADO (DUA - AÇÃO E EXPRESSÃO)
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
   NAVEGAÇÃO DO MENU (SPLASH SCREEN)
======================================================== */
function selT(n) {
    document.querySelectorAll(".tb").forEach(b => b.classList.remove("sel"));
    document.querySelector(`[data-t="${n}"]`).classList.add("sel");
    G.trilha = n;
    G.nivel = 1;
}

function iniciarJogo() {
    if (!G.trilha) selT(1);
    
    // Capta o nome do utilizador
    const inputNome = document.getElementById("nome-cientista");
    if (inputNome && inputNome.value.trim() !== "") {
        G.nome = inputNome.value.trim();
    } else {
        G.nome = "Cientista";
    }
    
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("av").classList.remove("hidden");
    
    const nomesTrilhas = ["", "Iniciante", "Básico", "Intermediário", "Avançado"];
    document.getElementById("ltrilha").textContent = nomesTrilhas[G.trilha];
    
    const bgm = document.getElementById("bgm");
    if (bgm) { bgm.volume = 0.07; if (G.musica) bgm.play().catch(() => {}); }
    
    // Voz do Prof. Alê Chocolate a saudar o aluno pelo nome!
    narrarContexto(`Sistema calibrado. Bem-vindo ao laboratório, ${G.nome}.`);
    updHUD();
    proximaQ();
}

function voltarMenu() {
    setAnimando(false);
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("go").classList.remove("show");
    document.getElementById("av").classList.add("hidden");
    document.getElementById("splash-screen").classList.remove("hidden");
    
    document.querySelectorAll(".tb").forEach(b => b.classList.remove("sel"));
    const btnAtivo = document.querySelector(`[data-t="${G.trilha}"]`);
    if(btnAtivo) btnAtivo.classList.add("sel");
}

/* ========================================================
   RENDERIZAÇÃO DA QUESTÃO E DISTRATORES (DOM)
======================================================== */
function renderQ(q) {
    // O <span> garante que a frase não quebre em palavras soltas!
    document.getElementById("conta-display").innerHTML = "<span>" + q.display + "</span>";
    document.getElementById("regra-box").innerHTML = q.dica;
    document.getElementById("fb").textContent = "";
    document.getElementById("btn-prox").style.display = "none";
    
    G.respondeu = false;
    setAnimando(false);
    
    renderCv(q);
    
    const g = document.getElementById("grid-botoes");
    g.innerHTML = "";
    g.style.gridTemplateColumns = q.botoes.length <= 2 ? "1fr 1fr" : q.botoes.length === 3 ? "1fr 1fr 1fr" : "1fr 1fr";
    
    q.botoes.forEach(op => {
        const b = document.createElement("button");
        b.className = "ba";
        b.textContent = op;
        b.setAttribute("tabindex", "0"); 
        b.setAttribute("aria-label", `Opção de resposta: ${op}`);
        b.onclick = () => { if (!G.respondeu) responder(op, q); };
        g.appendChild(b);
    });
}

/* ========================================================
   A CLÍNICA DO ERRO: DIAGNÓSTICO, TRI E SCAFFOLDING
======================================================== */
function responder(opcao, q) {
    if (G.respondeu) return;
    G.respondeu = true;
    const ok = (opcao === q.res);
    
    if (q.bncc && G.historico[q.bncc]) {
        if (G.historico[q.bncc].erros_sinal === undefined) {
            G.historico[q.bncc].erros_sinal = 0;
            G.historico[q.bncc].erros_calculo = 0;
        }
    }

    document.querySelectorAll(".ba").forEach(b => {
        b.classList.add("dis"); 
        if (b.textContent === q.res) b.classList.add("ok");
        else if (b.textContent === opcao && !ok) b.classList.add("no");
    });
    
    renderCv(q); 
    const fb = document.getElementById("fb");
    
    if (ok) {
        G.acertos++; G.combo++; G.consec_erros = 0; 
        G.energia = Math.min(100, G.energia + 10);
        if (G.combo % 5 === 0) G.nivel++;
        if (q.bncc && G.historico[q.bncc]) G.historico[q.bncc].acertos++;
        
        fb.style.color = "var(--neon-green)";
        let extraFeedback = "";
        
        if (G.combo >= 4 && (q.tipo === "equacao" || q.tipo === "sinais")) {
            extraFeedback = "<br><span style='color:var(--choco-gold)'>💡 Reflita: O que aconteceria matematicamente se nós invertêssemos todos os sinais ao mesmo tempo?</span>";
        }
        
        fb.innerHTML = `✓ Exato, ${G.nome}! <span style="color:var(--text-muted);font-size:12px">${q.passo} ${extraFeedback}</span>`;
        narrarContexto(`Perfeito, ${G.nome}! A lógica é: ${q.passo}`);
        tocarAv("ok");
        
        const ce = document.getElementById("tcb");
        ce.classList.remove("pop"); void ce.offsetWidth; ce.classList.add("pop");

    } else {
        G.erros++; G.combo = 0; G.consec_erros++; 
        G.vida = Math.max(0, G.vida - 20); 
        G.energia = Math.max(0, G.energia - 5);
        fb.style.color = "var(--choco-gold)"; 
        
        let msgErro = "";
        let erroDeSinal = false;
        
        if (!isNaN(opcao) && !isNaN(q.res) && Number(opcao) === (Number(q.res) * -1) && q.res !== "0") {
            erroDeSinal = true;
        }

        if (erroDeSinal) {
            if (q.bncc && G.historico[q.bncc]) G.historico[q.bncc].erros_sinal++;
            msgErro = `Análise Incompleta, ${G.nome}! Você acertou a quantidade, mas esqueceu da inversão geométrica. Lembre-se: o sinal negativo inverte a direção!`;
        } else {
            if (q.bncc && G.historico[q.bncc]) G.historico[q.bncc].erros_calculo++;
            msgErro = `Desvio detetado. Revise a sua tabuada ou as grandezas apresentadas.`;
        }

        let dicaAtiva = q.dica.replace(/<[^>]*>?/gm, '');
        if (G.consec_erros >= 3) {
            msgErro = `<strong>Pausa de Sistema:</strong> Percebi que este padrão está difícil. Vamos olhar para a regra base.`;
            dicaAtiva = "Atenção especial à regra do laboratório: " + dicaAtiva;
        }
        
        fb.innerHTML = `⚠️ ${msgErro} <br><span style="color:var(--text-muted);font-size:12px">— A resposta correta era <strong>${q.res}</strong> (${q.passo})</span>`;
        narrarContexto(`${msgErro.replace(/<[^>]*>?/gm, '')} A resposta esperada era ${q.res}. ${dicaAtiva}`);
        tocarAv("no");
    }
    
    updHUD();
    if (q.tipo === "reta") animarArcos(q);
    
    const btnProx = document.getElementById("btn-prox");
    btnProx.style.display = "block";
    btnProx.focus(); 
    
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

/* ========================================================
   CONTROLO DE FLUXO E MINI-DASHBOARD DO ALUNO
======================================================== */
function proximaQ() {
    setAnimando(false);
    qAtual = selQ();
    renderQ(qAtual);
}

function reiniciar() {
    G.vida = 100; G.energia = 60; G.combo = 0; G.nivel = 1; 
    G.acertos = 0; G.erros = 0; G.consec_erros = 0;
    
    document.getElementById("go").classList.remove("show");
    updHUD(); 
    proximaQ();
}

// Autorregulação do Aluno com o Nome!
function verPerfilAluno() {
    let titulo = "Cientista Iniciante";
    if (G.nivel > 2 && G.nivel <= 5) titulo = "Operador de Sinais";
    if (G.nivel > 5) titulo = "Mestre Algébrico";
    
    const faltamParaNivel = 5 - (G.combo % 5);
    
    const relatorio = `Cientista ${G.nome}. O seu Título Atual é: ${titulo}. Tem ${G.acertos} reatores estabilizados. Acerte mais ${faltamParaNivel} seguidas para subir de nível!`;
    narrarContexto(relatorio);
    alert(relatorio);
}

/* ========================================================
   EXPOSIÇÃO GLOBAL PARA O HTML
======================================================== */
window.selT = selT;
window.iniciarJogo = iniciarJogo;
window.voltarMenu = voltarMenu;
window.proximaQ = proximaQ;
window.reiniciar = reiniciar;
window.toggleSom = toggleSom;
window.abrirM = abrirM;
window.fecharM = fecharM;
window.verPerfilAluno = verPerfilAluno;