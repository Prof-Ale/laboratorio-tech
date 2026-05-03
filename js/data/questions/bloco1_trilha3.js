// js/data/questions/bloco1_trilha3.js
// Bloco 1 — A Base Numérica | Trilha 3 Completa
// Aula 6: Critérios de Divisibilidade | Aula 7: Divisores e Números Primos

export const bloco1_trilha3 = [

    // ── AULA 6: DIVISIBILIDADE ───────────────────────────────────────────

    {
        id: "B1T3Q01", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 2",
        display: "Qual destes números NÃO é divisível por 2?",
        botoes: ["77", "342", "990", "128"],
        res: "77",
        erroConceito: ["990"],
        passo: "Para ser divisível por 2, o número deve ser par. 77 é ímpar, logo a divisão não é exata.",
        dica: "Olhe apenas o último algarismo: se for par, é divisível por 2."
    },
    {
        id: "B1T3Q02", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 3",
        display: "O número 471 é divisível por 3?",
        botoes: ["Sim (4+7+1=12)", "Não (termina em 1)", "Sim (termina em 1)", "Não (soma é 12)"],
        res: "Sim (4+7+1=12)",
        erroConceito: ["Não (termina em 1)"],
        passo: "Soma dos algarismos: 4+7+1=12. Como 12 é múltiplo de 3, 471 também é.",
        dica: "Diferente do 2, no critério do 3 você precisa somar TODOS os algarismos."
    },
    {
        id: "B1T3Q03", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 5",
        display: "Quais destes são divisíveis por 5?",
        botoes: ["85 e 120", "73 e 85", "120 e 207", "85 e 207"],
        res: "85 e 120",
        erroConceito: ["120 e 207"],
        passo: "Números divisíveis por 5 devem terminar em 0 ou 5. 85 e 120 seguem a regra.",
        dica: "Ignore o início do número, foque apenas no último dígito: 0 ou 5."
    },
    {
        id: "B1T3Q04", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 10",
        display: "Se um número termina em 0, ele é divisível por quais destes?",
        botoes: ["Por 2, 5 e 10", "Só por 10", "Por 2 e 10", "Por 5 e 10"],
        res: "Por 2, 5 e 10",
        erroConceito: ["Só por 10"],
        passo: "Todo número que termina em 0 é par (div. por 2) e segue a regra do 5 e do 10.",
        dica: "Múltiplos de 10 são sempre múltiplos de 2 e 5 ao mesmo tempo."
    },
    {
        id: "B1T3Q05", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Aplicação",
        display: "Pacotes de 10 pães. Um pedido de 245 pães pode ser atendido exatamente?",
        botoes: ["Não (não termina em 0)", "Sim (termina em 5)", "Sim (2+4+5=11)", "Não (é ímpar)"],
        res: "Não (não termina em 0)",
        erroConceito: ["Sim (245 termina em 5)"],
        passo: "Para pacotes de 10, o número deve ser divisível por 10 (terminar em 0). 245 sobrariam 5 pães.",
        dica: "O critério do 10 é mais rígido que o do 5."
    },
    {
        id: "B1T3Q06", bloco: 1, aula: 6, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Múltiplas Condições",
        display: "Qual número é divisível por 2, 3 e 5 ao mesmo tempo?",
        botoes: ["120", "125", "135", "122"],
        res: "120",
        erroConceito: ["135"],
        passo: "Para 2 e 5, deve terminar em 0. Para o 3, a soma (1+2+0=3) deve ser divisível por 3.",
        dica: "Comece eliminando os que não terminam em 0."
    },
    {
        id: "B1T3Q08", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Teatro",
        display: "342 alunos em fileiras de 3. Todos ocupam fileiras completas?",
        botoes: ["Sim (3+4+2=9)", "Não (342 é par)", "Sim (342 termina em 2)", "Não (não termina em 3)"],
        res: "Sim (3+4+2=9)",
        erroConceito: ["Não (342 não termina em 3)"],
        passo: "Soma 3+4+2=9. 9 é divisível por 3, logo 342 alunos cabem em fileiras de 3 sem sobra.",
        dica: "Ignore o fato de ser par; o que importa para o 3 é a soma dos dígitos."
    },

    // ── AULA 7: DIVISORES E NÚMEROS PRIMOS ──────────────────────────────

    {
        id: "B1T3Q09", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores de um Número",
        display: "Quais são os divisores de 12?",
        botoes: ["{1,2,3,4,6,12}", "{1,2,4,12}", "{2,3,4,6}", "{1,3,4,12}"],
        res: "{1,2,3,4,6,12}",
        erroConceito: ["{2,3,4,6}"],
        passo: "Os divisores são os números que dividem 12 sem sobra: 12/1, 12/2, 12/3, 12/4, 12/6 e 12/12.",
        dica: "Lembre-se: o 1 e o próprio número sempre entram na lista."
    },
    {
        id: "B1T3Q10", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo",
        display: "Qual destes é um número PRIMO?",
        botoes: ["11", "9", "15", "21"],
        res: "11",
        erroConceito: ["9"],
        passo: "O 11 só pode ser dividido por 1 e por ele mesmo. 9, 15 e 21 têm outros divisores.",
        dica: "Número primo é 'teimoso': não aceita ser dividido por ninguém além de 1 e si próprio."
    },
    {
        id: "B1T3Q11", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número 1 — Caso Especial",
        display: "O número 1 é primo, composto ou nenhum dos dois?",
        botoes: ["Nenhum dos dois", "Primo", "Composto", "Depende"],
        res: "Nenhum dos dois",
        erroConceito: ["Primo"],
        passo: "Primos precisam de exatamente 2 divisores. O 1 só tem 1 divisor (ele mesmo).",
        dica: "Para ser primo, precisa de um 'par' de divisores (1 e ele mesmo)."
    },
    {
        id: "B1T3Q12", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — O 2",
        display: "Por que o 2 é o único número primo par?",
        botoes: ["Pares > 2 dividem por 2, logo 3+ divisores", "Porque 2 é pequeno", "Por convenção", "É o único ímpar"],
        res: "Pares > 2 dividem por 2, logo 3+ divisores",
        erroConceito: ["Por convenção"],
        passo: "Qualquer par maior que 2 terá pelo menos 1, 2 e ele mesmo como divisores.",
        dica: "Se é par e maior que 2, o 2 'fura a fila' e vira divisor, tirando o status de primo."
    },
    {
        id: "B1T3Q14", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — Identificação",
        display: "Quantos números primos existem entre 20 e 30?",
        botoes: ["2 (23 e 29)", "3 (23, 27 e 29)", "1 (23)", "4 (21,23,27,29)"],
        res: "2 (23 e 29)",
        erroConceito: ["3 (23, 27 e 29)"],
        passo: "21 (3x7) e 27 (3x9) são compostos. Apenas 23 e 29 são primos nesta faixa.",
        dica: "Cuidado: ser ímpar não garante que o número seja primo!"
    },
    {
        id: "B1T3Q15", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Soma de Primos",
        display: "Qual opção mostra o número 16 como soma de dois números PRIMOS?",
        botoes: ["3 + 13", "4 + 12", "6 + 10", "8 + 8"],
        res: "3 + 13",
        erroConceito: ["8 + 8"],
        passo: "3 e 13 são primos. Nas outras opções, os números são compostos (4, 6, 8, 10, 12).",
        dica: "Verifique se AMBOS os números da soma são primos."
    },

    // ── QUESTÕES ENRIQUECIDAS (TRILHA 3 - INVESTIGAÇÃO) ─────────────────

    {
        id: "B1T3Q16", bloco: 1, aula: 6, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Algarismo Oculto",
        display: "No número 5.4_2, qual algarismo torna o número divisível por 3 e por 2?",
        botoes: ["1", "2", "3", "5"],
        res: "1",
        erroConceito: ["2"],
        passo: "Termina em 2 (div. por 2). Soma 5+4+_+2 = 11+_. Se _=1, soma=12 (div. por 3).",
        dica: "A soma dos algarismos deve resultar em um múltiplo de 3."
    },
    {
        id: "B1T3Q17", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores — Desafio",
        display: "Qual é o menor número natural que possui exatamente 3 divisores?",
        botoes: ["4", "6", "9", "2"],
        res: "4",
        erroConceito: ["2"],
        passo: "Divisores de 4: {1, 2, 4}. Números com 3 divisores são sempre quadrados de primos.",
        dica: "Teste o 4: por quem ele pode ser dividido?"
    },
    {
        id: "B1T3Q18", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Números Compostos",
        display: "O que define um número como COMPOSTO?",
        botoes: ["Ter mais de 2 divisores", "Ser um número par", "Ser divisível por 3", "Terminar em 5"],
        res: "Ter mais de 2 divisores",
        erroConceito: ["Ser um número par"],
        passo: "Diferente dos primos, os compostos podem ser 'desmontados' em outros fatores além de 1 e eles mesmos.",
        dica: "Composto é o oposto de Primo: ele aceita mais divisões."
    },
    {
        id: "B1T3Q19", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério do 5 e 10",
        display: "Todo número divisível por 10 também é divisível por 5?",
        botoes: ["Sim, sempre", "Não, nunca", "Às vezes", "Só se for par"],
        res: "Sim, sempre",
        erroConceito: ["Às vezes"],
        passo: "Se termina em 0 (div. por 10), automaticamente cumpre a regra do 5 (terminar em 0 ou 5).",
        dica: "O 10 é 'filho' do 2 e do 5. Tudo o que o 10 faz, o 5 e o 2 também fazem."
    },
    {
        id: "B1T3Q20", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Primos Gêmeos",
        display: "Primos gêmeos são pares de primos com diferença de 2. Qual destes é um par de gêmeos?",
        botoes: ["17 e 19", "13 e 15", "7 e 9", "19 e 21"],
        res: "17 e 19",
        erroConceito: ["13 e 15"],
        passo: "17 e 19 são primos. Nos outros pares, um dos números é composto (15, 9, 21).",
        dica: "Certifique-se de que AMBOS os números do par são primos."
    }
];
