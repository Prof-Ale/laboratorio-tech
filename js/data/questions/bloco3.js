/**
 * bloco3.js — Grandezas e Medidas
 * Foco: Unidades, Área, Perímetro, Volume e Conversões
 * Clusters: ESTRUTURA_GEOMETRICA, OPERACOES_DECIMAIS, MODELAGEM_SITUACIONAL
 */

export const bloco3 = [

    // ── AULA 1: UNIDADES DE COMPRIMENTO (OPERACOES_DECIMAIS) ──────────────

    {
        id: "B3Q01", bloco: 3, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Comprimento",
        display: "Uma distância de 2,5 km equivale a quantos metros?",
        res: "2.500 m",
        alternativas: [
            { valor: "2.500 m", tipo: "acerto" },
            { valor: "250 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_cem_inves_mil", descricao: "Multiplicou por 100 em vez de 1.000 (confundiu quilo com hecto/centi).", peso: 2 },
            { valor: "0,25 m", tipo: "erro", categoria: "conceito", erro: "conversao_inverte_operacao_divisao", descricao: "Dividiu em vez de multiplicar (tratou km como unidade menor).", peso: 3 },
            { valor: "25.000 m", tipo: "erro", categoria: "atencao", erro: "conversao_excesso_zeros", descricao: "Deslocou a vírgula casas a mais do que o necessário.", peso: 1 }
        ],
        passo: "1 km = 1.000 m. Então, 2,5 × 1.000 = 2.500 metros.",
        dica: "Dica da ADA: O prefixo 'Quilo' sempre significa 1.000 vezes mais. Multiplique por mil!"
    },
    
    {
        id: "B3Q02", bloco: 3, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Comprimento",
        display: "A medida de 350 cm equivale a quantos metros?",
        res: "3,5 m",
        alternativas: [
            { valor: "3,5 m", tipo: "acerto" },
            { valor: "35 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_dez_inves_cem", descricao: "Dividiu por 10 em vez de 100 (confundiu cm com dm).", peso: 2 },
            { valor: "0,35 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_mil_inves_cem", descricao: "Dividiu por 1.000 (confundiu cm com mm).", peso: 2 },
            { valor: "3.500 m", tipo: "erro", categoria: "conceito", erro: "conversao_inverte_operacao_multiplicacao", descricao: "Multiplicou ao passar de unidade menor para maior.", peso: 3 }
        ],
        passo: "1 metro tem 100 cm. Para voltar de cm para m, dividimos: 350 ÷ 100 = 3,5 m.",
        dica: "Pense na fita métrica: 100 cm formam 1 metro. Então 300 cm são 3 metros, e 50 cm é a metade."
    },

    // ── AULA 3: UNIDADES DE TEMPO (MODELAGEM_SITUACIONAL) ─────────────────

    {
        id: "B3Q06", bloco: 3, aula: 3, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Tempo",
        display: "Uma prova durou 2 horas e 45 minutos. Quantos minutos durou no total?",
        res: "165 min",
        alternativas: [
            { valor: "165 min", tipo: "acerto" },
            { valor: "245 min", tipo: "erro", categoria: "conceito", erro: "tempo_base_cem", descricao: "Assumiu que 1h = 100min (confundiu sistema sexagesimal com decimal).", peso: 3 },
            { valor: "125 min", tipo: "erro", categoria: "calculo", erro: "tempo_ignora_multiplicador", descricao: "Erro na soma de 120 + 45 ou na multiplicação 2x60.", peso: 2 },
            { valor: "145 min", tipo: "erro", categoria: "atencao", erro: "tempo_erro_adicao_horas", descricao: "Somou apenas uma hora (60) com os minutos ou errou o reagrupamento.", peso: 1 }
        ],
        passo: "1h = 60 min. Então 2h = 120 min. Agora somamos a sobra: 120 + 45 = 165 minutos.",
        dica: "Cuidado! O tempo não funciona de 100 em 100. O 'chefe' do tempo é o 60!"
    },

    // ── AULA 4: PERÍMETRO (ESTRUTURA_GEOMETRICA) ──────────────────────────

    {
        id: "B3Q08", bloco: 3, aula: 4, tipo: "geometria",
        bncc: "EF07MA20", bncc_desc: "Perímetro de Retângulo",
        display: "Qual é o perímetro de um jardim retangular com 8 m de comprimento e 5 m de largura?",
        res: "26 m",
        alternativas: [
            { valor: "26 m", tipo: "acerto" },
            { valor: "40 m", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_perimetro_area", descricao: "Calculou a área (8x5) em vez do contorno.", peso: 3 },
            { valor: "13 m", tipo: "erro", categoria: "procedimento", erro: "geometria_perimetro_soma_parcial", descricao: "Somou apenas dois lados (8+5), ignorando os outros dois.", peso: 2 },
            { valor: "80 m", tipo: "erro", categoria: "estrategia", erro: "geometria_operacao_superdimensionada", descricao: "Multiplicou os lados e dobrou (lógica híbrida confusa).", peso: 2 }
        ],
        passo: "Perímetro é a soma de TODOS os lados: 8 + 5 + 8 + 5 = 26 metros.",
        dica: "Imagine que você está caminhando sobre o muro do jardim. Você precisa percorrer os quatro lados para voltar ao início!"
    },
    

    // ── AULA 5: ÁREA (ESTRUTURA_GEOMETRICA) ───────────────────────────────

    {
        id: "B3Q13", bloco: 3, aula: 5, tipo: "geometria",
        bncc: "EF08MA07", bncc_desc: "Área de Triângulo",
        display: "Um triângulo tem base de 10 cm e altura de 6 cm. Qual é a sua área?",
        res: "30 cm²",
        alternativas: [
            { valor: "30 cm²", tipo: "acerto" },
            { valor: "60 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_triangulo_omite_divisao", descricao: "Esqueceu de dividir por 2 (calculou como se fosse retângulo).", peso: 3 },
            { valor: "16 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_area_soma_dimensoes", descricao: "Somou base e altura em vez de multiplicar.", peso: 2 },
            { valor: "15 cm²", tipo: "erro", categoria: "calculo", erro: "geometria_triangulo_erro_divisao", descricao: "Dividiu por 4 ou errou a divisão de 60 por 2.", peso: 1 }
        ],
        passo: "Área do triângulo = (Base × Altura) ÷ 2. Então: (10 × 6) = 60. E 60 ÷ 2 = 30 cm².",
        dica: "Todo triângulo é a METADE de um retângulo. Calcule a área total e depois 'corte' ao meio!"
    },
    

    // ── AULA 6: VOLUME (ESTRUTURA_GEOMETRICA) ─────────────────────────────

    {
        id: "B3Q17", bloco: 3, aula: 6, tipo: "geometria",
        bncc: "EF08MA07", bncc_desc: "Volume de Cubo",
        display: "Qual é o volume de um cubo cuja aresta (lado) mede 5 cm?",
        res: "125 cm³",
        alternativas: [
            { valor: "125 cm³", tipo: "acerto" },
            { valor: "25 cm²", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_volume_area", descricao: "Calculou apenas a área de uma face (5x5).", peso: 3 },
            { valor: "15 cm³", tipo: "erro", categoria: "procedimento", erro: "geometria_volume_multiplica_tres", descricao: "Multiplicou por 3 (5x3) em vez de elevar ao cubo (5x5x5).", peso: 2 },
            { valor: "75 cm³", tipo: "erro", categoria: "estrategia", erro: "geometria_volume_calculo_hibrido", descricao: "Multiplicou a área da face (25) por 3 (número de dimensões).", peso: 2 }
        ],
        passo: "Volume = Lado × Lado × Lado. V = 5 × 5 × 5 = 125 cm³.",
        dica: "Volume é 3D! Você precisa multiplicar as três dimensões: largura, comprimento e altura."
    },
    

    // ── PROBLEMAS INTEGRADORES (MODELAGEM_SITUACIONAL) ────────────────────

    {
        id: "B3Q20", bloco: 3, aula: 8, tipo: "contexto",
        bncc: "EF08MA07", bncc_desc: "Grandezas — Problema Integrador",
        display: "Vai colocar piso em uma sala de 4,5 m por 3 m. O piso custa R$ 45,00 o m². Qual o custo total?",
        res: "R$ 607,50",
        alternativas: [
            { valor: "R$ 607,50", tipo: "acerto" },
            { valor: "R$ 675,00", tipo: "erro", categoria: "conceito", erro: "problema_custo_usa_perimetro", descricao: "Calculou o custo sobre o perímetro (15m) em vez da área (13,5m²).", peso: 3 },
            { valor: "R$ 337,50", tipo: "erro", categoria: "conceito", erro: "problema_custo_soma_lados", descricao: "Multiplicou apenas a soma dos lados (7,5) pelo preço.", peso: 3 },
            { valor: "R$ 202,50", tipo: "erro", categoria: "calculo", erro: "problema_erro_multiplicacao_decimal", descricao: "Errou a conta de 13,5 × 45.", peso: 1 }
        ],
        passo: "1º: Achar a área (4,5 × 3 = 13,5 m²). 2º: Multiplicar pelo preço (13,5 × 45 = 607,50).",
        dica: "Primeiro veja quantos 'quadradinhos' de piso cabem no chão (Área). Depois veja quanto custa cada quadradinho!"
    }
];
