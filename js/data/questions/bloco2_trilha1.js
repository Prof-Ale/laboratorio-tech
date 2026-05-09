// js/data/questions/bloco2_trilha1.js
// Bloco 2 — Números e Operações | Trilha 1
// Aula 1: Inteiros e Reta Numérica (EF07MA02)
// Aula 2: Adição de Inteiros — Regra dos Sinais (EF07MA02)
// Aula 3: Subtração de Inteiros — O Truque do Oposto (EF07MA02)
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco2_trilha1 = [

    // ── AULA 1: INTEIROS E RETA NUMÉRICA ────────────────────────────────

    {
        id: "B2T1Q01", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Números Inteiros — Reta Numérica",
        display: "Na reta numérica, qual número está posicionado mais à esquerda?",
        a: -5,
        res: "-8",
        alternativas: [
            { valor: "-8", tipo: "acerto" },
            { valor: "+2", tipo: "erro", categoria: "conceito", erro: "reta_ignora_orientacao_negativa", descricao: "Selecionou o maior número positivo, invertendo a lógica de ordenação da esquerda para a direita.", peso: 3 },
            { valor: "0", tipo: "erro", categoria: "conceito", erro: "reta_assume_zero_extremo", descricao: "Acreditou que o zero representa o limite absoluto à esquerda da reta numérica.", peso: 3 },
            { valor: "-3", tipo: "erro", categoria: "procedimento", erro: "reta_inverte_modulo_negativo", descricao: "Comparou os números negativos usando a lógica dos positivos, onde 3 < 8.", peso: 2 }
        ],
        passo: "Na reta numérica, quanto mais à esquerda, menor o número. O -8 está mais à esquerda que -3, 0 e +2.",
        dica: "Mais à esquerda significa menor valor. Lembre-se: -8 é menor que -3."
    },
    {
        id: "B2T1Q02", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Números Inteiros — Reta Numérica",
        display: "Qual número representa matematicamente 'uma dívida de R$ 50,00'?",
        a: -5,
        res: "-50",
        alternativas: [
            { valor: "-50", tipo: "acerto" },
            { valor: "+50", tipo: "erro", categoria: "conceito", erro: "inteiros_confunde_saldo_divida", descricao: "Atribuiu sinal positivo a uma grandeza de débito/perda.", peso: 3 },
            { valor: "50", tipo: "erro", categoria: "atencao", erro: "inteiros_omite_sinal_direcional", descricao: "Representou a grandeza apenas pelo módulo absoluto, omitindo o sinal indicativo de dívida.", peso: 1 },
            { valor: "0", tipo: "erro", categoria: "interpretacao", erro: "inteiros_associa_divida_nulo", descricao: "Associou a palavra dívida à ausência de valor (zero).", peso: 2 }
        ],
        passo: "Dívida indica um valor negativo: -50. Ganho ou saldo positivo seria representado por +50.",
        dica: "Palavras como dívida, temperatura abaixo de zero e profundidade indicam números negativos (-)."
    },
    {
        id: "B2T1Q03", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Valor Absoluto",
        display: "Qual é o resultado de |-7| (módulo de menos sete)?",
        res: "7",
        alternativas: [
            { valor: "7", tipo: "acerto" },
            { valor: "-7", tipo: "erro", categoria: "conceito", erro: "modulo_mantem_sinal_negativo", descricao: "Aplicou a operação de módulo mantendo o sinal negativo, não compreendendo a ideia de distância.", peso: 3 },
            { valor: "+7", tipo: "erro", categoria: "procedimento", erro: "modulo_formaliza_sinal_desnecessario", descricao: "Embora correto numericamente, incluiu o sinal positivo explicitamente, o que indica apego à regra de sinais em vez de magnitude pura.", peso: 1 },
            { valor: "0", tipo: "erro", categoria: "estrategia", erro: "modulo_associa_anulacao", descricao: "Associou as barras de módulo a uma operação de zeramento do valor.", peso: 2 }
        ],
        passo: "Valor absoluto (ou módulo) é a distância de um número até o zero, e distâncias são sempre positivas. Logo, |-7| = 7.",
        dica: "As barras de módulo transformam qualquer número de dentro em seu valor positivo (distância pura)."
    },
    {
        id: "B2T1Q04", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Comparação de Inteiros",
        display: "Qual afirmação matemática abaixo é VERDADEIRA?",
        res: "-8 < -3",
        alternativas: [
            { valor: "-8 < -3", tipo: "acerto" },
            { valor: "-8 > -3", tipo: "erro", categoria: "conceito", erro: "comparacao_negativos_usa_modulo", descricao: "Comparou os números negativos usando seus valores absolutos (afirmando que 8 é maior que 3).", peso: 3 },
            { valor: "-3 < -8", tipo: "erro", categoria: "procedimento", erro: "comparacao_inverte_sinal_desigualdade", descricao: "Reconheceu o menor número, mas utilizou o sinal de 'menor que' de forma invertida.", peso: 2 },
            { valor: "-8 = -3", tipo: "erro", categoria: "interpretacao", erro: "comparacao_nega_diferenca_negativa", descricao: "Assumiu que números negativos não possuem diferença de magnitude entre si.", peso: 2 }
        ],
        passo: "O -8 está mais à esquerda que o -3 na reta numérica. Logo, -8 é menor que -3 (-8 < -3).",
        dica: "Entre dois números negativos, aquele que 'deve mais' (tem maior valor numérico) é o menor."
    },
    {
        id: "B2T1Q05", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Ordenação de Inteiros",
        display: "Qual é a ordem crescente correta dos números: -5, 0, -10, +7, -1, +3?",
        res: "-10 < -5 < -1 < 0 < +3 < +7",
        alternativas: [
            { valor: "-10 < -5 < -1 < 0 < +3 < +7", tipo: "acerto" },
            { valor: "0 < -1 < -5 < -10 < +3 < +7", tipo: "erro", categoria: "conceito", erro: "ordenacao_espelha_negativos", descricao: "Ordenou os negativos a partir do zero de forma espelhada, tratando o -1 como menor que -10.", peso: 3 },
            { valor: "+7 < +3 < 0 < -1 < -5 < -10", tipo: "erro", categoria: "interpretacao", erro: "ordenacao_inverte_comando", descricao: "Ordenou a sequência em ordem decrescente (do maior para o menor).", peso: 2 },
            { valor: "-1 < -5 < -10 < 0 < +3 < +7", tipo: "erro", categoria: "procedimento", erro: "ordenacao_falha_modulos_negativos", descricao: "Separou os blocos negativo/positivo, mas ordenou os negativos usando a lógica dos naturais.", peso: 2 }
        ],
        passo: "Ordem crescente vai da esquerda para a direita na reta. Primeiro os mais 'endividados' (-10, -5, -1), o zero, e depois os ganhos (+3, +7).",
        dica: "Imagine uma escada que vem do subsolo (-10) até o andar mais alto (+7)."
    },
    {
        id: "B2T1Q06", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Inteiros — Contexto",
        display: "Na tabela de saldos de um jogo temos: Carlos (-120), Letícia (+350), Marcos (-45), Fernanda (+10). Quem está em PIOR situação?",
        res: "Carlos (-120)",
        alternativas: [
            { valor: "Carlos (-120)", tipo: "acerto" },
            { valor: "Letícia (+350)", tipo: "erro", categoria: "interpretacao", erro: "problema_inverte_condicao_valor", descricao: "Selecionou o maior valor positivo quando a pergunta solicitava o pior cenário (menor valor).", peso: 3 },
            { valor: "Marcos (-45)", tipo: "erro", categoria: "procedimento", erro: "problema_elege_negativo_menor_modulo", descricao: "Reconheceu que o pior é negativo, mas escolheu o de menor valor absoluto em vez do maior endividamento.", peso: 2 },
            { valor: "Fernanda (+10)", tipo: "erro", categoria: "atencao", erro: "problema_elege_positivo_baixo", descricao: "Selecionou o menor número positivo, ignorando os saldos negativos da tabela.", peso: 1 }
        ],
        passo: "A pior situação corresponde ao menor número da lista (o mais à esquerda na reta). -120 é menor que -45.",
        dica: "Quem tem a maior dívida (maior número negativo) é quem tem menos dinheiro real."
    },
    {
        id: "B2T1Q07", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Inteiros — Temperatura",
        display: "A temperatura na quarta-feira foi -1°C. Em qual dia fez MAIS frio que na quarta? (Segunda: -3°C, Terça: +5°C, Quinta: 0°C).",
        a: -1,
        res: "Segunda (-3°C)",
        alternativas: [
            { valor: "Segunda (-3°C)", tipo: "acerto" },
            { valor: "Quinta (0°C)", tipo: "erro", categoria: "conceito", erro: "temperatura_confunde_zero_frio_absoluto", descricao: "Assumiu que o zero é a temperatura mais fria possível, ignorando que -3°C é menor.", peso: 3 },
            { valor: "Terça (+5°C)", tipo: "erro", categoria: "interpretacao", erro: "temperatura_inverte_frio_calor", descricao: "Selecionou a maior temperatura (calor) quando o enunciado pediu a mais fria.", peso: 2 },
            { valor: "Nenhum dia", tipo: "erro", categoria: "estrategia", erro: "temperatura_nao_reconhece_escala", descricao: "Falhou em comparar as magnitudes negativas na escala de graus.", peso: 2 }
        ],
        passo: "-3 < -1: a segunda foi mais fria. +5 e 0 são temperaturas maiores (mais quentes) que -1.",
        dica: "Temperatura 'mais fria' sempre significa o número menor na reta numérica."
    },

    // ── AULA 2: ADIÇÃO DE INTEIROS ───────────────────────────────────────

    {
        id: "B2T1Q08", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Iguais",
        display: "Resolva a adição: (-6) + (-4) = ?",
        res: "-10",
        alternativas: [
            { valor: "-10", tipo: "acerto" },
            { valor: "+10", tipo: "erro", categoria: "conceito", erro: "adicao_sinais_aplica_regra_multiplicacao", descricao: "Aplicou a regra da multiplicação (menos com menos dá mais) na operação de soma.", peso: 3 },
            { valor: "-2", tipo: "erro", categoria: "procedimento", erro: "adicao_sinais_subtrai_modulos", descricao: "Realizou a subtração dos módulos numéricos em vez de somar as dívidas conjuntas.", peso: 2 },
            { valor: "+2", tipo: "erro", categoria: "estrategia", erro: "adicao_sinais_operacao_aleatoria", descricao: "Subtraiu os módulos e ainda inverteu o sinal para positivo.", peso: 2 }
        ],
        passo: "Sinais iguais (duas dívidas): some os valores numéricos e mantenha o sinal comum. Dívida de 6 com dívida de 4 = dívida de 10.",
        dica: "Sinais iguais: some tudo e repita o sinal."
    },
    {
        id: "B2T1Q09", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Diferentes",
        display: "Resolva a adição: (+10) + (-3) = ?",
        res: "+7",
        alternativas: [
            { valor: "+7", tipo: "acerto" },
            { valor: "-7", tipo: "erro", categoria: "procedimento", erro: "adicao_sinais_atribui_sinal_errado", descricao: "Subtraiu corretamente as grandezas, mas atribuiu o sinal do menor módulo numérico ao resultado.", peso: 2 },
            { valor: "+13", tipo: "erro", categoria: "conceito", erro: "adicao_sinais_soma_modulos_direto", descricao: "Ignorou a regra de sinais diferentes e somou os dois números absolutos.", peso: 3 },
            { valor: "-13", tipo: "erro", categoria: "estrategia", erro: "adicao_sinais_multiplica_regra_soma", descricao: "Somou os valores absolutos e inseriu sinal negativo acreditando na regra 'mais com menos dá menos'.", peso: 2 }
        ],
        passo: "Sinais diferentes: subtraia o menor do maior valor (10 - 3 = 7) e preserve o sinal de quem tem mais 'força' (o +10).",
        dica: "Você tem R$ 10 e gasta R$ 3. Você continua no positivo ou vai para o negativo?"
    },
    {
        id: "B2T1Q10", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Elemento Neutro",
        display: "Resolva a adição: (-12) + (+12) = ?",
        res: "0",
        alternativas: [
            { valor: "0", tipo: "acerto" },
            { valor: "-24", tipo: "erro", categoria: "procedimento", erro: "adicao_sinais_soma_ignorando_positivo", descricao: "Somou os valores numéricos e aplicou o primeiro sinal que leu na equação.", peso: 2 },
            { valor: "+24", tipo: "erro", categoria: "conceito", erro: "adicao_sinais_ignora_negativo", descricao: "Somou os valores como se ambos fossem naturais estritamente positivos.", peso: 3 },
            { valor: "-144", tipo: "erro", categoria: "interpretacao", erro: "adicao_confunde_com_multiplicacao", descricao: "Multiplicou as grandezas em vez de realizar a soma de opostos.", peso: 2 }
        ],
        passo: "Dois números iguais com sinais opostos anulam um ao outro. Se você deve 12 e paga 12, seu saldo zera.",
        dica: "Números opostos ou simétricos (ex: -5 e +5) sempre somam zero."
    },
    {
        id: "B2T1Q11", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Contexto",
        display: "A temperatura começou em -4°C, subiu 9°C e depois caiu 6°C. Qual a temperatura final?",
        res: "-1°C",
        alternativas: [
            { valor: "-1°C", tipo: "acerto" },
            { valor: "+11°C", tipo: "erro", categoria: "conceito", erro: "problema_soma_todos_modulos", descricao: "Somou todos os numerais da frase esquecendo de aplicar as subtrações para os termos de queda/frio.", peso: 3 },
            { valor: "+5°C", tipo: "erro", categoria: "procedimento", erro: "problema_omite_etapa_final", descricao: "Calculou corretamente a primeira variação (-4 + 9 = +5), mas não efetuou a segunda queda.", peso: 2 },
            { valor: "-7°C", tipo: "erro", categoria: "calculo", erro: "problema_erro_aritmetico_fluxo", descricao: "Montou a estrutura correta (-4 + 9 - 6) mas cometeu erro de cálculo durante o processo.", peso: 1 }
        ],
        passo: "Primeiro passo: -4 + 9 = +5. Segundo passo: +5 - 6 = -1°C.",
        dica: "Resolva uma etapa por vez. Subir é somar (+), cair é subtrair (-)."
    },
    {
        id: "B2T1Q12", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Jogo",
        display: "Num jogo de tabuleiro, João: avança 6, recua 9, avança 3 e recua 4. Qual a posição final dele em relação ao início?",
        res: "-4",
        alternativas: [
            { valor: "-4", tipo: "acerto" },
            { valor: "+4", tipo: "erro", categoria: "procedimento", erro: "problema_sinais_inverte_resultado_final", descricao: "Computou a diferença de 4 casas, mas atribuiu o sinal positivo em vez de negativo.", peso: 2 },
            { valor: "+18", tipo: "erro", categoria: "conceito", erro: "problema_ignora_verbos_direcao", descricao: "Somou todos os movimentos como se fossem avanços progressivos.", peso: 3 },
            { valor: "-18", tipo: "erro", categoria: "interpretacao", erro: "problema_acumula_como_recuos", descricao: "Somou todos os módulos, mas transformou o total em recuo geral.", peso: 2 }
        ],
        passo: "Avanços (positivos): 6 + 3 = +9. Recuos (negativos): -9 - 4 = -13. Resultado: +9 - 13 = -4.",
        dica: "Agrupe todos os ganhos (avanços) de um lado, e todas as perdas (recuos) do outro. Depois faça a conta final."
    },
    {
        id: "B2T1Q13", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Submarino",
        display: "Um submarino está a -120 m. Ele sobe 45 m e depois desce 30 m. Qual a sua profundidade final?",
        res: "-105 m",
        alternativas: [
            { valor: "-105 m", tipo: "acerto" },
            { valor: "-75 m", tipo: "erro", categoria: "procedimento", erro: "problema_para_na_primeira_etapa", descricao: "Executou a subida de 45 metros mas não contabilizou a descida final.", peso: 2 },
            { valor: "-195 m", tipo: "erro", categoria: "conceito", erro: "problema_inverte_sinal_subida_descida", descricao: "Tratou a subida como uma soma que aprofunda mais, e a descida como algo que retira profundidade.", peso: 3 },
            { valor: "+105 m", tipo: "erro", categoria: "estrategia", erro: "problema_transforma_profundidade_positiva", descricao: "Achou o módulo correto, mas retirou o sinal de negativo de um objeto que continua submerso.", peso: 2 }
        ],
        passo: "Posição inicial: -120. Sobe (+45) = -75. Desce (-30) = -105. A profundidade final é -105 metros.",
        dica: "Cuidado com submarinos: 'subir' aproxima do zero (positivo), e 'descer' afasta do zero (negativo)."
    },

    // ── AULA 3: SUBTRAÇÃO DE INTEIROS ───────────────────────────────────

    {
        id: "B2T1Q14", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "Resolva a subtração: (+6) - (-2) = ?",
        res: "+8",
        alternativas: [
            { valor: "+8", tipo: "acerto" },
            { valor: "+4", tipo: "erro", categoria: "conceito", erro: "subtracao_ignora_regra_oposto", descricao: "Subtraiu diretamente as grandezas absolutas ignorando a regra de inversão do sinal na subtração.", peso: 3 },
            { valor: "-8", tipo: "erro", categoria: "procedimento", erro: "subtracao_soma_inverte_resultado", descricao: "Aplicou a regra de conversão para soma (8), mas inverteu o sinal geral do resultado no fim.", peso: 2 },
            { valor: "-4", tipo: "erro", categoria: "estrategia", erro: "subtracao_sinais_totalmente_invertidos", descricao: "Subtraiu os módulos diretos e ainda negativou a resposta final.", peso: 2 }
        ],
        passo: "A subtração de um número negativo se transforma na adição de seu oposto positivo: (+6) + (+2) = +8.",
        dica: "A regra de ouro da subtração: troque o sinal de 'menos' do meio por 'mais', e inverta o sinal do número seguinte."
    },
    {
        id: "B2T1Q15", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "Resolva a subtração: (-5) - (+4) = ?",
        res: "-9",
        alternativas: [
            { valor: "-9", tipo: "acerto" },
            { valor: "-1", tipo: "erro", categoria: "conceito", erro: "subtracao_trata_como_soma_sinais_diferentes", descricao: "Fez a subtração dos módulos como se fosse uma conta de adição de sinais diferentes (-5+4).", peso: 3 },
            { valor: "+9", tipo: "erro", categoria: "procedimento", erro: "subtracao_converte_correto_erra_sinal", descricao: "Juntou os dois valores negativos (5 e 4), mas na hora de entregar a resposta colocou sinal positivo.", peso: 2 },
            { valor: "+1", tipo: "erro", categoria: "estrategia", erro: "subtracao_multipla_inversao_falha", descricao: "Misturou regras de multiplicação e soma de sinais de maneira completamente equivocada.", peso: 2 }
        ],
        passo: "A regra diz para somar com o oposto: (-5) + (-4) = -9. Você estava no -5 e recuou mais 4 posições.",
        dica: "O sinal de subtração transforma o (+4) de dentro do parênteses num (-4). Depois é só juntar as dívidas."
    },
    {
        id: "B2T1Q16", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Truque do Oposto",
        display: "Resolva a subtração: (-5) - (-4) = ?",
        res: "-1",
        alternativas: [
            { valor: "-1", tipo: "acerto" },
            { valor: "-9", tipo: "erro", categoria: "conceito", erro: "subtracao_ignora_choque_negativos", descricao: "Tratou o 'menos com menos' apenas como acúmulo de dívida, somando as magnitudes negativas.", peso: 3 },
            { valor: "+1", tipo: "erro", categoria: "procedimento", erro: "subtracao_erro_forca_sinal_final", descricao: "Aplicou a regra de conversão para (+4) certo, mas ao calcular -5+4, deu o sinal do menor.", peso: 2 },
            { valor: "+9", tipo: "erro", categoria: "estrategia", erro: "subtracao_choque_transforma_tudo_positivo", descricao: "Acreditou que o choque de sinais negativos transforma toda a equação em positiva.", peso: 2 }
        ],
        passo: "A subtração do negativo vira soma: (-5) + (+4) = -1. Você devia 5, mas devolveu 4.",
        dica: "Lembre da regra do choque de sinais: o sinal de (-) do lado de fora muda o sinal de (-) lá dentro para (+)."
    },
    {
        id: "B2T1Q17", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Contexto",
        display: "Seu saldo bancário era R$ 200,00. Entrou um débito automático de R$ 350,00. Qual o saldo final?",
        res: "-R$ 150,00",
        alternativas: [
            { valor: "-R$ 150,00", tipo: "acerto" },
            { valor: "+R$ 150,00", tipo: "erro", categoria: "conceito", erro: "problema_subtracao_inverte_minuendo", descricao: "Subtraiu o valor menor do maior (350 - 200) ignorando a ordem cronológica do saldo da conta.", peso: 3 },
            { valor: "+R$ 550,00", tipo: "erro", categoria: "procedimento", erro: "problema_trata_debito_como_credito", descricao: "Somou os dois valores, ignorando completamente o significado financeiro da palavra débito.", peso: 2 },
            { valor: "-R$ 550,00", tipo: "erro", categoria: "estrategia", erro: "problema_inverte_sinal_inicial", descricao: "Considerou o saldo inicial positivo de 200 como dívida para poder somá-lo ao débito.", peso: 2 }
        ],
        passo: "A conta possui 200. Retirar 350 significa consumir os 200 que você tinha e ainda ficar devendo 150 ao banco.",
        dica: "Quando você tira mais do que tem (200 - 350), você entra no 'cheque especial', o que significa número negativo."
    },
    {
        id: "B2T1Q18", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Temperatura",
        display: "Moscou marcou -12°C. São Paulo marcou +28°C. Qual a diferença exata de temperatura entre as duas cidades?",
        res: "40°C",
        alternativas: [
            { valor: "40°C", tipo: "acerto" },
            { valor: "16°C", tipo: "erro", categoria: "conceito", erro: "distancia_subtrai_modulos_diretos", descricao: "Calculou a distância diminuindo os valores absolutos 28-12, ignorando que Moscou está abaixo de zero.", peso: 3 },
            { valor: "-40°C", tipo: "erro", categoria: "procedimento", erro: "distancia_inverte_sinal_distancia", descricao: "Montou a distância térmica correta (40), mas atribuiu sinal negativo a uma grandeza de amplitude escalar.", peso: 2 },
            { valor: "-16°C", tipo: "erro", categoria: "estrategia", erro: "distancia_calculo_subtrativo_negativado", descricao: "Misturou o erro de redução de módulo com a inserção indevida de sinal negativo na amplitude.", peso: 2 }
        ],
        passo: "Diferença = (Maior) - (Menor) = 28 - (-12). Pelas regras da subtração, 28 + 12 = 40°C de amplitude térmica.",
        dica: "Para achar distância entre número positivo e negativo na reta, imagine caminhar do -12 até o zero (12), e do zero até o 28 (28). Total: 40."
    },
    {
        id: "B2T1Q19", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Pontuação",
        display: "Marina tem 45 pontos, Beto tem -12 pontos. Por quantos pontos Marina está à frente de Beto?",
        res: "57 pontos",
        alternativas: [
            { valor: "57 pontos", tipo: "acerto" },
            { valor: "33 pontos", tipo: "erro", categoria: "conceito", erro: "distancia_subtrai_modulos", descricao: "Apenas subtraiu 45-12, ignorando a penalidade negativa em que o oponente se encontra.", peso: 3 },
            { valor: "-57 pontos", tipo: "erro", categoria: "procedimento", erro: "distancia_magnitude_negativa", descricao: "Encontrou o gap correto de pontos, mas inseriu o sinal negativo para representar a vantagem dela.", peso: 2 },
            { valor: "-33 pontos", tipo: "erro", categoria: "estrategia", erro: "distancia_embaralha_sinalizacao", descricao: "Errou a amplitude e ainda aplicou um sinal negativo para uma questão de vantagem posicional.", peso: 2 }
        ],
        passo: "Distância = 45 - (-12) = 45 + 12 = 57 pontos. Marina precisa perder 57 pontos para empatar com a dívida do Beto.",
        dica: "Marina está 45 acima do zero. Beto está 12 abaixo de zero. A distância entre eles soma essas duas quantias."
    },
    {
        id: "B2T1Q20", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração de Inteiros — Investigação",
        display: "Investigação: É possível que a subtração de dois inteiros negativos resulte em um número positivo?",
        res: "Sim. Ex: (-3) - (-8) = +5",
        alternativas: [
            { valor: "Sim. Ex: (-3) - (-8) = +5", tipo: "acerto" },
            { valor: "Não, sempre resulta negativo", tipo: "erro", categoria: "conceito", erro: "subtracao_pressupoe_conservacao_sinal", descricao: "Deduziu que operações entre números exclusivamente negativos jamais cruzam o eixo do zero.", peso: 3 },
            { valor: "Sim, mas só quando são iguais", tipo: "erro", categoria: "procedimento", erro: "subtracao_confunde_com_elemento_neutro", descricao: "Confundiu a quebra de barreira para o positivo com o zeramento gerado por elementos idênticos (-3 - (-3) = 0).", peso: 2 },
            { valor: "Não, é sempre zero", tipo: "erro", categoria: "estrategia", erro: "subtracao_generaliza_anulacao", descricao: "Generalizou a operação de subtração no plano negativo como uma anulação automática das bases.", peso: 2 }
        ],
        passo: "Sim. Se você subtrair uma dívida maior de uma dívida menor, o choque de sinais vira a conta para positivo. (-3) - (-8) = -3 + 8 = +5.",
        dica: "Lembre da regra: ao subtrair o negativo maior, o 'menos com menos' vira um 'mais' gigante, puxando o resultado para o lucro."
    }
];
