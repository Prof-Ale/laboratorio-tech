// js/data/questions/bloco2_trilha4.js
// Bloco 2 — Números e Operações | Trilha 4
// Aula 9: Operações com Decimais e Racionais (EF07MA04)
// Aula 10: Proporcionalidade — Razão e Proporção (EF07MA04)

export const bloco2_trilha4 = [

    // ── AULA 9: OPERAÇÕES COM DECIMAIS ──────────────────────────────────

    {
        id: "B2T4Q01", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Decimais",
        display: "3,7 + 2,45 = ?",
        botoes: ["6,15", "6,05", "5,75", "6,1"],
        res: "6,15",
        erroConceito: ["5,75"],
        passo: "Alinhe as vírgulas: 3,70 + 2,45 = 6,15. Complete com zero quando necessário.",
        dica: "Escreva 3,7 como 3,70 para alinhar as casas decimais antes de somar."
    },
    {
        id: "B2T4Q02", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Decimais",
        display: "10,2 - 6,75 = ?",
        botoes: ["3,45", "3,55", "4,45", "3,25"],
        res: "3,45",
        erroConceito: ["3,55"],
        passo: "10,20 - 6,75 = 3,45. Alinhe as vírgulas e complete com zeros: 10,20 - 6,75.",
        dica: "Complete 10,2 com zero: 10,20. Depois subtraia alinhando as vírgulas."
    },
    {
        id: "B2T4Q03", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Decimais",
        display: "1,5 × 2,4 = ?",
        botoes: ["3,6", "36", "0,36", "3,06"],
        res: "3,6",
        erroConceito: ["36"],
        passo: "15 × 24 = 360. 1,5 tem 1 casa decimal e 2,4 tem 1 casa → 2 casas no total. 360 → 3,60.",
        dica: "Opere como inteiros (15×24=360) e coloque as casas decimais (1+1=2) no resultado."
    },
    {
        id: "B2T4Q04", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Decimais",
        display: "8,4 ÷ 0,7 = ?",
        botoes: ["12", "1,2", "0,12", "120"],
        res: "12",
        erroConceito: ["1,2"],
        passo: "Multiplique ambos por 10: 84 ÷ 7 = 12. Eliminar o decimal do divisor simplifica o cálculo.",
        dica: "Elimine o decimal do divisor multiplicando ambos por 10: 8,4 ÷ 0,7 = 84 ÷ 7 = 12."
    },
    {
        id: "B2T4Q05", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Operações com Decimais — Contexto Compras",
        display: "Compras: R$ 12,50 + R$ 8,75 + R$ 6,30. Sobra de R$ 30,00?",
        botoes: ["Sim, sobram R$ 2,45", "Não, faltam R$ 2,45", "Sim, sobram R$ 3,45", "Não, faltam R$ 0,45"],
        res: "Sim, sobram R$ 2,45",
        erroConceito: ["Não, faltam R$ 2,45"],
        passo: "12,50 + 8,75 + 6,30 = 27,55. Troco: 30,00 - 27,55 = R$ 2,45.",
        dica: "Some os três valores com vírgulas alinhadas. Depois subtraia de 30,00."
    },
    {
        id: "B2T4Q06", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Decimais — Combustível",
        display: "Carro percorre 12,5 km/litro. Quantos km com 8,4 litros?",
        botoes: ["105 km", "10,5 km", "1.050 km", "20,9 km"],
        res: "105 km",
        erroConceito: ["1.050 km"],
        passo: "12,5 × 8,4 = ? 125 × 84 = 10.500. Duas casas decimais → 105,00 = 105 km.",
        dica: "125 × 84 = 10.500. Com 2 casas decimais (1+1): 105,00 km."
    },
    {
        id: "B2T4Q07", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Decimais — Fita",
        display: "Fita de 15 metros cortada em pedaços de 0,75 m. Quantos pedaços?",
        botoes: ["20 pedaços", "2 pedaços", "200 pedaços", "11,25 pedaços"],
        res: "20 pedaços",
        erroConceito: ["2 pedaços"],
        passo: "15 ÷ 0,75 = 1500 ÷ 75 = 20 pedaços. Multiplique ambos por 100 para eliminar o decimal.",
        dica: "Elimine os decimais: 15,00 ÷ 0,75 = 1500 ÷ 75 = 20."
    },
    {
        id: "B2T4Q08", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimais — Investigação",
        display: "Qual é maior: 0,1 × 0,1 ou 0,1 + 0,1?",
        botoes: ["0,1 + 0,1 (= 0,2 > 0,01)", "0,1 × 0,1 (= 0,01 > 0,2)", "São iguais", "Depende do contexto"],
        res: "0,1 + 0,1 (= 0,2 > 0,01)",
        erroConceito: ["0,1 × 0,1 (= 0,01 > 0,2)"],
        passo: "0,1 + 0,1 = 0,2. 0,1 × 0,1 = 0,01. A soma é muito maior que o produto quando os fatores são decimais pequenos.",
        dica: "Para números entre 0 e 1, multiplicar DIMINUI o valor. Somar AUMENTA."
    },
    {
        id: "B2T4Q09", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Posição da Vírgula",
        display: "3,6 × 4 = 144. Onde fica a vírgula no resultado?",
        botoes: ["14,4", "1,44", "144,0", "1.440"],
        res: "14,4",
        erroConceito: ["144,0"],
        passo: "3,6 tem 1 casa decimal, 4 tem 0. Total: 1 casa decimal. 144 → 14,4.",
        dica: "Some as casas decimais dos fatores: 1 + 0 = 1 casa. Coloque a vírgula da direita para a esquerda."
    },

    // ── AULA 10: PROPORCIONALIDADE ───────────────────────────────────────

    {
        id: "B2T4Q10", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Razão",
        display: "Um carro percorre 120 km em 3 horas. Qual é a razão km/hora?",
        botoes: ["40 km/h", "360 km/h", "123 km/h", "3 km/h"],
        res: "40 km/h",
        erroConceito: ["360 km/h"],
        passo: "Razão = 120 ÷ 3 = 40 km/h. Razão é a comparação entre dois valores por divisão.",
        dica: "Razão km/hora: divida a distância pelo tempo."
    },
    {
        id: "B2T4Q11", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporção — Produto Cruzado",
        display: "2/3 e 8/12 formam uma proporção?",
        botoes: ["Sim (2×12 = 3×8 = 24)", "Não (2×12 ≠ 3×8)", "Sim, mas só por coincidência", "Não há como saber"],
        res: "Sim (2×12 = 3×8 = 24)",
        erroConceito: ["Não (2×12 ≠ 3×8)"],
        passo: "Produto cruzado: 2×12=24 e 3×8=24. Produtos iguais → são proporcionais. 8/12 = 2/3 ✓.",
        dica: "Se a × d = b × c, então a/b = c/d formam uma proporção."
    },
    {
        id: "B2T4Q12", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Regra de Três Simples Direta",
        display: "Receita para 6 pessoas usa 3 ovos. Quantos ovos para 10 pessoas?",
        botoes: ["5 ovos", "4 ovos", "6 ovos", "30 ovos"],
        res: "5 ovos",
        erroConceito: ["30 ovos"],
        passo: "Proporcionalidade direta: 3/6 = x/10. x = 3×10÷6 = 30÷6 = 5 ovos.",
        dica: "Monte a proporção: pessoas e ovos crescem juntos (direta). 6→3, 10→?"
    },
    {
        id: "B2T4Q13", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Regra de Três Simples Direta — Velocidade",
        display: "Carro: 240 km em 3 horas. Quanto tempo para 400 km na mesma velocidade?",
        botoes: ["5 horas", "4 horas", "6 horas", "160 horas"],
        res: "5 horas",
        erroConceito: ["160 horas"],
        passo: "Velocidade = 240÷3 = 80 km/h. Tempo = 400÷80 = 5 horas. Ou proporção: 240/3 = 400/x → x=5.",
        dica: "Distância e tempo são diretamente proporcionais (velocidade constante)."
    },
    {
        id: "B2T4Q14", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade Inversa",
        display: "4 torneiras enchem um tanque em 6 horas. Quantas horas com 8 torneiras?",
        botoes: ["3 horas", "12 horas", "48 horas", "2 horas"],
        res: "3 horas",
        erroConceito: ["12 horas"],
        passo: "Inversamente proporcional: mais torneiras → menos tempo. 4×6 = 8×x → x = 24÷8 = 3 horas.",
        dica: "Inversamente proporcional: quando uma dobra, a outra cai pela metade. 4 torneiras→6h, 8 torneiras→3h."
    },
    {
        id: "B2T4Q15", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporção — Valor Desconhecido",
        display: "3/4 = x/12. Qual é o valor de x?",
        botoes: ["9", "16", "4", "36"],
        res: "9",
        erroConceito: ["16"],
        passo: "Produto cruzado: 3×12 = 4×x → 36 = 4x → x = 9.",
        dica: "Use o produto cruzado: 3 × 12 = 4 × x. Resolva para x."
    },
    {
        id: "B2T4Q16", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade — Escala de Mapa",
        display: "No mapa: 1 cm = 50 km. Duas cidades distam 3,5 cm no mapa. Distância real?",
        botoes: ["175 km", "53,5 km", "350 km", "17,5 km"],
        res: "175 km",
        erroConceito: ["350 km"],
        passo: "Proporção direta: 1/50 = 3,5/x → x = 3,5 × 50 = 175 km.",
        dica: "Escala: proporcionalidade direta. 1 cm → 50 km. 3,5 cm → 3,5 × 50 = 175 km."
    },
    {
        id: "B2T4Q17", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade — Câmbio",
        display: "Câmbio: R$ 5,20 por 1 dólar. Com R$ 100,00, quantos dólares?",
        botoes: ["≈ 19,23 dólares", "≈ 5,20 dólares", "≈ 520 dólares", "≈ 94,80 dólares"],
        res: "≈ 19,23 dólares",
        erroConceito: ["≈ 94,80 dólares"],
        passo: "100 ÷ 5,20 ≈ 19,23 dólares. Proporcionalidade direta: mais reais → mais dólares.",
        dica: "Divida o valor em reais pelo câmbio: 100 ÷ 5,20 ≈ 19,23 dólares."
    },
    {
        id: "B2T4Q18", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Tipo de Proporcionalidade",
        display: "Quando o câmbio sobe (reais por dólar aumentam), com o mesmo valor em reais você compra:",
        botoes: ["Menos dólares (inversa)", "Mais dólares (direta)", "A mesma quantidade", "Depende do banco"],
        res: "Menos dólares (inversa)",
        erroConceito: ["Mais dólares (direta)"],
        passo: "Câmbio mais caro → cada dólar custa mais reais → com os mesmos reais você compra menos dólares. Relação inversa.",
        dica: "Câmbio e quantidade de dólares: quando um sobe, o outro desce → inversamente proporcionais."
    }
];
