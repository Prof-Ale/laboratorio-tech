/**
 * ui-manager.js - Versão Estabilizada
 * DUA: Implementação de Acessibilidade Auditiva e Visual
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

        window.speechSynthesis.cancel(); // Interrompe fala anterior
        const textoLimpo = t.replace(/<[^>]*>?/gm, ''); // Remove HTML para o leitor
        const u = new SpeechSynthesisUtterance(textoLimpo);
        const vozes = window.speechSynthesis.getVoices();

        // Filtro para voz pt-BR (Preferência por vozes naturais)
        const vozBR = vozes.find(x => x.lang.includes('pt-BR'));

        u.lang = "pt-BR";
        u.rate = 0.95; 
        if (vozBR) u.voice = vozBR;

        // Efeito Ducking (DUA)
        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend   = () => { if (bgm && G.musica) bgm.volume = 0.07; };

        window.speechSynthesis.speak(u);
    } catch (e) {
        console.warn("Falha no TTS:", e);
    }
}

// ... (Funções de toggleMusica, toggleVoz, tocarAv e updHUD permanecem conforme seu código original)

function gerarDashboard() {
    const c = document.getElementById("dash-content");
    if (!c) return;
    c.innerHTML = "";

    let temDados = false;

    for (let hab in G.historico) {
        const hist = G.historico[hab];
        if (!hist) continue;

        const { acertos = 0, erros_sinal = 0, erros_calculo = 0, erros = 0 } = hist;
        const total = acertos + erros_sinal + erros_calculo + erros;
        if (total === 0) continue;
        temDados = true;

        const txAcerto = Math.round((acertos / total) * 100);
        
        // Lógica de Alerta Pedagógico (Clínica do Erro v3)
        let diagnostico = "";
        if (erros_sinal > erros_calculo) {
            diagnostico = `<div class="alerta-sinal"><strong>Barreira de Sinal:</strong> Reforçar regra de sinais.</div>`;
        } else if (erros_calculo > erros_sinal) {
            diagnostico = `<div class="alerta-calc"><strong>Barreira de Cálculo:</strong> Reforçar operações básicas.</div>`;
        }

        c.innerHTML += `
            <div class="dash-card">
                <h3>${hab} (${txAcerto}%)</h3>
                <p>${hist.desc || ""}</p>
                <div class="progress-bar-container">
                    <div class="bar acerto" style="width:${txAcerto}%"></div>
                </div>
                ${diagnostico}
            </div>`;
    }
}
