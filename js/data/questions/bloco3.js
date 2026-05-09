// js/data/questions/bloco3.js
// Bloco 3 — Grandezas e Medidas
// EF07MA20, EF08MA07 — Unidades, Área, Perímetro, Conversões
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco3 = [

    // ── UNIDADES DE COMPRIMENTO ─────────────────────────────────────────
    {
        id: "B3Q01", bloco: 3, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Comprimento",
        display: "Uma distância de 2,5 km equivale a quantos metros?",
        res: "2.500 m",
        alternativas: [
            { valor: "2.500 m", tipo: "acerto" },
            { valor: "250 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_cem_inves_mil", descricao: "Multiplicou por 100 em vez de 1.000 na conversão de km para metros.", peso: 2 },
            { valor: "0,25 m", tipo: "erro", categoria: "conceito", erro: "conversao_inverte_operacao_divisao", descricao: "Dividiu o valor numérico em vez de multiplicá-lo, como se passasse de m para km.", peso: 3 },
            { valor: "25.000 m", tipo: "erro", categoria: "atencao", erro: "conversao_excesso_zeros", descricao: "Deslocou a vírgula uma casa a mais do que o fator de conversão exige.", peso: 1 }
        ],
        passo: "1 km equivale a 1.000 m. Basta fazer: 2,5 × 1.000 = 2.500 metros.",
        dica: "Para transformar quilômetros em metros, sempre multiplique o valor por 1.000."
    },
    {
        id: "B3Q02", bloco: 3, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Comprimento",
        display: "A medida de 350 cm equivale a quantos metros?",
        res: "3,5 m",
        alternativas: [
            { valor: "3,5 m", tipo: "acerto" },
            { valor: "35 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_dez_inves_cem", descricao: "Dividiu por 10 em vez de 100, confundindo a relação m/cm com m/dm.", peso: 2 },
            { valor: "0,35 m", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_mil_inves_cem", descricao: "Dividiu por 1.000 em vez de 100, tratando como se fossem milímetros.", peso: 2 },
            { valor: "3.500 m", tipo: "erro", categoria: "conceito", erro: "conversao_inverte_operacao_multiplicacao", descricao: "Multiplicou os centímetros gerando um valor irreal, em vez de dividi-los para obter metros.", peso: 3 }
        ],
        passo: "1 metro tem 100 centímetros. Para voltar de cm para m, dividimos por 100: 350 ÷ 100 = 3,5 m.",
        dica: "De uma unidade pequena (cm) para uma grande (m), nós dividimos. A relação é 100."
    },
    {
        id: "B3Q03", bloco: 3, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Comprimento",
        display: "Uma sala tem exatos 4,2 m de largura. Qual é essa medida em centímetros?",
        res: "420 cm",
        alternativas: [
            { valor: "420 cm", tipo: "acerto" },
            { valor: "4.200 cm", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_mil_inves_cem_metros", descricao: "Multiplicou por 1.000, confundindo a passagem para centímetros com a de milímetros.", peso: 2 },
            { valor: "42 cm", tipo: "erro", categoria: "procedimento", erro: "conversao_fator_dez_inves_cem_metros", descricao: "Multiplicou apenas por 10 (passando para decímetros).", peso: 2 },
            { valor: "0,042 cm", tipo: "erro", categoria: "conceito", erro: "conversao_inverte_operacao_divisao_m", descricao: "Dividiu a medida do metro achando que os centímetros dariam um número menor.", peso: 3 }
        ],
        passo: "1 metro é igual a 100 cm. Multiplicando a medida da sala: 4,2 × 100 = 420 cm.",
        dica: "Para transformar metros em centímetros, ande com a vírgula duas casas para a direita (multiplique por 100)."
    },

    // ── UNIDADES DE MASSA ───────────────────────────────────────────────
    {
        id: "B3Q04", bloco: 3, aula: 2, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Massa",
        display: "Um pacote pesa 3,75 kg. Isso equivale a quantos gramas?",
        res: "3.750 g",
        alternativas: [
            { valor: "3.750 g", tipo: "acerto" },
            { valor: "375 g", tipo: "erro", categoria: "procedimento", erro: "conversao_massa_fator_cem", descricao: "Multiplicou por 100 em vez do fator mil usado no prefixo 'quilo'.", peso: 2 },
            { valor: "0,375 g", tipo: "erro", categoria: "conceito", erro: "conversao_massa_inverte_operacao", descricao: "Dividiu a grandeza em vez de multiplicar.", peso: 3 },
            { valor: "37.500 g", tipo: "erro", categoria: "atencao", erro: "conversao_massa_excesso_zeros", descricao: "Acrescentou uma casa decimal a mais durante a multiplicação por mil.", peso: 1 }
        ],
        passo: "O prefixo 'quilo' significa 1.000. 1 kg = 1.000 g. Portanto, 3,75 × 1.000 = 3.750 g.",
        dica: "Para passar do 'kilograma' para o 'grama', multiplique por mil."
    },
    {
        id: "B3Q05", bloco: 3, aula: 2, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Massa",
        display: "A embalagem de um produto pesa 2,4 kg, mas o rótulo pede para exibir o peso em gramas. Qual será o valor no rótulo?",
        res: "2.400 g",
        alternativas: [
            { valor: "2.400 g", tipo: "acerto" },
            { valor: "240 g", tipo: "erro", categoria: "procedimento", erro: "conversao_massa_fator_cem_rotulo", descricao: "Tratou a conversão de massa como se fosse a métrica de m para cm (x100).", peso: 2 },
            { valor: "24 g", tipo: "erro", categoria: "procedimento", erro: "conversao_massa_fator_dez", descricao: "Apenas deslocou a vírgula para tornar o número inteiro.", peso: 2 },
            { valor: "24.000 g", tipo: "erro", categoria: "calculo", erro: "conversao_massa_erro_transporte_zeros", descricao: "Multiplicou por 10.000 em vez de 1.000.", peso: 1 }
        ],
        passo: "Sempre que mudamos de kg para g, multiplicamos por 1.000. Assim, 2,4 × 1.000 = 2.400 g.",
        dica: "Multiplique 2,4 por 1.000. A vírgula anda três casinhas para a direita."
    },

    // ── UNIDADES DE TEMPO ───────────────────────────────────────────────
    {
        id: "B3Q06", bloco: 3, aula: 3, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Tempo",
        display: "Uma prova durou exatas 2 horas e 45 minutos. Quantos minutos isso durou no total?",
        res: "165 min",
        alternativas: [
            { valor: "165 min", tipo: "acerto" },
            { valor: "245 min", tipo: "erro", categoria: "conceito", erro: "tempo_base_cem", descricao: "Assumiu erroneamente que uma hora tem 100 minutos e concatenou os valores.", peso: 3 },
            { valor: "125 min", tipo: "erro", categoria: "calculo", erro: "tempo_ignora_multiplicador", descricao: "Somou as duas partes de forma desconexa (talvez 60 + 45 ou errando a adição de 120 + 45).", peso: 2 },
            { valor: "145 min", tipo: "erro", categoria: "calculo", erro: "tempo_erro_adicao_horas", descricao: "Calculou 100 + 45 em vez de 120 + 45, tropeçando na aritmética básica de tempo.", peso: 1 }
        ],
        passo: "Cada hora possui 60 minutos. 2 horas = 120 minutos. Somando os 45 minutos finais: 120 + 45 = 165 minutos.",
        dica: "Transforme as horas multiplicando por 60. Depois, junte com os minutos soltos."
    },
    {
        id: "B3Q07", bloco: 3, aula: 3, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Tempo",
        display: "Um vídeo no computador tem 3.600 segundos. Isso equivale a quantas horas redondas?",
        res: "1 hora",
        alternativas: [
            { valor: "1 hora", tipo: "acerto" },
            { valor: "60 horas", tipo: "erro", categoria: "procedimento", erro: "tempo_conversao_incompleta_h", descricao: "Dividiu por 60 apenas uma vez, chegando ao número em minutos e respondendo como se fossem horas.", peso: 2 },
            { valor: "36 horas", tipo: "erro", categoria: "estrategia", erro: "tempo_corte_zeros_aleatorio", descricao: "Cortou os zeros de trás sem executar a divisão proporcional pela base sexagesimal.", peso: 1 },
            { valor: "6 horas", tipo: "erro", categoria: "calculo", erro: "tempo_erro_divisao_base_tempo", descricao: "Dividiu por 600 em vez de 3.600, ou cortou um zero a mais do que devia.", peso: 1 }
        ],
        passo: "1 minuto tem 60 s. 1 hora tem 60 minutos. 60 × 60 = 3.600 segundos em uma hora. Logo, 3.600 s = 1 h.",
        dica: "Uma hora tem 60 minutos. Cada minuto tem 60 segundos. 60 vezes 60 dá 3.600!"
    },

    // ── PERÍMETRO ───────────────────────────────────────────────────────
    {
        id: "B3Q08", bloco: 3, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Perímetro de Retângulo",
        display: "Qual é o perímetro de um jardim retangular que possui comprimento de 8 m e largura de 5 m?",
        res: "26 m",
        alternativas: [
            { valor: "26 m", tipo: "acerto" },
            { valor: "40 m", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_perimetro_area", descricao: "Aplicou a fórmula de área (base × altura) em vez de somar os contornos.", peso: 3 },
            { valor: "13 m", tipo: "erro", categoria: "procedimento", erro: "geometria_perimetro_soma_parcial", descricao: "Somou apenas os dois lados declarados no texto (8+5) esquecendo as outras duas faces.", peso: 2 },
            { valor: "80 m", tipo: "erro", categoria: "estrategia", erro: "geometria_operacao_superdimensionada", descricao: "Multiplicou os lados e ainda dobrou o valor (8 × 5 × 2).", peso: 1 }
        ],
        passo: "Perímetro é o contorno total. Como é retângulo, temos dois lados de 8m e dois lados de 5m. P = 8+8+5+5 = 26 m.",
        dica: "Perímetro é dar a volta na borda inteira da figura. Lembre-se que o retângulo tem 4 lados!"
    },
    {
        id: "B3Q09", bloco: 3, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Perímetro de Quadrado",
        display: "Um quadrado tem lado de exatos 7,5 cm. Qual é o seu perímetro?",
        res: "30 cm",
        alternativas: [
            { valor: "30 cm", tipo: "acerto" },
            { valor: "56,25 cm", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_perimetro_area_q", descricao: "Calculou a área (lado × lado) em vez da soma das bordas.", peso: 3 },
            { valor: "15 cm", tipo: "erro", categoria: "procedimento", erro: "geometria_perimetro_multiplica_metade", descricao: "Multiplicou o lado por 2 (contando apenas duas faces do quadrado).", peso: 2 },
            { valor: "7,5 cm", tipo: "erro", categoria: "interpretacao", erro: "geometria_assume_lado_igual_perimetro", descricao: "Apenas reproduziu a medida do lado como se fosse o total da figura.", peso: 2 }
        ],
        passo: "O quadrado possui 4 lados de medidas iguais. P = 7,5 × 4 = 30 cm.",
        dica: "Some a medida do lado 4 vezes (ou multiplique por 4)."
    },
    {
        id: "B3Q10", bloco: 3, aula: 4, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Perímetro — Contexto Cerca",
        display: "Temos um terreno retangular com 15 m de frente e 10 m de lateral. Quantos metros de tela serão usados para cercar tudo?",
        res: "50 m",
        alternativas: [
            { valor: "50 m", tipo: "acerto" },
            { valor: "150 m", tipo: "erro", categoria: "conceito", erro: "problema_confunde_cerca_area", descricao: "Calculou os metros quadrados de área do terreno em vez de calcular a cerca (borda).", peso: 3 },
            { valor: "25 m", tipo: "erro", categoria: "procedimento", erro: "problema_cerca_soma_parcial", descricao: "Somou as duas metragens descritas, mas esqueceu que cercar o terreno todo envolve os lados do fundo também.", peso: 2 },
            { valor: "52 m", tipo: "erro", categoria: "calculo", erro: "problema_erro_aritmetico_dobro", descricao: "Montou o contorno correto, mas errou a conta final no reagrupamento.", peso: 1 }
        ],
        passo: "Cercar algo é achar o perímetro (borda). A frente e os fundos têm 15 m cada. As duas laterais têm 10 m. 15+15+10+10 = 50 metros.",
        dica: "'Cercar' sempre remete a Perímetro. Dê a volta completa somando as 4 medidas."
    },

    // ── ÁREA ─────────────────────────────────────────────────────────────
    {
        id: "B3Q11", bloco: 3, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Área de Retângulo",
        display: "Um campo retangular possui 9 m de comprimento por 4 m de largura. Qual é a sua área?",
        res: "36 m²",
        alternativas: [
            { valor: "36 m²", tipo: "acerto" },
            { valor: "26 m²", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_area_perimetro_r", descricao: "Calculou a soma dos lados (perímetro) em vez de calcular a área interna.", peso: 3 },
            { valor: "13 m²", tipo: "erro", categoria: "procedimento", erro: "geometria_area_soma_lados_simples", descricao: "Apenas somou o 9 e o 4, misturando lógica de borda com a base da questão.", peso: 2 },
            { valor: "72 m²", tipo: "erro", categoria: "estrategia", erro: "geometria_area_multiplica_dobro", descricao: "Calculou a área corretamente e, sem motivo, dobrou o resultado.", peso: 1 }
        ],
        passo: "A área de um retângulo é o preenchimento de sua superfície. Multiplicamos comprimento × largura: 9 × 4 = 36 m².",
        dica: "Área é a 'parte de dentro'. Basta multiplicar um lado pelo outro."
    },
    {
        id: "B3Q12", bloco: 3, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Área de Quadrado",
        display: "Qual é a área de um quadrado que tem lado de 6 cm?",
        res: "36 cm²",
        alternativas: [
            { valor: "36 cm²", tipo: "acerto" },
            { valor: "24 cm²", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_area_perimetro_q", descricao: "Calculou 6 × 4 (perímetro) em vez de elevar a dimensão ao quadrado.", peso: 3 },
            { valor: "12 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_area_multiplica_por_dois", descricao: "Pegou a medida do lado e dobrou (x2), falhando no conceito da bidimensionalidade.", peso: 2 },
            { valor: "66 cm²", tipo: "erro", categoria: "estrategia", erro: "geometria_justaposicao_visual", descricao: "Colocou dois números 6 lada a lado como se a justaposição formasse o cálculo matemático.", peso: 1 }
        ],
        passo: "A área do quadrado é o lado vezes ele mesmo (lado²). A = 6 × 6 = 36 cm².",
        dica: "Área do quadrado é fácil: é só elevar o lado à potência 2."
    },
    {
        id: "B3Q13", bloco: 3, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Área de Triângulo",
        display: "Um triângulo tem base de 10 cm e altura de 6 cm. Qual é a área exata dele?",
        res: "30 cm²",
        alternativas: [
            { valor: "30 cm²", tipo: "acerto" },
            { valor: "60 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_triangulo_omite_divisao", descricao: "Multiplicou base por altura, esquecendo de dividir o resultado por 2.", peso: 2 },
            { valor: "16 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_area_soma_dimensoes_t", descricao: "Somou a base com a altura em vez de aplicar produto e divisão.", peso: 2 },
            { valor: "15 cm²", tipo: "erro", categoria: "calculo", erro: "geometria_triangulo_erro_divisao_extrema", descricao: "Cortou a área pela metade duas vezes, dividindo por 4 sem querer.", peso: 1 }
        ],
        passo: "A fórmula da área do triângulo é (Base × Altura) ÷ 2. Fazemos 10 × 6 = 60. Dividindo por 2, fica 30 cm².",
        dica: "Imagine que todo triângulo é a METADE de um retângulo. Faça base vezes altura, e depois divida ao meio!"
    },
    {
        id: "B3Q14", bloco: 3, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Área — Contexto Piso",
        display: "Você quer colocar piso numa sala retangular de 5 m de comprimento por 4 m de largura. Quantos metros quadrados de piso precisa comprar?",
        res: "20 m²",
        alternativas: [
            { valor: "20 m²", tipo: "acerto" },
            { valor: "18 m²", tipo: "erro", categoria: "conceito", erro: "problema_piso_confunde_com_perimetro", descricao: "Calculou a soma dos contornos da sala em vez de calcular a superfície coberta.", peso: 3 },
            { valor: "9 m²", tipo: "erro", categoria: "procedimento", erro: "problema_piso_soma_dimensoes", descricao: "Somou comprimento e largura e assumiu a variável de metros quadrados falsamente.", peso: 2 },
            { valor: "40 m²", tipo: "erro", categoria: "calculo", erro: "problema_piso_dobra_area", descricao: "Achou a área corretamente (20), mas a dobrou, possivelmente tentando abarcar outro aspecto arquitetônico fictício.", peso: 1 }
        ],
        passo: "Colocar piso é preencher área. Área = base × altura. 5 × 4 = 20 m².",
        dica: "Pisos, azulejos e grama tratam sempre de ÁREA (m²). Basta multiplicar os dois lados da sala."
    },
    {
        id: "B3Q15", bloco: 3, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Área vs Perímetro",
        display: "Se você DOBRAR a medida do lado de um quadrado, o que acontece com a ÁREA dele?",
        res: "Quadruplica (×4)",
        alternativas: [
            { valor: "Quadruplica (×4)", tipo: "acerto" },
            { valor: "Dobra (×2)", tipo: "erro", categoria: "conceito", erro: "geometria_relacao_linear_area", descricao: "Assumiu erroneamente que a relação de crescimento da área 2D segue a mesma regra linear das bordas 1D.", peso: 3 },
            { valor: "Fica igual", tipo: "erro", categoria: "interpretacao", erro: "geometria_nega_crescimento_superficie", descricao: "Negou o impacto visual e dimensional do crescimento do ente geométrico.", peso: 2 },
            { valor: "Triplica (×3)", tipo: "erro", categoria: "estrategia", erro: "geometria_relacao_chute_multiplo", descricao: "Apresentou um chute cego utilizando uma proporção não matemática.", peso: 1 }
        ],
        passo: "Área é lado ao quadrado. Se o lado passa de 1 para 2, a área vai de 1² (1) para 2² (4). A área cresce exponencialmente (4 vezes).",
        dica: "Numa tela de pintura, se você fizer o desenho duas vezes mais largo e duas vezes mais alto, você gastará quatro vezes mais tinta!"
    },

    // ── VOLUME ───────────────────────────────────────────────────────────
    {
        id: "B3Q16", bloco: 3, aula: 6, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Volume de Paralelepípedo",
        display: "Qual é o volume de uma caixa em formato de paralelepípedo que tem 5 cm de comprimento, 3 cm de largura e 4 cm de altura?",
        res: "60 cm³",
        alternativas: [
            { valor: "60 cm³", tipo: "acerto" },
            { valor: "12 cm³", tipo: "erro", categoria: "conceito", erro: "geometria_volume_soma_dimensoes", descricao: "Somou as três dimensões espaciais (5+3+4) em vez de aplicar o produto 3D.", peso: 3 },
            { valor: "120 cm³", tipo: "erro", categoria: "procedimento", erro: "geometria_volume_dobra_produto", descricao: "Calculou as 3 faces, mas dobrou o montante total, possivelmente misturando com cálculo de área superficial.", peso: 2 },
            { valor: "47 cm³", tipo: "erro", categoria: "calculo", erro: "geometria_volume_erro_tabuada", descricao: "Errou a tabuada na encadeação do produto triplo.", peso: 1 }
        ],
        passo: "O volume do paralelepípedo é o produto de suas três dimensões. V = 5 × 3 × 4 = 60 cm³.",
        dica: "Volume de caixas é só multiplicar os três números que você enxerga: Frente × Lado × Altura."
    },
    {
        id: "B3Q17", bloco: 3, aula: 6, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Volume de Cubo",
        display: "Qual é o volume de um cubo mágico cuja aresta (lado) mede exatos 5 cm?",
        res: "125 cm³",
        alternativas: [
            { valor: "125 cm³", tipo: "acerto" },
            { valor: "25 cm³", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_volume_area_face", descricao: "Eleveu a aresta apenas à potência 2, achando a área plana de um único lado do cubo.", peso: 3 },
            { valor: "15 cm³", tipo: "erro", categoria: "procedimento", erro: "geometria_volume_multiplica_tres", descricao: "Aplicou produto linear (5x3) fugindo da lei das potências espaciais.", peso: 2 },
            { valor: "75 cm³", tipo: "erro", categoria: "estrategia", erro: "geometria_volume_calculo_hibrido", descricao: "Achou a área de uma face (25) e multiplicou pelo número de dimensões (3), inventando um teorema.", peso: 2 }
        ],
        passo: "O cubo tem os 3 lados iguais. Volume é aresta elevada à potência 3. V = 5³ = 5 × 5 × 5 = 125 cm³.",
        dica: "Para calcular o volume do cubo, você deve multiplicar o lado por ele mesmo três vezes."
    },

    // ── UNIDADES DE CAPACIDADE ──────────────────────────────────────────
    {
        id: "B3Q18", bloco: 3, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Capacidade",
        display: "Uma garrafa de suco contém 2,5 litros. Isso equivale a quantos mililitros (mL)?",
        res: "2.500 mL",
        alternativas: [
            { valor: "2.500 mL", tipo: "acerto" },
            { valor: "250 mL", tipo: "erro", categoria: "procedimento", erro: "conversao_volume_fator_cem", descricao: "Multiplicou por 100 em vez do fator correto (1.000) utilizado no prefixo mili.", peso: 2 },
            { valor: "25 mL", tipo: "erro", categoria: "procedimento", erro: "conversao_volume_fator_dez", descricao: "Apenas removeu a vírgula do numeral, como se fosse um deslocamento de base 10.", peso: 2 },
            { valor: "25.000 mL", tipo: "erro", categoria: "atencao", erro: "conversao_volume_excesso_zeros_mL", descricao: "Acrescentou uma casa decimal excedente no ato da multiplicação por 1.000.", peso: 1 }
        ],
        passo: "A palavra 'mili' sinaliza que 1 Litro é quebrado em 1.000 mL. Portanto, multiplicamos: 2,5 × 1.000 = 2.500 mL.",
        dica: "Lembre da garrafa PET: 2 litros são 2.000 ml. Então, 2,5 litros é um pouco mais."
    },
    {
        id: "B3Q19", bloco: 3, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA20", bncc_desc: "Conversão de Capacidade — Contexto",
        display: "A conta de água marcou que a piscina encheu com 12.000 litros. Quantos metros cúbicos (m³) isso representa?",
        res: "12 m³",
        alternativas: [
            { valor: "12 m³", tipo: "acerto" },
            { valor: "1.200 m³", tipo: "erro", categoria: "procedimento", erro: "conversao_volume_fator_dez_m3", descricao: "Dividiu a litragem por 10 e não por 1.000 na volta da conversão volumétrica.", peso: 2 },
            { valor: "120 m³", tipo: "erro", categoria: "procedimento", erro: "conversao_volume_fator_cem_m3", descricao: "Dividiu por 100, associando falsamente a centímetro quadrado/cúbico.", peso: 2 },
            { valor: "0,12 m³", tipo: "erro", categoria: "calculo", erro: "conversao_volume_excesso_divisao", descricao: "Dividiu exageradamente, zerando toda a classe de grandeza real da piscina.", peso: 1 }
        ],
        passo: "A regra padrão é: 1 metro cúbico (m³) abriga 1.000 litros. Se temos 12.000 litros, fazemos a divisão: 12.000 ÷ 1.000 = 12 m³.",
        dica: "Para converter a água da piscina (Litros) para a conta de água (m³), é só dividir a quantidade por 1.000."
    },

    // ── PROBLEMAS INTEGRADORES ───────────────────────────────────────────
    {
        id: "B3Q20", bloco: 3, aula: 8, tipo: "aritmetica",
        bncc: "EF08MA07", bncc_desc: "Grandezas — Problema Integrador",
        display: "Você vai azulejar um cômodo de 4,5 m de comprimento por 3 m de largura. A cerâmica custa R$ 45,00 o metro quadrado. Qual será o custo total da compra?",
        res: "R$ 607,50",
        alternativas: [
            { valor: "R$ 607,50", tipo: "acerto" },
            { valor: "R$ 675,00", tipo: "erro", categoria: "conceito", erro: "problema_custo_usa_perimetro_total", descricao: "Calculou o perímetro completo da sala (15) e usou esse valor linear para multiplicar pelo custo da área plana.", peso: 3 },
            { valor: "R$ 337,50", tipo: "erro", categoria: "conceito", erro: "problema_custo_usa_soma_lados_parcial", descricao: "Somou apenas os dois lados (7,5) e multiplicou pelo custo financeiro de m².", peso: 3 },
            { valor: "R$ 135,00", tipo: "erro", categoria: "procedimento", erro: "problema_custo_usa_uma_dimensao", descricao: "Ignorou a planta inteira e multiplicou o preço da loja apenas por um dos lados da sala.", peso: 2 }
        ],
        passo: "Primeiro a Área: 4,5 × 3 = 13,5 m². Depois o Custo Financeiro: pegue os 13,5 m² e multiplique por R$ 45,00. Dá R$ 607,50.",
        dica: "Primeiro, descubra quantos 'metros quadrados' (área) a sala tem multiplicando as laterais. Depois, multiplique o resultado pelo preço da loja."
    }
];
