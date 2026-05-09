// js/data/questions/bloco1_trilha2.js
// Bloco 1 — A Base Numérica | Trilha 2 Completa
// Aula 3: Multiplicação | Aula 4: Divisão | Aula 5: Expressões Numéricas
// Clusters: SISTEMA_NUMERICO, ALGORITMO_MULTIPLICACAO, MODELAGEM_SITUACIONAL

export const bloco1_trilha2 = [

    // ── AULA 3: MULTIPLICAÇÃO (ALGORITMO_MULTIPLICACAO) ──────────────────

    {
        id: "B1T2Q01", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Sentido",
        display: "7 + 7 + 7 + 7 = ? Qual multiplicação representa essa soma?",
        res: "4 × 7",
        alternativas: [
            { valor: "4 × 7", tipo: "acerto" },
            { valor: "7 × 7", tipo: "erro", categoria: "conceito", erro: "multiplicacao_ignora_fatores", descricao: "Tratou a parcela repetida como o próprio multiplicador.", peso: 3 },
            { valor: "4 + 7", tipo: "erro", categoria: "atencao", erro: "multiplicacao_confunde_operador", descricao: "Identificou os numerais, mas utilizou o operador de adição.", peso: 2 },
            { valor: "7 ÷ 4", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_operador_inverso", descricao: "Aplicou a divisão em um contexto de acúmulo de parcelas.", peso: 1 }
        ],
        passo: "A multiplicação é a soma de parcelas iguais. Se o 7 aparece 4 vezes, temos 4 × 7.",
        dica: "Conte quantas vezes o número se repete. Esse número de vezes será o seu multiplicador!"
    },
    
    {
        id: "B1T2Q02", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "Calcule: 24 × 5 = ?",
        res: "120",
        alternativas: [
            { valor: "120", tipo: "acerto" },
            { valor: "29", tipo: "erro", categoria: "conceito", erro: "multiplicacao_operacao_aditiva", descricao: "Realizou a soma dos fatores em vez da multiplicação.", peso: 3 },
            { valor: "100", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_esquece_unidade", descricao: "Multiplicou apenas a dezena (20x5), ignorando a unidade do multiplicando.", peso: 2 },
            { valor: "124", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_erro_misto_soma", descricao: "Multiplicou a dezena e somou a unidade de forma isolada.", peso: 2 }
        ],
        passo: "5 × 4 = 20 (fica 0, sobe 2). 5 × 2 = 10, mais os 2 que subiram = 12. Resultado: 120.",
        dica: "Multiplique o 5 pelas unidades (4) e depois pelas dezenas (2). Não esqueça do que 'sobe'!"
    },
    {
        id: "B1T2Q05", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "Resolva: 45 × 13 = ?",
        res: "585",
        alternativas: [
            { valor: "585", tipo: "acerto" },
            { valor: "495", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_ignora_posicao_dezena", descricao: "Esqueceu de pular uma casa ou usar o zero ao multiplicar pela dezena do multiplicador.", peso: 3 },
            { valor: "555", tipo: "erro", categoria: "calculo", erro: "multiplicacao_erro_soma_final", descricao: "Realizou as multiplicações parciais corretamente, mas falhou na soma final.", peso: 2 },
            { valor: "580", tipo: "erro", categoria: "calculo", erro: "multiplicacao_falha_unidade", descricao: "Erro de tabuada básica no primeiro nível da conta.", peso: 1 }
        ],
        passo: "Etapa 1: 3 × 45 = 135. Etapa 2: 10 × 45 = 450. Soma final: 135 + 450 = 585.",
        dica: "Quando começar a multiplicar pelo '1' do 13, lembre-se de colocar um zero na casa das unidades do resultado parcial!"
    },
    

    // ── AULA 4: DIVISÃO (MODELAGEM_SITUACIONAL) ──────────────────────────

    {
        id: "B1T2Q09", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Resto",
        display: "Ao dividir 130 por 4, qual o quociente e o resto?",
        res: "32 com resto 2",
        alternativas: [
            { valor: "32 com resto 2", tipo: "acerto" },
            { valor: "32 com resto 0", tipo: "erro", categoria: "conceito", erro: "divisao_ignora_resto_existente", descricao: "Não identificou a sobra final, tratando a divisão como exata.", peso: 3 },
            { valor: "30 com resto 10", tipo: "erro", categoria: "procedimento", erro: "divisao_resto_maior_divisor", descricao: "Parou a conta com um resto maior que o divisor, falhando no algoritmo.", peso: 2 },
            { valor: "33 com resto 2", tipo: "erro", categoria: "calculo", erro: "divisao_quociente_errado", descricao: "Erro de tabuada ao definir o valor do quociente.", peso: 1 }
        ],
        passo: "13 ÷ 4 dá 3 e sobra 1. Baixa o 0 (fica 10). 10 ÷ 4 dá 2 e sobram 2. Resultado: 32 com resto 2.",
        dica: "O resto é o que 'sobra' da conta. Ele deve ser sempre menor que o número pelo qual você está dividindo."
    },
    {
        id: "B1T2Q10", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Contexto",
        display: "4 amigos dividiram R$ 130 igualmente. Eles não usam moedas (apenas notas). Quanto cada um recebe e quanto sobra no total?",
        res: "R$ 32 e sobram R$ 2",
        alternativas: [
            { valor: "R$ 32 e sobram R$ 2", tipo: "acerto" },
            { valor: "R$ 32,50", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_condicao_inteira", descricao: "Ignorou a restrição 'sem moedas', realizando uma divisão decimal.", peso: 3 },
            { valor: "R$ 30 e sobram R$ 10", tipo: "erro", categoria: "procedimento", erro: "problema_divisao_incompleta", descricao: "Não esgotou as possibilidades de divisão das dezenas restantes.", peso: 2 },
            { valor: "R$ 35", tipo: "erro", categoria: "calculo", erro: "problema_excede_valor_total", descricao: "Calculou um valor individual que multiplicado ultrapassa o total de 130.", peso: 1 }
        ],
        passo: "Dividir R$ 130 por 4 em partes inteiras resulta em R$ 32 para cada. Os R$ 2 que restam não podem ser divididos sem usar moedas.",
        dica: "Atenção à regra: 'sem moedas'. Isso significa que você deve parar a conta quando chegar no resto inteiro!"
    }
];
