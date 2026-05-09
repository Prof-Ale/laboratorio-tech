// js/data/questions/bloco2_trilha2.js
// Bloco 2 — Números e Operações | Trilha 2
// Aula 4: Multiplicação e Divisão de Inteiros (EF07MA02)
// Aula 5: Frações e Representação (EF07MA04)
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco2_trilha2 = [

    // ── AULA 4: MULTIPLICAÇÃO E DIVISÃO DE INTEIROS ──────────────────────

    {
        id: "B2T2Q01", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "(+6) × (-4) = ?",
        res: "-24",
        alternativas: [
            { valor: "-24", tipo: "acerto" },
            { valor: "+24", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_positiva_errada", descricao: "Atribuiu sinal positivo ao produto de fatores com sinais opostos.", peso: 3 },
            { valor: "-10", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_confunde_com_adicao", descricao: "Realizou a operação de soma de dívidas em vez de multiplicar os módulos.", peso: 2 },
            { valor: "+10", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_adicao_sinal_oposto", descricao: "Somou os módulos absolutos e ainda inverteu a resposta para positivo.", peso: 2 }
        ],
        passo: "Sinais diferentes → resultado sempre negativo. 6 × 4 = 24. Aplicando o sinal: -24.",
        dica: "Na multiplicação, sinais diferentes (+ e -) brigam e o negativo sempre ganha."
    },
    {
        id: "B2T2Q02", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "(-3) × (-9) = ?",
        res: "+27",
        alternativas: [
            { valor: "+27", tipo: "acerto" },
            { valor: "-27", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_mantem_negativo", descricao: "Assumiu que a multiplicação de dois números negativos preserva a dívida.", peso: 3 },
            { valor: "-12", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_confunde_com_adicao_negativa", descricao: "Somou as duas dívidas (-3 e -9) em vez de aplicar a operação de vezes.", peso: 2 },
            { valor: "+12", tipo: "erro", categoria: "atencao", erro: "multiplicacao_soma_inverte_sinal", descricao: "Somou os numerais e forçou a positividade do resultado.", peso: 1 }
        ],
        passo: "Sinais iguais (ambos negativos) na multiplicação formam par → resultado positivo. 3 × 9 = 27.",
        dica: "Dois negativos multiplicados resultam em positivo. É como a regra de linguagem: negar uma negação vira afirmação."
    },
    {
        id: "B2T2Q03", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão de Inteiros",
        display: "(-8) ÷ (+2) = ?",
        res: "-4",
        alternativas: [
            { valor: "-4", tipo: "acerto" },
            { valor: "+4", tipo: "erro", categoria: "conceito", erro: "divisao_sinais_aplica_sinal_divisor", descricao: "Atribuiu o sinal positivo do divisor à resposta final, ignorando a lei de sinais diferentes.", peso: 3 },
            { valor: "-16", tipo: "erro", categoria: "procedimento", erro: "divisao_confunde_com_multiplicacao", descricao: "Multiplicou os fatores em vez de efetuar a divisão solicitada.", peso: 2 },
            { valor: "+16", tipo: "erro", categoria: "estrategia", erro: "divisao_multiplica_sinal_errado", descricao: "Multiplicou as bases e violou a regra de sinais opostos.", peso: 2 }
        ],
        passo: "Sinais diferentes → resultado negativo. 8 ÷ 2 = 4. Aplicando o sinal negativo: -4.",
        dica: "A regra do choque de sinais (+ com -) funciona para a divisão exatamente do mesmo jeito que na multiplicação."
    },
    {
        id: "B2T2Q04", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão de Inteiros",
        display: "(-15) ÷ (-3) = ?",
        res: "+5",
        alternativas: [
            { valor: "+5", tipo: "acerto" },
            { valor: "-5", tipo: "erro", categoria: "conceito", erro: "divisao_sinais_mantem_negativo", descricao: "Aplicou a lógica de conservação de sinal da adição em uma divisão de iguais.", peso: 3 },
            { valor: "-45", tipo: "erro", categoria: "procedimento", erro: "divisao_confunde_com_multiplicacao_negativa", descricao: "Multiplicou em vez de dividir e conservou a negatividade.", peso: 2 },
            { valor: "+45", tipo: "erro", categoria: "calculo", erro: "divisao_confunde_com_multiplicacao_positiva", descricao: "Acertou a análise do choque de sinais, mas multiplicou os fatores.", peso: 2 }
        ],
        passo: "Sinais iguais (ambos negativos) → resultado positivo. 15 ÷ 3 = 5. Resultado: +5.",
        dica: "Dividir dois números com o mesmo sinal de menos garante uma resposta com sinal de mais."
    },
    {
        id: "B2T2Q05", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Produto com Três Fatores — Sinal",
        display: "(-2) × (-3) × (-4) = ?",
        res: "-24",
        alternativas: [
            { valor: "-24", tipo: "acerto" },
            { valor: "+24", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_generaliza_positivo", descricao: "Assumiu que qualquer cadeia de números negativos sempre se anula tornando-se positiva.", peso: 3 },
            { valor: "-9", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_soma_cadeia", descricao: "Acumulou as bases como se fossem parcelas subtrativas sucessivas (-2 -3 -4).", peso: 2 },
            { valor: "+9", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_soma_inverte_cadeia", descricao: "Somou os valores absolutos e forçou resultado no eixo positivo.", peso: 1 }
        ],
        passo: "Agrupando: (-2) × (-3) = +6. Em seguida, (+6) × (-4) = -24. Quantidade ímpar de negativos (3) = final negativo.",
        dica: "Quando você multiplica vários negativos, conte quantos existem. Se for par, dá positivo. Se for ímpar, dá negativo."
    },
    {
        id: "B2T2Q06", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Produto com Quatro Fatores — Sinal",
        display: "(-1) × (-1) × (-1) × (-1) = ?",
        res: "+1",
        alternativas: [
            { valor: "+1", tipo: "acerto" },
            { valor: "-1", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_impar_par_falha", descricao: "Não compreendeu o ciclo de anulação de pares, entregando um final negativo.", peso: 3 },
            { valor: "-4", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_soma_bases_iguais", descricao: "Conduziu a operação como se fossem quatro subtrações repetidas.", peso: 2 },
            { valor: "0", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_anula_opostos_falsos", descricao: "Confundiu a longa sequência com uma instrução de esvaziamento (zeramento).", peso: 1 }
        ],
        passo: "Quatro fatores negativos: eles formam dois pares positivos (+1 × +1). Logo o resultado é +1.",
        dica: "4 é um número par. Uma quantidade par de multiplicações de sinais de (-) sempre vira (+)."
    },
    {
        id: "B2T2Q07", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação — Contexto Financeiro",
        display: "A empresa tem prejuízo de R$ 500/dia, durante 4 dias consecutivos. Qual o saldo acumulado final?",
        res: "-R$ 2.000",
        alternativas: [
            { valor: "-R$ 2.000", tipo: "acerto" },
            { valor: "+R$ 2.000", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_palavra_prejuizo", descricao: "Processou os valores numéricos corretamente, mas registrou saldo positivo para termo de prejuízo.", peso: 3 },
            { valor: "-R$ 504", tipo: "erro", categoria: "procedimento", erro: "problema_soma_vez_de_multiplicar", descricao: "Efetuou adição de grandezas escalares incompatíveis (dias + saldo financeiro).", peso: 2 },
            { valor: "+R$ 504", tipo: "erro", categoria: "estrategia", erro: "problema_soma_inverte_sentido", descricao: "Somou as grandezas mistas e declarou lucro.", peso: 2 }
        ],
        passo: "Prejuízo é um valor negativo. (-500) × 4 dias = -2.000. O acúmulo de perdas é negativo.",
        dica: "Multiplicar o tempo (positivo) por um prejuízo (negativo) resulta em uma grande dívida (negativa)."
    },
    {
        id: "B2T2Q08", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Divisão — Contexto",
        display: "Um mergulhador desce à taxa de -4 metros por minuto. Em quantos minutos ele alcançará -28 metros?",
        res: "7 minutos",
        alternativas: [
            { valor: "7 minutos", tipo: "acerto" },
            { valor: "-7 minutos", tipo: "erro", categoria: "conceito", erro: "problema_admite_tempo_negativo", descricao: "Achou a magnitude de 7, mas não discerniu que a grandeza 'tempo' é estritamente escalar e positiva.", peso: 3 },
            { valor: "32 minutos", tipo: "erro", categoria: "procedimento", erro: "problema_soma_taxas_incompativel", descricao: "Adicionou a taxa multiplicativa aos metros da profundidade em vez de calcular o quociente.", peso: 2 },
            { valor: "112 minutos", tipo: "erro", categoria: "procedimento", erro: "problema_multiplica_profundidade_taxa", descricao: "Multiplicou a meta de descida pela velocidade da descida.", peso: 2 }
        ],
        passo: "A fórmula é: Posição Final ÷ Taxa. (-28) ÷ (-4) = +7 minutos. Tempo não pode ser negativo.",
        dica: "Dividir a profundidade (negativa) pela taxa de queda (negativa) devolve os minutos (que são sempre positivos)."
    },
    {
        id: "B2T2Q09", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação — Contexto Temperatura",
        display: "A temperatura caiu 3°C por hora durante 6 horas. Se começou em +4°C, qual a temperatura final?",
        res: "-14°C",
        alternativas: [
            { valor: "-14°C", tipo: "acerto" },
            { valor: "+22°C", tipo: "erro", categoria: "interpretacao", erro: "problema_interpreta_queda_como_alta", descricao: "Multiplicou o tempo de variação (18°), mas somou aos 4° invés de subtrair o resfriamento.", peso: 3 },
            { valor: "+14°C", tipo: "erro", categoria: "procedimento", erro: "problema_subtrai_base_da_queda", descricao: "Inverteu a posição cronológica do minuendo (calculando 18 - 4).", peso: 2 },
            { valor: "-22°C", tipo: "erro", categoria: "atencao", erro: "problema_soma_base_negativada", descricao: "Manteve a temperatura negativa (-18) e negativou a base de +4° para forçar a soma.", peso: 1 }
        ],
        passo: "Queda constante: (-3°C) × 6h = -18°C. Partindo de +4, fazemos a conta: +4 - 18 = -14°C.",
        dica: "Se algo 'cai', a variação é de (-18). Então subtraia isso da temperatura de largada."
    },

    // ── AULA 5: FRAÇÕES E REPRESENTAÇÃO ────────────────────────────────

    {
        id: "B2T2Q10", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações — Conceito",
        display: "Uma pizza inteira foi fatiada em 8 partes iguais. Pedro comeu 3 dessas fatias. Qual fração da pizza ele comeu?",
        res: "3/8",
        alternativas: [
            { valor: "3/8", tipo: "acerto" },
            { valor: "8/3", tipo: "erro", categoria: "conceito", erro: "fracao_inverte_numerador_denominador", descricao: "Posicionou o todo (pizza inteira) no numerador e a parte (fatia) no denominador.", peso: 3 },
            { valor: "3/5", tipo: "erro", categoria: "procedimento", erro: "fracao_usa_sobra_como_denominador", descricao: "Montou a base da fração utilizando as peças não ingeridas em vez da totalidade.", peso: 2 },
            { valor: "5/8", tipo: "erro", categoria: "interpretacao", erro: "fracao_calcula_complemento_sobra", descricao: "Calculou e assinalou a porção não consumida na caixa.", peso: 2 }
        ],
        passo: "A fração é (partes consumidas / total da pizza). O Pedro tirou 3 do total de 8, formando 3/8.",
        dica: "O número de baixo (denominador) representa os pedaços que a pizza tinha antes de alguém encostar nela."
    },
    {
        id: "B2T2Q11", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações Equivalentes",
        display: "Qual das opções abaixo é uma fração perfeitamente EQUIVALENTE a 1/2?",
        res: "4/8",
        alternativas: [
            { valor: "4/8", tipo: "acerto" },
            { valor: "1/4", tipo: "erro", categoria: "conceito", erro: "fracao_aumenta_denominador_mantem_numerador", descricao: "Tentou formar grandeza dobrando o denominador e mantendo o numerador, caindo a metade do valor da base.", peso: 3 },
            { valor: "2/8", tipo: "erro", categoria: "procedimento", erro: "fracao_multiplica_denominador_apenas", descricao: "Aplicou fator de multiplicação apenas na base inferior, perdendo o vínculo de proporção.", peso: 2 },
            { valor: "3/8", tipo: "erro", categoria: "estrategia", erro: "fracao_soma_simetrica_visual", descricao: "Assinalou um distrator com base em semelhança numérico-visual sem aplicar amplificação.", peso: 1 }
        ],
        passo: "Uma fração equivalente exige que o topo e a base sejam multiplicados pelo mesmo número. 1×4 = 4 e 2×4 = 8.",
        dica: "A fração equivalente a 1/2 sempre terá no topo a exata metade do número de baixo."
    },
    {
        id: "B2T2Q12", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Simplificação de Frações",
        display: "Qual é a forma mais simplificada possível da fração 12/18?",
        res: "2/3",
        alternativas: [
            { valor: "2/3", tipo: "acerto" },
            { valor: "4/6", tipo: "erro", categoria: "procedimento", erro: "fracao_simplificacao_incompleta", descricao: "Dividiu a fração corretamente por 3, mas não avançou até a forma irredutível.", peso: 2 },
            { valor: "6/9", tipo: "erro", categoria: "procedimento", erro: "fracao_simplificacao_parcial", descricao: "Dividiu a fração corretamente por 2, parando a simplificação na metade do caminho.", peso: 2 },
            { valor: "1/3", tipo: "erro", categoria: "calculo", erro: "fracao_erro_divisao_numerador_comum", descricao: "Errou as bases tabuladas na simplificação máxima.", peso: 1 }
        ],
        passo: "O maior número que divide 12 e 18 ao mesmo tempo é 6 (MDC). 12÷6=2 e 18÷6=3.",
        dica: "Para chegar na forma simplificada final, não pode sobrar nenhum número comum que divida o de cima e o de baixo."
    },
    {
        id: "B2T2Q13", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Fração Imprópria — Número Misto",
        display: "A fração imprópria 11/4 convertida para número misto é equivalente a:",
        res: "2 e 3/4",
        alternativas: [
            { valor: "2 e 3/4", tipo: "acerto" },
            { valor: "3 e 1/4", tipo: "erro", categoria: "calculo", erro: "misto_erro_quociente_maior", descricao: "Superestimou o quociente da divisão ultrapassando a quantidade contida no numerador.", peso: 2 },
            { valor: "1 e 3/4", tipo: "erro", categoria: "procedimento", erro: "misto_quociente_incompleto", descricao: "Desmembrou a fração uma única vez, entregando uma forma mista que ainda contem base imprópria não finalizada.", peso: 2 },
            { valor: "2 e 1/4", tipo: "erro", categoria: "calculo", erro: "misto_erro_resto_menor", descricao: "Encontrou a quantidade exata de blocos inteiros, mas errou o resto sobrado da divisão.", peso: 1 }
        ],
        passo: "11 dividido por 4 rende 2 blocos inteiros e sobram 3. Ou seja: 2 inteiros formados e 3/4 excedentes.",
        dica: "Quantos 'quatros' cabem dentro do 'onze'? Cabem dois. O que sobrar entra em formato de fração."
    },
    {
        id: "B2T2Q14", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Ordenação de Frações",
        display: "Qual é a ordem CRESCENTE correta das seguintes frações: 3/4, 1/2, 5/8, 2/3?",
        res: "1/2 < 5/8 < 2/3 < 3/4",
        alternativas:
