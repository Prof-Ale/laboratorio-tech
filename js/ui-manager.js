/**
 * ui-manager.js
 * Módulo responsável por gerenciar toda a Interface do Usuário (UI),
 * modais, HUD, dashboard BNCC, reprodução de mídia e acessibilidade DUA (Voz).
 */

import { G, BaseBNCC } from './questions.js';

// Mídias na raiz do projeto
const bgm = document.getElementById("bgm"); // O <audio> está no index.html

/* ========================================================
   ACESSIBILIDADE: VOZ E NARRATIVA (DUA)
======================================================== */
export function narrarContexto(t) {
    try {
        if (typeof window === 'undefined' || !window.speechSynthesis) return;
        
        window.speechSynthesis.cancel();
        // Limpeza de tags HTML (como <strong> e <em>) para o leitor de tela
        const textoLimpo = t.replace(/<[^>]*>?/gm, ''); 
        
        const u = new SpeechSynthesisUtterance(textoLimpo);
        const vozes = window.speechSynthesis.getVoices();
        // Busca voz masculina brasileira (perfil do Prof. Alê)
        const masc = vozes.find(x => x.lang.includes('pt-BR') && (x.name.toLowerCase().includes('male') || x.name.toLowerCase().includes('daniel') || x.name.toLowerCase().includes('antonio'))) || vozes.find(x => x.lang.includes('pt-BR'));
        
        if (masc) u.voice = masc;
        u.lang = "pt-BR"; 
        u.rate = 0.93; // Levemente mais lento para clareza
        u.pitch = 0.9;
        
        // Ducking de áudio: abaixa a música durante a fala
        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend = () => { if (bgm && G.musica) bgm.volume = 0.07; };
        
        window.speechSynthesis.speak(u);
    } catch(e) {
        console.log("Voz não suportada neste navegador.");
    }
}

// Garante carregamento das vozes (bug comum em navegadores Chrome/Safari)
if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

/* ========================================================
   CONTROLE DE MÍDIA (ÁUDIO E VÍDEO AVATAR)
======================================================== */
export function toggleSom() {
    G.musica = !G.musica;
    const tsom = document.getElementById("tsom");
    if(tsom) tsom.textContent = G.musica ? "ON" : "OFF";
    
    if (G.musica) {
        if (bgm) { bgm.volume = 0.07; bgm.play().catch(() => {}); }
    } else {
        if (bgm) bgm.pause();
    }
}

export function tocarAv(tipo) {
    const img = document.getElementById("av-img");
    const vid = document.getElementById(tipo === "ok" ? "vid-ok" : "vid-no");
    
    if(!img || !vid) return;

    img.classList.add("avh");
    vid.classList.remove("avh");
    vid.currentTime = 0;
    vid.play().catch(() => {
        // Fallback caso reprodução automática seja bloqueada pelo navegador
        vid.classList.add("avh");
        img.classList.remove("avh");
    });
    
    vid.onended = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };
}

/* ========================================================
   HEAD-UP DISPLAY (HUD) & INTERFACE DE QUESTÕES
======================================================== */
export function updHUD() {
    const fv = document.getElementById("fv");
    const fen = document.getElementById("fen");
    const tcb = document.getElementById("tcb");
    const tnv = document.getElementById("tnv");

    if(fv) fv.style.width = G.vida + "%";
    if(fen) fen.style.width = G.energia + "%";
    if(tcb) tcb.textContent = G.combo;
    if(tnv) tnv.textContent = G.nivel;
}

// Efeito dinâmico de texto no Splash Screen
const msgs = ["Matemática acessível e visual.", "Educação com Desenho Universal.", "Aqui o concreto e o abstrato se encontram."];
let si = 0;
export function tickS() {
    const e = document.getElementById("spm");
    if (!e) return;
    e.style.opacity = 0;
    setTimeout(() => {
        if (!e) return;
        e.textContent = msgs[si % msgs.length];
        e.style.opacity = 1;
        si++;
    }, 350);
}

/* ========================================================
   MODAIS E DASHBOARD PEDAGÓGICO (BNCC)
======================================================== */
export function abrirM(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.add("show");
        if (id === 'mdash') gerarDashboard();
    }
}

export function fecharM(id) {
    const modal = document.getElementById(id);
    if(modal) modal.classList.remove("show");
}

function gerarDashboard() {
    const c = document.getElementById("dash-content");
    if(!c) return;
    c.innerHTML = "";
    
    for (let hab in BaseBNCC) {
        let hist = G.historico[hab];
        let total = hist.acertos + hist.erros;
        let txAcerto = total > 0 ? Math.round((hist.acertos / total) * 100) : 0;
        let txErro = total > 0 ? 100 - txAcerto : 0;
        
        // Alerta visual de DUA para o professor caso a taxa de erro seja alta (>50%)
        let corAlerta = txErro > 50 ? "var(--neon-red)" : "var(--neon-cyan)";
        
        let html = `
            <div class="dash-card" style="border-left-color: ${corAlerta}">
                <h3>${hab}</h3>
                <p>${BaseBNCC[hab].descricao}</p>
                <p style="margin-top:4px;"><strong>Acertos:</strong> ${hist.acertos} | <strong>Erros:</strong> ${hist.erros}</p>
                <div class="dash-bar">
                    <div class="dash-fill-ok" style="width:${txAcerto}%"></div>
                    <div class="dash-fill-no" style="width:${txErro}%"></div>
                </div>
            </div>
        `;
        c.innerHTML += html;
    }
}

/* ========================================================
   TELA DE GAME OVER (CRÍTICA DO TERMINAL)
======================================================== */
export function exibirGameOver() {
    const t = G.acertos + G.erros;
    const tx = t > 0 ? Math.round((G.acertos / t) * 100) : 0;
    
    const goTxt = document.getElementById("go-txt");
    const goSt = document.getElementById("go-st");
    const goModal = document.getElementById("go");

    if(goTxt) goTxt.textContent = "Você zerou a vida. Mas errar faz parte do aprendizado.";
    if(goSt) goSt.textContent = `Acertos: ${G.acertos} | Erros: ${G.erros} | Aproveitamento: ${tx}%`;
    if(goModal) goModal.classList.add("show");
    
    narrarContexto(`Terminal crítico atingido. Você acertou ${tx} porcento das questões. Se quiser ver os detalhes por habilidade, peça ao professor para olhar o painel.`);
}