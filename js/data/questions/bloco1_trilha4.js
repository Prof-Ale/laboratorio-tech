// js/data/questions/bloco1_trilha4.js
// Bloco 1 — A Base Numérica | Trilha 4 Completa
// Aula 8: MMC | Aula 9: MDC | Aula 10: Potenciação

export const bloco1_trilha4 = [

    // ── AULA 8: MMC (MÍNIMO MÚLTIPLO COMUM) ──────────────────────────────

    {
        id: "B1T4Q01", bloco: 1, aula: 8, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Conceito",
        display: "O que significa MMC(8, 12) = 24?",
        botoes: ["24 é o menor múltiplo comum de 8 e 12", "24 é o produto de 8 e 12", "24 é o maior divisor de 8 e 12", "24 é a soma"],
        res: "24 é o menor múltiplo comum de 8 e 12",
        erroConceito: ["24 é o produto de 8 e 12"],
        passo: "MMC = Mínimo Múltiplo Comum. É o menor número que aparece na tabuada do 8 e do 12 ao mesmo tempo.",
        dica: "MMC não é o produto (8×12=96). É o primeiro encontro dos múltiplos."
    },
    {
        id: "B1T4Q03", bloco: 1, aula: 8, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Aplicação (Ciclos)",
        display: "Ônibus A sai a cada 12 min, Ônibus B a cada 8 min. Se saíram juntos agora, quando saem juntos novamente?",
        botoes: ["Em 24 minutos", "Em 96 minutos", "Em 20 minutos", "Em 4 minutos"],
        res: "Em 24 minutos",
        erroConceito: ["Em 96 minutos"],
        passo: "Buscamos o primeiro encontro: M(12): 12, 24... M(8): 8, 16, 24... O MMC é 24.",
        dica: "Problemas de ciclos ou encontros que se repetem → use MMC."
    },
    {
        id: "B1T4Q06", bloco: 1, aula: 8, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Números Primos entre Si",
        display: "Se dois números não têm fatores em comum (MDC=1), como calculamos o MMC?",
        botoes: ["Multiplicamos um pelo outro", "Somamos os dois", "Pegamos o maior", "Diferença dos dois"],
        res: "Multiplicamos um pelo outro",
        erroConceito: ["Pegamos o maior"],
        passo: "Sem fatores comuns para 'economizar', o MMC é o próprio produto. Ex: MMC(4,9) = 4×9 = 36.",
        dica: "Quando não há divisores comuns (além do 1), o MMC é o produto."
    },

    // ── AULA 9: MDC (MÁXIMO DIVISOR COMUM) ───────────────────────────────

    {
        id: "B1T4Q07", bloco: 1, aula: 9, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Conceito",
        display: "O que significa MDC(36, 24) = 12?",
        botoes: ["12 é o maior número que divide 36 e 24 exatamente", "12 é o menor múltiplo de 36 e 24", "Soma dividida por 4", "Diferença"],
        res: "12 é o maior número que divide 36 e 24 exatamente",
        erroConceito: ["12 é o menor múltiplo de 36 e 24"],
        passo: "MDC = Máximo Divisor Comum. É a maior 'régua' que mede os dois números sem sobrar nada.",
        dica: "MDC foca nos divisores (quem divide o número)."
    },
    {
        id: "B1T4Q08", bloco: 1, aula: 9, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Aplicação (Cortes)",
        display: "Cortar cordas de 36cm e 24cm em pedaços iguais e o maior possível. Qual o tamanho?",
        botoes: ["12 cm", "6 cm", "4 cm", "24 cm"],
        res: "12 cm",
        erroConceito: ["24 cm"],
        passo: "MDC(36,24) = 12. Cortar em partes iguais sem sobra = buscar o Máximo Divisor Comum.",
        dica: "Repartir ou cortar em partes iguais → use MDC."
    },

    // ── AULA 10: POTENCIAÇÃO ─────────────────────────────────────────────

    {
        id: "B1T4Q13", bloco: 1, aula: 10, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Conceito",
        display: "Qual o significado de 3⁴?",
        botoes: ["3 × 3 × 3 × 3", "3 × 4", "4 × 4 × 4", "3 + 3 + 3 + 3"],
        res: "3 × 3 × 3 × 3",
        erroConceito: ["3 × 4"],
        passo: "O expoente (4) diz quantas vezes a base (3) se multiplica. 3⁴ = 81, não 12.",
        dica: "Expoente indica repetição de multiplicação, não uma conta de vezes comum."
    },
    {
        id: "B1T4Q15", bloco: 1, aula: 10, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Expoente Zero",
        display: "Qual o valor de 9⁰?",
        botoes: ["1", "0", "9", "Indefinido"],
        res: "1",
        erroConceito: ["0"],
        passo: "Pela regra das potências, qualquer número (exceto o zero) elevado a zero é 1.",
        dica: "Lembra da escada: 9²=81, 9¹=9, 9⁰=1 (sempre divide pela base)."
    },
    {
        id: "B1T4Q16", bloco: 1, aula: 10, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Área",
        display: "Um quadrado tem lado de 12 cm. Qual é sua área?",
        botoes: ["144 cm²", "48 cm²", "24 cm²", "1.728 cm²"],
        res: "144 cm²",
        erroConceito: ["48 cm²"],
        passo: "Área = Lado². 12² = 12 × 12 = 144 cm². Por isso chamamos o expoente 2 de 'ao quadrado'.",
        dica: "Área de quadrado é lado vezes lado."
    },
    {
        id: "B1T4Q19", bloco: 1, aula: 10, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Padrões",
        display: "Último algarismo das potências de 2: 2, 4, 8, 6... Qual o último algarismo de 2¹⁰⁰?",
        botoes: ["6", "2", "4", "8"],
        res: "6",
        erroConceito: ["2"],
        passo: "O ciclo tem 4 elementos. 100 ÷ 4 tem resto 0. O resto 0 indica o 4º termo do ciclo (6).",
        dica: "Padrões repetitivos são a base do raciocínio lógico em potências."
    },

    // ── QUESTÕES ENRIQUECIDAS (INVESTIGAÇÃO) ──────────────────────────

    {
        id: "B1T4Q21", bloco: 1, aula: 8, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Investigação",
        display: "MMC(N, 10) = 20. Qual o menor valor possível para N?",
        botoes: ["4", "2", "20", "10"],
        res: "4",
        erroConceito: ["20"],
        passo: "M(4): 4, 8, 12, 16, 20... M(10): 10, 20... O primeiro encontro é 20. Logo N pode ser 4.",
        dica: "Teste os divisores de 20 para ver qual deles encontra o 10 pela primeira vez no 20."
    },
    {
        id: "B1T4Q22", bloco: 1, aula: 10, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Desafio",
        display: "O dobro de 2¹⁰ é igual a:",
        botoes: ["2¹¹", "4¹⁰", "2²⁰", "4²⁰"],
        res: "2¹¹",
        erroConceito: ["4¹⁰"],
        passo: "Dobro de algo é 2 × esse algo. 2¹ × 2¹⁰ = 2^(1+10) = 2¹¹. Mantém a base e soma expoentes.",
        dica: "Dobro de uma potência de 2 apenas aumenta o expoente em 1."
    }
];
