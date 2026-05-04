/**
 * ui-manager.js - Versão 3.7 (MathLab Estabilizado)
 * Ajustes cirúrgicos de consistência entre CSS, JS e diagnóstico
 */

import { G } from './engine/gameState.js';

const bgm = document.getElementById("bgm");

// Inicialização segura das vozes
if (typeof window !== 'undefined' && window.speechSynthesis) {
    const carregarVozes = () => { window.speechSynthesis.getVoices(); };
    window.speechSynthesis.onvoiceschanged = carregarVozes;
    carregarVozes();
}

export function narrarContexto(t) {
    try {
        if (typeof window === 'undefined' || !window.speechSynthesis || !G.voz) return;

        window.speechSynthesis.cancel();

        const textoLimpo = t.replace(/<[^>]*>?/gm, '');
        const u = new SpeechSynthesisUtterance(textoLimpo);

        const vozes = window.speechSynthesis.getVoices();
        const vozBR = vozes.find(x => x.lang.includes('pt-BR'));

        u.lang = "pt-BR";
        u.rate = 0.95;
        if (vozBR) u.voice = vozBR;

        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend   = () => { if (bgm && G.musica) bgm.volume = 0.07; };

        window.speechSynthesis.speak(u);

    } catch (e) {
        console.warn("Falha no TTS:", e);
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
        bgm.play().catch(() => {});
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

// === AVATAR E HUD ===

export function tocarAv(tipo) {
    const img = document.getElementById("av-img");
    const vid = document.getElementById(tipo === "ok" ? "vid-ok" : "vid-no");

    if (!img || !vid) return;

    img.classList.add("avh");
    vid.classList.remove("avh");

    vid.currentTime = 0;

    vid.play().catch(() => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    });

    vid.onended = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };
}

export function updHUD() {
    const fv = document.getElementById("fv");
    const fen = document.getElementById("fen");

    if (fv) fv.style.width = G.vida + "%";
    if (fen) fen.style.width = G.energia + "%";

    ["tcb", "tnv"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = (id === "tcb") ? G.combo : G.nivel;
    });
}

// === GESTÃO DE MODAIS ===

export function abrirM(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("show");
    modal.classList.add("active"); // 🔧 compatibilidade CSS

    if (id === 'mdash') gerarDashboard();
}

export function fecharM(id) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("show");
    modal.classList.remove("active"); // 🔧 compatibilidade CSS
}

// === GAME OVER ===

export function exibirGameOver() {
    const total = G.acertos + G.erros;
    const tx = total > 0 ? Math.round((G.acertos / total) * 100) : 0;

    const goTxt = document.getElementById("go-txt");
    const goSt = document.getElementById("go-st");
    const goModal = document.getElementById("go");

    if (goTxt) {
        goTxt.innerHTML = "O terminal entrou em modo de segurança. Mas a ciência constrói-se com o erro.";
    }

    if (goSt) {
        goSt.textContent = `Acertos: ${G.acertos} | Falhas Resgatadas: ${G.erros} | Taxa Lógica: ${tx}%`;
    }

    if (goModal) {
        goModal.classList.add("show");
        goModal.classList.add("active"); // 🔧 compatibilidade CSS
    }

    narrarContexto(`Laboratório pausado. Taxa lógica de ${tx} por cento.`);
}

// === DASHBOARD ===

function gerarDashboard() {
    const c = document.getElementById("dash-content");
    if (!c) return;

    c.innerHTML = "";
    let temDados = false;

    for (let hab in G.historico) {
        const hist = G.historico[hab];
        if (!hist) continue;

        const acertos = hist.acertos || 0;
        const errosC = hist.erros_conceito || 0;
        const errosK = hist.erros_calculo || 0;
        const errosP = hist.erros_porcentagem || 0;

        const total = acertos + errosC + errosK + errosP;
        if (total === 0) continue;

        temDados = true;

        const txAcerto = Math.round((acertos / total) * 100);

        let diagnostico = "";

        if (errosP > acertos) {
            diagnostico = `<div class="alerta-sinal"><strong>Barreira Financeira:</strong> dificuldade com porcentagem.</div>`;
        } else if (errosC > errosK) {
            diagnostico = `<div class="alerta-sinal"><strong>Barreira de Conceito:</strong> revisar regra matemática.</div>`;
        } else if (errosK > errosC) {
            diagnostico = `<div class="alerta-calc"><strong>Barreira de Cálculo:</strong> atenção ao processo.</div>`;
        }

        c.innerHTML += `
            <div class="dash-card">
                <h3>${hab} (${txAcerto}%)</h3>
                <p>${hist.desc || "Habilidade BNCC"}</p>
                <div class="dash-bar">
                    <div class="dash-fill-ok" style="width:${txAcerto}%"></div>
                </div>
                ${diagnostico}
            </div>`;
    }

    if (!temDados) {
        c.innerHTML = "<p>Aguardando dados de telemetria...</p>";
    }
}
