/**
 * game-engine.js
 * Módulo de Renderização e Animação no Canvas.
 * Responsável por desenhar as Retas Numéricas, Barras de Frações e criar a ponte visual do DUA.
 */

import { G } from './questions.js';

// Configurações e instâncias do Canvas
const cv = document.getElementById("canvas-game");
const cx = cv ? cv.getContext("2d") : null;

// Constantes de dimensão e geometria
const W = 580, H = 130, CX = W / 2, CY = H * 0.52, STEP = W / 44;

// Estado interno de animação do Canvas
let animando = false;

export function setAnimando(val) { animando = val; }
export function getAnimando() { return animando; }

/* ========================================================
   RENDERIZAÇÃO GEOMÉTRICA (PRIMITIVAS)
======================================================== */

// Desenha o eixo base e as marcações da Reta Numérica
function retaBase() {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);
    cx.strokeStyle = "rgba(255,255,255,.45)"; 
    cx.lineWidth = 2;
    
    // Eixo principal
    cx.beginPath(); cx.moveTo(20, CY); cx.lineTo(W - 20, CY); cx.stroke();
    
    // Seta de direção (Direita)
    cx.fillStyle = "rgba(255,255,255,.45)";
    cx.beginPath(); 
    cx.moveTo(W - 16, CY); 
    cx.lineTo(W - 28, CY - 5); 
    cx.lineTo(W - 28, CY + 5); 
    cx.closePath(); 
    cx.fill();
    
    // Marcações (ticks)
    cx.textAlign = "center";
    for (let i = -20; i <= 20; i++) {
        const px = CX + i * STEP;
        cx.strokeStyle = i === 0 ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.2)";
        cx.lineWidth = i === 0 ? 2 : 1;
        cx.beginPath(); 
        cx.moveTo(px, CY - (i === 0 ? 8 : 5)); 
        cx.lineTo(px, CY + (i === 0 ? 8 : 5)); 
        cx.stroke();
        
        // Rótulos a cada 5 unidades
        if (i % 5 === 0) {
            cx.fillStyle = i === 0 ? "rgba(255,255,255,.85)" : "rgba(180,185,210,.5)";
            cx.font = (i === 0 ? "bold " : "") + "11px Nunito,sans-serif";
            cx.fillText(i, px, CY + 20);
        }
    }
}

// Desenha um marcador circular numérico
function ponto(val, cor, r = 9) {
    if (!cx) return;
    const px = CX + val * STEP;
    cx.fillStyle = cor; 
    cx.beginPath(); 
    cx.arc(px, CY, r, 0, Math.PI * 2); 
    cx.fill();
}

// Desenha um texto flutuante associado a um ponto
function rotulo(val, texto, cor) {
    if (!cx) return;
    cx.fillStyle = cor; 
    cx.font = "bold 12px Nunito,sans-serif"; 
    cx.textAlign = "center";
    cx.fillText(texto, CX + val * STEP, CY - 17);
}

// Desenha um salto parabólico na reta numérica
function arco(fromVal, toVal, cor) {
    if (!cx) return;
    const x1 = CX + fromVal * STEP, x2 = CX + toVal * STEP, mx = (x1 + x2) / 2;
    const alt = -STEP * 0.9;
    
    cx.strokeStyle = cor; 
    cx.lineWidth = 2.5;
    cx.beginPath(); 
    cx.moveTo(x1, CY); 
    cx.quadraticCurveTo(mx, CY + alt, x2, CY); 
    cx.stroke();
    
    // Desenha a ponta da flecha no destino
    const ang = Math.atan2(-alt, x2 - mx);
    const tam = 7;
    cx.fillStyle = cor; 
    cx.beginPath();
    cx.moveTo(x2, CY);
    cx.lineTo(x2 - tam * Math.cos(ang - 0.4), CY - tam * Math.sin(ang - 0.4));
    cx.lineTo(x2 - tam * Math.cos(ang + 0.4), CY - tam * Math.sin(ang + 0.4));
    cx.closePath(); 
    cx.fill();
}

/* ========================================================
   SISTEMA DE ANIMAÇÃO (Apenas após o acerto)
======================================================== */
export function animarArcos(q) {
    if (q.tipo !== "reta" || !cx) return;
    
    animando = true;
    const st = q.animStart, steps = q.animSteps;
    const total = Math.abs(steps), dir = steps > 0 ? 1 : -1;
    const COR = "#ffe600";
    const DELAY = 100; 
    let feitos = 0;

    function frame() {
        if (!animando) return;
        
        retaBase();
        ponto(st, "#00eaff", 9); 
        rotulo(st, `${st}`, "#00eaff");
        
        for (let i = 0; i < feitos; i++) {
            arco(st + i * dir, st + (i + 1) * dir, COR);
        }
        
        if (feitos > 0) ponto(st + feitos * dir, COR, 7);
        
        feitos++;
        
        if (feitos <= total) {
            setTimeout(frame, DELAY);
        } else {
            setTimeout(() => {
                if (!animando) return;
                retaBase();
                ponto(st, "#00eaff", 9); 
                rotulo(st, `${st}`, "#00eaff");
                for (let i = 0; i < total; i++) {
                    arco(st + i * dir, st + (i + 1) * dir, COR);
                }
                const fin = st + steps;
                ponto(fin, "#00ff88", 10); 
                rotulo(fin, `${fin}`, "#00ff88");
                animando = false;
            }, 100);
        }
    }
    frame(); 
}

/* ========================================================
   RENDERIZAÇÃO DE FRAÇÕES
======================================================== */

// Converte HEX para RGBA para permitir transparências modulares no canvas
function h2r(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
}

// Desenha a visualização em barra para Frações
function barraF(n, d, bx, by, bw, bh, cor, lab) {
    if (!cx) return;
    const sw = bw / d;
    
    // Partes preenchidas vs Partes vazias
    for (let i = 0; i < d; i++) {
        cx.fillStyle = i < n ? h2r(cor, 0.5) : "rgba(255,255,255,.04)";
        cx.fillRect(bx + i * sw + 1, by + 1, sw - 2, bh - 2);
        if (i > 0) {
            cx.strokeStyle = h2r(cor, 0.55); 
            cx.lineWidth = 1; 
            cx.beginPath(); 
            cx.moveTo(bx + i * sw, by); 
            cx.lineTo(bx + i * sw, by + bh); 
            cx.stroke();
        }
    }
    
    // Contorno principal
    cx.strokeStyle = cor; 
    cx.lineWidth = 2; 
    cx.strokeRect(bx, by, bw, bh);
    
    // Label inferior explicativo
    cx.fillStyle = "#ddd"; 
    cx.font = "12px Nunito,sans-serif"; 
    cx.textAlign = "center";
    cx.fillText(lab, bx + bw / 2, by + bh + 16);
}

// Renderiza uma fração única
function dFracSimp(q) {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);
    const bw = Math.min(W - 60, 400), bh = 44, bx = (W - bw) / 2, by = 18;
    barraF(q.n, q.d, bx, by, bw, bh, "#d4a017", `${q.n} de ${q.d} partes`);
}

// Renderiza comparação visual de duas frações
function dFracComp(q) {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);
    const bw = Math.min((W - 70) / 2, 210), bh = 36, gap = 28, tw = bw * 2 + gap, sx = (W - tw) / 2;
    barraF(q.n1, q.d1, sx, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
    barraF(q.n2, q.d2, sx + bw + gap, 18, bw, bh, "#d4a017", `${q.n2}/${q.d2}`); 
}

// Renderiza a transformação/equivalência de frações (Revela no acerto)
function dFracEquiv(q) {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);
    const bw = Math.min((W - 70) / 2, 210), bh = 36, gap = 28, tw = bw * 2 + gap, sx = (W - tw) / 2;
    
    if (!G.respondeu) {
        // Antes da resposta, mostra apenas a original centralizada
        barraF(q.n1, q.d1, (W - bw) / 2, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
    } else {
        // Após a resposta, mostra a original e a equivalente com cor de acerto
        barraF(q.n1, q.d1, sx, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
        barraF(q.n2, q.d2, sx + bw + gap, 18, bw, bh, "#00ff88", `${q.n2}/${q.d2}`);
    }
}

/* ========================================================
   FUNÇÃO PRINCIPAL EXPORTADA (ORQUESTRADOR)
======================================================== */
export function renderCv(q) {
    const imgRegras = document.getElementById("img-regras");
    if (!cx || !imgRegras) return;

    // Gerencia o auxílio visual fixo de regras matemáticas
    if (q.tipo === "sinais" || q.tipo === "reta") { 
        imgRegras.style.display = "block"; 
    } else { 
        imgRegras.style.display = "none"; 
    }

    if (q.tipo === "reta") {
        retaBase(); 
        ponto(q.animStart, "#00eaff", 9); 
        rotulo(q.animStart, `${q.animStart}`, "#00eaff");
        
        // Exibe o ponto de interrogação se não tiver respondido ainda (Feedforward)
        if (!G.respondeu) {
            const ep = CX + (q.animStart + q.animSteps) * STEP;
            cx.strokeStyle = "rgba(255,230,0,.45)"; 
            cx.lineWidth = 2; 
            cx.setLineDash([4, 3]);
            cx.beginPath(); 
            cx.arc(ep, CY, 9, 0, Math.PI * 2); 
            cx.stroke(); 
            cx.setLineDash([]);
            
            cx.fillStyle = "rgba(255,230,0,.75)"; 
            cx.font = "bold 13px Nunito,sans-serif"; 
            cx.textAlign = "center";
            cx.fillText("?", ep, CY - 17);
        }
    }
    else if (q.tipo === "fraca") dFracSimp(q);
    else if (q.tipo === "frac-comp") dFracComp(q);
    else if (q.tipo === "frac-equiv") dFracEquiv(q);
    else if (q.tipo === "sinais") retaBase(); 
    else cx.clearRect(0, 0, W, H);
}