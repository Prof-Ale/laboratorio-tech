// js/data/questions/bloco4.js
// Bloco 4 — Álgebra e Padrão
// EF08MA06, EF08MA08 — Expressões, Equações e Modelagem

export const bloco4 = [

    // ── EXPRESSÕES ALGÉBRICAS ────────────────────────────────────────────
    {
        id:"B4Q01", bloco:4, aula:1, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Expressão Algébrica — Valor Numérico",
        display:"Para x = 3, qual é o valor de 2x + 5?",
        botoes:["11","16","8","21"],
        res:"11", erroConceito:["16"],
        passo:"2x + 5 = 2(3) + 5 = 6 + 5 = 11.",
        dica:"Substitua x = 3 na expressão: 2 × 3 + 5."
    },
    {
        id:"B4Q02", bloco:4, aula:1, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Expressão Algébrica — Valor Numérico",
        display:"Para x = 2 e y = 3, qual é o valor de 3x - 2y + 4?",
        botoes:["4","6","10","2"],
        res:"4", erroConceito:["10"],
        passo:"3(2) - 2(3) + 4 = 6 - 6 + 4 = 4.",
        dica:"Substitua os valores e siga a hierarquia das operações."
    },
    {
        id:"B4Q03", bloco:4, aula:1, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Expressão Algébrica — Simplificação",
        display:"Simplifique: 3x + 2x - x",
        botoes:["4x","5x","6x","3x"],
        res:"4x", erroConceito:["6x"],
        passo:"3x + 2x - x = (3+2-1)x = 4x. Some e subtraia apenas termos semelhantes.",
        dica:"Só some termos com a mesma variável: 3x + 2x - x = 4x."
    },
    {
        id:"B4Q04", bloco:4, aula:1, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Expressão Algébrica — Semelhantes",
        display:"Simplifique: 5a + 3b - 2a + b",
        botoes:["3a + 4b","8a + 4b","3a + 2b","5a + 4b"],
        res:"3a + 4b", erroConceito:["8a + 4b"],
        passo:"5a - 2a = 3a. 3b + b = 4b. Resultado: 3a + 4b.",
        dica:"Agrupe os termos semelhantes: (5a - 2a) + (3b + b)."
    },

    // ── EQUAÇÕES DO 1° GRAU ─────────────────────────────────────────────
    {
        id:"B4Q05", bloco:4, aula:2, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação do 1° Grau",
        display:"Resolva: x + 5 = 12",
        botoes:["x = 7","x = 17","x = 5","x = 60"],
        res:"x = 7", erroConceito:["x = 17"],
        passo:"x = 12 - 5 = 7. Transporte o 5 para o outro lado com sinal contrário.",
        dica:"O que está somando de um lado, passa subtraindo para o outro."
    },
    {
        id:"B4Q06", bloco:4, aula:2, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação do 1° Grau",
        display:"Resolva: 3x = 18",
        botoes:["x = 6","x = 15","x = 54","x = 3"],
        res:"x = 6", erroConceito:["x = 15"],
        passo:"x = 18 ÷ 3 = 6. O que multiplica passa dividindo.",
        dica:"Isole o x dividindo ambos os lados por 3."
    },
    {
        id:"B4Q07", bloco:4, aula:2, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação do 1° Grau",
        display:"Resolva: 2x + 3 = 11",
        botoes:["x = 4","x = 7","x = 2","x = 8"],
        res:"x = 4", erroConceito:["x = 7"],
        passo:"2x = 11 - 3 = 8. x = 8 ÷ 2 = 4.",
        dica:"Primeiro isole os termos com x. Depois divida pelo coeficiente."
    },
    {
        id:"B4Q08", bloco:4, aula:2, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação do 1° Grau",
        display:"Resolva: 4x - 7 = 9",
        botoes:["x = 4","x = 2","x = 16","x = 0,5"],
        res:"x = 4", erroConceito:["x = 16"],
        passo:"4x = 9 + 7 = 16. x = 16 ÷ 4 = 4.",
        dica:"Mova -7 para o outro lado: 4x = 9 + 7 = 16. Divida por 4."
    },
    {
        id:"B4Q09", bloco:4, aula:2, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação do 1° Grau — Membros",
        display:"Resolva: 5x - 3 = 2x + 9",
        botoes:["x = 4","x = 2","x = 6","x = 12"],
        res:"x = 4", erroConceito:["x = 6"],
        passo:"5x - 2x = 9 + 3. 3x = 12. x = 4.",
        dica:"Reúna os termos com x de um lado e os números do outro."
    },

    // ── EQUAÇÕES — CONTEXTO ─────────────────────────────────────────────
    {
        id:"B4Q10", bloco:4, aula:3, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação — Problema Contextualizado",
        display:"O dobro de um número mais 3 é igual a 15. Qual é o número?",
        botoes:["6","9","12","3"],
        res:"6", erroConceito:["9"],
        passo:"2x + 3 = 15. 2x = 12. x = 6.",
        dica:"Traduza o problema: 'dobro de x' = 2x. Monte a equação e resolva."
    },
    {
        id:"B4Q11", bloco:4, aula:3, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação — Problema de Idade",
        display:"Ana tem o triplo da idade de Bruno. A soma das idades é 32. Quantos anos tem Bruno?",
        botoes:["8 anos","16 anos","24 anos","10 anos"],
        res:"8 anos", erroConceito:["16 anos"],
        passo:"Bruno = x, Ana = 3x. x + 3x = 32. 4x = 32. x = 8 anos.",
        dica:"Defina uma variável e monte a equação com a soma das idades."
    },
    {
        id:"B4Q12", bloco:4, aula:3, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Equação — Contexto Preço",
        display:"Ingresso para adulto custa R$15 e para criança R$8. Família gastou R$54. 2 adultos, quantas crianças?",
        botoes:["3 crianças","4 crianças","2 crianças","5 crianças"],
        res:"3 crianças", erroConceito:["4 crianças"],
        passo:"2×15 + 8c = 54. 30 + 8c = 54. 8c = 24. c = 3.",
        dica:"Monte a equação: 2 adultos × R$15 + crianças × R$8 = R$54."
    },

    // ── INEQUAÇÕES ──────────────────────────────────────────────────────
    {
        id:"B4Q13", bloco:4, aula:4, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Inequação do 1° Grau",
        display:"Resolva: x + 3 > 7",
        botoes:["x > 4","x > 10","x < 4","x > 3"],
        res:"x > 4", erroConceito:["x > 10"],
        passo:"x > 7 - 3. x > 4.",
        dica:"Inequações funcionam como equações. Transporte o 3 com sinal trocado."
    },
    {
        id:"B4Q14", bloco:4, aula:4, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Inequação — Inversão do Sinal",
        display:"Resolva: -2x > 8",
        botoes:["x < -4","x > -4","x < 4","x > 4"],
        res:"x < -4", erroConceito:["x > -4"],
        passo:"-2x > 8 → x < 8 ÷ (-2) → x < -4. Ao dividir por negativo, o sinal inverte!",
        dica:"Dividir ou multiplicar por número NEGATIVO inverte o sinal da desigualdade."
    },

    // ── SISTEMAS E PADRÕES ───────────────────────────────────────────────
    {
        id:"B4Q15", bloco:4, aula:5, tipo:"aritmetica",
        bncc:"EF08MA08", bncc_desc:"Padrão Numérico — Sequência",
        display:"Sequência: 2, 5, 8, 11, 14... Qual é o 10° termo?",
        botoes:["29","27","26","31"],
        res:"29", erroConceito:["27"],
        passo:"Razão = 3. Fórmula: aₙ = 2 + (n-1)×3. a₁₀ = 2 + 9×3 = 2 + 27 = 29.",
        dica:"Encontre a razão (diferença entre termos consecutivos) e use a fórmula."
    },
    {
        id:"B4Q16", bloco:4, aula:5, tipo:"aritmetica",
        bncc:"EF08MA08", bncc_desc:"Padrão — Generalização",
        display:"Um quadrado tem 4 palitos. Dois quadrados lado a lado usam 7. Três usam 10. Quantos palitos para n quadrados?",
        botoes:["3n + 1","4n","3n","2n + 2"],
        res:"3n + 1", erroConceito:["4n"],
        passo:"n=1: 4. n=2: 7. n=3: 10. Diferença = 3 a cada quadrado. Fórmula: 3n + 1.",
        dica:"O primeiro quadrado usa 4, cada novo adiciona 3 (compartilha um lado). Generaliza para 3n+1."
    },
    {
        id:"B4Q17", bloco:4, aula:6, tipo:"aritmetica",
        bncc:"EF08MA08", bncc_desc:"Modelagem Algébrica",
        display:"Carlos ganha R$ 1.200/mês e economiza R$ x. Expressão para o gasto:",
        botoes:["1.200 - x","1.200 + x","x - 1.200","1.200 × x"],
        res:"1.200 - x", erroConceito:["1.200 + x"],
        passo:"Gasto = Ganho - Economia = 1.200 - x.",
        dica:"Gasto = total recebido menos o que foi poupado."
    },
    {
        id:"B4Q18", bloco:4, aula:6, tipo:"aritmetica",
        bncc:"EF08MA08", bncc_desc:"Modelagem Algébrica — Área",
        display:"Terreno retangular: largura x e comprimento (x + 5). Expressão da área:",
        botoes:["x² + 5x","x² + 5","2x + 5","x(x+5)"],
        res:"x² + 5x", erroConceito:["2x + 5"],
        passo:"A = x × (x+5) = x² + 5x.",
        dica:"Área = comprimento × largura = x × (x+5). Distribua a multiplicação."
    },
    {
        id:"B4Q19", bloco:4, aula:7, tipo:"aritmetica",
        bncc:"EF08MA08", bncc_desc:"Equação Quadrática Simples",
        display:"x² = 25. Quais são as soluções?",
        botoes:["x = 5 ou x = -5","x = 5","x = 25","x = ±12,5"],
        res:"x = 5 ou x = -5", erroConceito:["x = 5"],
        passo:"x² = 25 → x = √25 = ±5. Tanto +5 quanto -5 elevados ao quadrado resultam em 25.",
        dica:"Equações com x² têm duas soluções simétricas: +√25 e -√25."
    },
    {
        id:"B4Q20", bloco:4, aula:8, tipo:"aritmetica",
        bncc:"EF08MA06", bncc_desc:"Verificação de Solução",
        display:"Qual valor satisfaz a equação 2x - 1 = x + 3?",
        botoes:["x = 4","x = 2","x = 3","x = -4"],
        res:"x = 4", erroConceito:["x = 2"],
        passo:"2x - x = 3 + 1. x = 4. Verificação: 2(4)-1=7 e 4+3=7 ✓.",
        dica:"Reúna os x de um lado e os números do outro. Verifique substituindo."
    }
];
