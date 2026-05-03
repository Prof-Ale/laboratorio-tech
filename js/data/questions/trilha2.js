/**
 * js/data/questions/trilha2.js
 * Bloco 2: Múltiplos, Divisores, Primos, MMC e MDC
 * Versão 6.2 - Integrado com Clínica do Erro v3
 */

export const trilha2 = [
    // === BLOCO 1: MÚLTIPLOS (TRILHAS 1, 2 E 3) ===
    {
        id: "T2Q01", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Selecione um número que seja MÚLTIPLO de 7:", 
        botoes: ["14", "21", "17", "24"], res: ["14", "21"], 
        erroConceito: ["17", "24"],
        passo: "Múltiplos são resultados da tabuada. 7x2=14 e 7x3=21.", 
        dica: "Pense na tabuada do 7. Existem dois acertos possíveis!"
    },
    {
        id: "T2Q04", trilha: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "O número ZERO é múltiplo de quais números?", 
        botoes: ["De nenhum", "Só do 1", "Só dele mesmo", "De todos"], res: "De todos", 
        erroConceito: ["De nenhum", "Só dele mesmo"],
        passo: "Como qualquer número vezes zero é zero, ele está na tabuada de todos os números.", 
        dica: "0 x 1 = 0, 0 x 2 = 0... O que isso significa?"
    },
    {
        id: "T2Q06", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Critérios de Divisibilidade",
        display: "Se um número termina em ZERO, ele é obrigatoriamente múltiplo de:", 
        botoes: ["3", "10", "4", "7"], res: "10", 
        erroConceito: ["3", "7"],
        passo: "Múltiplos de 10 sempre terminam em zero (10, 20, 30...).", 
        dica: "Pense nas dezenas exatas."
    },

    // === BLOCO 2: DIVISORES ===
    {
        id: "T2Q07", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Selecione um DIVISOR de 20:", 
        botoes: ["4", "5", "3", "6"], res: ["4", "5"], 
        erroConceito: ["3", "6"],
        passo: "Divisores são números que dividem o total sem deixar sobra. 20/4=5 e 20/5=4.", 
        dica: "Quais destes números cabem exatamente dentro do 20?"
    },
    {
        id: "T2Q08", trilha: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Qual é o MAIOR divisor de 36?", 
        botoes: ["12", "18", "36", "72"], res: "36", 
        erroConceito: ["72"],
        passo: "O maior divisor de um número é ele mesmo. O 72 é múltiplo, não divisor.", 
        dica: "Divisor não pode ser maior que o próprio número!"
    },
    {
        id: "T2Q11", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Qual número é divisor de TODOS os números naturais?", 
        botoes: ["0", "1", "2", "10"], res: "1", 
        erroConceito: ["0"],
        passo: "O 1 divide qualquer número. O 0 nunca pode ser divisor (não existe divisão por zero).", 
        dica: "O 1 é o divisor universal."
    },

    // === BLOCO 3: NÚMEROS PRIMOS ===
    {
        id: "T2Q13", trilha: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Números Primos",
        display: "Qual destes é um NÚMERO PRIMO?", 
        botoes: ["15", "17", "21", "19"], res: ["17", "19"], 
        erroConceito: ["15", "21"],
        passo: "17 e 19 só podem ser divididos por 1 e por eles mesmos.", 
        dica: "Procure números que não aparecem em outras tabuadas."
    },
    {
        id: "T2Q14", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Números Primos",
        display: "Qual é o ÚNICO número primo que é PAR?", 
        botoes: ["0", "2", "4", "Não existe"], res: "2", 
        erroConceito: ["0", "4"],
        passo: "O 2 é o primeiro primo. Todos os outros pares dividem por 2, por isso não são primos.", 
        dica: "É o menor número primo."
    },
    {
        id: "T2Q17", trilha: 3, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Números Primos",
        display: "O número 1 é considerado primo?", 
        botoes: ["Sim", "Não", "Só às vezes", "Depende"], res: "Não", 
        erroConceito: ["Sim"],
        passo: "Para ser primo, precisa de EXATAMENTE 2 divisores (1 e ele mesmo). O 1 só tem ele mesmo.", 
        dica: "O 1 é um caso especial na matemática."
    },

    // === BLOCO 4: MMC (ENCONTROS) ===
    {
        id: "T2Q19", trilha: 1, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "MMC",
        display: "Qual é o MMC (Mínimo Múltiplo Comum) entre 2 e 3?", 
        botoes: ["5", "6", "12", "1"], res: "6", 
        erroConceito: ["1", "5"],
        passo: "Múltiplos de 2: 2,4,6... Múltiplos de 3: 3,6... O primeiro encontro é o 6.", 
        dica: "Qual o menor número na tabuada dos dois ao mesmo tempo?"
    },
    {
        id: "T2Q21", trilha: 3, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "MMC — Aplicação",
        display: "Remédio A (4h em 4h) e B (6h em 6h). Tomou ambos agora. Quando tomará juntos de novo?", 
        botoes: ["10h", "12h", "24h", "6h"], res: "12h", 
        erroConceito: ["10h"],
        passo: "Problemas de tempo que se repetem usam MMC. O MMC de 4 e 6 é 12.", 
        dica: "Encontro no futuro = MMC."
    },

    // === BLOCO 5: MDC (REPARTIÇÃO) ===
    {
        id: "T2Q25", trilha: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "MDC",
        display: "Qual é o MDC (Máximo Divisor Comum) entre 10 e 15?", 
        botoes: ["2", "3", "5", "30"], res: "5", 
        erroConceito: ["30"],
        passo: "O maior número que divide 10 e 15 ao mesmo tempo é o 5.", 
        dica: "MDC é o maior divisor comum."
    },
    {
        id: "T2Q27", trilha: 3, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "MDC — Aplicação",
        display: "Fitas de 20m e 30m. Cortar em pedaços iguais e o maior possível. Qual o tamanho?", 
        botoes: ["5m", "10m", "50m", "2m"], res: "10m", 
        erroConceito: ["50m", "5m"],
        passo: "Cortar em partes iguais e máximas é problema de MDC. MDC(20, 30) = 10.", 
        dica: "Dividir ou repartir no maior tamanho = MDC."
    },

    // === NOVAS QUESTÕES: ENRIQUECIMENTO (INVESTIGAÇÃO) ===
    {
        id: "T2Q31", trilha: 3, tipo: "aritmetica", bncc: "EF06MA05", bncc_desc: "Critérios de Divisibilidade",
        display: "Qual destes números é divisível por 3?", 
        botoes: ["124", "251", "333", "401"], res: "333", 
        erroConceito: ["124", "401"],
        passo: "A soma dos algarismos deve ser divisível por 3. 3+3+3=9 (Divisível!).", 
        dica: "Some os algarismos do número!"
    },
    {
        id: "T2Q32", trilha: 3, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Números Primos",
        display: "Qual é o único par de números primos que são consecutivos (seguidos)?", 
        botoes: ["1 e 2", "2 e 3", "3 e 4", "Não existe"], res: "2 e 3", 
        erroConceito: ["1 e 2", "3 e 4"],
        passo: "2 e 3 são os únicos primos vizinhos. Todos os outros pares são separados por números compostos.", 
        dica: "Lembre-se que o 1 não é primo."
    }
];
