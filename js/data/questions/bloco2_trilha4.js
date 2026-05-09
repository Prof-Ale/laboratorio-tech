// js/data/questions/bloco2_trilha4.js
// Bloco 2 — Números e Operações | Trilha 4
// Aula 9: Operações com Decimais | Aula 10: Proporcionalidade — Razão e Proporção
// Clusters: OPERACOES_DECIMAIS, MODELAGEM_SITUACIONAL, RACIOCINIO_LOGICO

export const bloco2_trilha4 = [

    // ── AULA 9: OPERAÇÕES COM DECIMAIS (OPERACOES_DECIMAIS) ──────────────

    {
        id: "B2T4Q01", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Decimais",
        display: "Calcule a soma: 3,7 + 2,45 = ?",
        res: "6,15",
        alternativas: [
            { valor: "6,15", tipo: "acerto" },
            { valor: "5,75", tipo: "erro", categoria: "procedimento", erro: "decimal_soma_desalinha_virgula", descricao: "Alinhou os números pela direita (como inteiros), ignorando a posição das vírgulas.", peso: 3 },
            { valor: "6,05", tipo: "erro", categoria: "calculo", erro: "decimal_soma_falha_reagrupamento", descricao: "Alinhou corretamente, mas falhou no transporte (vai um) nos décimos.", peso: 2 },
            { valor: "6,1", tipo: "erro", categoria: "atencao", erro: "decimal_omite_casa_centesimal", descricao: "Ignorou o dígito da casa centesimal do segundo fator durante a soma.", peso: 1 }
        ],
        passo: "Regra de ouro: vírgula embaixo de vírgula! Complete com zero: 3,70 + 2,45. Somando, temos 6,15.",
        dica: "Dica da ADA: Para não errar, complete o 3,7 com um zero (3,70) para ele ficar com o mesmo tamanho do 2,45!"
    },
    
    {
        id: "B2T4Q03", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Decimais",
        display: "Qual o resultado de 1,5 × 2,4?",
        res: "3,6",
        alternativas: [
            { valor: "3,6", tipo: "acerto" },
            { valor: "36", tipo: "erro", categoria: "conceito", erro: "decimal_multiplicacao_ignora_casas_totais", descricao: "Multiplicou como inteiros e não devolveu as casas decimais ao resultado final.", peso: 3 },
            { valor: "0,36", tipo: "erro", categoria: "procedimento", erro: "decimal_multiplicacao_excesso_casas", descricao: "Aplicou mais casas decimais do que a soma das casas dos fatores exigia.", peso: 2 },
            { valor: "3,06", tipo: "erro", categoria: "calculo", erro: "decimal_multiplicacao_erro_tabuada", descricao: "Erro aritmético básico durante o algoritmo de multiplicação.", peso: 1 }
        ],
        passo: "Multiplique 15 × 24 = 360. Como cada fator tem 1 casa (total 2), recue 2 casas no resultado: 3,60 (ou 3,6).",
        dica: "Faça a conta de vezes normal. No final, conte os 'pulos' da vírgula: um do 1,5 mais um do 2,4. Devolva esses dois pulos no resultado!"
    },
    {
        id: "B2T4Q08", bloco: 2, aula: 9, tipo: "investigacao",
        bncc: "EF07MA04", bncc_desc: "Decimais — Investigação",
        display: "Investigação: Qual valor é MAIOR, a soma (0,1 + 0,1) ou o produto (0,1 × 0,1)?",
        res: "A soma (0,2 > 0,01)",
        alternativas: [
            { valor: "A soma (0,2 > 0,01)", tipo: "acerto" },
            { valor: "O produto (0,01 > 0,2)", tipo: "erro", categoria: "conceito", erro: "decimal_investigacao_multiplicacao_maior", descricao: "Presumiu que o operador de multiplicação sempre amplia o valor, ignorando o efeito em decimais próprios.", peso: 3 },
            { valor: "São iguais", tipo: "erro", categoria: "estrategia", erro: "decimal_investigacao_neutralidade_falsa", descricao: "Assumiu que o dígito 1 anula diferenças operacionais entre soma e produto.", peso: 2 },
            { valor: "0,11", tipo: "erro", categoria: "calculo", erro: "decimal_soma_justaposta", descricao: "Justapôs os números na soma em vez de realizar a operação posicional.", peso: 2 }
        ],
        passo: "0,1 + 0,1 = 0,2. Mas 0,1 × 0,1 = 0,01. Multiplicar fatias menores que 1 faz o resultado encolher!",
        dica: "Atenção: no mundo dos decimais menores que 1, multiplicar pode ser 'dividir' o seu pedaço!"
    },

    // ── AULA 10: PROPORCIONALIDADE (MODELAGEM_SITUACIONAL / RACIOCINIO_LOGICO) ──

    {
        id: "B2T4Q11", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporção — Produto Cruzado",
        display: "As frações 2/3 e 8/12 formam uma proporção válida?",
        res: "Sim (2×12 = 3×8)",
        alternativas: [
            { valor: "Sim (2×12 = 3×8)", tipo: "acerto" },
            { valor: "Não (2×12 ≠ 3×8)", tipo: "erro", categoria: "calculo", erro: "proporcao_erro_multiplicacao_cruzada", descricao: "Errou o cálculo dos produtos cruzados (extremos e meios).", peso: 2 },
            { valor: "Sim, mas só por serem pares", tipo: "erro", categoria: "conceito", erro: "proporcao_justificativa_pseudo_matematica", descricao: "Atribuiu a proporção a uma característica isolada (paridade) e não à razão constante.", peso: 3 },
            { valor: "Não, pois o 12 é maior que o 3", tipo: "erro", categoria: "interpretacao", erro: "proporcao_foco_na_magnitude_isolada", descricao: "Negou a proporção por observar apenas o crescimento dos números de baixo.", peso: 2 }
        ],
        passo: "O produto cruzado deve ser igual: 2 × 12 = 24 e 3 × 8 = 24. Como 24 = 24, elas são proporcionais.",
        dica: "Desenhe um 'X' multiplicando o de cima de uma pelo de baixo da outra. Se der o mesmo valor, é proporção!"
    },
    
    {
        id: "B2T4Q14", bloco: 2, aula: 10, tipo: "contexto",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade Inversa",
        display: "Um tanque é cheio por 4 torneiras em 6 horas. Quantas horas levaria se fossem 8 torneiras idênticas?",
        res: "3 horas",
        alternativas: [
            { valor: "3 horas", tipo: "acerto" },
            { valor: "12 horas", tipo: "erro", categoria: "conceito", erro: "regra3_trata_inversa_como_direta", descricao: "Calculou como se dobrar as torneiras dobrasse o tempo necessário (proporção direta).", peso: 3 },
            { valor: "48 horas", tipo: "erro", categoria: "procedimento", erro: "regra3_multiplicacao_sem_sentido", descricao: "Multiplicou os fatores sem estabelecer a relação divisional inversa.", peso: 2 },
            { valor: "2 horas", tipo: "erro", categoria: "calculo", erro: "regra3_divisao_imprecisa", descricao: "Percebeu que o tempo diminuía, mas errou a conta de divisão final.", peso: 2 }
        ],
        passo: "Proporção Inversa: se dobramos as torneiras (vazão), o tempo cai pela metade. 6h ÷ 2 = 3h.",
        dica: "Pense com a ADA: se você ligar MAIS torneiras, a piscina vai encher MAIS RÁPIDO. O tempo tem que diminuir!"
    },
    {
        id: "B2T4Q18", bloco: 2, aula: 10, tipo: "conceito",
        bncc: "EF07MA04", bncc_desc: "Tipo de Proporcionalidade",
        display: "Na economia, quando a cotação do dólar SOBE, com os mesmos 100 Reais você compra:",
        res: "Menos dólares (Inversa)",
        alternativas: [
            { valor: "Menos dólares (Inversa)", tipo: "acerto" },
            { valor: "Mais dólares (Direta)", tipo: "erro", categoria: "conceito", erro: "proporcao_confunde_sentido_mercado", descricao: "Assumiu que cotações altas geram maior volume de compra.", peso: 3 },
            { valor: "A mesma quantidade", tipo: "erro", categoria: "estrategia", erro: "proporcao_estatica_ilusoria", descricao: "Ignorou o efeito da taxa de câmbio sobre o poder de compra.", peso: 2 },
            { valor: "Depende da nota usada", tipo: "erro", categoria: "interpretacao", erro: "proporcao_variavel_social_irrelevante", descricao: "Substituiu a lei matemática por uma variável de logística cotidiana.", peso: 1 }
        ],
        passo: "Se o preço (cotação) aumenta, a quantidade que você consegue comprar diminui. Isso é Proporcionalidade Inversa.",
        dica: "É como o preço do pão: se o pão ficar mais caro, com a sua mesma moedinha você leva menos pães para casa."
    }
];
