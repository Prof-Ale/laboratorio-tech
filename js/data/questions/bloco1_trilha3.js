// js/data/questions/bloco1_trilha3.js
// Bloco 1 — A Base Numérica | Trilha 3
// Aula 6: Critérios de Divisibilidade (EF06MA05)
// Aula 7: Divisores e Números Primos (EF06MA05)

export const bloco1_trilha3 = [

    // ── AULA 6: DIVISIBILIDADE ───────────────────────────────────────────

    {
        id: "B1T3Q01", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 2",
        display: "Qual destes números NÃO é divisível por 2?",
        botoes: ["77", "342", "990", "128"],
        res: "77",
        erroConceito: ["990"],
        passo: "Divisível por 2 = último algarismo par (0,2,4,6,8). 77 termina em 7 (ímpar). Não é divisível por 2.",
        dica: "Olhe apenas o último algarismo: se for par, divisível por 2."
    },
    {
        id: "B1T3Q02", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 3",
        display: "O número 471 é divisível por 3?",
        botoes: ["Sim (4+7+1=12)", "Não (termina em 1)", "Sim (termina em 1)", "Não (soma é 12)"],
        res: "Sim (4+7+1=12)",
        erroConceito: ["Não (termina em 1)"],
        passo: "Critério do 3: some os algarismos. 4+7+1=12. Como 12 é múltiplo de 3, o número 471 é divisível por 3.",
        dica: "Para o 3, o último algarismo não basta: some TODOS os algarismos."
    },
    {
        id: "B1T3Q03", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 5",
        display: "Quais destes são divisíveis por 5?",
        botoes: ["85 e 120", "73 e 85", "120 e 207", "85 e 207"],
        res: "85 e 120",
        erroConceito: ["120 e 207"],
        passo: "Divisível por 5 = termina em 0 ou 5. 85 termina em 5 ✓. 120 termina em 0 ✓. 73 termina em 3 ✗. 207 termina em 7 ✗.",
        dica: "Olhe apenas o último algarismo: 0 ou 5 significa divisível por 5."
    },
    {
        id: "B1T3Q04", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 10",
        display: "Se um número termina em 0, ele é divisível por quais dos seguintes?",
        botoes: ["Por 2, 5 e 10", "Só por 10", "Por 2 e 10, mas não por 5", "Por 5 e 10, mas não por 2"],
        res: "Por 2, 5 e 10",
        erroConceito: ["Só por 10"],
        passo: "Terminar em 0 = par (divisível por 2) e termina em 0 (divisível por 5 e por 10). Todo múltiplo de 10 é automaticamente múltiplo de 2 e de 5.",
        dica: "Terminar em 0 satisfaz todos os três critérios ao mesmo tempo."
    },
    {
        id: "B1T3Q05", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Aplicação",
        display: "Um restaurante embala 10 pães de queijo por pacote. Pedido de 245 pães: atendível exatamente?",
        botoes: ["Não (245 não termina em 0)", "Sim (245 termina em 5)", "Sim (2+4+5=11)", "Não (245 é ímpar)"],
        res: "Não (245 não termina em 0)",
        erroConceito: ["Sim (245 termina em 5)"],
        passo: "Divisível por 10 = termina em 0. 245 termina em 5, não em 0. Sobrariam 5 pães. Se fosse 250 (termina em 0), seria exato.",
        dica: "Dividir em grupos de 10 exige divisibilidade por 10, não por 5."
    },
    {
        id: "B1T3Q06", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Múltiplas Condições",
        display: "Qual número de 3 algarismos é divisível por 2, 3 e 5 ao mesmo tempo?",
        botoes: ["120", "125", "135", "122"],
        res: "120",
        erroConceito: ["125"],
        passo: "Divisível por 2 e 5 ao mesmo tempo = termina em 0. Divisível por 3: 1+2+0=3 ✓. Logo 120 satisfaz as três condições.",
        dica: "Divisível por 2 e 5 → termina em 0. Depois verifique o critério do 3."
    },
    {
        id: "B1T3Q07", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Critério do 3",
        display: "O número 8.034 é divisível por 3?",
        botoes: ["Sim (8+0+3+4=15)", "Não (termina em 4)", "Sim (termina em 4)", "Não (8+0+3+4=14)"],
        res: "Sim (8+0+3+4=15)",
        erroConceito: ["Não (termina em 4)"],
        passo: "Soma: 8+0+3+4=15. Como 15÷3=5 (exato), o número é divisível por 3. O critério do 3 vale para números de qualquer tamanho.",
        dica: "O critério da soma funciona para qualquer número natural, independente do tamanho."
    },
    {
        id: "B1T3Q08", bloco: 1, aula: 6, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — 342 alunos",
        display: "Uma turma de 342 alunos vai ao teatro: fileiras de 3 alunos. Todos ocupam fileiras completas?",
        botoes: ["Sim (3+4+2=9)", "Não (342 é par)", "Sim (342 termina em 2)", "Não (342 não termina em 3)"],
        res: "Sim (3+4+2=9)",
        erroConceito: ["Não (342 não termina em 3)"],
        passo: "Critério do 3: 3+4+2=9, que é múltiplo de 3. Logo 342÷3=114 fileiras completas, sem sobrar ninguém.",
        dica: "Para grupos de 3, use o critério da soma dos algarismos, não o do último algarismo."
    },

    // ── AULA 7: DIVISORES E NÚMEROS PRIMOS ──────────────────────────────

    {
        id: "B1T3Q09", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores de um Número",
        display: "Quais são os divisores de 12?",
        botoes: ["{1,2,3,4,6,12}", "{1,2,4,12}", "{2,3,4,6}", "{1,3,4,12}"],
        res: "{1,2,3,4,6,12}",
        erroConceito: ["{2,3,4,6}"],
        passo: "Pares: 1×12, 2×6, 3×4. Divisores: {1, 2, 3, 4, 6, 12}. O 1 e o próprio número são sempre divisores.",
        dica: "Procure por pares de multiplicação: 1×12, 2×6, 3×4... Pare quando o divisor superar a raiz."
    },
    {
        id: "B1T3Q10", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo",
        display: "Qual destes é um número PRIMO?",
        botoes: ["11", "9", "15", "21"],
        res: "11",
        erroConceito: ["9"],
        passo: "11 tem exatamente 2 divisores: 1 e 11. Já 9=3×3, 15=3×5, 21=3×7 — todos compostos.",
        dica: "Primo = exatamente 2 divisores (1 e ele mesmo). Teste dividindo por 2, 3, 5, 7..."
    },
    {
        id: "B1T3Q11", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número 1 — Caso Especial",
        display: "O número 1 é primo, composto ou nenhum dos dois?",
        botoes: ["Nenhum dos dois", "Primo", "Composto", "Depende do contexto"],
        res: "Nenhum dos dois",
        erroConceito: ["Primo"],
        passo: "O 1 tem apenas 1 divisor (ele mesmo). Primo exige exatamente 2 divisores. Composto exige mais de 2. O 1 não se encaixa em nenhuma das duas categorias.",
        dica: "Primo precisa de exatamente 2 divisores. O 1 tem só 1 divisor — si mesmo."
    },
    {
        id: "B1T3Q12", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — O 2",
        display: "Por que o 2 é o único número primo par?",
        botoes: ["Todo par > 2 tem 2 como divisor, logo tem 3+ divisores", "Porque 2 é pequeno", "Porque 2 é par e primo ao mesmo tempo", "Por convenção matemática"],
        res: "Todo par > 2 tem 2 como divisor, logo tem 3+ divisores",
        erroConceito: ["Por convenção matemática"],
        passo: "Todo número par é divisível por 2. Logo tem pelo menos 3 divisores: 1, 2 e ele mesmo. Com 3+ divisores, não pode ser primo.",
        dica: "Um número par maior que 2 sempre tem pelo menos 3 divisores: 1, 2 e ele mesmo."
    },
    {
        id: "B1T3Q13", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores — Aplicação",
        display: "Uma professora tem 24 chocolates para dividir em grupos iguais. De quantas formas diferentes pode fazer isso?",
        botoes: ["8 formas", "4 formas", "6 formas", "12 formas"],
        res: "8 formas",
        erroConceito: ["4 formas"],
        passo: "Divisores de 24: {1,2,3,4,6,8,12,24} = 8 divisores = 8 tamanhos de grupo possíveis.",
        dica: "Cada divisor de 24 representa um tamanho de grupo que não deixa sobrar nada."
    },
    {
        id: "B1T3Q14", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — Identificação",
        display: "Quantos números primos existem entre 20 e 30?",
        botoes: ["2 (23 e 29)", "3 (23, 27 e 29)", "1 (23)", "4 (21,23,27,29)"],
        res: "2 (23 e 29)",
        erroConceito: ["3 (23, 27 e 29)"],
        passo: "21=3×7, 22=2×11, 23 é primo, 24=2³×3, 25=5², 26=2×13, 27=3³, 28=2²×7, 29 é primo, 30=2×3×5. Primos: 23 e 29.",
        dica: "27=3×3×3 (composto!) e 21=3×7 (composto!). Não confunda ímpar com primo."
    },
    {
        id: "B1T3Q15", bloco: 1, aula: 7, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Primos — Conjectura de Goldbach",
        display: "Todo número par maior que 2 pode ser escrito como soma de dois primos. Qual opção confirma isso para 16?",
        botoes: ["3 + 13", "4 + 12", "6 + 10", "8 + 8"],
        res: "3 + 13",
        erroConceito: ["8 + 8"],
        passo: "3 e 13 são primos, e 3+13=16. Já 4, 6, 8, 10, 12 são compostos — não valem.",
        dica: "Verifique se os dois parceiros são primos (têm exatamente 2 divisores cada)."
    }
];
