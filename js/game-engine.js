/**
 * js/game-engine.js — Versão 7.3 "MathLab Render Ultimate"
 * Motor de Renderização de Alta Performance (Reta Numérica, Sinais e Animações)
 */

let animState = 0;
let isAnimating = false;
let currentQ = null;
let animId = null;

/**
 * Controla o estado global de animação
 */
export function setAnimando(val) {
    isAnimating = val;
    if (!val) {
        animState = 0;
        if (animId) cancelAnimationFrame(animId);
    }
}

/**
 * Inicia a animação de salto na reta numérica
 */
export function animarArcos(q) {
    // CORREÇÃO 1: Agora aceita "reta" E "sinais"
    if (q.tipo !== "reta" && q.tipo !== "sinais") return;
    
    // Reset de segurança
    if (animId) cancelAnimationFrame(animId);
    
    currentQ = q;
    isAnimating = true;
    animState = 0;
    loopAnimacao();
}

function loopAnimacao() {
    if (!isAnimating || !currentQ) return;
    
    animState += 0.025; // Velocidade suave
    
    if (animState >= 1) {
        animState = 1;
        isAnimating = false;
        renderCv(currentQ); // Render final estático
        return;
    }
    
    renderCv(currentQ);
    animId = requestAnimationFrame(loopAnimacao);
}

/**
 * Renderizador Principal
 */
export function renderCv(q) {
    const cv = document.getElementById("canvas-game");
    if (!cv) return;
    const ctx = cv.getContext("2d");

    // Prevenção de corrida (Race Condition)
    if (isAnimating && currentQ && q.id !== currentQ.id) {
        setAnimando(false);
    }

    // A MÁGICA DO TAMANHO (Responsividade)
    const parentWidth = cv.parentElement ? cv.parentElement.clientWidth : 580;
    const cssWidth = Math.min(parentWidth, 580) || 580;
    const cssHeight = 130;
    
    // Ajuste de DPI para nitidez máxima
    const dpr = window.devicePixelRatio || 1;
    
    cv.width = cssWidth * dpr;
    cv.height = cssHeight * dpr;
    cv.style.width = cssWidth + "px";
    cv.style.height = cssHeight + "px";
    
    // CORREÇÃO 6: Reset absoluto da matriz antes do scale para evitar distorções
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    // Gerenciamento da imagem de regras de sinais (DOM)
    const imgRegras = document.getElementById("img-regras");
    if (imgRegras) {
        imgRegras.style.display = (q.tipo === "sinais") ? "block" : "none";
    }

    // CORREÇÃO 2: Renderiza a reta tanto para "reta" quanto para "sinais"
    if (q && (q.tipo === "reta" || q.tipo === "sinais")) {
        desenharReta(ctx, cssWidth, cssHeight);
        
        // CORREÇÃO 3: O Normalizador Implícito (Lida com JSONs antigos e novos)
        const a = q.a ?? q.inicio ?? q.valorInicial;
        const b = q.b ?? q.salto ?? q.valor;
        
        // Renderização baseada no estado da questão
        if (a !== undefined && b !== undefined && (isAnimating || animState > 0)) {
            desenharArco(ctx, cssWidth, cssHeight, a, b, animState);
        } else if (a !== undefined) {
            desenharPontoPartida(ctx, cssWidth, cssHeight, a);
        }
    } else {
        desenharFundoLogico(ctx, cssWidth, cssHeight);
    }
}

/* ========================================================
   UTILITÁRIOS E DESENHO
   ======================================================== */

function getX(val, width) {
    const min = -10;
    const max = 10;
    const margem = 40; 
    const areaUtil = width - (margem * 2);
    const passo = areaUtil / (max - min);
    return margem + ((val - min) * passo);
}

function desenharReta(ctx, w, h) {
    const yCenter = h - 40; 

    // Eixo principal
    ctx.beginPath();
    ctx.moveTo(20, yCenter);
    ctx.lineTo(w - 20, yCenter);
    ctx.strokeStyle = "rgba(0, 229, 255, 0.3)"; 
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.font = "bold 11px 'Nunito', sans-serif";

    for (let i = -10; i <= 10; i++) {
        const x = getX(i, w);
        const isDestaque = (i === 0);
        
        // Marcadores
        ctx.beginPath();
        ctx.moveTo(x, yCenter - 6);
        ctx.lineTo(x, yCenter + 6);
        ctx.strokeStyle = isDestaque ? "#00e5ff" : "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = isDestaque ? 3 : 1.5;
        ctx.stroke();

        // Números (Respiro para Mobile)
        ctx.fillStyle = isDestaque ? "#00e5ff" : "rgba(255, 255, 255, 0.8)";
        const saltoTextos = w < 400 ? 4 : 2;
        
        if (i % saltoTextos === 0 || i === 0) {
            ctx.fillText(i, x, yCenter + 22);
        }
    }
}

function desenharPontoPartida(ctx, w, h, a) {
    const startX = getX(a, w);
    const yCenter = h - 40;

    ctx.save();
    ctx.beginPath();
    ctx.arc(startX, yCenter, 7, 0, Math.PI * 2);
    ctx.fillStyle = "#00e5ff";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00e5ff";
    ctx.fill();
    ctx.restore();
}

function desenharArco(ctx, w, h, a, b, progresso) {
    const startX = getX(a, w);
    const endX = getX(a + b, w);
    const yCenter = h - 40;
    const alturaArco = 60; 

    const corArco = b >= 0 ? "#00ff88" : "#ff4444"; 

    ctx.save();
    
    // Desenha a "sombra" do arco completo
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 2;
    for (let t = 0; t <= 1; t += 0.02) {
        let cx = startX + (endX - startX) * t;
        let cy = yCenter - alturaArco * (1 - Math.pow(2 * t - 1, 2));
        if (t === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // Desenha o arco animado
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle = corArco;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.shadowBlur = 10;
    ctx.shadowColor = corArco;

    for (let t = 0; t <= progresso; t += 0.01) {
        let cx = startX + (endX - startX) * t;
        let cy = yCenter - alturaArco * (1 - Math.pow(2 * t - 1, 2));
        if (t === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // Bolinha na ponta do arco
    let atualX = startX + (endX - startX) * progresso;
    let atualY = yCenter - alturaArco * (1 - Math.pow(2 * progresso - 1, 2));

    ctx.beginPath();
    ctx.arc(atualX, atualY, 8, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.strokeStyle = corArco;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
}

function desenharFundoLogico(ctx, w, h) {
    ctx.save();
    ctx.fillStyle = "rgba(0, 229, 255, 0.03)";
    ctx.fillRect(10, h/2 - 20, w - 20, 40);
    ctx.textAlign = "center";
    ctx.font = "italic 13px 'Nunito'";
    ctx.fillStyle = "rgba(0, 229, 255, 0.5)";
    ctx.fillText("PROCESSADOR DE SINAIS ATIVO", w / 2, h / 2 + 5);
    ctx.restore();
}
