// js/data/questions/bloco1_trilha2.js
// Bloco 1 — A Base Numérica | Trilha 2 Completa
// Aula 3: Multiplicação | Aula 4: Divisão | Aula 5: Expressões Numéricas

export const bloco1_trilha2 = [

    // ── AULA 3: MULTIPLICAÇÃO ────────────────────────────────────────────

    {
        id: "B1T2Q01", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Sentido",
        display: "7 + 7 + 7 + 7 = ? Qual multiplicação representa essa soma?",
        botoes: ["4 × 7", "7 × 7", "4 + 7", "7 ÷ 4"],
        res: "4 × 7",
        erroConceito: ["7 × 7"],
        passo: "O 7 aparece 4 vezes. Logo: 4 × 7 = 28. Multiplicação é uma soma de parcelas iguais.",
        dica: "Conte quantas vezes o número aparece — esse é o multiplicador."
    },
    {
        id: "B1T2Q02", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "24 × 5 = ?",
        botoes: ["120", "100", "124", "29"],
        res: "120",
        erroConceito: ["29"],
        passo: "5 × 4 = 20 (sobe 2). 5 × 2 = 10, mais 2 = 12. Resultado: 120.",
        dica: "Multiplique a unidade, depois a dezena. Não esqueça o reagrupamento."
    },
    {
        id: "B1T2Q03", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Propriedade Comutativa",
        display: "É verdade que 6 × 9 = 9 × 6?",
        botoes: ["Sim, sempre", "Não, a ordem importa", "Só quando iguais", "Depende do número"],
        res: "Sim, sempre",
        erroConceito: ["Não, a ordem importa"],
        passo: "A ordem dos fatores não altera o produto. 6 × 9 e 9 × 6 resultam em 54.",
        dica: "Trocar a ordem na multiplicação não muda o resultado final."
    },
    {
        id: "B1T2Q04", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Contexto",
        display: "Uma bandeja tem 6 colunas e 8 linhas. Joaquim precisa de 5 bandejas. Total de pães?",
        botoes: ["240", "48", "120", "280"],
        res: "240",
        erroConceito: ["120"],
        passo: "Uma bandeja: 6 × 8 = 48. Cinco bandejas: 48 × 5 = 240 pães.",
        dica: "Multiplique as dimensões da bandeja e depois pelo número de bandejas."
    },
    {
        id: "B1T2Q05", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "45 × 13 = ?",
        botoes: ["585", "555", "495", "580"],
        res: "585",
        erroConceito: ["495"],
        passo: "45 × 3 = 135. 45 × 10 = 450. 135 + 450 = 585.",
        dica: "Lembre-se de pular uma casa (unidade) ao multiplicar pela dezena."
    },
    {
        id: "B1T2Q06", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Zero",
        display: "Quanto é qualquer número multiplicado por zero?",
        botoes: ["Zero", "O próprio número", "Um", "Indefinido"],
        res: "Zero",
        erroConceito: ["O próprio número"],
        passo: "Ter zero grupos de qualquer valor resulta em zero. 0 × 50 = 0.",
        dica: "Pense em caixas vazias: 10 caixas com zero pães = zero pães."
    },
    {
        id: "B1T2Q07", bloco: 1, aula: 3, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Investigação",
        display: "Se 15 × N = 120, qual é o valor de N?",
        botoes: ["8", "6", "9", "105"],
        res: "8",
        erroConceito: ["105"],
        passo: "Para achar o valor desconhecido, usamos a operação inversa: 120 ÷ 15 = 8.",
        dica: "Qual número vezes 15 chega em 120?"
    },

    // ── AULA 4: DIVISÃO ──────────────────────────────────────────────────

    {
        id: "B1T2Q08", bloco: 1, aula: 4, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Sentido",
        display: "Quantas notas de R$10 cabem em R$100?",
        botoes: ["10 notas", "90 notas", "1 nota", "100 notas"],
        res: "10 notas",
        erroConceito: ["1 nota"],
        passo: "100 ÷ 10 = 10. A divisão mostra quantas vezes o 10 'cabe' no 100.",
        dica: "Conte de 10 em 10 até chegar a 100."
    },
    {
        id: "B1T2Q09", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Resto",
        display: "130 ÷ 4 = ?",
        botoes: ["32 com resto 2", "32 com resto 0", "33 com resto 2", "30 com resto 10"],
        res: "32 com resto 2",
        erroConceito: ["32 com resto 0"],
        passo: "13 ÷ 4 = 3 (resto 1). 10 ÷ 4 = 2 (resto 2). Quociente 32, Resto 2.",
        dica: "Nem toda divisão é exata. O que sobra e é menor que o divisor é o resto."
    },
    {
        id: "B1T2Q10", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Contexto",
        display: "4 amigos dividiram R$130 igualmente. Quanto cada um recebe e o que sobra?",
        botoes: ["R$32 e sobram R$2", "R$32,50", "R$33 e sobram R$2", "R$30 e sobram R$10"],
        res: "R$32 e sobram R$2",
        erroConceito: ["R$32,50"],
        passo: "Cada um recebe R$32 inteiros. Sobram R$2 que não permitem nova divisão inteira.",
        dica: "Foque na divisão inteira para identificar o resto físico."
    },
    {
        id: "B1T2Q11", bloco: 1, aula: 4, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Exata",
        display: "45 ÷ 5 é uma divisão exata ou inexata?",
        botoes: ["Exata (resto zero)", "Inexata (tem resto)", "Impossível", "Depende"],
        res: "Exata (resto zero)",
        erroConceito: ["Inexata (tem resto)"],
        passo: "45 ÷ 5 = 9. Como o resto é zero, a divisão é chamada de exata.",
        dica: "Divisões sem sobra são sempre exatas."
    },
    {
        id: "B1T2Q12", bloco: 1, aula: 4, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Raciocínio Inverso",
        display: "Pensei num número, dividi por 6 e deu 10 com resto 2. Qual o número?",
        botoes: ["62", "60", "68", "17"],
        res: "62",
        erroConceito: ["60"],
        passo: "Dividendo = (Divisor × Quociente) + Resto. (6 × 10) + 2 = 62.",
        dica: "A multiplicação desfaz a divisão, depois adicione o que sobrou."
    },
    {
        id: "B1T2Q13", bloco: 1, aula: 4, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão por Zero",
        display: "É possível calcular 10 ÷ 0?",
        botoes: ["Não, é indefinido", "Sim, é 0", "Sim, é 10", "Sim, é infinito"],
        res: "Não, é indefinido",
        erroConceito: ["Sim, é 0"],
        passo: "Não existe número que vezes zero resulte em 10. Por isso, a divisão por zero não é definida.",
        dica: "Tente inverter: algum número multiplicado por 0 pode dar 10?"
    },
    {
        id: "B1T2Q14", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Aplicação",
        display: "144 garrafas em caixas de 12. Quantas caixas?",
        botoes: ["12 caixas", "132 caixas", "14 caixas", "10 caixas"],
        res: "12 caixas",
        erroConceito: ["132 caixas"],
        passo: "144 ÷ 12 = 12. São necessárias 12 caixas completas.",
        dica: "Quantas vezes o 12 cabe dentro do 144?"
    },

    // ── AULA 5: EXPRESSÕES NUMÉRICAS ────────────────────────────────────

    {
        id: "B1T2Q15", bloco: 1, aula: 5, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia",
        display: "10 + 5 × 2 = ?",
        botoes: ["20", "30", "17", "25"],
        res: "20",
        erroConceito: ["30"],
        passo: "Regra: Multiplicação primeiro! 5 × 2 = 10. Depois 10 + 10 = 20.",
        dica: "Multiplicação e divisão são 'mais fortes' que adição e subtração."
    },
    {
        id: "B1T2Q16", bloco: 1, aula: 5, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia — Parênteses",
        display: "(10 + 5) × 2 = ?",
        botoes: ["30", "20", "17", "25"],
        res: "30",
        erroConceito: ["20"],
        passo: "Os parênteses mandam resolver primeiro: 10 + 5 = 15. Depois 15 × 2 = 30.",
        dica: "O que está entre parênteses fura a fila das prioridades."
    },
    {
        id: "B1T2Q17", bloco: 1, aula: 5, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia — Contexto",
        display: "Compra 2 cadernos de R$15 e 3 canetas de R$4. Paga com R$50. Expressão do troco:",
        botoes: ["50 - (2×15 + 3×4)", "50 - 2×15 + 3×4", "(50 - 2)×15 + 3×4", "50 - 2 + 15 × 3 + 4"],
        res: "50 - (2×15 + 3×4)",
        erroConceito: ["50 - 2×15 + 3×4"],
        passo: "O total gasto (2×15 + 3×4) deve ser somado primeiro entre parênteses e depois subtraído do 50.",
        dica: "Agrupe o que você gastou antes de tirar do seu dinheiro."
    },
    {
        id: "B1T2Q18", bloco: 1, aula: 5, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas",
        display: "100 - (20 × 3) + 15 = ?",
        botoes: ["55", "45", "2.415", "95"],
        res: "55",
        erroConceito: ["2.415"],
        passo: "Parênteses: 60. 100 - 60 = 40. 40 + 15 = 55.",
        dica: "Resolva de dentro para fora, depois da esquerda para a direita."
    },
    {
        id: "B1T2Q19", bloco: 1, aula: 5, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas",
        display: "45 ÷ 5 + 3 × 8 = ?",
        botoes: ["33", "96", "48", "27"],
        res: "33",
        erroConceito: ["96"],
        passo: "Faça as 'fortes' primeiro: 45÷5=9 e 3×8=24. Depois 9 + 24 = 33.",
        dica: "Divisão e multiplicação empatam em força, resolva ambas antes de somar."
    },
    {
        id: "B1T2Q20", bloco: 1, aula: 5, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões — Investigação",
        display: "Onde colocar parênteses em 5 + 3 × 2 para dar 16?",
        botoes: ["(5 + 3) × 2 = 16", "5 + (3 × 2) = 16", "Impossível", "5 + 3 × (2) = 16"],
        res: "(5 + 3) × 2 = 16",
        erroConceito: ["5 + (3 × 2) = 16"],
        passo: "(5+3)=8. 8×2=16. Sem parênteses daria 11.",
        dica: "O parênteses muda a ordem natural e prioriza a soma."
    },
    {
        id: "B1T2Q21", bloco: 1, aula: 5, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões — Contexto",
        display: "Tinha 80 laranjas, vendeu 3 sacos de 10 e ganhou 15. Expressão:",
        botoes: ["80 - 3×10 + 15", "(80 - 3)×10 + 15", "80 - 3 + 10×15", "80 × 3 - 10 + 15"],
        res: "80 - 3×10 + 15",
        erroConceito: ["(80 - 3)×10 + 15"],
        passo: "Venda (3 sacos de 10) é subtração. Ganhar (15) é adição. 80 - 30 + 15 = 65.",
        dica: "Multiplique a quantidade de sacos pelo conteúdo antes de tirar do total."
    }
];
