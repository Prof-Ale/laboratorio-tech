/**
 * questions.js
 * Módulo de Banco de Questões, Geração Processual e Mapeamento BNCC.
 * EXPANSÃO 2.0: Introdução à Álgebra (Equações do 1º Grau)
 */

export const BaseBNCC = {
  "EF07MA01": { descricao: "Múltiplos e Divisores (Critérios)." },
  "EF07MA04": { descricao: "Resolver problemas com Números Inteiros." },
  "EF07MA07": { descricao: "Frações, equivalência e denominadores comuns." },
  "EF07MA18": { descricao: "Equações de 1º grau (Princípio da Equivalência)." }
};

export const G = {
  vida: 100, energia: 60, combo: 0, nivel: 1, acertos: 0, erros: 0, trilha: 1, musica: true, respondeu: false,
  historico: {
    "EF07MA01": { acertos: 0, erros: 0 },
    "EF07MA04": { acertos: 0, erros: 0 },
    "EF07MA07": { acertos: 0, erros: 0 },
    "EF07MA18": { acertos: 0, erros: 0 } 
  }
};

/* ========== UTILITÁRIOS MATEMÁTICOS ========== */
export function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
export function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
export function mdc(a, b) { return b === 0 ? Math.abs(a) : mdc(b, a % b); }
export function mmc(a, b) { return (Math.abs(a * b)) / mdc(a, b); }
export function nz(a, b) { let n = 0; while (n === 0) n = rnd(a, b); return n; }
export function shuffle(a) { return a.sort(() => Math.random() - 0.5); }

export function bIntSmart(correto, mn, mx) {
    const oposto = -correto;
    const s = new Set([String(correto)]);
    if (correto !== 0) s.add(String(oposto));
    let t = 0;
    while (s.size < 4 && t < 60) {
        const v = rnd(mn, mx);
        if (v !== correto && v !== oposto) s.add(String(v));
        t++;
    }
    return [...s];
}

export function errFrac(n, d) {
    const e = new Set();
    [`${d}/${n}`, `${n}/${d + 1}`, `${n + 1}/${d}`, `${Math.max(1, n - 1)}/${d}`].forEach(c => {
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
   EF07MA18 (Introdução à Álgebra - Equações e Balança)
======================================================== */
export function qEquacao() {
    const a = pick([1, 2, 3]); // Coeficiente
    const x = nz(-6, 6); // O valor secreto de X
    const b = nz(-10, 10); // Termo independente
    const c = (a * x) + b; 
    
    const aText = a === 1 ? "" : a;
    const bText = b > 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    const displayFormat = `${aText}<span style="color:var(--neon-yellow)">x</span> ${bText} = ${c}`;

    return {
        tipo: "equacao",
        bncc: "EF07MA18",
        a, b, c, 
        display: `Encontre a Partícula X:<br><b>${displayFormat}</b>`,
        res: `${x}`,
        dica: `<strong>Balança do Laboratório:</strong> O objetivo é isolar o <span style="color:var(--neon-yellow)">x</span>. Se você tirar algo de um lado, tem que tirar do outro para manter o equilíbrio.`,
        passo: `① ${aText}x = ${c} ${b > 0 ? '-' : '+'} ${Math.abs(b)} → ${aText}x = ${c - b} ${a > 1 ? '<br>② x = ' + (c-b) + ' ÷ ' + a + ' = ' + x : ''}`,
        botoes: shuffle(bIntSmart(x, x - 15, x + 15))
    };
} // <-- Faltava esta chave fechando a função!

/* ========================================================
   BANCO DE QUESTÕES ANTERIORES MANTIDOS INTACTOS
======================================================== */
export function qMultiplos() {
    const base = pick([3, 4, 6, 7, 8, 9]);
    const k = rnd(4, 15);
    const correto = base * k;
    return {
        tipo: "texto", bncc: "EF07MA01", display: `Qual destes números é <b>múltiplo de ${base}</b>?`,
        res: `${correto}`, dica: `<strong>Frequência Numérica:</strong> Múltiplos são como saltos do mesmo tamanho. O número deve estar na tabuada do ${base}.`,
        passo: `${base} × ${k} = ${correto}`, botoes: shuffle(bIntSmart(correto, correto - 20, correto + 20))
    };
}

export function qDivisores() {
    const div = pick([2, 3, 5, 9, 10]);
    const k = rnd(3, 20);
    const correto = div * k;
    let dicaRegra = "";
    if(div===2) dicaRegra="Termina em PAR.";
    else if(div===3) dicaRegra="Soma dos algarismos na tabuada do 3.";
    else if(div===5) dicaRegra="Termina em 0 ou 5.";
    else if(div===9) dicaRegra="Soma dos algarismos na tabuada do 9.";
    else if(div===10) dicaRegra="Termina em 0.";
    
    const errados = new Set();
    while(errados.size < 3) {
        const num = rnd(10, 200);
        if(num % div !== 0 && num !== correto) errados.add(String(num));
    }
    return {
        tipo: "texto", bncc: "EF07MA01", display: `Qual número é <b>divisível por ${div}</b>?`,
        res: `${correto}`, dica: `<strong>Critério:</strong> Lembre-se da regra do ${div}: <em>${dicaRegra}</em>`,
        passo: `${correto} dividido por ${div} é exato (dá ${k}).`, botoes: shuffle([`${correto}`, ...errados])
    };
}

export function qAdicao() {
  const a = rnd(-15, 15), b = nz(-15, 15), r = a + b;
  return {
    tipo: "reta", bncc: "EF07MA04", animStart: a, animSteps: b,
    display: `${a >= 0 ? a : "(" + a + ")"} + ${b >= 0 ? b : "(" + b + ")"}`,
    res: `${r}`, dica: `<strong>Pense como saldo bancário.</strong> Você está em <em>${a}</em>. O segundo número indica o quanto você avança ou recua.`,
    passo: `${a} + ${b} = ${r}`, botoes: shuffle(bIntSmart(r, -30, 30))
  };
}

export function qMultiplicacao() {
  const a = nz(-9, 9), b = nz(-9, 9), r = a * b;
  return {
    tipo: "sinais", bncc: "EF07MA04", display: `(${a}) × (${b})`,
    res: `${r}`, dica: `<strong>Analise os sinais.</strong> Sinais iguais geram energia positiva. Sinais diferentes, negativa.`,
    passo: `Sinais ${((a < 0 && b < 0) || (a > 0 && b > 0)) ? "iguais → positivo" : "diferentes → negativo"} · |${a}| × |${b}| = ${r}`, botoes: shuffle(bIntSmart(r, -81, 81))
  };
}

export function qFracSimples() {
  const d = rnd(2, 12), n = rnd(1, d - 1), res = `${n}/${d}`;
  return {
    tipo: "fraca", bncc: "EF07MA07", n, d, display: "Que fração está representada?",
    res, dica: `<strong>Observe a barra.</strong> Quantas partes foram preenchidas de um total de quantas?`,
    passo: `${n} partes pintadas de um total de ${d} → ${n}/${d}`, botoes: shuffle([res, ...errFrac(n, d)])
  };
}

export function qSomaFracDiferente() {
    let d1, d2;
    do { d1 = rnd(2, 7); d2 = rnd(2, 7); } while (d1 === d2);
    const n1 = rnd(1, d1 - 1) || 1, n2 = rnd(1, d2 - 1) || 1;
    const denominadorComum = mmc(d1, d2);
    const novoN1 = n1 * (denominadorComum / d1), novoN2 = n2 * (denominadorComum / d2);
    const nSoma = novoN1 + novoN2;
    const divisorComum = mdc(nSoma, denominadorComum);
    const denomFinal = denominadorComum / divisorComum, numFinal = nSoma / divisorComum;
    const res = denomFinal === 1 ? String(numFinal) : `${numFinal}/${denomFinal}`;
    
    const errados = new Set([`${n1 + n2}/${d1 + d2}`, `${n1 + n2}/${denominadorComum}`]);
    while (errados.size < 3) errados.add(`${rnd(1, 15)}/${denominadorComum}`);

    return {
        tipo: "texto", bncc: "EF07MA07", display: `Qual é o resultado de: <b>${n1}/${d1} + ${n2}/${d2}</b> ?`,
        res: res, dica: `<strong>Denominadores diferentes!</strong> Você não pode somar direto. Primeiro, encontre o Mínimo Múltiplo Comum (MMC) entre ${d1} e ${d2}.`,
        passo: `MMC(${d1},${d2}) = ${denominadorComum}. Frações viram ${novoN1}/${denominadorComum} + ${novoN2}/${denominadorComum} = ${nSoma}/${denominadorComum} → ${res}`,
        botoes: shuffle([res, ...[...errados].slice(0, 3)])
    };
}

/* ========== ORQUESTRADOR DE NÍVEIS (SELETOR BALANCEADO) ========== */
export function selQ() {
  const t = G.trilha, n = G.nivel;
  
  if (t === 1) { 
      return pick([qAdicao, qFracSimples, qFracSimples])(); 
  }
  if (t === 2) { 
      return pick([qAdicao, qFracSimples, qMultiplos, qDivisores])(); 
  }
  if (t === 3) { 
      return pick([qMultiplicacao, qDivisores, qEquacao, qFracSimples])(); 
  }
  
  return pick([qSomaFracDiferente, qSomaFracDiferente, qMultiplicacao, qEquacao, qDivisores])();
}