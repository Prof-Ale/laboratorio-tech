// js/data/questions/bloco6.js
// Bloco 6 — Geometria: Ângulos, Triângulos e Polígonos
// EF07MA21, EF07MA22, EF07MA23, EF07MA24
// Clusters: ANGULOS_E_RETAS, TRIANGULOS, QUADRILATEROS_E_POLIGONOS, RACIOCINIO_DEDUTIVO

export const bloco6 = [

    // ── AULA 1: ÂNGULOS (ANGULOS_E_RETAS) ────────────────────────────────

    {
        id: "B6Q01", bloco: 6, aula: 1, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Classificação de Ângulos",
        display: "Um ângulo que mede exatos 120° é classificado como:",
        res: "Obtuso",
        alternativas: [
            { valor: "Obtuso", tipo: "acerto" },
            { valor: "Agudo", tipo: "erro", categoria: "conceito", erro: "angulo_classificacao_inverte_limite", descricao: "Confundiu a definição de ângulo maior que 90° com a de ângulo menor que 90°.", peso: 3 },
            { valor: "Raso", tipo: "erro", categoria: "conceito", erro: "angulo_confunde_meia_volta", descricao: "Confundiu a medida de 120° com o ângulo de 180°.", peso: 2 },
            { valor: "Reto", tipo: "erro", categoria: "atencao", erro: "angulo_ignora_medida_padrao", descricao: "Não associou o ângulo reto à medida fixa de 90°.", peso: 1 }
        ],
        passo: "Ângulos entre 90° e 180° são obtusos. 120° está nesse intervalo.",
        dica: "Pense na abertura: se abrir mais que o 'L' (90°) e não chegar na linha reta, ele é obtuso."
    },
    {
        id: "B6Q02", bloco: 6, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA21", bncc_desc: "Ângulos Complementares e Suplementares",
        display: "Qual é o valor do ângulo suplementar de 70°?",
        res: "110°",
        alternativas: [
            { valor: "110°", tipo: "acerto" },
            { valor: "20°", tipo: "erro", categoria: "conceito", erro: "angulo_confunde_suplemento_complemento", descricao: "Calculou a diferença para 90° (complemento) em vez de 180° (suplemento).", peso: 3 },
            { valor: "290°", tipo: "erro", categoria: "procedimento", erro: "angulo_calculo_explementar", descricao: "Calculou a volta completa (360°) ignorando a definição de suplementar.", peso: 2 },
            { valor: "70°", tipo: "erro", categoria: "atencao", erro: "angulo_replica_enunciado", descricao: "Não realizou a operação de diferença, apenas repetiu o valor dado.", peso: 1 }
        ],
        passo: "Ângulos suplementares somam 180°. Então fazemos: 180° - 70° = 110°.",
        dica: "Suplementar é 'quanto falta para 180°'. Imagine completar uma meia-lua no transferidor."
    },

    // ── AULA 2: PARALELAS E TRANSVERSAL (ANGULOS_E_RETAS) ────────────────

    {
        id: "B6Q03", bloco: 6, aula: 2, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Retas Paralelas Cortadas por Transversal",
        display: "Quando duas retas paralelas são cortadas por uma transversal, os ângulos ALTERNOS INTERNOS são:",
        res: "Iguais (Congruentes)",
        alternativas: [
            { valor: "Iguais (Congruentes)", tipo: "acerto" },
            { valor: "Suplementares (Somam 180°)", tipo: "erro", categoria: "conceito", erro: "paralelas_confunde_alterno_colateral", descricao: "Atribuiu a propriedade dos ângulos colaterais (soma 180°) aos ângulos alternos.", peso: 3 },
            { valor: "Complementares (Somam 90°)", tipo: "erro", categoria: "procedimento", erro: "paralelas_aplica_soma_90_indevida", descricao: "Tentou aplicar a regra do ângulo reto em um contexto de retas paralelas.", peso: 2 },
            { valor: "Diferentes", tipo: "erro", categoria: "interpretacao", erro: "paralelas_falha_percepcao_visual", descricao: "Não reconheceu a simetria e a igualdade visual entre os pares de ângulos alternos.", peso: 2 }
        ],
        passo: "Ângulos alternos internos estão em lados opostos da transversal e 'dentro' das paralelas. Eles sempre têm a mesma medida.",
        dica: "Procure o desenho de um 'Z': os ângulos que ficam dentro das dobras do Z são sempre iguais!"
    },

    // ── AULA 3 e 4: TRIÂNGULOS (TRIANGULOS) ──────────────────────────────

    {
        id: "B6Q04", bloco: 6, aula: 3, tipo: "conceito",
        bncc: "EF07MA22", bncc_desc: "Classificação de Triângulos",
        display: "Como classificamos um triângulo que possui todos os três lados com medidas DIFERENTES entre si?",
        res: "Escaleno",
        alternativas: [
            { valor: "Escaleno", tipo: "acerto" },
            { valor: "Isósceles", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_isosceles", descricao: "Confundiu o triângulo de lados diferentes com o que possui dois lados iguais.", peso: 3 },
            { valor: "Equilátero", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_equilatero", descricao: "Confundiu com o triângulo que possui todos os lados iguais.", peso: 3 },
            { valor: "Retângulo", tipo: "erro", categoria: "interpretacao", erro: "triangulo_confunde_lado_angulo", descricao: "Classificou o triângulo pelo ângulo interno (90°) em vez da medida dos lados.", peso: 2 }
        ],
        passo: "Lados iguais = Equilátero. Dois iguais = Isósceles. Tudo diferente = Escaleno.",
        dica: "Escaleno começa com E de 'Escada': degraus de tamanhos diferentes, lados de tamanhos diferentes."
    },
    {
        id: "B6Q05", bloco: 6, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA22", bncc_desc: "Soma dos Ângulos Internos do Triângulo",
        display: "Em um triângulo, dois ângulos medem 50° e 70°. Quanto mede o terceiro ângulo?",
        res: "60°",
        alternativas: [
            { valor: "60°", tipo: "acerto" },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "triangulo_soma_confunde_total_valor", descricao: "Respondeu a soma total dos ângulos internos (180°) em vez do valor da incógnita.", peso: 3 },
            { valor: "120°", tipo: "erro", categoria: "procedimento", erro: "triangulo_soma_parcial_omite_subtracao", descricao: "Somou os ângulos conhecidos (50+70), mas não realizou o abate do valor total de 180°.", peso: 2 },
            { valor: "80°", tipo: "erro", categoria: "calculo", erro: "triangulo_erro_subtracao_final", descricao: "Montou a lógica correta, mas falhou na operação aritmética (180 - 120).", peso: 1 }
        ],
        passo: "A soma interna de QUALQUER triângulo é sempre 180°. Somamos os conhecidos (50+70=120) e fazemos 180 - 120 = 60°.",
        dica: "Imagine que os três ângulos do triângulo formam juntos uma meia-lua de 180°. Quanto falta para completar?"
    },

    // ── AULA 5 e 6: QUADRILÁTEROS E POLÍGONOS (QUADRILATEROS_E_POLIGONOS) ─

    {
        id: "B6Q06", bloco: 6, aula: 5, tipo: "conceito",
        bncc: "EF07MA23", bncc_desc: "Propriedades dos Quadriláteros",
        display: "Qual quadrilátero possui os quatro lados iguais, mas NÃO exige ângulos de 90°?",
        res: "Losango",
        alternativas: [
            { valor: "Losango", tipo: "acerto" },
            { valor: "Quadrado", tipo: "erro", categoria: "conceito", erro: "quadrilatero_perfeccionismo_geometrico", descricao: "Escolheu o quadrado por ter lados iguais, ignorando a restrição dos ângulos retos.", peso: 2 },
            { valor: "Retângulo", tipo: "erro", categoria: "conceito", erro: "quadrilatero_confunde_propriedade_lados", descricao: "Confundiu com o retângulo, que possui apenas lados opostos iguais.", peso: 3 },
            { valor: "Trapézio", tipo: "erro", categoria: "interpretacao", erro: "quadrilatero_falha_definicao_base", descricao: "Escolheu uma figura que possui apenas um par de lados paralelos.", peso: 3 }
        ],
        passo: "O Losango tem 4 lados iguais obrigatoriamente. O Quadrado é um tipo 'especial' de losango que também tem ângulos retos.",
        dica: "Lembre da forma amarela na bandeira do Brasil. Os lados são iguais, mas ela é 'achatada', não tem cantos retos."
    },
    {
        id: "B6Q07", bloco: 6, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA23", bncc_desc: "Soma dos Ângulos Internos de Polígonos",
        display: "Qual é a soma dos ângulos internos de um Pentágono (polígono de 5 lados)?",
        res: "540°",
        alternativas: [
            { valor: "540°", tipo: "acerto" },
            { valor: "360°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_quadrilatero", descricao: "Aplicou a soma fixa de 360° (quadriláteros) para um polígono de 5 lados.", peso: 3 },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_triangulo", descricao: "Aplicou a soma fixa de 180° (triângulos) para um polígono de 5 lados.", peso: 3 },
            { valor: "720°", tipo: "erro", categoria: "procedimento", erro: "poligono_erro_formula_n", descricao: "Aplicou a fórmula (n-2)x180 usando o valor de n=6 (hexágono) em vez de n=5.", peso: 2 }
        ],
        passo: "A fórmula é (n - 2) × 180. Para 5 lados: (5 - 2) × 180 = 3 × 180 = 540°.",
        dica: "Divida o pentágono em triângulos saindo de um só canto: você consegue formar 3 triângulos. Cada um vale 180°."
    },

    // ── AULA 9: TEOREMA DE PITÁGORAS (RACIOCINIO_DEDUTIVO) ──────────────

    {
        id: "B6Q08", bloco: 6, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA24", bncc_desc: "Teorema de Pitágoras — Aplicação",
        display: "Em um triângulo retângulo, os catetos medem 3 cm e 4 cm. Quanto mede a hipotenusa (lado maior)?",
        res: "5 cm",
        alternativas: [
            { valor: "5 cm", tipo: "acerto" },
            { valor: "7 cm", tipo: "erro", categoria: "conceito", erro: "pitagoras_soma_linear_lados", descricao: "Somou os catetos (3+4) ignorando a relação quadrática do Teorema de Pitágoras.", peso: 3 },
            { valor: "25 cm", tipo: "erro", categoria: "procedimento", erro: "pitagoras_omite_raiz_final", descricao: "Calculou a soma dos quadrados (9+16=25) mas não extraiu a raiz quadrada para achar o lado.", peso: 2 },
            { valor: "12 cm", tipo: "erro", categoria: "interpretacao", erro: "pitagoras_multiplica_catetos", descricao: "Multiplicou os catetos (3x4) em vez de elevar ao quadrado e somar.", peso: 2 }
        ],
        passo: "Pitágoras: a² = b² + c². Hipotenusa² = 3² + 4² = 9 + 16 = 25. Tirando a raiz: √25 = 5.",
        dica: "Esse é o triângulo '3, 4, 5'. É o mais famoso da matemática! A soma dos quadrados dos pequenos dá o quadrado do grande."
    }
];
