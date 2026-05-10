/**
 * ui-manager.js - Versão 4.0 (MathLab Audio & Visual Stabilized)
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
        if (!window.speechSynthesis) return;
        
        // Verifica se a voz está ligada no estado global
        if (!G.voz) {
            console.log("[ADA-Voz] Silenciada pelo usuário.");
            return;
        }

        window.speechSynthesis.cancel(); // Para o áudio anterior

        const textoLimpo = t.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ');
        console.log(`[ADA-Voz] Falando: "${textoLimpo}"`); // Log para o Painel de Debug

        const u = new SpeechSynthesisUtterance(textoLimpo);
        u.lang = "pt-BR";
        u.volume = 1;
        u.rate = 1.1; // Fala um pouco mais ágil

        const vozes = window.speechSynthesis.getVoices();
        // Busca voz em PT-BR (mais abrangente para não falhar em celulares)
        const vozBR = vozes.find(x => x.lang === 'pt-BR' || x.lang === 'pt_BR' || x.lang.includes('pt-BR'));
        if (vozBR) u.voice = vozBR;

        // Efeito 'Ducking': abaixa a música para a voz passar
        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend   = () => { if (bgm && G.musica) bgm.volume = 0.07; };
        u.onerror = (e) => { console.warn("[ADA-Voz] Navegador bloqueou o áudio:", e); };

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

/**
 * Gerencia a animação da ADA com proteção contra travamentos de vídeo
 */
export function tocarAv(tipo) {
    const img = document.getElementById("av-img");
    const vid = document.getElementById(tipo === "ok" ? "vid-ok" : "vid-no");

    // Proteção: Se a imagem base não existir, aborta para não quebrar o JS
    if (!img) return;

    // Se o vídeo não existir no DOM, apenas sai (mantém a imagem estática)
    if (!vid) {
        console.warn(`[ADA] Elemento de vídeo para ${tipo} não encontrado.`);
        return;
    }

    // Reset de visibilidade seguro
    const resetAv = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };

    // Alterna para o vídeo
    img.classList.add("avh");
    vid.classList.remove("avh");
    vid.currentTime = 0;

    // Execução com tratamento de Promessa (Crucial para não travar o main.js)
    vid.play()
        .then(() => {
            vid.onended = resetAv;
        })
        .catch(err => {
            console.warn("[MathLab] Bloqueio de autoplay ou vídeo ausente:", err);
            resetAv();
        });
}

/**
 * Atualiza as barras de HUD (Vida e Energia) e Combo
 */
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

    if (goModal) {
        goModal.classList.add("show", "active");
        // Garante que o modal de Game Over sobreponha tudo
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

    // Garante que G.historico existe para não quebrar o loop
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
