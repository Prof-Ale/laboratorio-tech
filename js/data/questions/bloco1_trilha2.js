// js/data/questions/bloco1_trilha2.js
// Bloco 1 — A Base Numérica | Trilha 2
// Aula 3: Multiplicação (EF06MA03)
// Aula 4: Divisão (EF06MA03)
// Aula 5: Expressões Numéricas (EF06MA03 / EF06MA12)

export const bloco1_trilha2 = [

    // ── AULA 3: MULTIPLICAÇÃO ────────────────────────────────────────────

    {
        id: "B1T2Q01", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Sentido",
        display: "7 + 7 + 7 + 7 = ? Qual multiplicação representa essa soma?",
        botoes: ["4 × 7", "7 × 7", "4 + 7", "7 ÷ 4"],
        res: "4 × 7",
        erroConceito: ["7 × 7"],
        passo: "O 7 aparece 4 vezes. Logo: 4 × 7 = 28. Multiplicação é uma soma de parcelas iguais.",
        dica: "Conte quantas vezes o número aparece — esse é o multiplicador."
    },
    {
        id: "B1T2Q02", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "24 × 5 = ?",
        botoes: ["120", "100", "124", "29"],
        res: "120",
        erroConceito: ["29"],
        passo: "5 × 4 = 20 (anota 0, carrega 2). 5 × 2 = 10, mais 2 = 12. Resultado: 120.",
        dica: "Multiplique primeiro a unidade, depois a dezena. Não esqueça o reagrupamento."
    },
    {
        id: "B1T2Q03", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Propriedade Comutativa",
        display: "É verdade que 6 × 9 = 9 × 6?",
        botoes: ["Sim, sempre", "Não, a ordem importa", "Só quando os números são iguais", "Depende do número"],
        res: "Sim, sempre",
        erroConceito: ["Não, a ordem importa"],
        passo: "A propriedade comutativa garante que a × b = b × a para qualquer número natural. 6 × 9 = 54 e 9 × 6 = 54.",
        dica: "A ordem dos fatores não altera o produto — trocar a ordem é como girar o retângulo."
    },
    {
        id: "B1T2Q04", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Contexto",
        display: "Uma bandeja tem 6 colunas e 8 linhas de pães. O Sr. Joaquim precisa de 5 bandejas. Quantos pães no total?",
        botoes: ["240", "48", "120", "280"],
        res: "240",
        erroConceito: ["120"],
        passo: "Uma bandeja: 6 × 8 = 48 pães. Cinco bandejas: 48 × 5 = 240 pães.",
        dica: "Calcule uma bandeja primeiro. Depois multiplique pelo número de bandejas."
    },
    {
        id: "B1T2Q05", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "45 × 13 = ?",
        botoes: ["585", "555", "495", "580"],
        res: "585",
        erroConceito: ["495"],
        passo: "45 × 3 = 135. 45 × 10 = 450 (desloca uma posição). 135 + 450 = 585.",
        dica: "Decomponha: 45 × 13 = 45 × 3 + 45 × 10. A segunda linha fica deslocada para a esquerda."
    },
    {
        id: "B1T2Q06", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Elemento Neutro e Zero",
        display: "Quanto é qualquer número multiplicado por zero?",
        botoes: ["Zero", "O próprio número", "Um", "Impossível calcular"],
        res: "Zero",
        erroConceito: ["O próprio número"],
        passo: "Zero grupos de qualquer coisa resultam em nada. Ex: 0 grupos de 50 laranjas = 0 laranjas.",
        dica: "Pense: se eu tenho zero caixas de 20 pães, quantos pães tenho?"
    },
    {
        id: "B1T2Q07", bloco: 1, aula: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Investigação",
        display: "Se 15 × N = 120, qual é o valor de N?",
        botoes: ["8", "6", "9", "105"],
        res: "8",
        erroConceito: ["105"],
        passo: "N = 120 ÷ 15 = 8. Verificação: 15 × 8 = 120. ✓",
        dica: "Use a divisão para 'desfazer' a multiplicação e encontrar o valor desconhecido."
    },

    // ── AULA 4: DIVISÃO ──────────────────────────────────────────────────

    {
        id: "B1T2Q08", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Sentido de Medida",
        display: "Quantas notas de R$10 cabem em R$100?",
        botoes: ["10 notas", "90 notas", "1 nota", "100 notas"],
        res: "10 notas",
        erroConceito: ["1 nota"],
        passo: "100 ÷ 10 = 10. Esse é o sentido de medida da divisão: quantas vezes o 10 'cabe' no 100.",
        dica: "Divisão de medida responde: quantas vezes o divisor cabe no dividendo?"
    },
    {
        id: "B1T2Q09", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Resto",
        display: "130 ÷ 4 = ?",
        botoes: ["32 com resto 2", "32 com resto 0", "33 com resto 2", "30 com resto 10"],
        res: "32 com resto 2",
        erroConceito: ["32 com resto 0"],
        passo: "4 cabe 3 vezes no 13 (3×4=12). Sobra 1. Abaixo o 0: 10÷4=2, resto 2. Quociente: 32, Resto: 2.",
        dica: "Verificação: Dividendo = Divisor × Quociente + Resto. 4×32+2 = 128+2 = 130. ✓"
    },
    {
        id: "B1T2Q10", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Contexto do Resto",
        display: "4 amigos dividiram R$130 igualmente. Quanto cada um recebe e o que sobra?",
        botoes: ["R$32 e sobram R$2", "R$32,50", "R$33 e sobram R$2", "R$30 e sobram R$10"],
        res: "R$32 e sobram R$2",
        erroConceito: ["R$32,50"],
        passo: "130 ÷ 4 = 32 com resto 2. Cada amigo recebe R$32,00. Os R$2,00 restantes não podem ser divididos em partes inteiras iguais.",
        dica: "O resto R$2,00 não é parte decimal: é o valor que realmente sobra sem poder ser distribuído."
    },
    {
        id: "B1T2Q11", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Divisão Exata",
        display: "45 ÷ 5 é uma divisão exata ou inexata?",
        botoes: ["Exata (resto zero)", "Inexata (tem resto)", "Impossível", "Depende"],
        res: "Exata (resto zero)",
        erroConceito: ["Impossível"],
        passo: "45 ÷ 5 = 9 com resto 0. Divisão exata: o divisor cabe perfeitamente no dividendo.",
        dica: "Divisão exata = resto zero = divisibilidade!"
    },
    {
        id: "B1T2Q12", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Raciocínio Inverso",
        display: "Pensei em um número, dividi por 6 e o resultado foi 10 com resto 2. Qual número pensei?",
        botoes: ["62", "60", "68", "17"],
        res: "62",
        erroConceito: ["60"],
        passo: "Dividendo = Divisor × Quociente + Resto = 6 × 10 + 2 = 60 + 2 = 62.",
        dica: "Use a fórmula: número pensado = divisor × quociente + resto."
    },
    {
        id: "B1T2Q13", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão por Zero",
        display: "É possível calcular 10 ÷ 0?",
        botoes: ["Não, é indefinido", "Sim, é 0", "Sim, é 10", "Sim, é infinito"],
        res: "Não, é indefinido",
        erroConceito: ["Sim, é 0"],
        passo: "Dividir por zero significa 'quantas vezes o 0 cabe em 10'. Como 0+0+0... nunca chega a 10, o processo não termina. A divisão por zero é indefinida.",
        dica: "Quanto é zero vezes qualquer número? Zero. Então zero nunca 'cabe' em nada de forma finita."
    },
    {
        id: "B1T2Q14", bloco: 1, aula: 4, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Aplicação",
        display: "144 garrafas precisam ser transportadas em caixas de 12. Quantas caixas são necessárias?",
        botoes: ["12 caixas", "132 caixas", "14 caixas", "10 caixas"],
        res: "12 caixas",
        erroConceito: ["14 caixas"],
        passo: "144 ÷ 12 = 12 caixas. Verificação: 12 × 12 = 144. ✓",
        dica: "Quantas vezes o 12 (tamanho da caixa) cabe em 144 (total de garrafas)?"
    },

    // ── AULA 5: EXPRESSÕES NUMÉRICAS ────────────────────────────────────

    {
        id: "B1T2Q15", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia das Operações",
        display: "10 + 5 × 2 = ?",
        botoes: ["20", "30", "17", "25"],
        res: "20",
        erroConceito: ["30"],
        passo: "Multiplicação tem prioridade: 5 × 2 = 10. Depois: 10 + 10 = 20.",
        dica: "Multiplicação e divisão vêm ANTES de adição e subtração na fila de prioridades."
    },
    {
        id: "B1T2Q16", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia — Parênteses",
        display: "(10 + 5) × 2 = ?",
        botoes: ["30", "20", "17", "25"],
        res: "30",
        erroConceito: ["20"],
        passo: "Parênteses têm prioridade máxima: (10 + 5) = 15. Depois: 15 × 2 = 30.",
        dica: "Os parênteses são um sinal vermelho: ninguém passa antes de resolver o que está dentro."
    },
    {
        id: "B1T2Q17", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Hierarquia — Aplicação",
        display: "Você compra 2 cadernos de R$15 e 3 canetas de R$4, paga com R$50. Qual expressão dá o troco correto?",
        botoes: ["50 - (2×15 + 3×4)", "50 - 2×15 + 3×4", "(50 - 2)×15 + 3×4", "50 - 2 + 15 × 3 + 4"],
        res: "50 - (2×15 + 3×4)",
        erroConceito: ["50 - 2×15 + 3×4"],
        passo: "Gasto total = 2×15 + 3×4 = 30+12 = 42. Troco = 50 - 42 = 8. Os parênteses garantem que o gasto total seja calculado antes da subtração.",
        dica: "Os parênteses aqui agrupam o custo total antes de subtrair do valor pago."
    },
    {
        id: "B1T2Q18", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas",
        display: "100 - (20 × 3) + 15 = ?",
        botoes: ["55", "45", "2.415", "95"],
        res: "55",
        erroConceito: ["2.415"],
        passo: "Parênteses: 20 × 3 = 60. Expressão: 100 - 60 + 15 = 40 + 15 = 55.",
        dica: "Resolva os parênteses, depois da esquerda para a direita."
    },
    {
        id: "B1T2Q19", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas",
        display: "45 ÷ 5 + 3 × 8 = ?",
        botoes: ["33", "96", "48", "27"],
        res: "33",
        erroConceito: ["96"],
        passo: "Multiplicação e divisão primeiro: 45÷5=9 e 3×8=24. Depois: 9 + 24 = 33.",
        dica: "Resolve multiplicação e divisão antes de adição e subtração, da esquerda para a direita."
    },
    {
        id: "B1T2Q20", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas — Investigação",
        display: "Onde colocar parênteses em 5 + 3 × 2 para o resultado ser 16?",
        botoes: ["(5 + 3) × 2 = 16", "5 + (3 × 2) = 16", "Impossível", "5 + 3 × (2) = 16"],
        res: "(5 + 3) × 2 = 16",
        erroConceito: ["5 + (3 × 2) = 16"],
        passo: "(5+3) × 2 = 8 × 2 = 16. Sem os parênteses: 5 + 3×2 = 5+6 = 11 ≠ 16.",
        dica: "Teste: (5+3)×2 = ? Compare com 5+(3×2) = ?"
    },
    {
        id: "B1T2Q21", bloco: 1, aula: 5, tipo: "aritmetica",
        bncc: "EF06MA12", bncc_desc: "Expressões Numéricas — Contexto",
        display: "Um feirante tinha 80 laranjas, vendeu 3 sacos de 10 e ganhou 15. Expressão correta:",
        botoes: ["80 - 3×10 + 15", "(80 - 3)×10 + 15", "80 - 3 + 10×15", "80 × 3 - 10 + 15"],
        res: "80 - 3×10 + 15",
        erroConceito: ["(80 - 3)×10 + 15"],
        passo: "Vendeu 3 sacos de 10: 3×10=30. 80 - 30 + 15 = 65. A expressão correta é 80 - 3×10 + 15 = 65.",
        dica: "3 sacos × 10 laranjas = 30 laranjas vendidas. A multiplicação tem prioridade natural aqui."
    }
];
