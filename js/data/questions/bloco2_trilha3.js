// js/data/questions/bloco2_trilha3.js
// Bloco 2 — Números e Operações | Trilha 3
// Aula 6: Adição e Subtração de Frações (EF07MA04)
// Aula 7: Multiplicação e Divisão de Frações (EF07MA04)
// Aula 8: Números Racionais e Decimais (EF07MA04)

export const bloco2_trilha3 = [

    // ── AULA 6: ADIÇÃO E SUBTRAÇÃO DE FRAÇÕES ───────────────────────────

    {
        id: "B2T3Q01", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Mesmo Denominador",
        display: "3/8 + 2/8 = ?",
        botoes: ["5/8", "5/16", "6/16", "1/8"],
        res: "5/8",
        erroConceito: ["5/16"],
        passo: "Denominadores iguais: some os numeradores e mantenha o denominador. 3+2=5, denominador 8 → 5/8.",
        dica: "Denominadores iguais → some só os numeradores. O denominador não muda!"
    },
    {
        id: "B2T3Q02", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Mesmo Denominador",
        display: "7/10 - 3/10 = ?",
        botoes: ["4/10 = 2/5", "4/0", "10/10", "4/20"],
        res: "4/10 = 2/5",
        erroConceito: ["4/20"],
        passo: "7-3=4, denominador 10 → 4/10. Simplificando: MDC(4,10)=2 → 2/5.",
        dica: "Some os numeradores, mantenha o denominador, depois simplifique se possível."
    },
    {
        id: "B2T3Q03", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Denominadores Diferentes",
        display: "1/2 + 1/3 = ?",
        botoes: ["5/6", "2/5", "2/6", "4/6"],
        res: "5/6",
        erroConceito: ["2/5"],
        passo: "MMC(2,3)=6. 1/2=3/6 e 1/3=2/6. Soma: 3/6+2/6=5/6.",
        dica: "Denominadores diferentes → calcule o MMC, transforme as frações, depois some."
    },
    {
        id: "B2T3Q04", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Denominadores Diferentes",
        display: "3/4 - 1/6 = ?",
        botoes: ["7/12", "2/2 = 1", "8/12 = 2/3", "2/3"],
        res: "7/12",
        erroConceito: ["2/2 = 1"],
        passo: "MMC(4,6)=12. 3/4=9/12 e 1/6=2/12. Subtração: 9/12-2/12=7/12.",
        dica: "MMC de 4 e 6 é 12. Transforme as duas frações para /12 antes de subtrair."
    },
    {
        id: "B2T3Q05", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Contexto Corrida",
        display: "Lucas correu 2/3 do percurso e Bianca correu 3/4. Juntos, que fração cobriram?",
        botoes: ["17/12 (passa de 1)", "5/7", "5/12", "1/12"],
        res: "17/12 (passa de 1)",
        erroConceito: ["5/7"],
        passo: "MMC(3,4)=12. 2/3=8/12 e 3/4=9/12. Soma: 17/12. Passa de 1 porque juntos cobriram mais de um percurso completo.",
        dica: "Somar 2/3 e 3/4: use o MMC (12). 8/12 + 9/12 = 17/12 > 1."
    },
    {
        id: "B2T3Q06", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Contexto Salário",
        display: "Pedro gastou 3/8 do salário com aluguel e 1/4 com alimentação. Que fração sobrou?",
        botoes: ["3/8", "5/8", "1/2", "4/8"],
        res: "3/8",
        erroConceito: ["5/8"],
        passo: "1/4 = 2/8. Gasto: 3/8 + 2/8 = 5/8. Sobra: 8/8 - 5/8 = 3/8.",
        dica: "Converta 1/4 para /8. Aluguel + alimentação = 5/8. Sobra: 1 - 5/8 = 3/8."
    },
    {
        id: "B2T3Q07", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Três Parcelas",
        display: "1/3 + 1/4 + 1/6 = ?",
        botoes: ["3/4", "9/12 = 3/4", "3/13", "7/12"],
        res: "9/12 = 3/4",
        erroConceito: ["3/13"],
        passo: "MMC(3,4,6)=12. 1/3=4/12, 1/4=3/12, 1/6=2/12. Soma: 4+3+2=9/12=3/4.",
        dica: "Com três frações, encontre o MMC dos três denominadores: MMC(3,4,6)=12."
    },

    // ── AULA 7: MULTIPLICAÇÃO E DIVISÃO DE FRAÇÕES ──────────────────────

    {
        id: "B2T3Q08", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações",
        display: "2/3 × 3/4 = ?",
        botoes: ["1/2", "6/12", "5/7", "2/4"],
        res: "1/2",
        erroConceito: ["5/7"],
        passo: "Numerador × numerador: 2×3=6. Denominador × denominador: 3×4=12. 6/12 = 1/2.",
        dica: "Multiplique numerador com numerador e denominador com denominador. Depois simplifique."
    },
    {
        id: "B2T3Q09", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Inverso",
        display: "3/4 ÷ 1/2 = ?",
        botoes: ["3/2 = 1 e 1/2", "3/8", "6/4 = 3/2", "1/2"],
        res: "3/2 = 1 e 1/2",
        erroConceito: ["3/8"],
        passo: "Dividir por 1/2 = multiplicar pelo inverso 2/1. 3/4 × 2/1 = 6/4 = 3/2 = 1 e 1/2.",
        dica: "Divisão de frações: mantenha a primeira, troque ÷ por ×, inverta a segunda."
    },
    {
        id: "B2T3Q10", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Inverso",
        display: "2/5 ÷ 4/5 = ?",
        botoes: ["1/2", "8/25", "2/4", "10/20"],
        res: "1/2",
        erroConceito: ["8/25"],
        passo: "2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20 = 1/2.",
        dica: "Inverta a segunda fração (4/5 → 5/4) e multiplique."
    },
    {
        id: "B2T3Q11", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Contexto Torneira",
        display: "Torneira enche 3/4 do tanque/hora. Aberta por 2/3 de hora. Que fração encheu?",
        botoes: ["1/2", "2/3", "5/7", "1/4"],
        res: "1/2",
        erroConceito: ["2/3"],
        passo: "2/3 de hora × 3/4 do tanque = 2/3 × 3/4 = 6/12 = 1/2. Menos de 3/4 porque abriu por menos de 1 hora.",
        dica: "'2/3 de 3/4' = multiplicação. 2/3 × 3/4 = 1/2."
    },
    {
        id: "B2T3Q12", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Contexto Trabalho",
        display: "Ana trabalhou 3/4 de uma jornada de 8 horas. Quantas horas trabalhou?",
        botoes: ["6 horas", "4 horas", "5 horas", "2 horas"],
        res: "6 horas",
        erroConceito: ["4 horas"],
        passo: "3/4 × 8 = 3/4 × 8/1 = 24/4 = 6 horas.",
        dica: "3/4 de 8 = 3/4 × 8. Multiplique e simplifique."
    },
    {
        id: "B2T3Q13", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Contexto Porções",
        display: "Tenho 3/4 de kg de arroz e quero porções de 1/8 kg. Quantas porções?",
        botoes: ["6 porções", "3 porções", "8 porções", "12 porções"],
        res: "6 porções",
        erroConceito: ["3 porções"],
        passo: "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 porções.",
        dica: "Quantas vezes 1/8 cabe em 3/4? Divida: 3/4 ÷ 1/8 = 3/4 × 8 = 6."
    },
    {
        id: "B2T3Q14", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Investigação",
        display: "Multiplicar uma fração própria por outra fração própria sempre:",
        botoes: ["Diminui o valor", "Aumenta o valor", "Mantém o valor", "Depende dos números"],
        res: "Diminui o valor",
        erroConceito: ["Aumenta o valor"],
        passo: "Fração própria < 1. Multiplicar por algo menor que 1 sempre diminui. Ex: 1/2 × 1/2 = 1/4 < 1/2.",
        dica: "Quando um fator é menor que 1, o produto é menor que o outro fator."
    },

    // ── AULA 8: RACIONAIS E DECIMAIS ────────────────────────────────────

    {
        id: "B2T3Q15", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Fração para Decimal",
        display: "1/4 em decimal é:",
        botoes: ["0,25", "0,14", "0,4", "1,4"],
        res: "0,25",
        erroConceito: ["0,14"],
        passo: "1 ÷ 4 = 0,25. Ou: 1/4 = 25/100 = 0,25.",
        dica: "Divida o numerador pelo denominador: 1 ÷ 4 = 0,25."
    },
    {
        id: "B2T3Q16", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimal para Fração",
        display: "0,35 em fração simplificada é:",
        botoes: ["7/20", "35/10", "7/10", "35/100"],
        res: "7/20",
        erroConceito: ["35/100"],
        passo: "0,35 = 35/100. MDC(35,100)=5. 35÷5=7, 100÷5=20. Fração simplificada: 7/20.",
        dica: "Dois dígitos decimais → denominador 100. Depois simplifique pelo MDC."
    },
    {
        id: "B2T3Q17", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimal para Fração",
        display: "0,125 em fração simplificada é:",
        botoes: ["1/8", "125/100", "1/4", "5/40"],
        res: "1/8",
        erroConceito: ["125/100"],
        passo: "0,125 = 125/1000. MDC(125,1000)=125. 125÷125=1, 1000÷125=8 → 1/8.",
        dica: "Três casas decimais → denominador 1.000. Depois simplifique pelo MDC."
    },
    {
        id: "B2T3Q18", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Comparação Fração e Decimal",
        display: "R$ 4,75 e R$ 4 e 3/4 representam o mesmo valor?",
        botoes: ["Sim, 3/4 = 0,75", "Não, são valores diferentes", "Só se o câmbio for igual", "Depende da loja"],
        res: "Sim, 3/4 = 0,75",
        erroConceito: ["Não, são valores diferentes"],
        passo: "3/4 = 3÷4 = 0,75. Logo R$ 4,75 = R$ 4 + R$ 0,75 = R$ 4 e 3/4. São representações diferentes do mesmo valor.",
        dica: "Converta 3/4 para decimal: 3÷4 = 0,75. Confirma que são iguais."
    },
    {
        id: "B2T3Q19", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Ordenação de Racionais",
        display: "Ordem crescente: 0,5 / 3/7 / 0,4 / 2/5 / 3/8",
        botoes: ["3/8 < 2/5 < 0,4... espera, 0,4=2/5. Logo: 3/8 < 2/5 = 0,4 < 3/7 < 0,5", "0,5 < 3/7 < 0,4 < 2/5 < 3/8", "3/8 < 3/7 < 2/5 < 0,4 < 0,5", "2/5 < 3/8 < 3/7 < 0,4 < 0,5"],
        res: "3/8 < 2/5 = 0,4 < 3/7 < 0,5",
        erroConceito: ["0,5 < 3/7 < 0,4 < 2/5 < 3/8"],
        passo: "Em decimal: 3/8=0,375; 2/5=0,4; 3/7≈0,428; 0,5. Ordem: 0,375 < 0,4 < 0,428 < 0,5.",
        dica: "Converta todas para decimal para comparar: 3/8=0,375, 3/7≈0,428."
    }
];
