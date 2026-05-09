// js/data/questions/bloco1_trilha1.js
// Bloco 1 — A Base Numérica | Trilha 1 Completa
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao
// Clusters: SISTEMA_NUMERICO, MODELAGEM_SITUACIONAL

export const bloco1_trilha1 = [
    // ── AULA 1: VALOR POSICIONAL ──────────────────────────────────────
    {
        id: "B1T1Q01", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Qual é o valor posicional do algarismo 4 no número 349.205?",
        res: "40.000",
        alternativas: [
            { valor: "40.000", tipo: "acerto" },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Considerou apenas o valor absoluto do dígito, ignorando a posição na base 10.", peso: 3 },
            { valor: "4.000", tipo: "erro", categoria: "procedimento", erro: "valorposicional_erro_ordem_grandeza", descricao: "Identificou a classe dos milhares, mas errou a ordem (unidade em vez de dezena).", peso: 2 },
            { valor: "400", tipo: "erro", categoria: "atencao", erro: "valorposicional_confunde_classe_simples", descricao: "Trocou a classe dos milhares pela classe das unidades simples.", peso: 1 }
        ],
        passo: "O 4 está na Dezena de Milhar. Multiplicamos o algarismo pela sua posição: 4 × 10.000 = 40.000.",
        dica: "Imagine o número num quadro: cada casa para a esquerda vale 10 vezes mais!"
    },
    
    {
        id: "B1T1Q02", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "No número 5.847, quanto vale o algarismo 8?",
        res: "800",
        alternativas: [
            { valor: "800", tipo: "acerto" },
            { valor: "8", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Indicou o valor absoluto do algarismo isolado.", peso: 3 },
            { valor: "80", tipo: "erro", categoria: "procedimento", erro: "valorposicional_reduz_ordem", descricao: "Atribuiu o valor de dezena em vez de centena.", peso: 2 },
            { valor: "8.000", tipo: "erro", categoria: "procedimento", erro: "valorposicional_aumenta_ordem", descricao: "Atribuiu o valor de milhar em vez de centena.", peso: 2 }
        ],
        passo: "O 8 ocupa a terceira ordem (centenas). Ele representa 8 grupos de 100.",
        dica: "Conte da direita para a esquerda: Unidade, Dezena, Centena..."
    },
    {
        id: "B1T1Q03", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Leitura de Números",
        display: "Como se lê corretamente o número 10.030?",
        res: "Dez mil e trinta",
        alternativas: [
            { valor: "Dez mil e trinta", tipo: "acerto" },
            { valor: "Um zero zero trinta", tipo: "erro", categoria: "conceito", erro: "leitura_algarismo_isolado", descricao: "Leu os dígitos individualmente, sem compreender a estrutura das classes numéricas.", peso: 3 },
            { valor: "Cem e trinta", tipo: "erro", categoria: "conceito", erro: "leitura_ignora_classe_milhar", descricao: "Não reconheceu a ordem de grandeza do milhar.", peso: 3 },
            { valor: "Dez mil trinta", tipo: "erro", categoria: "atencao", erro: "leitura_omissao_conectivo", descricao: "Leitura correta, mas omitiu a conjunção gramatical padrão.", peso: 1 }
        ],
        passo: "O 10 está na classe dos milhares. O 30 na classe simples. Lemos: Dez mil e trinta.",
        dica: "A primeira parte (antes do ponto) diz quantos milhares o número tem."
    },

    // ── AULA 2: ADIÇÃO E SUBTRAÇÃO ────────────────────────────────────
    {
        id: "B1T1Q11", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "Calcule a soma: 1.245 + 879",
        res: "2.124",
        alternativas: [
            { valor: "2.124", tipo: "acerto" },
            { valor: "2.024", tipo: "erro", categoria: "procedimento", erro: "adicao_falha_reagrupamento_centena", descricao: "Esqueceu de somar a reserva (o 'vai um') na coluna das centenas.", peso: 2 },
            { valor: "1.124", tipo: "erro", categoria: "conceito", erro: "adicao_ignora_reagrupamento_milhar", descricao: "Não converteu 10 centenas em 1 unidade de milhar no final da conta.", peso: 3 },
            { valor: "2.114", tipo: "erro", categoria: "calculo", erro: "adicao_erro_tabuada", descricao: "Cometeu um erro de soma simples em uma das colunas.", peso: 1 }
        ],
        passo: "5+9=14 (sobe 1). 4+7+1=12 (sobe 1). 2+8+1=11 (sobe 1). 1+1=2. Total: 2.124.",
        dica: "Não esqueça: sempre que passar de 9 em uma coluna, 1 dezena deve 'subir' para a próxima casa!"
    },
    {
        id: "B1T1Q12", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração com Reagrupamento",
        display: "Resolva: 2.000 - 1.342",
        res: "658",
        alternativas: [
            { valor: "658", tipo: "acerto" },
            { valor: "748", tipo: "erro", categoria: "procedimento", erro: "subtracao_falha_emprestimo_sucessivo", descricao: "Tratou os zeros como 10 em vez de 9 ao pedir emprestado em sequência.", peso: 2 },
            { valor: "642", tipo: "erro", categoria: "conceito", erro: "subtracao_inverte_minuendo_subtraendo", descricao: "Subtraiu o menor do maior em cada coluna (ex: 2-0=2) por não saber reagrupar.", peso: 3 },
            { valor: "668", tipo: "erro", categoria: "calculo", erro: "subtracao_erro_tabuada", descricao: "Erro operacional de subtração em uma das ordens.", peso: 1 }
        ],
        passo: "Como as casas têm zero, o 2.000 empresta sucessivamente. Ficamos com 1.99(10). 10-2=8, 9-4=5, 9-3=6.",
        dica: "Quando o vizinho é zero, você tem que ir até a primeira casa que tem valor para 'pedir emprestado'."
    },
    
    {
        id: "B1T1Q15", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Contexto",
        display: "Um atleta correu 1.250m na segunda e 350m A MAIS na terça. Qual o total percorrido nos dois dias?",
        res: "2.850 m",
        alternativas: [
            { valor: "2.850 m", tipo: "acerto" },
            { valor: "1.600 m", tipo: "erro", categoria: "interpretacao", erro: "problema_omite_etapa_soma_final", descricao: "Calculou apenas a distância de terça-feira, esquecendo de somar com a de segunda.", peso: 3 },
            { valor: "1.950 m", tipo: "erro", categoria: "conceito", erro: "problema_ignora_relacao_aditiva", descricao: "Somou os valores do texto (1250 + 350) sem entender que um era o acréscimo do outro.", peso: 2 },
            { valor: "2.350 m", tipo: "erro", categoria: "calculo", erro: "problema_erro_soma_centenas", descricao: "Erro aritmético durante o reagrupamento das ordens superiores.", peso: 1 }
        ],
        passo: "Passo 1: terça = 1.250 + 350 = 1.600m. Passo 2: Total = 1.250 + 1.600 = 2.850m.",
        dica: "Cuidado! O problema pergunta o total dos DOIS dias combinados."
    },
    {
        id: "B1T1Q18", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Sentido",
        display: "Ao 'pedir emprestado' na subtração, o que acontece com a casa vizinha que cedeu o valor?",
        res: "Ela diminui em 1",
        alternativas: [
            { valor: "Ela diminui em 1", tipo: "acerto" },
            { valor: "Ela não muda", tipo: "erro", categoria: "conceito", erro: "algoritmo_nao_reduz_emprestimo", descricao: "Acredita que o valor é criado, não transferido entre as colunas.", peso: 3 },
            { valor: "Ela aumenta em 1", tipo: "erro", categoria: "procedimento", erro: "algoritmo_confunde_com_adicao", descricao: "Aplicou a regra do 'vai um' (adição) no contexto da subtração.", peso: 2 },
            { valor: "Ela zera sempre", tipo: "erro", categoria: "interpretacao", erro: "algoritmo_extrema_generalizacao", descricao: "Generalizou que qualquer empréstimo esvazia a casa vizinha.", peso: 1 }
        ],
        passo: "Reagrupar é transferir: você tira 1 de uma ordem superior e ela vira 10 na ordem inferior (que vale menos).",
        dica: "É como trocar uma nota de 10 reais por 10 moedas de 1 real. Você ainda tem 10 reais, mas em formatos diferentes."
    },
    {
        id: "B1T1Q19", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Operações Inversas",
        display: "Como verificar se 1.600 - 937 = 663 está correto sem fazer a conta de menos de novo?",
        res: "Somar 663 + 937",
        alternativas: [
            { valor: "Somar 663 + 937", tipo: "acerto" },
            { valor: "Subtrair 663 de 937", tipo: "erro", categoria: "conceito", erro: "prova_real_mantem_operador", descricao: "Não aplicou o conceito de operação inversa para validação.", peso: 3 },
            { valor: "Dividir 1.600 por 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_sem_correlacao", descricao: "Sugeriu uma operação sem qualquer base lógica no modelo aditivo.", peso: 2 },
            { valor: "Multiplicar por 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_chute_proporcional", descricao: "Tentou validar usando dobros, o que não se aplica aqui.", peso: 2 }
        ],
        passo: "A Adição desfaz a Subtração. Se você somar o que sobrou (663) com o que tirou (937), deve voltar ao total (1.600).",
        dica: "A prova real é como 'voltar no tempo': use o sinal oposto para conferir."
    }
];
