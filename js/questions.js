/**
 * questions.js
 * Módulo responsável pelo banco de questões dinâmicas, geração processual (RNG)
 * e mapeamento de competências da BNCC.
 */

// Matriz de Competências BNCC para o Dashboard
export const BaseBNCC = {
  "EF07MA04": { descricao: "Resolver problemas com Números Inteiros." },
  "EF07MA07": { descricao: "Frações, equivalência e reta numérica." }
};

// Estado global de progresso e histórico
export const G = {
  vida: 100, 
  energia: 60, 
  combo: 0, 
  nivel: 1, 
  acertos: 0, 
  erros: 0, 
  trilha: 1, 
  musica: true, 
  respondeu: false,
  historico: {
    "EF07MA04": { acertos: 0, erros: 0 },
    "EF07MA07": { acertos: 0, erros: 0 }
  }
};

/* ========== UTILITÁRIOS MATEMÁTICOS E RNG ========== */
export function rnd(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function pick(a) {
    return a[Math.floor(Math.random() * a.length)];
}

export function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    return b === 0 ? a : mdc(b, a % b);
}

export function nz(a, b) {
    let n = 0;
    while (n === 0) n = rnd(a, b);
    return n;
}

export function shuffle(a) {
    return a.sort(() => Math.random() - 0.5);
}

// Gera distratores inteiros (respostas incorretas parecidas)
export function bInt(cor, mn, mx, q) {
    const s = new Set([String(cor)]);
    let t = 0;
    while (s.size < q + 1 && t < 60) {
        const v = rnd(mn, mx);
        if (v !== cor) s.add(String(v));
        t++;
    }
    return [...s];
}

// Gera distratores para frações (erros comuns do aluno)
export function errFrac(n, d) {
    const e = new Set();
    // Previsão de erros de DUA (ex: inverter n e d, somar 1)
    [`${d}/${n}`, `${n}/${d + 1}`, `${n + 1}/${d}`, `${Math.max(1, n - 1)}/${d}`, `${n}/${d + 2}`].forEach(c => {
        if (c !== `${n}/${d}`) e.add(c);
    });
    let t = 0;
    while (e.size < 3 && t < 40) {
        const nn = rnd(1, d), dd = rnd(2, d + 3);
        const f = `${nn}/${dd}`;
        if (f !== `${n}/${d}`) e.add(f);
        t++;
    }
    return [...e].slice(0, 3);
}

/* ========================================================
   BANCO DE QUESTÕES (Mapeadas por BNCC)
======================================================== */

export function qAdicao() {
  const a = rnd(-10, 10), b = nz(-10, 10), r = a + b;
  return {
    tipo: "reta", bncc: "EF07MA04", animStart: a, animSteps: b,
    display: `${a >= 0 ? a : "(" + a + ")"} + ${b >= 0 ? b : "(" + b + ")"}`,
    res: `${r}`,
    dica: `<strong>Pense como temperatura ou saldo bancário.</strong> Você está na posição <em>${a}</em>. O segundo número indica quanto você <em>avança ou recua</em>.`,
    passo: `${a} + ${b} = ${r}`,
    botoes: shuffle(bInt(r, -20, 20, 3))
  };
}

export function qSubtracao() {
  const a = rnd(-10, 10), b = nz(-10, 10), r = a - b;
  return {
    tipo: "reta", bncc: "EF07MA04", animStart: a, animSteps: -b,
    display: `${a >= 0 ? a : "(" + a + ")"} − ${b >= 0 ? b : "(" + b + ")"}`,
    res: `${r}`,
    dica: `<strong>Subtrair é somar o oposto.</strong> Reescreva a operação trocando o sinal do segundo número.`,
    passo: `${a} − ${b} = ${a} + (${-b}) = ${r}`,
    botoes: shuffle(bInt(r, -20, 20, 3))
  };
}

export function qMultiplicacao() {
  const a = nz(-9, 9), b = nz(-9, 9), r = a * b;
  return {
    tipo: "sinais", bncc: "EF07MA04",
    display: `(${a}) × (${b})`,
    res: `${r}`,
    dica: `<strong>Antes do valor, analise os sinais.</strong> Os dois fatores têm sinais <em>iguais ou diferentes</em>?`,
    passo: `Sinais ${((a < 0 && b < 0) || (a > 0 && b > 0)) ? "iguais → positivo" : "diferentes → negativo"} · |${a}| × |${b}| = ${Math.abs(r)} → ${r}`,
    botoes: shuffle(bInt(r, -90, 90, 3))
  };
}

export function qDivisao() {
  const div = nz(-9, 9), q = nz(-9, 9), dvd = div * q;
  return {
    tipo: "sinais", bncc: "EF07MA04",
    display: `(${dvd}) ÷ (${div})`,
    res: `${q}`,
    dica: `<strong>A regra de sinais vale para divisão também.</strong> Eles concordam ou divergem?`,
    passo: `Sinais ${((dvd < 0 && div < 0) || (dvd > 0 && div > 0)) ? "iguais → positivo" : "diferentes → negativo"} · |${dvd}| ÷ |${div}| = ${Math.abs(q)} → ${q}`,
    botoes: shuffle(bInt(q, -15, 15, 3))
  };
}

export function qExpressao() {
  const a = nz(-6, 6), b = nz(-6, 6), c = nz(-6, 6), op = pick(["+", "-"]);
  const parc = a * b, r = op === "+" ? parc + c : parc - c;
  return {
    tipo: "sinais", bncc: "EF07MA04",
    display: `(${a}) × (${b}) ${op} (${c})`,
    res: `${r}`,
    dica: `<strong>Atenção à ordem das operações.</strong> Qual delas tem <em>prioridade</em>?`,
    passo: `① (${a}) × (${b}) = ${parc}   ② ${parc} ${op} (${c}) = ${r}`,
    botoes: shuffle(bInt(r, -50, 50, 3))
  };
}

export function qFracSimples() {
  const d = rnd(2, 12), n = rnd(1, d - 1), res = `${n}/${d}`;
  return {
    tipo: "fraca", bncc: "EF07MA07", n, d,
    display: "Que fração está representada na figura?",
    res,
    dica: `<strong>Observe a barra.</strong> Em quantas partes <em>iguais</em> foi dividida? Quantas estão marcadas?`,
    passo: `${n} partes pintadas de um total de ${d} → ${n}/${d}`,
    botoes: shuffle([res, ...errFrac(n, d)])
  };
}

export function qFracEquiv() {
  const bases = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [1, 5], [3, 5], [2, 7], [1, 6], [5, 6], [3, 7], [4, 5]];
  const [bn, bd] = pick(bases), k = rnd(2, 8), n2 = bn * k, d2 = bd * k, fr = `${n2}/${d2}`;
  const e = new Set([`${n2 + 1}/${d2}`, `${n2}/${d2 + 1}`, `${n2 + 1}/${d2 + 1}`, `${bn + k}/${bd + k}`]);
  
  return {
    tipo: "frac-equiv", bncc: "EF07MA07", n1: bn, d1: bd, n2, d2,
    display: `Qual equivale a <b>${bn}/${bd}</b>?`,
    res: fr,
    dica: `<strong>Multiplique numerador e denominador pelo mesmo número.</strong>`,
    passo: `${bn}/${bd} × ${k}/${k} = ${n2}/${d2}`,
    botoes: shuffle([fr, ...[...e].filter(f => f !== fr).slice(0, 3)])
  };
}

export function qComparacao() {
  let n1, d1, n2, d2;
  const isIguais = Math.random() < 0.25; 
  if (isIguais) {
      const bases = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [1, 5]];
      const [bn, bd] = pick(bases);
      const k1 = rnd(1, 3), k2 = rnd(2, 4);
      n1 = bn * k1; d1 = bd * k1; n2 = bn * k2; d2 = bd * k2;
  } else {
      do { d1 = rnd(2, 10); n1 = rnd(1, d1 - 1); d2 = rnd(2, 10); n2 = rnd(1, d2 - 1); } while (n1 * d2 === n2 * d1);
  }
  const v1 = n1 / d1, v2 = n2 / d2;
  const maior = v1 > v2 ? `${n1}/${d1}` : (v2 > v1 ? `${n2}/${d2}` : "São iguais");
  
  return {
    tipo: "frac-comp", bncc: "EF07MA07", n1, d1, n2, d2,
    display: `Qual fração é <b>maior</b>?`,
    res: maior,
    dica: `<strong>Divida numerador por denominador ou encontre o denominador comum.</strong>`,
    passo: isIguais ? `${n1}/${d1} e ${n2}/${d2} representam a mesma quantidade.` : `${n1}/${d1} ≈ ${(n1 / d1).toFixed(2)}  vs  ${n2}/${d2} ≈ ${(n2 / d2).toFixed(2)}  →  ${maior}`,
    botoes: shuffle([`${n1}/${d1}`, `${n2}/${d2}`, "São iguais"])
  };
}

export function qSimplifica() {
  const d = rnd(2, 8), n = rnd(1, d - 1), k = rnd(2, 6), ns = n * k, ds = d * k, g = mdc(ns, ds), nr = ns / g, dr = ds / g;
  const res = dr === 1 ? `${nr}` : `${nr}/${dr}`;
  const e = new Set([`${ns}/${ds}`, `${nr + 1}/${dr}`, dr > 1 ? `${nr}/${dr + 1}` : `${nr + 1}`]);
  
  return {
    tipo: "fraca", bncc: "EF07MA07", n: ns, d: ds,
    display: `Simplifique: <b>${ns}/${ds}</b>`,
    res,
    dica: `<strong>Qual é o maior número que divide ambos?</strong>`,
    passo: `MDC(${ns},${ds}) = ${g}  →  ${ns}÷${g} / ${ds}÷${g} = ${res}`,
    botoes: shuffle([res, ...[...e].filter(f => f !== res).slice(0, 3)])
  };
}

export function qSomaFrac() {
  const d = rnd(2, 10), n1 = rnd(1, d - 1), n2 = rnd(1, d - 1), nr = n1 + n2, g = mdc(nr, d);
  const res = g === d ? `${nr / g}` : `${nr / g}/${d / g}`;
  const e = new Set([`${nr}/${d}`, `${n1}/${d + n2}`, `${nr + 1}/${d}`]);
  
  return {
    tipo: "fraca", bncc: "EF07MA07", n: n1, d,
    display: `${n1}/${d} + ${n2}/${d}`,
    res,
    dica: `<strong>Denominadores iguais: apenas os numeradores se somam.</strong>`,
    passo: `${n1}/${d} + ${n2}/${d} = ${nr}/${d}${g > 1 ? " = " + res : ""}`,
    botoes: shuffle([res, ...[...e].filter(f => f !== res).slice(0, 3)])
  };
}

/* ========== SELETOR DE QUESTÃO E DIFICULDADE ========== */
export function selQ() {
  const t = G.trilha, n = G.nivel;
  
  if (t === 1) { 
      return n <= 2 ? qFracSimples() : qAdicao(); 
  }
  if (t === 2) { 
      const p = [qAdicao, qSubtracao, qFracSimples, qFracEquiv]; 
      return n <= 3 ? pick(p.slice(0, 2))() : pick(p)(); 
  }
  if (t === 3) { 
      const p = [qSubtracao, qMultiplicacao, qFracEquiv, qComparacao, qSimplifica]; 
      return n <= 5 ? pick(p.slice(0, 3))() : pick(p)(); 
  }
  
  // Trilha 4 (Avançado)
  return pick([qMultiplicacao, qDivisao, qExpressao, qComparacao, qSimplifica, qSomaFrac])();
}