// js/data/questions/bloco2_trilha2.js
// Bloco 2 — Números e Operações | Trilha 2
// Aula 4: Multiplicação e Divisão de Inteiros (EF07MA02)
// Aula 5: Frações e Representação (EF07MA04)

export const bloco2_trilha2 = [

    // ── AULA 4: MULTIPLICAÇÃO E DIVISÃO DE INTEIROS ──────────────────────

    {
        id: "B2T2Q01", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "(+6) × (-4) = ?",
        botoes: ["-24", "+24", "-10", "+10"],
        res: "-24",
        erroConceito: ["+24"],
        passo: "Sinais diferentes → resultado negativo. 6 × 4 = 24, sinal negativo → -24.",
        dica: "Sinais diferentes (+ e -) → resultado sempre negativo."
    },
    {
        id: "B2T2Q02", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "(-3) × (-9) = ?",
        botoes: ["+27", "-27", "+12", "-12"],
        res: "+27",
        erroConceito: ["-27"],
        passo: "Sinais iguais (ambos negativos) → resultado positivo. 3 × 9 = 27, sinal positivo → +27.",
        dica: "Dois negativos multiplicados → resultado positivo. É como inverter duas vezes a direção."
    },
    {
        id: "B2T2Q03", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão de Inteiros",
        display: "(-8) ÷ (+2) = ?",
        botoes: ["-4", "+4", "-16", "+16"],
        res: "-4",
        erroConceito: ["+4"],
        passo: "Sinais diferentes → resultado negativo. 8 ÷ 2 = 4, sinal negativo → -4.",
        dica: "A regra dos sinais vale para divisão do mesmo jeito que para multiplicação."
    },
    {
        id: "B2T2Q04", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão de Inteiros",
        display: "(-15) ÷ (-3) = ?",
        botoes: ["+5", "-5", "+45", "-45"],
        res: "+5",
        erroConceito: ["-5"],
        passo: "Sinais iguais → resultado positivo. 15 ÷ 3 = 5, sinal positivo → +5.",
        dica: "Dois negativos divididos → resultado positivo. Igual à multiplicação."
    },
    {
        id: "B2T2Q05", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Produto com Três Fatores — Sinal",
        display: "(-2) × (-3) × (-4) = ?",
        botoes: ["-24", "+24", "-9", "+9"],
        res: "-24",
        erroConceito: ["+24"],
        passo: "Três fatores negativos: quantidade ímpar → resultado negativo. 2×3×4=24, sinal negativo → -24.",
        dica: "Conte os negativos: par → positivo, ímpar → negativo."
    },
    {
        id: "B2T2Q06", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Produto com Quatro Fatores — Sinal",
        display: "(-1) × (-1) × (-1) × (-1) = ?",
        botoes: ["+1", "-1", "0", "-4"],
        res: "+1",
        erroConceito: ["-1"],
        passo: "Quatro fatores negativos: quantidade par → resultado positivo. 1×1×1×1=1, sinal positivo → +1.",
        dica: "Quatro negativos = dois pares de negativos. Cada par dá positivo."
    },
    {
        id: "B2T2Q07", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação — Contexto Financeiro",
        display: "Prejuízo de R$ 500/dia × 4 dias. Qual o saldo acumulado?",
        botoes: ["-R$ 2.000", "+R$ 2.000", "-R$ 504", "+R$ 504"],
        res: "-R$ 2.000",
        erroConceito: ["+R$ 2.000"],
        passo: "Prejuízo = negativo. (-500) × 4 = -2.000. Quatro dias de prejuízo acumulam -R$ 2.000.",
        dica: "Prejuízo diário é negativo. Multiplicar por dias positivo → resultado negativo."
    },
    {
        id: "B2T2Q08", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão — Contexto",
        display: "Mergulhador desce à taxa de -4 m/min. Em quantos minutos chega a -28 m?",
        botoes: ["7 minutos", "-7 minutos", "32 minutos", "112 minutos"],
        res: "7 minutos",
        erroConceito: ["32 minutos"],
        passo: "-28 ÷ (-4) = +7 minutos. Sinais iguais → resultado positivo. O tempo não pode ser negativo.",
        dica: "(-28) ÷ (-4): dois negativos → positivo. 28 ÷ 4 = 7 minutos."
    },
    {
        id: "B2T2Q09", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação — Contexto Temperatura",
        display: "Temperatura caiu 3°C/hora por 6 horas. Começou em +4°C. Temperatura final?",
        botoes: ["-14°C", "+22°C", "+14°C", "-22°C"],
        res: "-14°C",
        erroConceito: ["+22°C"],
        passo: "Queda de 3°C/h × 6h = -18°C. Temperatura final: +4 + (-18) = -14°C.",
        dica: "Queda de temperatura = negativo. 4 + (-3×6) = 4 + (-18) = -14°C."
    },

    // ── AULA 5: FRAÇÕES E REPRESENTAÇÃO ────────────────────────────────

    {
        id: "B2T2Q10", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações — Conceito",
        display: "Uma pizza tem 8 fatias. Pedro comeu 3. Que fração ele comeu?",
        botoes: ["3/8", "8/3", "3/5", "5/8"],
        res: "3/8",
        erroConceito: ["8/3"],
        passo: "Fração = partes consumidas / total de partes. Pedro comeu 3 de 8 fatias → 3/8.",
        dica: "Numerador = partes que você tem. Denominador = total de partes iguais."
    },
    {
        id: "B2T2Q11", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações Equivalentes",
        display: "Qual fração é equivalente a 1/2?",
        botoes: ["4/8", "2/8", "1/4", "3/8"],
        res: "4/8",
        erroConceito: ["2/8"],
        passo: "1/2 = 2/4 = 3/6 = 4/8 = ... Multiplicando numerador e denominador por 4: 1×4/2×4 = 4/8.",
        dica: "Frações equivalentes: multiplique ou divida numerador e denominador pelo mesmo número."
    },
    {
        id: "B2T2Q12", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Simplificação de Frações",
        display: "Qual é a forma simplificada de 12/18?",
        botoes: ["2/3", "4/6", "6/9", "1/3"],
        res: "2/3",
        erroConceito: ["4/6"],
        passo: "MDC(12,18) = 6. 12÷6=2, 18÷6=3. Forma simplificada: 2/3. Precisa dividir pelo MDC para simplificação máxima.",
        dica: "Simplifique pelo MDC, não por qualquer número. 4/6 ainda simplifica para 2/3."
    },
    {
        id: "B2T2Q13", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Fração Imprópria — Número Misto",
        display: "11/4 convertida para número misto é:",
        botoes: ["2 e 3/4", "3 e 1/4", "2 e 1/4", "1 e 3/4"],
        res: "2 e 3/4",
        erroConceito: ["3 e 1/4"],
        passo: "11 ÷ 4 = 2 (parte inteira) com resto 3. Logo 11/4 = 2 e 3/4.",
        dica: "Divida: quociente é a parte inteira, resto sobre o denominador é a parte fracionária."
    },
    {
        id: "B2T2Q14", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Ordenação de Frações",
        display: "Qual é a ordem crescente de 3/4, 1/2, 5/8, 2/3?",
        botoes: ["1/2 < 2/3 < 5/8 < 3/4", "1/2 < 5/8 < 2/3 < 3/4", "2/3 < 5/8 < 1/2 < 3/4", "1/2 < 2/3 < 3/4 < 5/8"],
        res: "1/2 < 5/8 < 2/3 < 3/4",
        erroConceito: ["1/2 < 2/3 < 5/8 < 3/4"],
        passo: "MMC(4,2,8,3)=24: 3/4=18/24, 1/2=12/24, 5/8=15/24, 2/3=16/24. Ordem: 12<15<16<18 → 1/2 < 5/8 < 2/3 < 3/4.",
        dica: "Para comparar frações com denominadores diferentes, use frações equivalentes com mesmo denominador."
    },
    {
        id: "B2T2Q15", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações — Contexto Turma",
        display: "Turma de 30 alunos: 18 são meninas. Qual fração simplificada representa as meninas?",
        botoes: ["3/5", "18/30", "2/5", "6/10"],
        res: "3/5",
        erroConceito: ["18/30"],
        passo: "18/30: MDC(18,30)=6. 18÷6=3, 30÷6=5. Fração simplificada: 3/5.",
        dica: "18/30 é correto mas não está simplificada. Divida pelo MDC (6) para a forma mínima."
    },
    {
        id: "B2T2Q16", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações — Pizza Completa",
        display: "Pedro (3/8), Ana (2/8), Carla (1/8). Qual fração da pizza sobrou?",
        botoes: ["2/8 = 1/4", "3/8", "1/8", "4/8 = 1/2"],
        res: "2/8 = 1/4",
        erroConceito: ["3/8"],
        passo: "Comido: 3/8 + 2/8 + 1/8 = 6/8. Sobrou: 8/8 - 6/8 = 2/8 = 1/4.",
        dica: "Pizza inteira = 8/8. Subtraia o total comido para encontrar o que sobrou."
    }
];
