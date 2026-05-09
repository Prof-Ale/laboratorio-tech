// js/data/questions/bloco6.js
// Bloco 6 — Geometria: Ângulos, Triângulos e Polígonos
// EF07MA21, EF07MA22, EF07MA23, EF07MA24
// Temas: Ângulos, Paralelas, Triângulos, Quadriláteros e Polígonos

export const bloco6 = [

    // ── AULA 1: ÂNGULOS (EF07MA21) ──────────────────────────────────────

    {
        id: "B6Q01", bloco: 6, aula: 1, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Classificação de Ângulos",
        display: "Um ângulo que mede exatamente 120° é classificado como:",
        res: "Obtuso",
        alternativas: [
            { valor: "Obtuso", tipo: "acerto" },
            { valor: "Agudo", tipo: "erro", categoria: "conceito", erro: "angulo_classificacao_agudo_errado", descricao: "Confundiu ângulo maior que 90° com ângulo menor que 90°.", peso: 3 },
            { valor: "Raso", tipo: "erro", categoria: "conceito", erro: "angulo_classificacao_raso_errado", descricao: "Confundiu 120° com o ângulo de meia volta (180°).", peso: 2 },
            { valor: "Reto", tipo: "erro", categoria: "atencao", erro: "angulo_classificacao_reto_errado", descricao: "Não identificou a medida padrão de 90°.", peso: 1 }
        ],
        passo: "Ângulos entre 90° e 180° são chamados de obtusos.",
        dica: "Pense na abertura: mais que o canto de um livro (90°) e menos que uma linha reta (180°)."
    },
    {
        id: "B6Q02", bloco: 6, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA21", bncc_desc: "Ângulos Complementares e Suplementares",
        display: "Qual é o ângulo suplementar de 70°?",
        res: "110°",
        alternativas: [
            { valor: "110°", tipo: "acerto" },
            { valor: "20°", tipo: "erro", categoria: "conceito", erro: "angulo_confunde_suplemento_complemento", descricao: "Calculou o complemento (para 90°) em vez do suplemento (para 180°).", peso: 3 },
            { valor: "70°", tipo: "erro", categoria: "atencao", erro: "angulo_replica_valor", descricao: "Apenas repetiu o valor dado no enunciado.", peso: 1 },
            { valor: "290°", tipo: "erro", categoria: "procedimento", erro: "angulo_calculo_explementar", descricao: "Calculou o valor para completar um círculo (360°).", peso: 2 }
        ],
        passo: "Ângulos suplementares somam 180°. Então: 180° - 70° = 110°.",
        dica: "Suplementar é quanto falta para chegar em 180° (meia volta)."
    },

    // ── AULA 2: PARALELAS E TRANSVERSAL (EF07MA21) ──────────────────────

    {
        id: "B6Q03", bloco: 6, aula: 2, tipo: "conceito",
        bncc: "EF07MA21", bncc_desc: "Retas Paralelas Cortadas por Transversal",
        display: "Em retas paralelas cortadas por uma transversal, ângulos alternos internos são sempre:",
        res: "Iguais",
        alternativas: [
            { valor: "Iguais", tipo: "acerto" },
            { valor: "Suplementares (somam 180°)", tipo: "erro", categoria: "conceito", erro: "paralelas_confunde_alternos_colaterais", descricao: "Confundiu a propriedade dos alternos (iguais) com a dos colaterais (180°).", peso: 3 },
            { valor: "Complementares (somam 90°)", tipo: "erro", categoria: "procedimento", erro: "paralelas_aplica_soma_noventa", descricao: "Atribuiu erroneamente a soma de 90° a ângulos em paralelas.", peso: 2 },
            { valor: "Diferentes", tipo: "erro", categoria: "interpretacao", erro: "paralelas_falha_reconhecimento_padrao", descricao: "Não reconheceu o padrão de repetição de ângulos em paralelas.", peso: 2 }
        ],
        passo: "Ângulos alternos internos (lados opostos da transversal, dentro das paralelas) possuem a mesma medida.",
        dica: "Imagine um 'Z': os ângulos dentro das 'dobras' do Z são os alternos internos e são iguais."
    },

    // ── AULA 3 e 4: TRIÂNGULOS (EF07MA22) ───────────────────────────────

    {
        id: "B6Q04", bloco: 6, aula: 3, tipo: "conceito",
        bncc: "EF07MA22", bncc_desc: "Classificação de Triângulos",
        display: "Um triângulo que possui todos os três lados com medidas diferentes é chamado de:",
        res: "Escaleno",
        alternativas: [
            { valor: "Escaleno", tipo: "acerto" },
            { valor: "Isósceles", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_isosceles", descricao: "Confundiu o triângulo de lados todos diferentes com o de dois lados iguais.", peso: 3 },
            { valor: "Equilátero", tipo: "erro", categoria: "conceito", erro: "triangulo_confunde_escaleno_equilatero", descricao: "Confundiu com o triângulo de todos os lados iguais.", peso: 3 },
            { valor: "Retângulo", tipo: "erro", categoria: "interpretacao", erro: "triangulo_classificacao_lado_angulo", descricao: "Classificou pelo ângulo (90°) em vez de classificar pelos lados.", peso: 2 }
        ],
        passo: "Triângulos com 3 lados diferentes são Escalenos; 2 lados iguais são Isósceles; 3 lados iguais são Equiláteros.",
        dica: "Escaleno = Escada (pense em degraus de tamanhos diferentes)."
    },
    {
        id: "B6Q05", bloco: 6, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA22", bncc_desc: "Soma dos Ângulos Internos do Triângulo",
        display: "Dois ângulos de um triângulo medem 50° e 70°. Qual a medida do terceiro ângulo?",
        res: "60°",
        alternativas: [
            { valor: "60°", tipo: "acerto" },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "triangulo_soma_total_como_resposta", descricao: "Respondeu a soma total dos ângulos internos em vez de calcular o valor faltante.", peso: 3 },
            { valor: "120°", tipo: "erro", categoria: "procedimento", erro: "triangulo_soma_parcial_como_resposta", descricao: "Somou os dois ângulos dados (50+70), mas não os subtraiu de 180°.", peso: 2 },
            { valor: "80°", tipo: "erro", categoria: "calculo", erro: "triangulo_erro_aritmetico_soma", descricao: "Cometeu um erro de subtração ao tentar chegar no 180°.", peso: 1 }
        ],
        passo: "A soma deve ser 180°. 50° + 70° = 120°. Então, 180° - 120° = 60°.",
        dica: "O triângulo é 'fechado' em 180°. Some os dois que você tem e veja quanto falta para chegar lá."
    },

    // ── AULA 5 e 6: QUADRILÁTEROS E POLÍGONOS (EF07MA23) ──────────────────

    {
        id: "B6Q06", bloco: 6, aula: 5, tipo: "conceito",
        bncc: "EF07MA23", bncc_desc: "Propriedades dos Quadriláteros",
        display: "Qual quadrilátero possui os 4 lados iguais, mas não obrigatoriamente os ângulos de 90°?",
        res: "Losango",
        alternativas: [
            { valor: "Losango", tipo: "acerto" },
            { valor: "Quadrado", tipo: "erro", categoria: "conceito", erro: "quadrilatero_perfeccionismo", descricao: "Escolheu a figura mais regular, ignorando que o quadrado exige ângulos retos, o que o enunciado não pede.", peso: 2 },
            { valor: "Retângulo", tipo: "erro", categoria: "conceito", erro: "quadrilatero_lados_opostos", descricao: "Confundiu com a figura que tem apenas lados opostos iguais.", peso: 3 },
            { valor: "Trapézio", tipo: "erro", categoria: "interpretacao", erro: "quadrilatero_falha_definicao", descricao: "Escolheu uma figura que possui apenas um par de lados paralelos.", peso: 3 }
        ],
        passo: "O Losango é definido por ter 4 lados iguais. Se ele também tiver 4 ângulos retos, vira um Quadrado.",
        dica: "Lembre da bandeira do Brasil: aquela forma amarela é o losango!"
    },
    {
        id: "B6Q07", bloco: 6, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA23", bncc_desc: "Soma dos Ângulos Internos de Polígonos",
        display: "Qual é a soma dos ângulos internos de um Pentágono (5 lados)?",
        res: "540°",
        alternativas: [
            { valor: "540°", tipo: "acerto" },
            { valor: "360°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_quadrilatero", descricao: "Atribuiu a soma de um quadrilátero (360°) a um polígono de 5 lados.", peso: 3 },
            { valor: "180°", tipo: "erro", categoria: "conceito", erro: "poligono_generaliza_triangulo", descricao: "Atribuiu a soma de um triângulo (180°) a um polígono de 5 lados.", peso: 3 },
            { valor: "720°", tipo: "erro", categoria: "procedimento", erro: "poligono_erro_formula_n", descricao: "Errou a aplicação da fórmula (n-2)x180, possivelmente usando n=6.", peso: 2 }
        ],
        passo: "Fórmula: (n - 2) × 180°. Para o pentágono (n=5): (5 - 2) × 180° = 3 × 180° = 540°.",
        dica: "Divida o pentágono em triângulos: você consegue formar 3 triângulos dentro dele. 3 x 180° = 540°."
    },

    // ── AULA 7, 8 e 9: SEMELHANÇA E PITÁGORAS (EF07MA24) ─────────────────

    {
        id: "B6Q08", bloco: 6, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA24", bncc_desc: "Teorema de Pitágoras (Intuitivo)",
        display: "Um triângulo retângulo tem catetos medindo 3 cm e 4 cm. Qual a medida da hipotenusa?",
        res: "5 cm",
        alternativas: [
            { valor: "5 cm", tipo: "acerto" },
            { valor: "7 cm", tipo: "erro", categoria: "conceito", erro: "pitagoras_soma_direta", descricao: "Somou os catetos (3+4) em vez de aplicar a soma dos quadrados.", peso: 3 },
            { valor: "25 cm", tipo: "erro", categoria: "procedimento", erro: "pitagoras_esquece_raiz", descricao: "Calculou o quadrado da hipotenusa (25), mas esqueceu de extrair a raiz quadrada final.", peso: 2 },
            { valor: "12 cm", tipo: "erro", categoria: "procedimento", erro: "pitagoras_multiplica_catetos", descricao: "Multiplicou os valores dos catetos entre si.", peso: 2 }
        ],
        passo: "Teorema de Pitágoras: a² + b² = c². 3² + 4² = 9 + 16 = 25. Raiz quadrada de 25 é 5.",
        dica: "Este é o triângulo pitagórico mais famoso! Os lados são 3, 4 e o maior é sempre 5."
    }
];
