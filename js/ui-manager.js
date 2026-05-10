/**
 * ui-manager.js - Versão 4.3 (MathLab Audio & Visual Stabilized - ADA Final)
 * Núcleo de Interface, Acessibilidade (DUA) e Telemetria Visual
 */

import { G } from './engine/gameState.js';

const bgm = document.getElementById("bgm");

// === SISTEMA DE NARRAÇÃO (ADA TTS) ===

if (typeof window !== 'undefined' && window.speechSynthesis) {
    const carregarVozes = () => { window.speechSynthesis.getVoices(); };
    window.speechSynthesis.onvoiceschanged = carregarVozes;
    carregarVozes();
}

/**
 * ADA narra o texto para o estudante (Inclusão e Engajamento)
 */
export function narrarContexto(t) {
    try {
        if (!window.speechSynthesis) {
            console.warn("[ADA-Voz] API de voz não suportada neste navegador.");
            return;
        }
        
        // Se G.voz for estritamente false, não fala.
        if (G.voz === false) {
            console.log("[ADA-Voz] Silenciada no botão superior.");
            return;
        }

        const textoLimpo = t.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');
        console.log(`[ADA-Voz] 1. Preparando para falar: "${textoLimpo}"`);

        const u = new SpeechSynthesisUtterance(textoLimpo);
        
        // MÁGICA CONTRA O BUG DO CHROME: Prender a variável no window
        window.adaUtterance = u; 

        u.lang = "pt-BR";
        u.volume = 1;
        u.rate = 1.1; 

        const vozes = window.speechSynthesis.getVoices();
        
        // FILTRO FEMININO: Busca vozes conhecidas por serem femininas no Windows/Android/Mac
        let vozBR = vozes.find(x => x.lang.includes('pt') && (
            x.name.includes('Maria') || 
            x.name.includes('Luciana') || 
            x.name.includes('Francisca') || 
            x.name.includes('Vitória') ||
            x.name.includes('Google') ||
            x.name.includes('Female') ||
            x.name.includes('Feminino')
        ));

        // Plano B: Se não achar mulher, pega qualquer uma em PT
        if (!vozBR) vozBR = vozes.find(x => x.lang.includes('pt'));
        
        if (vozBR) u.voice = vozBR;

        // Rastreadores de evento e Ducking de áudio
        u.onstart = () => { 
            console.log("[ADA-Voz] 2. Áudio começou a tocar fisicamente!");
            if (bgm && G.musica) bgm.volume = 0.02; 
        };
        u.onend   = () => { 
            console.log("[ADA-Voz] 3. Áudio terminou.");
            if (bgm && G.musica) bgm.volume = 0.07; 
        };
        u.onerror = (e) => { 
            console.error("[ADA-Voz] ERRO no SpeechSynthesis:", e.error); 
        };

        window.speechSynthesis.speak(u);

    } catch (e) {
        console.error("[MathLab] Falha na síntese de voz:", e);
    }
}

// === CONTROLES DE MÍDIA ===

export function toggleMusica() {
    G.musica = !G.musica;
    const el = document.getElementById("tsom");
    if (el) el.textContent = G.musica ? "ON" : "OFF";

    if (!bgm) return;
    if (G.musica) {
        bgm.volume = 0.07;
        bgm.play().catch(() => console.log("Aguardando interação para áudio."));
    } else {
        bgm.pause();
    }
}

export function toggleVoz() {
    G.voz = !G.voz;
    const el = document.getElementById("tvoz");
    if (el) el.textContent = G.voz ? "ON" : "OFF";

    if (!G.voz && window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
}

// === AVATAR E FEEDBACK VISUAL (ESTABILIZADO) ===

export function tocarAv(tipo) {
    const img = document.getElementById("av-img");
    const vid = document.getElementById(tipo === "ok" ? "vid-ok" : "vid-no");

    if (!img) return;
    if (!vid) {
        console.warn(`[ADA] Vídeo para ${tipo} não encontrado.`);
        return;
    }

    const resetAv = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };

    img.classList.add("avh");
    vid.classList.remove("avh");
    vid.currentTime = 0;

    vid.play()
        .then(() => { vid.onended = resetAv; })
        .catch(err => {
            console.warn("[MathLab] Play de vídeo bloqueado ou erro:", err);
            resetAv();
        });
}

// === INTERFACE HUD E MODAIS ===

export function updHUD() {
    const fv = document.getElementById("fv");
    const fen = document.getElementById("fen");

    if (fv) fv.style.width = G.vida + "%";
    if (fen) fen.style.width = G.energia + "%";

    if (fv) {
        if (G.vida < 30) fv.style.backgroundColor = "#ff4444";
        else if (G.vida < 60) fv.style.backgroundColor = "#ffbb33";
        else fv.style.backgroundColor = "#00e5ff";
    }

    const tcb = document.getElementById("tcb");
    const tnv = document.getElementById("tnv");
    if (tcb) tcb.textContent = G.combo;
    if (tnv) tnv.textContent = G.nivel;
}

export function abrirM(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("show", "active");
    if (id === 'mdash') gerarDashboard();
}

export function fecharM(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("show", "active");
}

// === GAME OVER ===

export function exibirGameOver() {
    const total = G.acertos + G.erros;
    const tx = total > 0 ? Math.round((G.acertos / total) * 100) : 0;

    const goModal = document.getElementById("go");
    const goSt = document.getElementById("go-st");

    if (goSt) {
        goSt.innerHTML = `
            <strong>Acertos:</strong> ${G.acertos} | 
            <strong>Anomalias:</strong> ${G.erros} <br>
            <strong>Taxa de Sincronia Lógica:</strong> ${tx}%
        `;
    }

    if (goModal) {
        goModal.classList.add("show", "active");
        goModal.style.zIndex = "10000";
    }

    narrarContexto(`Integridade do sistema comprometida. Taxa de sincronia final: ${tx} por cento. Reinicie para nova análise.`);
}

// === DASHBOARD PEDAGÓGICO ===

function gerarDashboard() {
    const c = document.getElementById("dash-content");
    if (!c) return;

    c.innerHTML = "";
    let temDados = false;
    const historico = G.historico || {};

    for (let hab in historico) {
        const hist = historico[hab];
        const total = (hist.acertos || 0) + (hist.erros_conceito || 0) + (hist.erros_calculo || 0);
        
        if (total === 0) continue;
        temDados = true;

        const txAcerto = Math.round((hist.acertos / total) * 100);
        let diagnostico = "";

        if (hist.erros_conceito > hist.acertos) {
            diagnostico = `<div class="alerta-sinal">⚠️ <strong>Bloqueio Conceitual:</strong> O aluno não domina a regra base desta habilidade.</div>`;
        } else if (hist.erros_calculo > 0) {
            diagnostico = `<div class="alerta-calc">📐 <strong>Falha Operacional:</strong> Erros de atenção ou processo aritmético.</div>`;
        } else {
            diagnostico = `<div class="alerta-ok">✅ <strong>Domínio Estabilizado.</strong></div>`;
        }

        c.innerHTML += `
            <div class="dash-card">
                <div class="dash-card-header">
                    <span class="hab-code">${hab}</span>
                    <span class="hab-pct">${txAcerto}%</span>
                </div>
                <p class="hab-desc">${hist.desc || "Habilidade em análise"}</p>
                <div class="dash-bar">
                    <div class="dash-fill-ok" style="width:${txAcerto}%"></div>
                </div>
                ${diagnostico}
            </div>`;
    }

    if (!temDados) {
        c.innerHTML = "<p class='text-center' style='color:var(--text-muted); padding:20px;'>Aguardando telemetria de campo para gerar relatório...</p>";
    }
}
