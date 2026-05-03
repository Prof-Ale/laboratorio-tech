/**
 * js/data/questions/trilha4.js
 * Bloco 4: Álgebra e Equações do 1º Grau
 * Versão 7.0 - Clínica do Erro v3 e Diagnóstico Adaptativo
 */

export const trilha4 = [
    // === BLOCO 1: EQUAÇÕES SIMPLES (x + a = b) ===
    {
        id: "T4Q01", trilha: 1, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações Simples",
        display: "Qual o valor de $x$ na equação: $x + 5 = 12$ ?", 
        botoes: ["7", "17", "-7", "6"], res: "7", 
        erroConceito: { "17": "soma_ao_inves_de_subtrair", "-7": "sinal_invertido" },
        passo: "Para isolar o $x$, subtraímos 5 de ambos os lados: $12 - 5 = 7$.", 
        dica: "A operação inversa da soma (+) é a subtração (-)."
    },
    {
        id: "T4Q03", trilha: 1, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações Simples",
        display: "Qual o valor de $m$ em: $4m = 20$ ?", 
        botoes: ["24", "16", "5", "-5"], res: "5", 
        erroConceito: { "24": "soma_ao_inves_de_dividir", "16": "subtracao_ao_inves_de_dividir" },
        passo: "O 4 está multiplicando. O inverso é a divisão: $20 \\div 4 = 5$.", 
        dica: "Número colado na letra está multiplicando!"
    },
    {
        id: "T4Q07", trilha: 1, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações com Negativos",
        display: "Qual o valor de $x$ em: $-2x = 8$ ?", 
        botoes: ["-4", "4", "10", "-10"], res: "-4", 
        erroConceito: { "4": "esquecimento_sinal", "10": "operacao_inversa_errada" },
        passo: "O $-2$ passa dividindo com sinal e tudo: $8 \\div (-2) = -4$.", 
        dica: "Quem passa dividindo leva o sinal junto!"
    },

    // === BLOCO 2: EQUAÇÕES COMPOSTAS (ax + b = c) ===
    {
        id: "T4Q11", trilha: 2, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações Compostas",
        display: "Resolva a equação: $2x + 1 = 9$", 
        botoes: ["4", "5", "8", "10"], res: "4", 
        erroConceito: { "5": "soma_ao_inves_de_subtrair", "10": "hierarquia_inversa" },
        passo: "1º subtraímos: $2x = 8$. 2º dividimos: $x = 8 \\div 2 = 4$.", 
        dica: "Primeiro 'limpe' o que está somando ou subtraindo."
    },
    {
        id: "T4Q16", trilha: 3, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações (x dos dois lados)",
        display: "Resolva: $3x - 1 = x + 5$", 
        botoes: ["2", "3", "4", "6"], res: "3", 
        erroConceito: { "2": "erro_organizacao", "4": "erro_sinal_na_troca" },
        passo: "Agrupamos: $3x - x = 5 + 1 \\rightarrow 2x = 6 \\rightarrow x = 3$.", 
        dica: "Letras de um lado, números do outro. Saltou o igual? Troca o sinal!"
    },
    {
        id: "T4Q20", trilha: 2, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações com Parênteses",
        display: "Resolva: $3(x + 1) = 15$", 
        botoes: ["4", "5", "6", "14"], res: "4", 
        erroConceito: { "5": "esqueceu_parenteses", "14": "erro_distributiva" },
        passo: "Divida por 3: $x + 1 = 5$. Subtraia 1: $x = 4$.", 
        dica: "Você pode distribuir o 3 ou passá-lo dividindo logo de cara."
    },

    // === BLOCO 3: MODELAGEM (PROBLEMAS) ===
    {
        id: "T4Q21", trilha: 2, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Modelagem Algébrica",
        display: "O dobro de um número é igual a 18. Qual é esse número?", 
        botoes: ["8", "9", "36", "16"], res: "9", 
        erroConceito: { "36": "multiplicou_ao_inves_de_dividir", "16": "calculo" },
        passo: "Dobro é $2x$. Então $2x = 18 \\rightarrow x = 9$.", 
        dica: "Transforme as palavras 'dobro' em $\\times 2$ e 'é igual' em $=$."
    },
    {
        id: "T4Q25", trilha: 3, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Sistemas Simples",
        display: "Ana tem o dobro da idade de Bruno. A soma é 30. Idade de Bruno?", 
        botoes: ["10", "15", "20", "5"], res: "10", 
        erroConceito: { "15": "divisao_por_dois", "20": "idade_de_ana" },
        passo: "Bruno ($x$) + Ana ($2x$) = 30. $3x = 30 \\rightarrow x = 10$.", 
        dica: "Se Ana é o dobro, temos 3 partes no total (1 do Bruno + 2 da Ana)."
    },

    // === ENRIQUECIMENTO: TRILHA 3 (INVESTIGAÇÃO) ===
    {
        id: "T4Q31", trilha: 3, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Equações com Fração",
        display: "Resolva: $\\frac{x}{3} + 4 = 10$", 
        botoes: ["18", "2", "42", "6"], res: "18", 
        erroConceito: { "2": "prioridade_errada", "42": "soma_ao_inves_de_subtrair" },
        passo: "$\\frac{x}{3} = 10 - 4 \\rightarrow \\frac{x}{3} = 6 \\rightarrow x = 18$.", 
        dica: "Resolva a soma primeiro, depois a divisão."
    },
    {
        id: "T4Q32", trilha: 3, tipo: "algebra", bncc: "EF07MA18", bncc_desc: "Desafio Distributivo",
        display: "Resolva: $2(x - 3) = x + 4$", 
        botoes: ["10", "7", "2", "-2"], res: "10", 
        erroConceito: { "7": "erro_distributiva", "2": "erro_sinal" },
        passo: "$2x - 6 = x + 4 \\rightarrow 2x - x = 4 + 6 \\rightarrow x = 10$.", 
        dica: "Não esqueça de multiplicar o 2 pelo $-3$ também!"
    }
];
