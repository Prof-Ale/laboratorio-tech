/**
 * js/data/questions/trilha1.js
 * Versão 6.2 - Foco em Números Inteiros e Reta Numérica
 * Enriquecido com Clínica do Erro v3 e Níveis Adaptativos
 */

export const trilha1 = [
    // === BLOCO 1: RETA NUMÉRICA E SOMA/SUBTRAÇÃO ===
    {
        id: "T1Q01", trilha: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração na Reta",
        display: "-3 + 7 = ?", 
        botoes: ["4", "-4", "10", "-10"], res: "4", 
        erroConceito: ["-4", "-10"],
        passo: "Partindo do -3, andamos 7 casas para a direita, chegando ao 4 positivo.", 
        dica: "Soma de positivo move para a <b>direita</b> na reta.", a: -3, b: 7
    },
    {
        id: "T1Q02", trilha: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração na Reta",
        display: "2 - 6 = ?", 
        botoes: ["-4", "4", "8", "-8"], res: "-4", 
        erroConceito: ["4", "8"],
        passo: "Partindo do 2, andamos 6 casas para a esquerda, passando pelo zero até o -4.", 
        dica: "Subtração move para a <b>esquerda</b> na reta.", a: 2, b: -6
    },
    {
        id: "T1Q03", trilha: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração na Reta",
        display: "-1 - 4 = ?", 
        botoes: ["-5", "5", "3", "-3"], res: "-5", 
        erroConceito: ["3", "-3"],
        passo: "Se já estamos no -1 e subtraímos 4, andamos mais para a esquerda, até o -5.", 
        dica: "Dívida mais dívida, a dívida aumenta!", a: -1, b: -4
    },
    {
        id: "T1Q05", trilha: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração na Reta",
        display: "-5 + 5 = ?", 
        botoes: ["0", "10", "-10", "-5"], res: "0", 
        erroConceito: ["10", "-10"],
        passo: "Partindo do -5, ao somar 5 casas voltamos exatamente para a origem (zero).", 
        dica: "Somar um número ao seu oposto sempre dá zero.", a: -5, b: 5
    },
    {
        id: "T1Q07", trilha: 2, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Distância na Reta",
        display: "Qual é a distância total entre o -3 e o 2 na reta numérica?", 
        botoes: ["5 casas", "1 casa", "6 casas", "Nenhuma"], res: "5 casas", 
        erroConceito: ["1 casa"],
        passo: "Do -3 ao 0 são 3 casas. Do 0 ao 2 são mais 2 casas. Total: 5 casas.", 
        dica: "Distância é o valor absoluto da diferença entre os pontos."
    },

    // === BLOCO 2: COMPARAÇÃO DE INTEIROS ===
    {
        id: "T1Q11", trilha: 1, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Comparação de Inteiros",
        display: "Qual destes números é o MAIOR?", 
        botoes: ["-2", "-5", "-10", "-20"], res: "-2", 
        erroConceito: ["-20"],
        passo: "Nos números negativos, quanto mais próximo de zero (ou mais à direita na reta), MAIOR é o valor.", 
        dica: "Pense em qual dívida é 'maior' para o seu bolso (dever 2 ou dever 20?)"
    },
    {
        id: "T1Q13", trilha: 2, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Comparação de Inteiros",
        display: "A temperatura em A é -4°C e em B é -7°C. Qual cidade está MAIS FRIA?", 
        botoes: ["Cidade B", "Cidade A", "Iguais", "Impossível"], res: "Cidade B", 
        erroConceito: ["Cidade A"],
        passo: "-7 é um valor menor que -4. Em temperaturas, valores menores indicam mais frio.", 
        dica: "Quanto mais longe do zero para o lado negativo, mais gelado!"
    },

    // === BLOCO 3: MÓDULO E VALOR ABSOLUTO ===
    {
        id: "T1Q19", trilha: 1, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Módulo de um Número",
        display: "Qual é o valor de: | -9 | ?", 
        botoes: ["9", "-9", "0", "18"], res: "9", 
        erroConceito: ["-9"],
        passo: "O módulo representa a distância até o zero. Distâncias não podem ser negativas.", 
        dica: "O módulo 'ignora' o sinal do número."
    },
    {
        id: "T1Q21", trilha: 2, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Módulo de um Número",
        display: "Calcule: | -3 | + | 4 | =", 
        botoes: ["7", "1", "-1", "-7"], res: "7", 
        erroConceito: ["1", "-1"],
        passo: "O módulo de -3 é 3. O módulo de 4 é 4. Somando os valores absolutos: 3 + 4 = 7.", 
        dica: "Primeiro 'limpe' os sinais com os módulos, depois faça a conta."
    },

    // === BLOCO 4: OPOSTOS E SIMÉTRICOS ===
    {
        id: "T1Q25", trilha: 1, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Opostos e Simétricos",
        display: "Qual é o número OPOSTO de 14?", 
        botoes: ["-14", "1/14", "0", "14"], res: "-14", 
        erroConceito: ["1/14", "14"],
        passo: "O oposto ou simétrico de um número positivo é o mesmo valor com sinal negativo.", 
        dica: "Mude apenas o sinal."
    },
    {
        id: "T1Q28", trilha: 3, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Opostos e Simétricos",
        display: "Qual é o oposto do oposto de -5?", 
        botoes: ["-5", "5", "0", "10"], res: "-5", 
        erroConceito: ["5"],
        passo: "O oposto de -5 é 5. O oposto de 5 é -5. Duas trocas de sinal voltam ao valor original.", 
        dica: "O oposto do oposto é o próprio número."
    },

    // === NOVAS QUESTÕES: ENRIQUECIMENTO (TRILHA 3 - INVESTIGAÇÃO) ===
    {
        id: "T1Q31", trilha: 3, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Comparação de Módulos",
        display: "Se | x | = 10, quais são os valores possíveis para x?", 
        botoes: ["10 e -10", "Só 10", "Só -10", "Zero"], res: "10 e -10", 
        erroConceito: ["Só 10"],
        passo: "Existem dois números que estão a 10 unidades de distância do zero: um para a direita e um para a esquerda.", 
        dica: "O módulo aceita duas 'origens' para a mesma distância."
    },
    {
        id: "T1Q32", trilha: 3, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Investigação na Reta",
        display: "Saindo do -2, ando 5 casas para a esquerda e depois 3 para a direita. Onde paro?", 
        botoes: ["-4", "-10", "0", "-7"], res: "-4", 
        erroConceito: ["-10", "0"],
        passo: "-2 - 5 = -7. Em seguida, -7 + 3 = -4.", 
        dica: "Faça um movimento de cada vez. Esquerda é negativo, direita é positivo."
    },
    {
        id: "T1Q33", trilha: 3, tipo: "aritmetica", bncc: "EF07MA03", bncc_desc: "Módulo e Comparação",
        display: "Qual afirmação é FALSA?", 
        botoes: ["| -5 | < | -2 |", "| -8 | > 3", "0 > -1", "-10 < -5"], res: "| -5 | < | -2 |", 
        erroConceito: ["-10 < -5"],
        passo: "| -5 | é 5 e | -2 | é 2. Como 5 não é menor que 2, a afirmação é falsa.", 
        dica: "Calcule os módulos antes de comparar os símbolos > ou <."
    }
];
