// js/data/questions/bloco6.js
// Bloco 6 — Geometria: Ângulos, Triângulos e Polígonos
// EF07MA21, EF07MA22, EF07MA23, EF07MA24
// Macroclusters: CLASSIFICACAO_GEOMETRICA, DEDUCAO_ANGULAR, GENERALIZACAO_POLIGONAL, RACIOCINIO_PITAGORICO

export const bloco6 = [

    // ── AULA 1: ÂNGULOS (DEDUCAO_ANGULAR) ────────────────────────────────

    {
        id: "B6Q01", bloco: 6, aula: 1, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Classificação de Ângulos",
        display: "Um ângulo que mede exatos 120° é classificado como:",
        res: "Obtuso",
        alternativas: [
            { valor: "Obtuso", tipo: "acerto" },
            { valor: "Agudo", tipo: "erro", categoria: "conceito", erro: "angulo_classificacao_abaixo_90", descricao: "Confundiu a definição de ângulo obtuso (>90°) com a de agudo (<90°).", peso: 3 },
            { valor: "Raso", tipo: "erro", categoria: "conceito", erro: "angulo_confunde_meia_volta", descricao: "Atribuiu a nomenclatura de 180° a um ângulo de 120°.", peso: 2 },
            { valor: "Reto", tipo: "erro", categoria: "atencao", erro: "angulo_ignora_valor_90", descricao: "Não associou o ângulo reto exclusivamente à medida de 90°.", peso: 1 }
        ],
        passo: "Ângulos maiores que 90° e menores que 180° são obtusos.",
        dica: "Pense na abertura: se ele for mais 'aberto' que o canto de um quadrado (90°), ele é obtuso."
    },
    {
        id: "B6Q02", bloco: 6, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA21", bncc_desc: "Ângulos Complementares e Suplementares",
        display: "Qual é o valor do ângulo suplementar de 70°?",
        res: "110°",
        alternativas: [
            { valor: "110°", tipo: "acerto" },
            { valor: "20°", tipo: "erro", categoria: "conceito", erro: "angulo_calcula_complemento_inves_suplemento", descricao: "Calculou a diferença para 90° em vez de calcular para 180°.", peso: 3 },
            { valor: "290°", tipo: "erro", categoria: "procedimento", erro: "angulo_calculo_explementar", descricao: "Subtraiu de 360° (volta completa) ignorando o conceito de suplementar.", peso: 2 },
            { valor: "70°", tipo: "erro", categoria: "atencao", erro: "angulo_repeticao_dado", descricao: "Não realizou operação aritmética, apenas repetiu o valor de entrada.", peso: 1 }
        ],
        passo: "Ângulos suplementares somam 180°. Cálculo: 180° - 70° = 110°.",
        dica: "Suplementar é o que falta para completar uma linha reta (180°)."
    },

    // ── AULA 2: PARALELAS E TRANSVERSAL (DEDUCAO_ANGULAR) ────────────────

    {
        id: "B6Q03", bloco: 6, aula: 2, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Retas Paralelas Cortadas por Transversal",
        display: "Em retas paralelas cortadas por uma transversal, os ângulos ALTERNOS INTERNOS são sempre:",
        res: "Iguais (Congruentes)",
        alternativas: [
            { valor: "Iguais (Congruentes)", tipo: "acerto" },
            { valor: "Suplementares (Somam 180°)", tipo: "erro", categoria: "conceito", erro: "paralelas_confunde_alterno_colateral", descricao: "Atribuiu a propriedade de soma 180° (colaterais) aos ângulos alternos.", peso: 3 },
            { valor: "Complementares (Somam 90°)", tipo: "erro", categoria: "procedimento", erro: "paralelas_soma_90_indevida", descricao: "Tentou aplicar a regra de 90° em um sistema de paralelas.", peso: 2 },
            { valor: "Diferentes", tipo: "erro", categoria: "interpretacao", erro: "paralelas_nao_identifica_congruencia", descricao: "Não reconheceu a igualdade de medidas entre os pares de ângulos alternos.", peso: 2 }
        ],
        passo: "Ângulos alternos internos ficam em lados opostos da linha transversal e têm a mesma medida.",
        dica: "Imagine a letra 'Z'. Os ângulos que ficam 'dentro' das curvas do Z são sempre iguais."
    },

    // ── AULA 3 e 4: TRIÂNGULOS (CLASSIFICACAO_GEOMETRICA) ────────────────

    {
        id: "B6Q04", bloco: 6, aula: 3, tipo: "conceito",
        bncc: "EF07MA22", bncc_desc: "Classificação de Triângulos",
        display: "Um triângulo que possui todos os três lados com medidas DIFERENTES é chamado de:",
        res: "Escaleno",
        alternativas: [
            { valor: "Escaleno", tipo: "acerto" },
            { valor: "Isósceles", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_isosceles", descricao: "Confundiu a ausência de igualdade com a presença de dois lados iguais.", peso: 3 },
            { valor: "Equilátero", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_equilatero", descricao: "Confundiu lados diferentes com a igualdade total de lados.", peso: 3 },
            { valor: "Retângulo", tipo: "erro", categoria: "interpretacao", erro: "triangulo_confunde_lado_angulo", descricao: "Classificou pelo ângulo (90°) em vez de utilizar o critério de medidas dos lados.", peso: 2 }
        ],
        passo: "Lados diferentes = Escaleno. Dois iguais = Isósceles. Três iguais = Equilátero.",
        dica: "Escaleno rima com 'pleno de diferenças'. Nenhum lado é igual ao outro."
    },
    {
        id: "B6Q05", bloco: 6, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA22", bncc_desc: "Soma dos Ângulos Internos do Triângulo",
        display: "Dois ângulos de um triângulo medem 50° e 70°. Quanto mede o terceiro ângulo?",
        res: "60°",
        alternativas: [
            { valor: "60°", tipo: "acerto" },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "triangulo_soma_confunde_total_valor", descricao: "Indicou a soma total interna (180°) como sendo o valor do ângulo faltante.", peso: 3 },
            { valor: "120°", tipo: "erro", categoria: "procedimento", erro: "triangulo_soma_omite_abate_180", descricao: "Somou os ângulos dados (50+70), mas não subtraiu o resultado do total de 180°.", peso: 2 },
            { valor: "80°", tipo: "erro", categoria: "calculo", erro: "triangulo_subtracao_aritmetica_errada", descricao: "Errou a conta de subtrair ao tentar encontrar a diferença para 180°.", peso: 1 }
        ],
        passo: "A soma dos ângulos internos é 180°. 50 + 70 = 120. Então: 180 - 120 = 60°.",
        dica: "Pense: os três juntos devem formar uma linha reta (180°). Quanto falta para chegar lá?"
    },

    // ── AULA 5 e 6: QUADRILÁTEROS E POLÍGONOS (GENERALIZACAO_POLIGONAL) ──

    {
        id: "B6Q06", bloco: 6, aula: 5, tipo: "conceito",
        bncc: "EF07MA23", bncc_desc: "Propriedades dos Quadriláteros",
        display: "Qual quadrilátero possui os 4 lados iguais, mas NÃO exige ângulos retos (90°)?",
        res: "Losango",
        alternativas: [
            { valor: "Losango", tipo: "acerto" },
            { valor: "Quadrado", tipo: "erro", categoria: "conceito", erro: "quadrilatero_exige_angulo_reto", descricao: "Selecionou a figura que, além de lados iguais, exige obrigatoriamente ângulos de 90°.", peso: 2 },
            { valor: "Retângulo", tipo: "erro", categoria: "conceito", erro: "quadrilatero_lados_opostos_apenas", descricao: "Confundiu com a figura que tem apenas lados opostos iguais e ângulos retos.", peso: 3 },
            { valor: "Trapézio", tipo: "erro", categoria: "interpretacao", erro: "quadrilatero_falha_definicao_paralelas", descricao: "Selecionou uma figura com apenas um par de lados paralelos e lados geralmente desiguais.", peso: 3 }
        ],
        passo: "O Losango é o quadrilátero com 4 lados iguais. O quadrado é um tipo especial de losango.",
        dica: "Lembre da forma amarela na nossa bandeira: lados iguais, mas os cantos não são retos."
    },
    {
        id: "B6Q07", bloco: 6, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA23", bncc_desc: "Soma dos Ângulos Internos de Polígonos",
        display: "Qual é a soma dos ângulos internos de um Pentágono (polígono de 5 lados)?",
        res: "540°",
        alternativas: [
            { valor: "540°", tipo: "acerto" },
            { valor: "360°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_quadrilatero", descricao: "Aplicou a soma de 360° (quadriláteros) para um polígono de 5 lados.", peso: 3 },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_triangulo", descricao: "Aplicou a soma de 180° (triângulos) para um polígono de 5 lados.", peso: 3 },
            { valor: "720°", tipo: "erro", categoria: "procedimento", erro: "poligono_erro_n_formula", descricao: "Aplicou a fórmula (n-2)x180 utilizando o número errado de lados (n=6).", peso: 2 }
        ],
        passo: "Fórmula: (lados - 2) × 180. Para 5 lados: (5 - 2) × 180 = 3 × 180 = 540°.",
        dica: "Imagine dividir o pentágono em triângulos: você consegue formar 3 triângulos lá dentro."
    },

    // ── AULA 9: TEOREMA DE PITÁGORAS (RACIOCINIO_PITAGORICO) ──────────────

    {
        id: "B6Q08", bloco: 6, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA24", bncc_desc: "Teorema de Pitágoras — Aplicação",
        display: "Em um triângulo retângulo, os catetos medem 3 e 4. Quanto mede a hipotenusa?",
        res: "5",
        alternativas: [
            { valor: "5", tipo: "acerto" },
            { valor: "7", tipo: "erro", categoria: "conceito", erro: "pitagoras_soma_linear_catetos", descricao: "Somou os catetos diretamente (3+4) ignorando a relação de quadrados.", peso: 3 },
            { valor: "25", tipo: "erro", categoria: "procedimento", erro: "pitagoras_omite_raiz_final", descricao: "Calculou a soma dos quadrados (9+16=25), mas não extraiu a raiz quadrada final.", peso: 2 },
            { valor: "12", tipo: "erro", categoria: "interpretacao", erro: "pitagoras_multiplica_catetos", descricao: "Multiplicou os valores dos catetos entre si (3x4).", peso: 2 }
        ],
        passo: "a² + b² = c². Então: 3² + 4² = 9 + 16 = 25. A raiz quadrada de 25 é 5.",
        dica: "Esse é o triângulo 3-4-5. A soma dos quadrados dos lados menores deve dar o quadrado do maior."
    }
];
