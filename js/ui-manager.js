/**
 * ui-manager.js - Versão 3.8 (MathLab Estabilizado)
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
        if (typeof window === 'undefined' || !window.speechSynthesis || !G.voz) return;

        // Cancela narrações em fila para priorizar a atual
        window.speechSynthesis.cancel();

        // Limpeza de texto (Remover HTML e caracteres especiais que travam o TTS)
        const textoLimpo = t.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');
        const u = new SpeechSynthesisUtterance(textoLimpo);

        const vozes = window.speechSynthesis.getVoices();
        // Busca voz brasileira masculina ou feminina (prioridade para 'Google' ou 'Luciana/Daniel')
        const vozBR = vozes.find(x => x.lang.includes('pt-BR') && x.name.includes('Google')) || 
                      vozes.find(x => x.lang.includes('pt-BR'));

        u.lang = "pt-BR";
        u.rate = 1.0;  // Velocidade natural
        u.pitch = 1.1; // Tom levemente tecnológico
        if (vozBR) u.voice = vozBR;

        // Efeito 'Ducking': abaixa a música para a voz passar
        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend   = () => { if (bgm && G.musica) bgm.volume = 0.07; };

        window.speechSynthesis.speak(u);

    } catch (e) {
        console.warn("[MathLab] Falha na síntese de voz:", e);
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
        bgm.play().catch(() => console.log("Interação necessária para tocar som."));
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

// === AVATAR E FEEDBACK VISUAL ===

export function tocarAv(tipo) {
    const img = document.getElementById("av-img");
    const vid = document.getElementById(tipo === "ok" ? "vid-ok" : "vid-no");

    if (!img || !vid) return;

    // Alterna visibilidade
    img.classList.add("avh");
    vid.classList.remove("avh");

    vid.currentTime = 0;
    vid.play().catch(() => {
        // Fallback se o vídeo falhar (ex: modo economia de bateria)
        vid.classList.add("avh");
        img.classList.remove("avh");
    });

    vid.onended = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };
}

/**
 * Atualiza as barras de HUD (Vida e Energia) e Combo
 */
export function updHUD() {
    const fv = document.getElementById("fv");
    const fen = document.getElementById("fen");

    if (fv) fv.style.width = G.vida + "%";
    if (fen) fen.style.width = G.energia + "%";

    // Efeito de cor na barra de vida
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

// === GESTÃO DE MODAIS ===

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

    if (goModal) goModal.classList.add("show", "active");

    narrarContexto(`Integridade do sistema comprometida. Taxa de sincronia final: ${tx} por cento. Reinicie para nova análise.`);
}

// === DASHBOARD PEDAGÓGICO ===

function gerarDashboard() {
    const c = document.getElementById("dash-content");
    if (!c) return;

    c.innerHTML = "";
    let temDados = false;

    for (let hab in G.historico) {
        const hist = G.historico[hab];
        const total = (hist.acertos || 0) + (hist.erros_conceito || 0) + (hist.erros_calculo || 0);
        
        if (total === 0) continue;
        temDados = true;

        const txAcerto = Math.round((hist.acertos / total) * 100);
        let diagnostico = "";

        // Lógica de Alerta ADA
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
        c.innerHTML = "<p class='text-center'>Aguardando telemetria de campo para gerar relatório...</p>";
    }
}
