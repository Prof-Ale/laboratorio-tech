// js/data/questions/bloco5.js
// Bloco 5 — Estatística e Dados
// EF08MA22, EF09MA20 — Gráficos, Média, Mediana, Moda, Probabilidade
// Clusters: ESTATISTICA_DESCRITIVA, ANALISE_GRAFICA, PROBABILIDADE, PENSAMENTO_CRITICO

export const bloco5 = [

    // ── MÉDIA ARITMÉTICA (ESTATISTICA_DESCRITIVA) ─────────────────────────
    {
        id: "B5Q01", bloco: 5, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Média Aritmética",
        display: "Notas de um aluno: 6, 8, 7, 9 e 5. Qual é a média final?",
        res: "7",
        alternativas: [
            { valor: "7", tipo: "acerto" },
            { valor: "7,5", tipo: "erro", categoria: "calculo", erro: "media_erro_divisao", descricao: "Realizou a soma corretamente (35), mas falhou na divisão pelo número de termos.", peso: 1 },
            { valor: "35", tipo: "erro", categoria: "conceito", erro: "media_apenas_soma", descricao: "Apresentou a soma total dos valores, ignorando a etapa de divisão pela quantidade de elementos.", peso: 3 },
            { valor: "8", tipo: "erro", categoria: "estrategia", erro: "media_elege_valor_maximo", descricao: "Selecionou um valor alto do conjunto sem realizar o cálculo de equilíbrio.", peso: 2 }
        ],
        passo: "Média = (6+8+7+9+5) ÷ 5 = 35 ÷ 5 = 7.",
        dica: "A média é o valor de equilíbrio: some tudo e divida pela quantidade de notas."
    },
    {
        id: "B5Q02", bloco: 5, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Média — Valor Desconhecido",
        display: "Em três provas, um aluno tirou 7 e 8. Para ter média 8, que nota ele precisa tirar na terceira prova?",
        res: "9",
        alternativas: [
            { valor: "9", tipo: "acerto" },
            { valor: "8", tipo: "erro", categoria: "conceito", erro: "media_desconhecida_replica_objetivo", descricao: "Presumiu que a nota faltante deve ser igual à média desejada, ignorando o déficit das notas anteriores.", peso: 3 },
            { valor: "10", tipo: "erro", categoria: "calculo", erro: "media_desconhecida_erro_diferenca", descricao: "Identificou a necessidade de uma nota superior, mas errou o cálculo da soma necessária (24 - 15).", peso: 1 },
            { valor: "7", tipo: "erro", categoria: "interpretacao", erro: "media_desconhecida_escolha_aleatoria", descricao: "Selecionou a menor nota já obtida, o que reduziria a média em vez de elevar.", peso: 2 }
        ],
        passo: "Se a média de 3 provas deve ser 8, a soma total deve ser 24 (8×3). Como ele já tem 15 (7+8), falta tirar 9 (24-15).",
        dica: "Pense no total de pontos: 3 provas com média 8 precisam somar 24 pontos no total."
    },

    // ── MEDIANA (ESTATISTICA_DESCRITIVA) ──────────────────────────────────
    {
        id: "B5Q04", bloco: 5, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Mediana",
        display: "Conjunto de dados: 3, 7, 2, 9, 5, 8, 4. Qual é a mediana?",
        res: "5",
        alternativas: [
            { valor: "5", tipo: "acerto" },
            { valor: "9", tipo: "erro", categoria: "conceito", erro: "mediana_sem_ordenacao", descricao: "Selecionou o termo central da lista original sem realizar o ordenamento (rol).", peso: 3 },
            { valor: "5,4", tipo: "erro", categoria: "conceito", erro: "mediana_confunde_com_media", descricao: "Calculou a média aritmética em vez de identificar o valor central.", peso: 3 },
            { valor: "4", tipo: "erro", categoria: "procedimento", erro: "mediana_erro_posicional", descricao: "Ordenou os dados corretamente, mas identificou a posição central de forma equivocada.", peso: 2 }
        ],
        passo: "Primeiro coloque em ordem: 2, 3, 4, 5, 7, 8, 9. O valor que fica exatamente no meio é o 5.",
        dica: "Importante: coloque os números em ordem (do menor para o maior) antes de pegar o do meio."
    },
    
    {
        id: "B5Q05", bloco: 5, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Mediana — Quantidade Par",
        display: "Qual a mediana dos dados: 4, 8, 3, 7, 6, 5?",
        res: "5,5",
        alternativas: [
            { valor: "5,5", tipo: "acerto" },
            { valor: "6", tipo: "erro", categoria: "procedimento", erro: "mediana_par_elege_um_central", descricao: "Em um conjunto par, selecionou um dos valores centrais em vez de realizar a média entre eles.", peso: 2 },
            { valor: "5", tipo: "erro", categoria: "procedimento", erro: "mediana_par_erro_ordenacao", descricao: "Falhou no ordenamento ou na identificação do par central.", peso: 2 },
            { valor: "7", tipo: "erro", categoria: "atencao", erro: "mediana_par_valor_externo", descricao: "Selecionou um valor das extremidades do conjunto ordenado.", peso: 1 }
        ],
        passo: "Ordem: 3, 4, 5, 6, 7, 8. Como há 6 números, pegamos os dois do meio (5 e 6) e tiramos a média: (5+6) ÷ 2 = 5,5.",
        dica: "Quando não há um único número no meio, some os dois centrais e divida por 2."
    },

    // ── MODA (ESTATISTICA_DESCRITIVA) ─────────────────────────────────────
    {
        id: "B5Q06", bloco: 5, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Moda",
        display: "Dados coletados: 2, 5, 3, 5, 7, 2, 5, 8. Qual é a moda desse conjunto?",
        res: "5",
        alternativas: [
            { valor: "5", tipo: "acerto" },
            { valor: "2", tipo: "erro", categoria: "atencao", erro: "moda_frequencia_secundaria", descricao: "Identificou um valor que se repete, mas não o de maior frequência absoluta.", peso: 1 },
            { valor: "7", tipo: "erro", categoria: "interpretacao", erro: "moda_confunde_com_maximo", descricao: "Confundiu moda com o valor máximo do conjunto.", peso: 2 },
            { valor: "4,6", tipo: "erro", categoria: "conceito", erro: "moda_confunde_com_media", descricao: "Calculou a média aritmética em vez de observar a repetição.", peso: 3 }
        ],
        passo: "A moda é o valor que mais se repete. O 5 aparece 3 vezes, enquanto os outros aparecem menos.",
        dica: "Moda lembra 'o que está na moda' (o que mais aparece nas ruas/dados)."
    },

    // ── PENSAMENTO CRÍTICO (ESTATISTICA_DESCRITIVA) ────────────────────────
    {
        id: "B5Q07", bloco: 5, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA22", bncc_desc: "Média, Mediana e Moda — Diferenças",
        display: "Salários: R$ 1.000; R$ 1.000; R$ 1.200; R$ 1.500; R$ 10.000. Qual medida representa melhor a maioria desse grupo?",
        res: "Mediana (R$ 1.200)",
        alternativas: [
            { valor: "Mediana (R$ 1.200)", tipo: "acerto" },
            { valor: "Média (R$ 2.940)", tipo: "erro", categoria: "conceito", erro: "critica_ignora_outlier_na_media", descricao: "Não percebeu que o valor extremo (10.000) distorce a média para cima, tornando-a pouco representativa.", peso: 3 },
            { valor: "Moda (R$ 1.000)", tipo: "erro", categoria: "interpretacao", erro: "critica_moda_subestima_grupo", descricao: "Escolheu o valor mais baixo por ser frequente, ignorando que a mediana reflete melhor a distribuição central.", peso: 2 },
            { valor: "Todas são iguais", tipo: "erro", categoria: "atencao", erro: "critica_falta_analise_dados", descricao: "Não realizou a comparação entre as medidas de tendência central.", peso: 1 }
        ],
        passo: "A média (2.940) é alta demais por causa do salário de 10 mil. A mediana (1.200) mostra melhor o que a maioria ganha.",
        dica: "Quando um valor é muito diferente dos outros (muito alto ou muito baixo), a mediana é mais confiável que a média."
    },

    // ── LEITURA DE GRÁFICOS (ANALISE_GRAFICA) ─────────────────────────────
    {
        id: "B5Q09", bloco: 5, aula: 3, tipo: "aritmetica",
        bncc: "EF09MA20", bncc_desc: "Interpretação de Gráfico",
        display: "Em uma turma de 40 alunos, 45% preferem futebol. Quantos alunos isso representa?",
        res: "18 alunos",
        alternativas: [
            { valor: "18 alunos", tipo: "acerto" },
            { valor: "45 alunos", tipo: "erro", categoria: "conceito", erro: "grafico_confunde_percentual_absoluto", descricao: "Tratou o valor percentual (45) como se fosse a quantidade absoluta de alunos, excedendo o total da turma.", peso: 3 },
            { valor: "22 alunos", tipo: "erro", categoria: "calculo", erro: "grafico_erro_multiplicacao_percentual", descricao: "Realizou a operação 0,45 × 40 mas cometeu erro aritmético no produto.", peso: 1 },
            { valor: "9 alunos", tipo: "erro", categoria: "procedimento", erro: "grafico_erro_escala_percentual", descricao: "Dividiu o total por um fator arbitrário sem aplicar a taxa de 45%.", peso: 2 }
        ],
        passo: "Cálculo: 45% de 40 = 0,45 × 40 = 18 alunos.",
        dica: "Para saber a quantidade real, multiplique o total de alunos pela porcentagem (ex: 40 × 0,45)."
    },

    // ── PROBABILIDADE (PROBABILIDADE) ─────────────────────────────────────
    {
        id: "B5Q11", bloco: 5, aula: 4, tipo: "aritmetica",
        bncc: "EF09MA20", bncc_desc: "Probabilidade Clássica",
        display: "Ao lançar um dado comum (6 faces), qual a probabilidade de sair um número PAR?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "1/3", tipo: "erro", categoria: "procedimento", erro: "prob_contagem_favoraveis_errada", descricao: "Identificou incorretamente a quantidade de números pares no dado (ex: apenas dois).", peso: 2 },
            { valor: "1/6", tipo: "erro", categoria: "conceito", erro: "prob_foco_numeral_unico", descricao: "Calculou a probabilidade de sair um número específico em vez de atender ao critério 'par'.", peso: 3 },
            { valor: "3", tipo: "erro", categoria: "conceito", erro: "prob_apresenta_inteiro", descricao: "Respondeu com a quantidade de casos favoráveis em vez da razão de probabilidade.", peso: 3 }
        ],
        passo: "Casos favoráveis (par): 2, 4, 6 (são 3). Total de casos: 6. Probabilidade = 3/6 = 1/2.",
        dica: "Probabilidade é: o que eu quero (3 números pares) dividido pelo total que existe (6 números)."
    },
    
    {
        id: "B5Q15", bloco: 5, aula: 5, tipo: "aritmetica",
        bncc: "EF09MA20", bncc_desc: "Interpretação Crítica de Dados",
        display: "Uma empresa diz: '90% dos clientes aprovam nosso produto!', mas a pesquisa ouviu apenas 10 pessoas. Essa afirmação é confiável?",
        res: "Não — amostra muito pequena",
        alternativas: [
            { valor: "Não — amostra muito pequena", tipo: "acerto" },
            { valor: "Sim — 90% é um valor alto", tipo: "erro", categoria: "interpretacao", erro: "critica_foco_apenas_no_percentual", descricao: "Valorizou apenas a taxa de sucesso, ignorando que a base (amostra) não tem relevância estatística.", peso: 3 },
            { valor: "Sim, pois porcentagem não mente", tipo: "erro", categoria: "conceito", erro: "critica_dogmatismo_matematico", descricao: "Acredita que resultados matemáticos são isentos de manipulação contextual.", peso: 3 },
            { valor: "Depende do produto", tipo: "erro", categoria: "estrategia", erro: "critica_desvia_foco_estatistico", descricao: "Atribuiu a validade a fatores externos em vez de analisar a metodologia da pesquisa.", peso: 2 }
        ],
        passo: "Estatisticamente, 10 pessoas não representam o público geral. Uma única pessoa mudando de ideia alteraria o resultado drasticamente (10%).",
        dica: "Para uma pesquisa ser boa, ela precisa ouvir muita gente de diferentes tipos, não apenas 10 pessoas."
    },

    // ── ANÁLISE CRÍTICA (ANALISE_GRAFICA) ─────────────────────────────────
    {
        id: "B5Q20", bloco: 5, aula: 9, tipo: "aritmetica",
        bncc: "EF09MA20", bncc_desc: "Análise Crítica — Gráfico Enganoso",
        display: "Um gráfico de barras começa o eixo vertical no número 98 em vez de 0. O que isso causa visualmente?",
        res: "O gráfico amplifica visualmente pequenas diferenças",
        alternativas: [
            { valor: "O gráfico amplifica visualmente pequenas diferenças", tipo: "acerto" },
            { valor: "Nada, é um gráfico normal", tipo: "erro", categoria: "interpretacao", erro: "grafico_leitura_passiva", descricao: "Não percebeu que o truncamento do eixo y é uma técnica de manipulação visual.", peso: 3 },
            { valor: "Os dados tornam-se mentirosos", tipo: "erro", categoria: "conceito", erro: "grafico_confunde_visual_com_dado", descricao: "Acreditou que o erro está nos números, quando na verdade está na representação geométrica deles.", peso: 2 },
            { valor: "O eixo x está invertido", tipo: "erro", categoria: "atencao", erro: "grafico_erro_identificacao_eixo", descricao: "Confundiu os eixos horizontal e vertical durante a análise.", peso: 1 }
        ],
        passo: "Se o eixo começa no 98, um dado de 99 parece o dobro de um dado de 98,5, embora a diferença real seja mínima.",
        dica: "Fique de olho: se o gráfico não começar do zero, ele pode estar tentando 'aumentar' uma diferença pequena."
    }
];
