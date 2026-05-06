// js/data/questions/bloco2_trilha1.js
// Bloco 2 — Números e Operações | Trilha 1
// Aula 1: Inteiros e Reta Numérica (EF07MA02)
// Aula 2: Adição de Inteiros — Regra dos Sinais (EF07MA02)
// Aula 3: Subtração de Inteiros — O Truque do Oposto (EF07MA02)

export const bloco2_trilha1 = [

    // ── AULA 1: INTEIROS E RETA NUMÉRICA ────────────────────────────────

    {
        id: "B2T1Q01", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Números Inteiros — Reta Numérica",
        display: "Na reta numérica, qual número está mais à esquerda?",
        a: -5,
        botoes: ["-8", "-3", "0", "+2"],
        res: "-8",
        erroConceito: ["0", "+2"],
        passo: "Na reta numérica, quanto mais à esquerda, menor o número. -8 está mais à esquerda que -3, 0 e +2.",
        dica: "Mais à esquerda = menor. Mais à direita = maior."
    },
    {
        id: "B2T1Q02", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Números Inteiros — Reta Numérica",
        display: "Qual número representa 'uma dívida de R$ 50,00'?",
        a: -5,
        botoes: ["-50", "+50", "50", "0"],
        res: "-50",
        erroConceito: ["+50", "50"],
        passo: "Dívida é negativa: -50. Ganho seria +50. O sinal indica a direção na reta numérica.",
        dica: "Dívida, temperatura abaixo de zero, subsolo, recuo = números negativos."
    },
    {
        id: "B2T1Q03", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Valor Absoluto",
        display: "Quanto vale |-7|?",
        botoes: ["-7", "+7", "7", "0"],
        res: "7",
        erroConceito: ["-7"],
        passo: "Valor absoluto é a distância até o zero, sempre positiva. |-7| = 7, assim como |+7| = 7.",
        dica: "O valor absoluto ignora o sinal — mede só a distância até o zero."
    },
    {
        id: "B2T1Q04", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Comparação de Inteiros",
        display: "Qual afirmação é VERDADEIRA?",
        botoes: ["-8 < -3", "-8 > -3", "-3 < -8", "-8 = -3"],
        res: "-8 < -3",
        erroConceito: ["-8 > -3"],
        passo: "-8 está mais à esquerda que -3 na reta numérica. Logo -8 < -3. Entre negativos, o de maior valor absoluto é o menor.",
        dica: "Entre dois negativos, o 'mais negativo' (maior valor absoluto) é sempre o menor."
    },
    {
        id: "B2T1Q05", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Ordenação de Inteiros",
        display: "Qual é a ordem crescente correta?",
        botoes: ["-10 < -5 < -1 < 0 < +3 < +7", "+7 < +3 < 0 < -1 < -5 < -10", "-1 < -5 < -10 < 0 < +3 < +7", "0 < -1 < -5 < -10 < +3 < +7"],
        res: "-10 < -5 < -1 < 0 < +3 < +7",
        erroConceito: ["0 < -1 < -5 < -10 < +3 < +7"],
        passo: "Ordem crescente: da esquerda para a direita na reta numérica. Negativos antes do zero, depois os positivos.",
        dica: "Os negativos também têm ordem: -10 é menor que -5, que é menor que -1."
    },
    {
        id: "B2T1Q06", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Inteiros — Contexto",
        display: "Na tabela de saldos: Carlos (-120), Letícia (+350), Marcos (-45), Fernanda (+10). Quem está em pior situação?",
        botoes: ["Carlos (-120)", "Letícia (+350)", "Marcos (-45)", "Fernanda (+10)"],
        res: "Carlos (-120)",
        erroConceito: ["Letícia (+350)"],
        passo: "-120 é o menor valor (mais à esquerda na reta numérica). Carlos está mais endividado.",
        dica: "Menor número = pior situação financeira. -120 < -45 < +10 < +350."
    },
    {
        id: "B2T1Q07", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Inteiros — Temperatura",
        display: "A temperatura na quarta-feira foi -1°C. Em quais dias fez MAIS frio? Segunda: -3°C, terça: +5°C, quinta: 0°C.",
        a: -1,
        botoes: ["Segunda (-3°C)", "Terça (+5°C)", "Quinta (0°C)", "Nenhum dia"],
        res: "Segunda (-3°C)",
        erroConceito: ["Quinta (0°C)"],
        passo: "-3 < -1: segunda foi mais fria. +5 > -1 (quente) e 0 > -1 (menos frio). Só segunda teve temperatura menor que -1°C.",
        dica: "Temperatura mais baixa = número menor na reta. -3 < -1 < 0 < +5."
    },

    // ── AULA 2: ADIÇÃO DE INTEIROS ───────────────────────────────────────

    {
        id: "B2T1Q08", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Iguais",
        display: "(-6) + (-4) = ?",
        botoes: ["-10", "+10", "-2", "+2"],
        res: "-10",
        erroConceito: ["+10"],
        passo: "Sinais iguais (ambos negativos): some os valores absolutos e mantenha o sinal. 6+4=10, sinal negativo → -10.",
        dica: "Sinais iguais → some os valores e mantenha o sinal comum."
    },
    {
        id: "B2T1Q09", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Diferentes",
        display: "(+10) + (-3) = ?",
        botoes: ["+7", "-7", "+13", "-13"],
        res: "+7",
        erroConceito: ["-7"],
        passo: "Sinais diferentes: subtraia o menor do maior valor absoluto (10-3=7) e use o sinal do maior (+). Resultado: +7.",
        dica: "Sinais diferentes → subtraia e use o sinal do número de maior valor absoluto."
    },
    {
        id: "B2T1Q10", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Elemento Neutro",
        display: "(-12) + (+12) = ?",
        botoes: ["0", "-24", "+24", "-144"],
        res: "0",
        erroConceito: ["-24"],
        passo: "Opostos somados resultam em zero. -12 e +12 têm mesmo valor absoluto e sinais contrários: sua soma é 0.",
        dica: "Dois números opostos sempre somam zero. São simétricos na reta numérica."
    },
    {
        id: "B2T1Q11", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Contexto",
        display: "Temperatura: começou em -4°C, subiu 9°C e caiu 6°C. Temperatura final?",
        botoes: ["-1°C", "+11°C", "-1°C", "+5°C"],
        res: "-1°C",
        erroConceito: ["+11°C"],
        passo: "-4 + 9 = +5. Depois +5 + (-6) = -1°C. Cada passo usa a regra de sinais da adição.",
        dica: "Resolva passo a passo: primeiro -4+9, depois some -6 ao resultado."
    },
    {
        id: "B2T1Q12", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Jogo",
        display: "João: avança 6, recua 9, avança 3, recua 4. Posição final em relação ao início?",
        botoes: ["-4", "+4", "+18", "-18"],
        res: "-4",
        erroConceito: ["+4"],
        passo: "(+6) + (-9) + (+3) + (-4) = 6 - 9 + 3 - 4 = -4. João está 4 casas atrás da posição inicial.",
        dica: "Some tudo de uma vez: positivos 6+3=9, negativos 9+4=13. Resultado: 9-13=-4."
    },
    {
        id: "B2T1Q13", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Submarino",
        display: "Submarino a -120 m. Sobe 45 m, depois desce 30 m. Profundidade final?",
        botoes: ["-105 m", "+105 m", "-75 m", "-195 m"],
        res: "-105 m",
        erroConceito: ["-75 m"],
        passo: "-120 + 45 = -75. Depois -75 + (-30) = -105 m. Subir é positivo, descer é negativo.",
        dica: "Subir = positivo (reduz profundidade). Descer = negativo (aumenta profundidade)."
    },

    // ── AULA 3: SUBTRAÇÃO DE INTEIROS ───────────────────────────────────

    {
        id: "B2T1Q14", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "(+6) - (-2) = ?",
        botoes: ["+8", "+4", "-8", "-4"],
        res: "+8",
        erroConceito: ["+4"],
        passo: "Subtração → adição do oposto: (+6) - (-2) = (+6) + (+2) = +8. Subtrair negativo é somar positivo.",
        dica: "Troque o sinal de subtração por adição e inverta o sinal do segundo número."
    },
    {
        id: "B2T1Q15", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "(-5) - (+4) = ?",
        botoes: ["-9", "+9", "-1", "+1"],
        res: "-9",
        erroConceito: ["-1"],
        passo: "(-5) - (+4) = (-5) + (-4) = -9. Subtrair positivo é somar negativo — você vai ainda mais para a esquerda.",
        dica: "(-5) - (+4): inverta o sinal do +4 para -4 e some. -5 + (-4) = -9."
    },
    {
        id: "B2T1Q16", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "(-5) - (-4) = ?",
        botoes: ["-1", "+1", "-9", "+9"],
        res: "-1",
        erroConceito: ["-9"],
        passo: "(-5) - (-4) = (-5) + (+4) = -1. Subtrair um negativo é somar o positivo correspondente.",
        dica: "Dois sinais negativos seguidos: - e - viram +. Então (-5) - (-4) = (-5) + (+4)."
    },
    {
        id: "B2T1Q17", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Contexto",
        display: "Saldo bancário: R$ 200,00. Débito de R$ 350,00. Saldo final?",
        botoes: ["-R$ 150,00", "+R$ 150,00", "+R$ 550,00", "-R$ 550,00"],
        res: "-R$ 150,00",
        erroConceito: ["+R$ 150,00"],
        passo: "200 - 350 = -150. Saldo negativo significa dívida: a conta ficou no vermelho em R$ 150,00.",
        dica: "Gastar mais do que se tem gera saldo negativo — isso é o que representa o número negativo aqui."
    },
    {
        id: "B2T1Q18", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Temperatura",
        display: "Moscou: -12°C. São Paulo: +28°C. Qual a diferença de temperatura?",
        botoes: ["40°C", "16°C", "-40°C", "-16°C"],
        res: "40°C",
        erroConceito: ["16°C"],
        passo: "Diferença = São Paulo - Moscou = 28 - (-12) = 28 + 12 = 40°C. Subtrair negativo soma!",
        dica: "Diferença entre temperaturas: subtraia uma da outra. Lembre: a - (-b) = a + b."
    },
    {
        id: "B2T1Q19", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Pontuação",
        display: "Marina tem 45 pontos, Beto tem -12 pontos. Por quantos pontos Marina está à frente?",
        botoes: ["57 pontos", "33 pontos", "-57 pontos", "-33 pontos"],
        res: "57 pontos",
        erroConceito: ["33 pontos"],
        passo: "45 - (-12) = 45 + 12 = 57 pontos. A subtração de inteiro negativo aumenta a diferença.",
        dica: "Diferença = Marina - Beto = 45 - (-12). Lembre: subtrair negativo é somar."
    },
    {
        id: "B2T1Q20", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Investigação",
        display: "É possível que a subtração de dois inteiros negativos resulte em número positivo?",
        botoes: ["Sim. Ex: (-3) - (-8) = +5", "Não, sempre resulta negativo", "Sim, mas só quando são iguais", "Não, é sempre zero"],
        res: "Sim. Ex: (-3) - (-8) = +5",
        erroConceito: ["Não, sempre resulta negativo"],
        passo: "(-3) - (-8) = (-3) + (+8) = +5. Sim, é positivo quando subtraímos um número 'mais negativo'.",
        dica: "Pense: (-3) - (-8) = (-3) + 8 = +5. Subtrair o negativo maior inverte o resultado."
    }
];
