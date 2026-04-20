/**
 * main.js
 * Orquestrador Principal do Jogo.
 * Gerencia o Game Loop, Eventos Globais, Acessibilidade de Teclado (DUA) e a lógica de Acerto/Erro.
 */

// Importações dos módulos pedagógicos, lógicos e visuais
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

/* ========================================================
   ACESSIBILIDADE POR TECLADO (DUA - AÇÃO E EXPRESSÃO)
======================================================== */
document.addEventListener('keydown', (e) => {
    // Permite "clicar" com teclado nos botões criados dinamicamente via Tabulação
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
    
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("av").classList.remove("hidden");
    
    const nomesTrilhas = ["", "Iniciante", "Básico", "Intermediário", "Avançado"];
    document.getElementById("ltrilha").textContent = nomesTrilhas[G.trilha];
    
    const bgm = document.getElementById("bgm");
    if (bgm) { bgm.volume = 0.07; if (G.musica) bgm.play().catch(() => {}); }
    
    narrarContexto("Sejam bem-vindos ao laboratório de matemática.");
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
    document.getElementById("conta-display").innerHTML = q.display;
    document.getElementById("regra-box").innerHTML = q.dica;
    document.getElementById("fb").textContent = "";
    document.getElementById("btn-prox").style.display = "none";
    
    G.respondeu = false;
    setAnimando(false);
    
    // Delega a pintura do Canvas para a Game Engine
    renderCv(q);
    
    const g = document.getElementById("grid-botoes");
    g.innerHTML = "";
    
    // Layout dinâmico baseado na quantidade de opções
    g.style.gridTemplateColumns = q.botoes.length <= 2 ? "1fr 1fr" : q.botoes.length === 3 ? "1fr 1fr 1fr" : "1fr 1fr";
    
    // Criação dos botões de resposta DUA-friendly
    q.botoes.forEach(op => {
        const b = document.createElement("button");
        b.className = "ba";
        b.textContent = op;
        b.setAttribute("tabindex", "0"); // Permite navegação por 'Tab'
        b.setAttribute("aria-label", `Opção de resposta: ${op}`);
        b.onclick = () => { if (!G.respondeu) responder(op, q); };
        g.appendChild(b);
    });
}

/* ========================================================
   LÓGICA DE RESPOSTA, BNCC E GAMIFICAÇÃO
======================================================== */
function responder(opcao, q) {
    if (G.respondeu) return;
    G.respondeu = true;
    const ok = (opcao === q.res);
    
    // Atualiza histórico do Dashboard BNCC (Avaliação Formativa)
    if (q.bncc && G.historico[q.bncc]) {
        if (ok) G.historico[q.bncc].acertos++;
        else G.historico[q.bncc].erros++;
    }

    // Feedback visual nos botões
    document.querySelectorAll(".ba").forEach(b => {
        b.classList.add("dis"); // Desabilita demais cliques
        if (b.textContent === q.res) b.classList.add("ok");
        else if (b.textContent === opcao && !ok) b.classList.add("no");
    });
    
    // Atualiza o visual do canvas pós-resposta
    renderCv(q); 
    const fb = document.getElementById("fb");
    
    if (ok) {
        G.acertos++; 
        G.combo++; 
        G.energia = Math.min(100, G.energia + 10);
        if (G.combo % 5 === 0) G.nivel++;
        
        fb.style.color = "var(--neon-green)";
        fb.innerHTML = `✓ Correto! <span style="color:var(--text-muted);font-size:12px">${q.passo}</span>`;
        narrarContexto(`Correto! A lógica é: ${q.passo}`);
        tocarAv("ok");
        
        // Efeito "Pop" no texto do combo
        const ce = document.getElementById("tcb");
        ce.classList.remove("pop"); 
        void ce.offsetWidth; // Força reflow
        ce.classList.add("pop");
    } else {
        G.erros++; 
        G.combo = 0; 
        G.vida = Math.max(0, G.vida - 20); 
        G.energia = Math.max(0, G.energia - 5);
        
        fb.style.color = "var(--neon-red)";
        fb.innerHTML = `✗ A resposta era <strong style="color:var(--neon-green)">${q.res}</strong> <span style="color:var(--text-muted);font-size:12px">— ${q.passo}</span>`;
        narrarContexto(`Ops! A resposta era ${q.res}. Lembre-se: ${q.dica.replace(/<[^>]*>?/gm, '')}`);
        tocarAv("no");
    }
    
    updHUD();
    
    // Gatilho de animação de ancoragem matemática
    if (q.tipo === "reta") animarArcos(q);
    
    const btnProx = document.getElementById("btn-prox");
    btnProx.style.display = "block";
    btnProx.focus(); // DUA: Direciona foco cognitivo e de teclado para avançar
    
    // Checagem de Game Over
    if (G.vida <= 0) setTimeout(exibirGameOver, 1400);
}

/* ========================================================
   CONTROLE DE FLUXO
======================================================== */
function proximaQ() {
    setAnimando(false);
    qAtual = selQ();
    renderQ(qAtual);
}

function reiniciar() {
    // Reset da gamificação
    G.vida = 100; 
    G.energia = 60; 
    G.combo = 0; 
    G.nivel = 1; 
    G.acertos = 0; 
    G.erros = 0;
    
    document.getElementById("go").classList.remove("show");
    updHUD(); 
    proximaQ();
}

/* ========================================================
   EXPOSIÇÃO GLOBAL (MODULE EXPORTS PARA HTML)
======================================================== */
// Como usamos ES Modules (<script type="module">), as funções não ficam 
// expostas no HTML por padrão. Precisamos atrelá-las ao window object.
window.selT = selT;
window.iniciarJogo = iniciarJogo;
window.voltarMenu = voltarMenu;
window.proximaQ = proximaQ;
window.reiniciar = reiniciar;
window.toggleSom = toggleSom;
window.abrirM = abrirM;
window.fecharM = fecharM;