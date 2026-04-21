/**
 * game-engine.js - Versão 2.0 (Álgebra & Balança)
 * Módulo de Renderização e Animação no Canvas.
 */

import { G } from './engine/gameState.js';

const cv = document.getElementById("canvas-game");
const cx = cv ? cv.getContext("2d") : null;
const W = 580, H = 130, CX = W / 2, CY = H * 0.52, STEP = W / 44;

let animando = false;
export function setAnimando(val) { animando = val; }

/* ========== RENDERIZAÇÃO DE ÁLGEBRA (BALANÇA TECH) ========== */

function dBalança(q) {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);

    const corGold = "#d4a017";
    const corCyan = "#00eaff";
    const corYellow = "#ffe600";
    const corRed = "#ff4444";
    const corBase = "rgba(255,255,255,.2)";
    const corTexto = "#ffffff";

    // 1. Desenha a Base da Balança
    cx.strokeStyle = corBase;
    cx.lineWidth = 4;
    cx.beginPath();
    cx.moveTo(CX - 150, H - 20);
    cx.lineTo(CX + 150, H - 20);
    cx.stroke();

    // 2. Desenha o Eixo Central
    cx.fillStyle = corGold;
    cx.beginPath();
    cx.moveTo(CX, H - 20);
    cx.lineTo(CX - 10, H - 50);
    cx.lineTo(CX + 10, H - 50);
    cx.fill();

    // 3. Desenha a Trave (Barra Horizontal)
    cx.strokeStyle = corGold;
    cx.lineWidth = 3;
    cx.beginPath();
    cx.moveTo(CX - 140, H - 60);
    cx.lineTo(CX + 140, H - 60);
    cx.stroke();

    // 4. Desenha os Pratos
    cx.fillStyle = "rgba(255,255,255,.1)";
    cx.fillRect(CX - 160, H - 65, 40, 5); // Esquerdo
    cx.fillRect(CX + 120, H - 65, 40, 5); // Direito

    // 5. Elementos da Equação (ax + b = c)
    const a = q.a || 1;
    const b = q.b || 0;
    const c = q.c || 0;

    // Desenhar X (Caixas Neon Cyan)
    for(let i=0; i < Math.min(a, 3); i++) {
        cx.fillStyle = corCyan;
        cx.fillRect(CX - 155 + (i*12), H - 85, 10, 20);
        cx.strokeStyle = corTexto;
        cx.lineWidth = 1;
        cx.strokeRect(CX - 155 + (i*12), H - 85, 10, 20);
    }

    // Desenhar Unidades B (Pequenos círculos)
    const absB = Math.abs(b);
    for(let i=0; i < Math.min(absB, 10); i++) {
        cx.fillStyle = b > 0 ? corYellow : corRed;
        cx.beginPath();
        cx.arc(CX - 125 + (i%5)*6, H - 75 - (Math.floor(i/5)*8), 3, 0, Math.PI*2);
        cx.fill();
    }

    // Lado Direito: Pesinhos C
    const absC = Math.abs(c);
    for(let i=0; i < Math.min(absC, 15); i++) {
        cx.fillStyle = c > 0 ? corYellow : corRed;
        cx.beginPath();
        cx.arc(CX + 130 + (i%5)*6, H - 75 - (Math.floor(i/5)*8), 3, 0, Math.PI*2);
        cx.fill();
    }

    // Texto Central (=)
    cx.fillStyle = corTexto;
    cx.font = "bold 20px Orbitron";
    cx.fillText("=", CX, H - 70);
}

/* ========== RESTANTE DA ENGINE (RETA E FRAÇÕES) ========== */

function retaBase() {
    if (!cx) return;
    cx.clearRect(0, 0, W, H);
    cx.strokeStyle = "rgba(255,255,255,.45)"; cx.lineWidth = 2;
    cx.beginPath(); cx.moveTo(20, CY); cx.lineTo(W - 20, CY); cx.stroke();
    cx.fillStyle = "rgba(255,255,255,.45)";
    cx.beginPath(); cx.moveTo(W - 16, CY); cx.lineTo(W - 28, CY - 5); cx.lineTo(W - 28, CY + 5); cx.closePath(); cx.fill();
    cx.textAlign = "center";
    for (let i = -20; i <= 20; i++) {
        const px = CX + i * STEP;
        cx.strokeStyle = i === 0 ? "rgba(255,255,255,.7)" : "rgba(255,255,255,.2)";
        cx.lineWidth = i === 0 ? 2 : 1;
        cx.beginPath(); cx.moveTo(px, CY - (i === 0 ? 8 : 5)); cx.lineTo(px, CY + (i === 0 ? 8 : 5)); cx.stroke();
        if (i % 5 === 0) {
            cx.fillStyle = i === 0 ? "rgba(255,255,255,.85)" : "rgba(180,185,210,.5)";
            cx.font = (i === 0 ? "bold " : "") + "11px Nunito,sans-serif";
            cx.fillText(i, px, CY + 20);
        }
    }
}

function ponto(val, cor, r = 9) {
    if (!cx) return;
    const px = CX + val * STEP;
    cx.fillStyle = cor; cx.beginPath(); cx.arc(px, CY, r, 0, Math.PI * 2); cx.fill();
}

function rotulo(val, texto, cor) {
    if (!cx) return;
    cx.fillStyle = cor; cx.font = "bold 12px Nunito,sans-serif"; cx.textAlign = "center";
    cx.fillText(texto, CX + val * STEP, CY - 17);
}

function arco(fromVal, toVal, cor) {
    if (!cx) return;
    const x1 = CX + fromVal * STEP, x2 = CX + toVal * STEP, mx = (x1 + x2) / 2;
    const alt = -STEP * 0.9;
    cx.strokeStyle = cor; cx.lineWidth = 2.5;
    cx.beginPath(); cx.moveTo(x1, CY); cx.quadraticCurveTo(mx, CY + alt, x2, CY); cx.stroke();
    const ang = Math.atan2(-alt, x2 - mx);
    const tam = 7;
    cx.fillStyle = cor; cx.beginPath();
    cx.moveTo(x2, CY);
    cx.lineTo(x2 - tam * Math.cos(ang - 0.4), CY - tam * Math.sin(ang - 0.4));
    cx.lineTo(x2 - tam * Math.cos(ang + 0.4), CY - tam * Math.sin(ang + 0.4));
    cx.closePath(); cx.fill();
}

export function animarArcos(q) {
    if (q.tipo !== "reta" || !cx) return;
    animando = true;
    const st = q.animStart, steps = q.animSteps;
    const total = Math.abs(steps), dir = steps > 0 ? 1 : -1;
    const COR = "#ffe600";
    let feitos = 0;
    function frame() {
        if (!animando) return;
        retaBase();
        ponto(st, "#00eaff", 9); rotulo(st, `${st}`, "#00eaff");
        for (let i = 0; i < feitos; i++) arco(st + i * dir, st + (i + 1) * dir, COR);
        if (feitos > 0) ponto(st + feitos * dir, COR, 7);
        feitos++;
        if (feitos <= total) setTimeout(frame, 250);
        else {
            setTimeout(() => {
                if (!animando) return;
                retaBase();
                ponto(st, "#00eaff", 9); rotulo(st, `${st}`, "#00eaff");
                for (let i = 0; i < total; i++) arco(st + i * dir, st + (i + 1) * dir, COR);
                const fin = st + steps;
                ponto(fin, "#00ff88", 10); rotulo(fin, `${fin}`, "#00ff88");
                animando = false;
            }, 250);
        }
    }
    frame();
}

function h2r(hex, a) {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
}

function barraF(n, d, bx, by, bw, bh, cor, lab) {
    if (!cx) return;
    const sw = bw / d;
    for (let i = 0; i < d; i++) {
        cx.fillStyle = i < n ? h2r(cor, 0.5) : "rgba(255,255,255,.04)";
        cx.fillRect(bx + i * sw + 1, by + 1, sw - 2, bh - 2);
        if (i > 0) {
            cx.strokeStyle = h2r(cor, 0.55); cx.lineWidth = 1;
            cx.beginPath(); cx.moveTo(bx + i * sw, by); cx.lineTo(bx + i * sw, by + bh); cx.stroke();
        }
    }
    cx.strokeStyle = cor; cx.lineWidth = 2; cx.strokeRect(bx, by, bw, bh);
    cx.fillStyle = "#ddd"; cx.font = "12px Nunito,sans-serif"; cx.textAlign = "center";
    cx.fillText(lab, bx + bw / 2, by + bh + 16);
}

function dFracSimp(q) {
    if (!cx) return; cx.clearRect(0, 0, W, H);
    const bw = Math.min(W - 60, 400), bh = 44, bx = (W - bw) / 2, by = 18;
    barraF(q.n, q.d, bx, by, bw, bh, "#d4a017", `${q.n} de ${q.d} partes`);
}

function dFracComp(q) {
    if (!cx) return; cx.clearRect(0, 0, W, H);
    const bw = Math.min((W - 70) / 2, 210), bh = 36, gap = 28, tw = bw * 2 + gap, sx = (W - tw) / 2;
    barraF(q.n1, q.d1, sx, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
    barraF(q.n2, q.d2, sx + bw + gap, 18, bw, bh, "#d4a017", `${q.n2}/${q.d2}`);
}

function dFracEquiv(q) {
    if (!cx) return; cx.clearRect(0, 0, W, H);
    const bw = Math.min((W - 70) / 2, 210), bh = 36, gap = 28, tw = bw * 2 + gap, sx = (W - tw) / 2;
    if (!G.respondeu) {
        barraF(q.n1, q.d1, (W - bw) / 2, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
    } else {
        barraF(q.n1, q.d1, sx, 18, bw, bh, "#00eaff", `${q.n1}/${q.d1}`);
        barraF(q.n2, q.d2, sx + bw + gap, 18, bw, bh, "#00ff88", `${q.n2}/${q.d2}`);
    }
}

export function renderCv(q) {
    const imgRegras = document.getElementById("img-regras");
    if (!cx || !imgRegras) return;

    if (q.tipo === "sinais" || q.tipo === "reta") { imgRegras.style.display = "block"; }
    else { imgRegras.style.display = "none"; }

    if (q.tipo === "reta") {
        retaBase(); ponto(q.animStart, "#00eaff", 9); rotulo(q.animStart, `${q.animStart}`, "#00eaff");
        if (!G.respondeu) {
            const ep = CX + (q.animStart + q.animSteps) * STEP;
            cx.strokeStyle = "rgba(255,230,0,.45)"; cx.lineWidth = 2; cx.setLineDash([4, 3]);
            cx.beginPath(); cx.arc(ep, CY, 9, 0, Math.PI * 2); cx.stroke(); cx.setLineDash([]);
            cx.fillStyle = "rgba(255,230,0,.75)"; cx.font = "bold 13px Nunito,sans-serif"; cx.textAlign = "center";
            cx.fillText("?", ep, CY - 17);
        }
    }
    else if (q.tipo === "fraca") dFracSimp(q);
    else if (q.tipo === "frac-comp") dFracComp(q);
    else if (q.tipo === "frac-equiv") dFracEquiv(q);
    else if (q.tipo === "equacao") dBalança(q);
    else if (q.tipo === "sinais") retaBase();
    else cx.clearRect(0, 0, W, H);
}
