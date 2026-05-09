/**
 * bloco5.js — Estatística e Dados
 * Foco: Medidas Centrais, Probabilidade e Análise Crítica
 * Clusters: ESTATISTICA_DESCRITIVA, ANALISE_GRAFICA, PENSAMENTO_CRITICO
 */

export const bloco5 = [

    // ── AULA 1: MÉDIA ARITMÉTICA (ESTATISTICA_DESCRITIVA) ─────────────────

    {
        id: "B5Q01", bloco: 5, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Média Aritmética",
        display: "As notas de um aluno foram: 6, 8, 7, 9 e 5. Qual é a média final?",
        res: "7",
        alternativas: [
            { valor: "7", tipo: "acerto" },
            { valor: "35", tipo: "erro", categoria: "conceito", erro: "media_apenas_soma", descricao: "Apresentou a soma total, esquecendo de dividir pela quantidade de termos.", peso: 3 },
            { valor: "7,5", tipo: "erro", categoria: "calculo", erro: "media_erro_divisao", descricao: "Somou corretamente (35), mas falhou na divisão por 5.", peso: 1 },
            { valor: "8", tipo: "erro", categoria: "estrategia", erro: "media_elege_valor_maximo", descricao: "Selecionou um valor alto do conjunto sem realizar o cálculo.", peso: 2 }
        ],
        passo: "Soma das notas: 6 + 8 + 7 + 9 + 5 = 35. Média: 35 ÷ 5 = 7.",
        dica: "A média é o 'ponto de equilíbrio'. Some tudo e divida o resultado pela quantidade de notas!"
    },
    

    // ── AULA 2: MEDIANA E MODA (ESTATISTICA_DESCRITIVA) ───────────────────

    {
        id: "B5Q04", bloco: 5, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Mediana — Conceito",
        display: "Qual é a mediana do conjunto de dados: 3, 7, 2, 9, 5, 8, 4?",
        res: "5",
        alternativas: [
            { valor: "5", tipo: "acerto" },
            { valor: "9", tipo: "erro", categoria: "conceito", erro: "mediana_sem_ordenacao", descricao: "Pegou o número do meio da lista original sem colocá-la em ordem crescente.", peso: 3 },
            { valor: "5,4", tipo: "erro", categoria: "conceito", erro: "mediana_confunde_com_media", descricao: "Calculou a média aritmética em vez de achar o valor central.", peso: 3 },
            { valor: "4", tipo: "erro", categoria: "procedimento", erro: "mediana_erro_posicional", descricao: "Ordenou os dados, mas contou a posição central de forma errada.", peso: 2 }
        ],
        passo: "1º passo (Rol): 2, 3, 4, 5, 7, 8, 9. O número que está exatamente no meio é o 5.",
        dica: "Dica de Ouro: Mediana exige ordem! Coloque os números na fila (do menor para o maior) antes de achar o centro."
    },
    

    {
        id: "B5Q07", bloco: 5, aula: 2, tipo: "critica",
        bncc: "EF08MA22", bncc_desc: "Análise de Outliers",
        display: "Salários de uma pequena empresa: R$ 1.000, R$ 1.000, R$ 1.200, R$ 1.500 e R$ 10.000. Qual medida melhor representa o 'salário comum' desse grupo?",
        res: "Mediana (R$ 1.200)",
        alternativas: [
            { valor: "Mediana (R$ 1.200)", tipo: "acerto" },
            { valor: "Média (R$ 2.940)", tipo: "erro", categoria: "conceito", erro: "critica_ignora_outlier", descricao: "Não percebeu que o valor de 10 mil 'puxa' a média para cima, distorcendo a realidade.", peso: 3 },
            { valor: "Moda (R$ 1.000)", tipo: "erro", categoria: "interpretacao", erro: "critica_moda_subestima", descricao: "Escolheu o valor mais baixo por ser frequente, mas ele não representa bem o centro do grupo.", peso: 2 },
            { valor: "R$ 10.000", tipo: "erro", categoria: "atencao", erro: "critica_elege_valor_extremo", descricao: "Elegeu o maior valor, ignorando todos os outros funcionários.", peso: 1 }
        ],
        passo: "O salário de 10 mil é um 'outlier' (ponto fora da curva). Ele faz a média subir muito. A mediana (1.200) ignora os extremos e mostra o meio real.",
        dica: "ADA explica: Se o Bill Gates entrar em um bar, a 'média' de dinheiro de todos sobe para milhões, mas ninguém ficou rico. Use a mediana nesses casos!"
    },

    // ── AULA 3: ANÁLISE GRÁFICA (ANALISE_GRAFICA) ─────────────────────────

    {
        id: "B5Q20", bloco: 5, aula: 9, tipo: "critica",
        bncc: "EF09MA20", bncc_desc: "Gráficos Enganosos",
        display: "Um gráfico de barras que compara vendas começa o eixo vertical no número 98 em vez de 0. Qual o efeito visual disso?",
        res: "Exagera pequenas diferenças entre as barras",
        alternativas: [
            { valor: "Exagera pequenas diferenças entre as barras", tipo: "acerto" },
            { valor: "Não causa nenhum efeito", tipo: "erro", categoria: "interpretacao", erro: "grafico_leitura_passiva", descricao: "Não percebeu que o truncamento do eixo é uma armadilha visual.", peso: 3 },
            { valor: "Torna os números mentirosos", tipo: "erro", categoria: "conceito", erro: "grafico_confunde_visual_com_dado", descricao: "Achou que os números mudaram, quando na verdade apenas o desenho mudou.", peso: 2 },
            { valor: "Inverte as barras", tipo: "erro", categoria: "atencao", erro: "grafico_erro_visual_basico", descricao: "Confundiu a posição das barras no gráfico.", peso: 1 }
        ],
        passo: "Se o eixo começa no 98, uma diferença de 1 (de 98 para 99) parece enorme, pois a barra do 99 parecerá o dobro do tamanho da barra do 98,5.",
        dica: "Olho vivo! Se o gráfico não começar do ZERO, ele pode estar tentando transformar uma faísca em um incêndio!"
    },
    

    // ── AULA 4: PROBABILIDADE (PROBABILIDADE) ─────────────────────────────

    {
        id: "B5Q11", bloco: 5, aula: 4, tipo: "aritmetica",
        bncc: "EF09MA20", bncc_desc: "Probabilidade Clássica",
        display: "Ao lançar um dado de 6 faces, qual a probabilidade de sair um número PAR?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "1/6", tipo: "erro", categoria: "conceito", erro: "prob_foco_numeral_unico", descricao: "Calculou a chance de sair UM número específico, ignorando o critério 'par'.", peso: 3 },
            { valor: "3", tipo: "erro", categoria: "conceito", erro: "prob_apresenta_inteiro", descricao: "Respondeu com a contagem de casos (3 pares) e não com a probabilidade (razão).", peso: 3 },
            { valor: "1/3", tipo: "erro", categoria: "procedimento", erro: "prob_contagem_errada", descricao: "Identificou a quantidade errada de números pares no dado.", peso: 2 }
        ],
        passo: "Pares: {2, 4, 6} (são 3). Total: {1, 2, 3, 4, 5, 6} (são 6). Probabilidade = 3/6, que simplificado dá 1/2.",
        dica: "A fórmula é simples: o que eu quero (3 números) dividido pelo que pode acontecer (6 números)."
    },
    

    {
        id: "B5Q15", bloco: 5, aula: 5, tipo: "critica",
        bncc: "EF09MA20", bncc_desc: "Interpretação de Amostras",
        display: "Um comercial diz: '90% dos usuários aprovam o produto!', mas a pesquisa ouviu apenas 10 pessoas. Essa afirmação é confiável?",
        res: "Não — a amostra é muito pequena",
        alternativas: [
            { valor: "Não — a amostra é muito pequena", tipo: "acerto" },
            { valor: "Sim — 90% é um número muito alto", tipo: "erro", categoria: "interpretacao", erro: "critica_foco_no_percentual", descricao: "Deixou-se levar pelo número alto sem checar a base de dados.", peso: 3 },
            { valor: "Sim — a matemática não mente", tipo: "erro", categoria: "conceito", erro: "critica_dogmatismo", descricao: "Acredita que qualquer porcentagem é uma verdade absoluta.", peso: 3 },
            { valor: "Depende do preço do produto", tipo: "erro", categoria: "estrategia", erro: "critica_desvia_foco", descricao: "Trouxe fatores externos para uma análise que deveria ser estatística.", peso: 2 }
        ],
        passo: "Em uma amostra de 10 pessoas, se apenas uma mudar de opinião, o resultado cai 10%. É uma base instável demais para representar milhares de usuários.",
        dica: "Estatística séria precisa de uma amostra grande e diversa. Cuidado com o 'Poder dos Pequenos Números'!"
    }
];
