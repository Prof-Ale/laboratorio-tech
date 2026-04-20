/**
 * ui-manager.js
 * Gestor de Interface e Dashboard Clínico (Versão 3.0 - Seminário IFSP)
 * Responsável pelo DUA (Voz), HUD e pelo Mapa de Calor de Erros (Cálculo vs. Sinal).
 */

import { G, BaseBNCC } from './questions.js';

const bgm = document.getElementById("bgm"); 

/* ========================================================
   ACESSIBILIDADE: SÍNTESE DE VOZ (TEXT-TO-SPEECH)
======================================================== */
export function narrarContexto(t) {
    try {
        if (typeof window === 'undefined' || !window.speechSynthesis) return;
        
        window.speechSynthesis.cancel();
        const textoLimpo = t.replace(/<[^>]*>?/gm, ''); 
        
        const u = new SpeechSynthesisUtterance(textoLimpo);
        const vozes = window.speechSynthesis.getVoices();
        const masc = vozes.find(x => x.lang.includes('pt-BR') && (x.name.toLowerCase().includes('male') || x.name.toLowerCase().includes('daniel') || x.name.toLowerCase().includes('antonio'))) || vozes.find(x => x.lang.includes('pt-BR'));
        
        if (masc) u.voice = masc;
        u.lang = "pt-BR"; 
        u.rate = 0.93; 
        u.pitch = 0.9;
        
        u.onstart = () => { if (bgm && G.musica) bgm.volume = 0.02; };
        u.onend = () => { if (bgm && G.musica) bgm.volume = 0.07; };
        
        window.speechSynthesis.speak(u);
    } catch(e) {
        console.log("Síntese de voz não suportada neste navegador.");
    }
}

if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

/* ========================================================
   CONTROLO DE MÍDIA
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
        vid.classList.add("avh");
        img.classList.remove("avh");
    });
    
    vid.onended = () => {
        vid.classList.add("avh");
        img.classList.remove("avh");
    };
}

/* ========================================================
   HUD (HEAD-UP DISPLAY)
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

/* ========================================================
   DASHBOARD DO PROFESSOR: O MAPA DE CALOR CLÍNICO
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
    
    let temDados = false;

    for (let hab in BaseBNCC) {
        let hist = G.historico[hab];
        if(!hist) continue;

        let acertos = hist.acertos || 0;
        let errSinal = hist.erros_sinal || 0;
        let errCalc = hist.erros_calculo || 0;
        
        // Mantém compatibilidade com os erros genéricos das funções antigas
        let errGerais = hist.erros || 0; 
        
        let total = acertos + errSinal + errCalc + errGerais;
        
        if (total === 0) continue; // Ignora habilidades não testadas
        temDados = true;

        let txAcerto = Math.round((acertos / total) * 100);
        let txErroSinal = Math.round((errSinal / total) * 100);
        let txErroCalc = Math.round(((errCalc + errGerais) / total) * 100);

        // Algoritmo de Inteligência Pedagógica (Alertas para o Professor)
        let alertaClinico = "";
        if (errSinal > errCalc && errSinal > 0) {
            alertaClinico = `
                <div style="margin-top:10px; padding:8px; background:rgba(212,160,23,0.1); border-left:3px solid var(--choco-gold); border-radius:4px; font-size:11px; color:var(--choco-cream)">
                    <strong>⚠️ Barreira Conceitual:</strong> O estudante demonstra saber o cálculo, mas falha sistematicamente na inversão de sinal ou regra geométrica. Sugere-se mediação manipulável com a Reta Numérica.
                </div>`;
        } else if (errCalc > errSinal && errCalc > 0) {
            alertaClinico = `
                <div style="margin-top:10px; padding:8px; background:rgba(255,68,68,0.1); border-left:3px solid var(--neon-red); border-radius:4px; font-size:11px; color:var(--choco-cream)">
                    <strong>🚨 Barreira de Cálculo:</strong> O estudante compreende o conceito da competência, mas sofre com deficiências de tabuada ou aritmética básica. Necessário reforço operacional.
                </div>`;
        } else if (txAcerto >= 70) {
            alertaClinico = `
                <div style="margin-top:10px; padding:8px; background:rgba(0,255,136,0.1); border-left:3px solid var(--neon-green); border-radius:4px; font-size:11px; color:var(--choco-cream)">
                    <strong>🌟 Zona de Desenvolvimento Proximal:</strong> O estudante atingiu proficiência nesta habilidade. Pronto para desafios algébricos!
                </div>`;
        }

        let html = `
            <div class="dash-card" style="border-left-color: ${txAcerto >= 50 ? 'var(--neon-green)' : 'var(--neon-red)'}">
                <h3 style="display:flex; justify-content:space-between; align-items:center;">
                    ${hab} <span style="font-size:12px; color:var(--text-muted)">Desempenho: ${txAcerto}%</span>
                </h3>
                <p style="font-size:12px">${BaseBNCC[hab].descricao}</p>
                
                <div style="margin-top:10px; font-size:12px; display:flex; justify-content:space-between;">
                    <span style="color:var(--neon-green)">✓ Acertos: ${acertos}</span>
                    <span style="color:var(--choco-gold)">⚠️ Erro Sinal: ${errSinal}</span>
                    <span style="color:var(--neon-red)">✗ Erro Cálculo: ${errCalc + errGerais}</span>
                </div>
                
                <div class="dash-bar" style="height:10px; margin-top:8px; display:flex; border-radius:8px; overflow:hidden;">
                    <div style="width:${txAcerto}%; background:var(--neon-green);" title="Acertos"></div>
                    <div style="width:${txErroSinal}%; background:var(--choco-gold);" title="Erro de Sinal"></div>
                    <div style="width:${txErroCalc}%; background:var(--neon-red);" title="Erro de Cálculo"></div>
                </div>
                
                ${alertaClinico}
            </div>
        `;
        c.innerHTML += html;
    }

    if(!temDados) {
        c.innerHTML = `<p style="font-size:13px; color:var(--text-muted); text-align:center; padding:20px;">Nenhum dado recolhido nesta sessão. O estudante deve resolver os desafios para gerar a análise clínica.</p>`;
    }
}

/* ========================================================
   TELA DE GAME OVER E TÉRMINO DA MISSÃO
======================================================== */
export function exibirGameOver() {
    const t = G.acertos + G.erros;
    const tx = t > 0 ? Math.round((G.acertos / t) * 100) : 0;
    
    const goTxt = document.getElementById("go-txt");
    const goSt = document.getElementById("go-st");
    const goModal = document.getElementById("go");

    if(goTxt) goTxt.innerHTML = "O terminal entrou em modo de segurança. Mas a ciência constrói-se com o erro.";
    if(goSt) goSt.textContent = `Acertos: ${G.acertos} | Falhas Resgatadas: ${G.erros} | Taxa Lógica: ${tx}%`;
    if(goModal) goModal.classList.add("show");
    
    narrarContexto(`Laboratório pausado. Você obteve uma taxa lógica de ${tx} por cento. Solicite a análise do Professor para ver os detalhes da sua progressão.`);
}