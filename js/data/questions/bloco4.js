// js/data/questions/bloco4.js
// Bloco 4 — Álgebra e Padrão
// EF08MA06, EF08MA08 — Expressões, Equações e Modelagem
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco4 = [

    // ── EXPRESSÕES ALGÉBRICAS ────────────────────────────────────────────
    {
        id: "B4Q01", bloco: 4, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Expressão Algébrica — Valor Numérico",
        display: "Para x = 3, qual é o valor numérico exato da expressão 2x + 5?",
        res: "11",
        alternativas: [
            { valor: "11", tipo: "acerto" },
            { valor: "16", tipo: "erro", categoria: "procedimento", erro: "expressao_erro_precedencia_soma", descricao: "Somou a variável com a constante antes de multiplicar pelo coeficiente (calculando 2 × 8).", peso: 2 },
            { valor: "28", tipo: "erro", categoria: "conceito", erro: "expressao_justaposicao_variavel", descricao: "Justapôs o coeficiente e o valor numérico como se formassem uma dezena (23 + 5), não entendendo que 2x é uma multiplicação.", peso: 3 },
            { valor: "8", tipo: "erro", categoria: "atencao", erro: "expressao_ignora_coeficiente", descricao: "Ignorou a existência do coeficiente 2, apenas somando o valor de x com a constante (3 + 5).", peso: 1 }
        ],
        passo: "A expressão 2x significa '2 vezes o x'. Então: 2(3) + 5 = 6 + 5 = 11.",
        dica: "Sempre resolva a multiplicação antes da adição! Faça '2 vezes o 3', e só depois some o 5."
    },
    {
        id: "B4Q02", bloco: 4, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Expressão Algébrica — Valor Numérico",
        display: "Sendo x = 2 e y = 3, calcule o valor da expressão: 3x - 2y + 4",
        res: "4",
        alternativas: [
            { valor: "4", tipo: "acerto" },
            { valor: "16", tipo: "erro", categoria: "procedimento", erro: "expressao_soma_todos_termos", descricao: "Ignorou o sinal negativo do termo em y, somando todos os módulos no final (6 + 6 + 4).", peso: 2 },
            { valor: "-4", tipo: "erro", categoria: "procedimento", erro: "expressao_erro_agrupamento_sinal", descricao: "Colocou o agrupamento negativo em toda a metade final da conta (6 - 10), alterando o sinal da constante +4 para negativo.", peso: 2 },
            { valor: "10", tipo: "erro", categoria: "calculo", erro: "expressao_erro_aritmetico_basico", descricao: "Substituiu as variáveis de forma correta (6 e 6) mas cometeu erro de processamento nas somas e subtrações sequenciais.", peso: 1 }
        ],
        passo: "Substituindo: 3(2) - 2(3) + 4. Resolvemos as multiplicações primeiro: 6 - 6 + 4. Isso dá 0 + 4 = 4.",
        dica: "Substitua com calma: o 3x vira 6, o 2y vira 6. Depois é só fazer a conta da esquerda para a direita."
    },
    {
        id: "B4Q03", bloco: 4, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Expressão Algébrica — Simplificação",
        display: "Simplifique reduzindo os termos: 3x + 2x - x",
        res: "4x",
        alternativas: [
            { valor: "4x", tipo: "acerto" },
            { valor: "6x", tipo: "erro", categoria: "conceito", erro: "polinomio_ignora_coeficiente_oculto", descricao: "Ignorou que a variável solita '- x' possui um coeficiente 1 oculto, ou tratou-a como uma adição em vez de subtração.", peso: 3 },
            { valor: "5x", tipo: "erro", categoria: "atencao", erro: "polinomio_omite_ultimo_termo", descricao: "Agrupou apenas os dois primeiros termos que possuíam coeficientes explícitos.", peso: 1 },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "polinomio_remove_variavel_resultado", descricao: "Realizou a operação matemática dos coeficientes corretamente, mas suprimiu a base algébrica 'x' na resposta.", peso: 3 }
        ],
        passo: "A variável '- x' é o mesmo que '- 1x'. Assim, fazemos (3 + 2 - 1)x = 4x.",
        dica: "Quando o 'x' aparece sozinho sem número na frente, ele vale 1. É como se fosse '1x'."
    },
    {
        id: "B4Q04", bloco: 4, aula: 1, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Expressão Algébrica — Semelhantes",
        display: "Junte os termos semelhantes para simplificar: 5a + 3b - 2a + b",
        res: "3a + 4b",
        alternativas: [
            { valor: "3a + 4b", tipo: "acerto" },
            { valor: "8a + 4b", tipo: "erro", categoria: "procedimento", erro: "polinomio_soma_inves_subtrair", descricao: "Agrupou a família do 'a', mas somou os coeficientes (5+2) em vez de subtrair, ignorando o sinal original.", peso: 2 },
            { valor: "3a + 3b", tipo: "erro", categoria: "conceito", erro: "polinomio_ignora_variavel_solitaria", descricao: "Omitiu o termo 'b' isolado no final do polinômio, aglomerando apenas quem tinha número na frente.", peso: 3 },
            { valor: "7ab", tipo: "erro", categoria: "conceito", erro: "polinomio_soma_bases_diferentes", descricao: "Somou coeficientes de variáveis diferentes, ferindo a regra de isolamento de famílias algébricas.", peso: 3 }
        ],
        passo: "Só podemos somar 'a' com 'a' e 'b' com 'b'. Família do A: 5a - 2a = 3a. Família do B: 3b + 1b = 4b. Resultado: 3a + 4b.",
        dica: "Letras diferentes não se misturam. Junte maçãs com maçãs (a) e bananas com bananas (b)."
    },

    // ── EQUAÇÕES DO 1° GRAU ─────────────────────────────────────────────
    {
        id: "B4Q05", bloco: 4, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação do 1° Grau",
        display: "Resolva a equação básica: x + 5 = 12",
        res: "x = 7",
        alternativas: [
            { valor: "x = 7", tipo: "acerto" },
            { valor: "x = 17", tipo: "erro", categoria: "procedimento", erro: "equacao_mantem_sinal_transposicao", descricao: "Moveu o número 5 para o segundo membro, mas não operou sua inversão matemática (para subtração).", peso: 2 },
            { valor: "x = 60", tipo: "erro", categoria: "conceito", erro: "equacao_inverte_soma_por_multiplicacao", descricao: "Multiplicou os termos em vez de aplicar a anulação subtrativa.", peso: 3 },
            { valor: "x = 5", tipo: "erro", categoria: "atencao", erro: "equacao_associa_termo_conhecido", descricao: "Elegeu um dos valores conhecidos e presentes no texto da igualdade como se fosse a incógnita procurada.", peso: 1 }
        ],
        passo: "Para isolar o x, o número +5 passa para o outro lado da igualdade fazendo a operação inversa (subtraindo). Fica: x = 12 - 5. Logo, x = 7.",
        dica: "Pense na operação contrária: se o 5 está somando de um lado, ele vai para o outro lado subtraindo."
    },
    {
        id: "B4Q06", bloco: 4, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação do 1° Grau",
        display: "Qual é a solução da equação: 3x = 18",
        res: "x = 6",
        alternativas: [
            { valor: "x = 6", tipo: "acerto" },
            { valor: "x = 15", tipo: "erro", categoria: "procedimento", erro: "equacao_inverte_multiplicacao_por_subtracao", descricao: "Ao mover o coeficiente multiplicador, processou-o erroneamente como uma subtração escalar (18 - 3).", peso: 2 },
            { valor: "x = 54", tipo: "erro", categoria: "conceito", erro: "equacao_mantem_operacao_transposicao", descricao: "Moveu o fator de divisão mas manteve a multiplicação, amplificando o segundo membro (18 × 3).", peso: 3 },
            { valor: "x = 3", tipo: "erro", categoria: "interpretacao", erro: "equacao_seleciona_coeficiente", descricao: "Visualizou o coeficiente do primeiro termo como se ele fosse a representação do 'x'.", peso: 1 }
        ],
        passo: "O 3 está multiplicando o x. Ele passa para o outro lado fazendo a operação inversa (dividindo). x = 18 ÷ 3 = 6.",
        dica: "Um número colado numa letra significa multiplicação. Para se livrar dele, passe-o para o outro lado dividindo."
    },
    {
        id: "B4Q07", bloco: 4, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação do 1° Grau",
        display: "Descubra o valor de x em: 2x + 3 = 11",
        res: "x = 4",
        alternativas: [
            { valor: "x = 4", tipo: "acerto" },
            { valor: "x = 7", tipo: "erro", categoria: "procedimento", erro: "equacao_erro_sinal_transposicao_soma", descricao: "Errou a operação de passagem do 3 (somando 11+3=14), e depois dividiu esse erro por 2.", peso: 2 },
            { valor: "x = 8", tipo: "erro", categoria: "procedimento", erro: "equacao_omite_divisao_final", descricao: "Abateu o 3 corretamente do 11, mas considerou o problema encerrado antes de isolar a variável pelo coeficiente 2.", peso: 2 },
            { valor: "x = 2", tipo: "erro", categoria: "calculo", erro: "equacao_divide_soma_errada", descricao: "Cometeu erro de tabuada básica no momento do quociente final (processando 8 ÷ 2).", peso: 1 }
        ],
        passo: "Primeiro, isolamos o bloco do x mandando o +3 para o outro lado diminuindo. Fica 2x = 8. Por fim, dividimos por 2. x = 4.",
        dica: "Use duas etapas: tire as adições/subtrações primeiro e deixe quem está grudado no x (a multiplicação) por último."
    },
    {
        id: "B4Q08", bloco: 4, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação do 1° Grau",
        display: "Encontre a solução para: 4x - 7 = 9",
        res: "x = 4",
        alternativas: [
            { valor: "x = 4", tipo: "acerto" },
            { valor: "x = 16", tipo: "erro", categoria: "procedimento", erro: "equacao_omite_divisao_final_sub", descricao: "Alocou o termo -7 como adição corretamente e resolveu o membro numérico (16), mas abortou antes de descer o dividendo.", peso: 2 },
            { valor: "x = 0,5 (ou 2/4)", tipo: "erro", categoria: "procedimento", erro: "equacao_inverte_sinal_transposicao_sub", descricao: "Processou a passagem do termo subtrativo diminuindo também o segundo membro (9 - 7).", peso: 2 },
            { valor: "x = -4", tipo: "erro", categoria: "conceito", erro: "equacao_erro_sinal_isolamento", descricao: "Montou a estrutura correta (16 ÷ 4) mas anexou um sinal negativo falsamente ao encontrar o resultado.", peso: 3 }
        ],
        passo: "O -7 passa para a direita somando: 4x = 9 + 7. Fica 4x = 16. O 4 passa dividindo: x = 16 ÷ 4. x = 4.",
        dica: "Atenção ao sinal! Se o 7 está diminuindo da esquerda, tem que somar do lado direito."
    },
    {
        id: "B4Q09", bloco: 4, aula: 2, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação do 1° Grau — Membros",
        display: "Equilíbrio entre membros: Resolva 5x - 3 = 2x + 9",
        res: "x = 4",
        alternativas: [
            { valor: "x = 4", tipo: "acerto" },
            { valor: "x = 6", tipo: "erro", categoria: "procedimento", erro: "equacao_membros_erro_sinal_variavel", descricao: "Passou a variável do segundo para o primeiro membro mantendo sua adição (5x + 2x = 7x).", peso: 2 },
            { valor: "x = 2", tipo: "erro", categoria: "procedimento", erro: "equacao_membros_erro_sinal_constante", descricao: "Passou a constante do primeiro para o segundo membro sem inverter sua natureza (9 - 3 = 6).", peso: 2 },
            { valor: "x = 12", tipo: "erro", categoria: "procedimento", erro: "equacao_membros_omite_divisao", descricao: "Juntou todas as famílias dos membros corretamente (3x = 12), mas esqueceu de extrair a incógnita unitária.", peso: 2 }
        ],
        passo: "Reunindo as letras à esquerda: 5x - 2x. Reunindo os números soltos à direita: 9 + 3. Ficamos com 3x = 12. Dividindo: x = 4.",
        dica: "Regra das Equações Longas: quem muda de lado (seja letra ou número solto), muda de sinal na hora de atravessar o igual!"
    },

    // ── EQUAÇÕES — CONTEXTO ─────────────────────────────────────────────
    {
        id: "B4Q10", bloco: 4, aula: 3, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação — Problema Contextualizado",
        display: "O dobro de um número secreto mais 3 resulta em 15. Qual é o número secreto?",
        res: "6",
        alternativas: [
            { valor: "6", tipo: "acerto" },
            { valor: "9", tipo: "erro", categoria: "interpretacao", erro: "modelagem_interpreta_dobro_como_soma", descricao: "Modelou apenas 'x + 3 = 15', suprimindo da estrutura matemática a menção à palavra 'dobro'.", peso: 3 },
            { valor: "12", tipo: "erro", categoria: "procedimento", erro: "modelagem_esquece_divisao_dobro", descricao: "Construiu a equivalência abstrata (2x = 12) perfeitamente, mas parou no meio do caminho sem achar o valor de apenas 1x.", peso: 2 },
            { valor: "3", tipo: "erro", categoria: "calculo", erro: "modelagem_chute_divisao_inadequada", descricao: "Recorreu ao método de tentativa/erro e errou a aritmética do teste reverso.", peso: 1 }
        ],
        passo: "Traduzindo o texto para matemática: 2x + 3 = 15. Resolvendo: tira 3 de 15, sobram 12. O dobro é 12, então a metade (x) é 6.",
        dica: "Traduzindo devagar: 'Dobro de um número' é 2x. 'Mais três resulta 15' vira + 3 = 15."
    },
    {
        id: "B4Q11", bloco: 4, aula: 3, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação — Problema de Idade",
        display: "Ana tem o triplo da idade de Bruno. A soma exata das idades deles é 32. Quantos anos Bruno possui?",
        res: "8 anos",
        alternativas: [
            { valor: "8 anos", tipo: "acerto" },
            { valor: "16 anos", tipo: "erro", categoria: "conceito", erro: "modelagem_divide_soma_por_dois", descricao: "Partiu a soma (32) no meio em duas fatias iguais, não estabelecendo uma equação de modelagem com pesos assimétricos.", peso: 3 },
            { valor: "24 anos", tipo: "erro", categoria: "interpretacao", erro: "modelagem_responde_variavel_errada", descricao: "Calculou a variável X corretamente (8), mas preencheu o formulário com o peso 3X da Ana em vez do Bruno.", peso: 2 },
            { valor: "10 anos", tipo: "erro", categoria: "procedimento", erro: "modelagem_divide_pelo_fator_direto", descricao: "Tentou resolver com divisão direta pelo fator da frase (32 ÷ 3), ignorando a adição do 1x do garoto na base algorítmica (4x).", peso: 2 }
        ],
        passo: "Se Bruno é x, Ana é 3x. Somando as pessoas (x + 3x) = 4x. A equação fica 4x = 32. Dividindo 32 por 4, chegamos a x = 8.",
        dica: "Cuidado na hora de montar as 'caixinhas': Bruno é 1 caixa. Ana tem o triplo, ou seja, 3 caixinhas. No total são 4 caixinhas para os 32 anos!"
    },
    {
        id: "B4Q12", bloco: 4, aula: 3, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Equação — Contexto Preço",
        display: "Ingresso de adulto custa R$ 15 e de criança R$ 8. Uma família com 2 adultos gastou no total R$ 54. Quantas crianças formam a família?",
        res: "3 crianças",
        alternativas: [
            { valor: "3 crianças", tipo: "acerto" },
            { valor: "4 crianças", tipo: "erro", categoria: "calculo", erro: "modelagem_erro_subtracao_fixo", descricao: "Calculou a parcela dos adultos (30) mas errou a conta de subtração (54 - 30) ao abater do fundo principal.", peso: 1 },
            { valor: "2 crianças", tipo: "erro", categoria: "interpretacao", erro: "modelagem_usa_variavel_dada", descricao: "Elegeu um numeral presente na história original (2) como se fosse a resposta da charada.", peso: 2 },
            { valor: "5 crianças", tipo: "erro", categoria: "estrategia", erro: "modelagem_ignora_valor_adulto", descricao: "Ignorou o custo base embutido dos dois adultos e tentou diluir todo o montante de dinheiro na taxa das crianças.", peso: 3 }
        ],
        passo: "Os 2 adultos gastaram juntos 30 reais (2 × 15). Faltam 24 reais (54 - 30). Como o bilhete das crianças é 8 reais, 24 ÷ 8 = 3 crianças.",
        dica: "Modele assim: tire o dinheiro garantido dos adultos primeiro (2 x 15). O que sobrar, você divide pelo preço individual da criança."
    },

    // ── INEQUAÇÕES ──────────────────────────────────────────────────────
    {
        id: "B4Q13", bloco: 4, aula: 4, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Inequação do 1° Grau",
        display: "Qual é o conjunto-solução que atende a inequação: x + 3 > 7",
        res: "x > 4",
        alternativas: [
            { valor: "x > 4", tipo: "acerto" },
            { valor: "x > 10", tipo: "erro", categoria: "procedimento", erro: "inequacao_mantem_sinal_transposicao", descricao: "Aplicou a transposição para o segundo membro sem inverter a natureza de adição para subtração.", peso: 2 },
            { valor: "x < 4", tipo: "erro", categoria: "conceito", erro: "inequacao_inverte_desigualdade_sem_motivo", descricao: "Espelhou e inverteu a foz do símbolo da desigualdade (>) para (<) em operação sem número negativo.", peso: 3 },
            { valor: "x = 4", tipo: "erro", categoria: "interpretacao", erro: "inequacao_trata_como_equacao_estrita", descricao: "Alterou o campo probabilístico da inequação trocando a boca de desigualdade por um pino fechado de igualdade.", peso: 2 }
        ],
        passo: "Resolvemos igual a uma equação: o +3 pula para a direita diminuindo. x > 7 - 3, logo x precisa ser estritamente maior que 4 (x > 4).",
        dica: "Pode tratar a boca do jacaré (>) quase como um sinal de (=). O que passar para o outro lado, muda a operação matemática."
    },
    {
        id: "B4Q14", bloco: 4, aula: 4, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Inequação — Inversão do Sinal",
        display: "Sendo negativo o primeiro membro, resolva: -2x > 8",
        res: "x < -4",
        alternativas: [
            { valor: "x < -4", tipo: "acerto" },
            { valor: "x > -4", tipo: "erro", categoria: "conceito", erro: "inequacao_esquece_inversao_sinal_negativo", descricao: "Dividiu a base negativa mas omitiu a regra mandatória algébrica de virar a face do símbolo de desigualdade.", peso: 3 },
            { valor: "x < 4", tipo: "erro", categoria: "procedimento", erro: "inequacao_erro_sinal_divisao", descricao: "Operou a inversão do símbolo de desigualdade corretamente, mas suprimiu o sinal de negativo no resultado numérico.", peso: 2 },
            { valor: "x > 4", tipo: "erro", categoria: "estrategia", erro: "inequacao_trata_como_equacao_positiva", descricao: "Errou as duas mecânicas do problema: ignorou a negativação e manteve o símbolo inalterado.", peso: 3 }
        ],
        passo: "Para isolar o 'x', passamos o -2 dividindo. A regra de ouro diz que ao multiplicar ou dividir inequações por números negativos, o sinal VIRA. x < -4.",
        dica: "Regra Sagrada: sempre que um número NEGATIVO for passar multiplicando ou dividindo, o bico do sinal (>) também tem que virar (<)."
    },

    // ── SISTEMAS E PADRÕES ───────────────────────────────────────────────
    {
        id: "B4Q15", bloco: 4, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA08", bncc_desc: "Padrão Numérico — Sequência",
        display: "Observe a sequência: 2, 5, 8, 11, 14... Qual número ocupará exata 10ª posição?",
        res: "29",
        alternativas: [
            { valor: "29", tipo: "acerto" },
            { valor: "27", tipo: "erro", categoria: "procedimento", erro: "padrao_multiplica_razao_pela_posicao", descricao: "Notou os pulos de razão 3 e apenas os multiplicou pelo décimo fator, sem ancorar a soma à base inicial.", peso: 2 },
            { valor: "32", tipo: "erro", categoria: "procedimento", erro: "padrao_soma_razao_cheia", descricao: "Assumiu os 10 fatores como acréscimos inteiros em cima do termo inicial sem aplicar a redução do primeiro degrau (n-1).", peso: 2 },
            { valor: "30", tipo: "erro", categoria: "calculo", erro: "padrao_chute_multiplo_dez", descricao: "Baseado apenas na terminação, deduziu empiricamente uma dezena fechada sem rodar o algoritmo de P.A.", peso: 1 }
        ],
        passo: "A sequência aumenta de 3 em 3. Para chegar do 1º ao 10º termo, damos 9 pulos. 9 pulos × 3 = 27 de aumento. Somando ao número 2 original: 29.",
        dica: "Ache o tamanho do pulo (é 3). Pense: para ir da 1ª até a 10ª casa num tabuleiro, você dá 9 passos. Faça 9 × 3 e some à casa inicial."
    },
    {
        id: "B4Q16", bloco: 4, aula: 5, tipo: "aritmetica",
        bncc: "EF08MA08", bncc_desc: "Padrão — Generalização",
        display: "Um quadrado usa 4 palitos. Dois quadrados 'grudados' usam 7. Três grudados usam 10. Qual a fórmula matemática para desenhar N quadrados?",
        res: "3n + 1",
        alternativas: [
            { valor: "3n + 1", tipo: "acerto" },
            { valor: "4n", tipo: "erro", categoria: "conceito", erro: "padrao_assume_crescimento_isolado", descricao: "Omitiu que em figuras acopladas há palitos em faces sobrepostas, superdimensionando o custo de construção.", peso: 3 },
            { valor: "3n", tipo: "erro", categoria: "procedimento", erro: "padrao_omite_termo_independente", descricao: "Localizou perfeitamente a variação fixa por peça acoplada, mas omitiu a haste fundamental que encerra as fileiras.", peso: 2 },
            { valor: "2n + 2", tipo: "erro", categoria: "estrategia", erro: "padrao_formula_incompativel", descricao: "Construiu uma generalização instável que atinge sucesso com o termo (1), mas desmorona na previsão algorítmica futura.", peso: 2 }
        ],
        passo: "Do 4 pro 7 crescem 3. Do 7 pro 10 crescem 3. O fator de crescimento é 3n. Mas o primeiro quadrado precisou de uma haste extra para fechar a ponta. Logo: 3n + 1.",
        dica: "Observe de quanto em quanto cresce a série e cole isso na letra (3n). Depois veja quanto falta ou passa pra dar o valor do primeiro desenho."
    },
    {
        id: "B4Q17", bloco: 4, aula: 6, tipo: "aritmetica",
        bncc: "EF08MA08", bncc_desc: "Modelagem Algébrica",
        display: "Carlos ganha um salário mensal fixo de R$ 1.200,00 e decide guardar (economizar) uma quantia 'x'. Qual expressão reflete o seu 'Gasto' do mês?",
        res: "1.200 - x",
        alternativas: [
            { valor: "1.200 - x", tipo: "acerto" },
            { valor: "1.200 + x", tipo: "erro", categoria: "conceito", erro: "modelagem_soma_economias_com_renda", descricao: "Adicionou a parcela preservada da reserva aos ganhos contábeis, criando uma estrutura de lucros ao invés de despesas.", peso: 3 },
            { valor: "x - 1.200", tipo: "erro", categoria: "procedimento", erro: "modelagem_inverte_minuendo_subtraendo", descricao: "Montou a lógica matemática de diferença corretamente, mas inseriu a variável pequena consumindo a grandeza de fundo inteiro.", peso: 2 },
            { valor: "1.200 × x", tipo: "erro", categoria: "interpretacao", erro: "modelagem_confunde_gasto_com_proporcao", descricao: "Usou a estrutura do sinal de multiplicar para referenciar o dinheiro retido sem abatê-lo do estoque.", peso: 2 }
        ],
        passo: "Seu consumo total (o que pode ser torrado) é composto pelo seu teto financeiro tirando a reserva blindada. Logo, o gasto é 1200 - x.",
        dica: "A fórmula básica de despesas caseiras: o que você gasta é igual ao que você recebe MESES a grana que guardou no cofrinho."
    },
    {
        id: "B4Q18", bloco: 4, aula: 6, tipo: "aritmetica",
        bncc: "EF08MA08", bncc_desc: "Modelagem Algébrica — Área",
        display: "Um terreno em formato de retângulo tem sua largura denotada por (x) e seu comprimento por (x + 5). Qual expressão algébrica expressa sua área total?",
        res: "x² + 5x",
        alternativas: [
            { valor: "x² + 5x", tipo: "acerto" },
            { valor: "2x + 5", tipo: "erro", categoria: "conceito", erro: "geometria_modela_perimetro_inves_area", descricao: "Descreveu a adição de duas cordas da lateral modelando distâncias superficiais lineares e não a expansão bidimensional (área).", peso: 3 },
            { valor: "x² + 5", tipo: "erro", categoria: "procedimento", erro: "algebra_distribuitiva_incompleta", descricao: "Modelou base vezes altura de modo satisfatório, mas falhou em executar a propriedade distributiva do x na constante no final.", peso: 2 },
            { valor: "4x + 10", tipo: "erro", categoria: "conceito", erro: "geometria_modela_perimetro_dobrado", descricao: "Forneceu a expressão abstrata detalhada e precisa para calcular o perímetro envolvente e não a área interna.", peso: 3 }
        ],
        passo: "Área de retângulo se acha pelo produto Lado × Lado. Fica x × (x + 5). Aplicando o 'chuveirinho' (distributiva), x·x vira x², e x·5 vira 5x.",
        dica: "Modele: Lado vezes Lado. Ficará x(x+5). Então você precisa distribuir o x solto para todo mundo que está lá dentro do parênteses."
    },
    {
        id: "B4Q19", bloco: 4, aula: 7, tipo: "aritmetica",
        bncc: "EF08MA08", bncc_desc: "Equação Quadrática Simples",
        display: "Na equação quadrática fundamental x² = 25. Quais são as respostas completas?",
        res: "x = 5 ou x = -5",
        alternativas: [
            { valor: "x = 5 ou x = -5", tipo: "acerto" },
            { valor: "x = 5", tipo: "erro", categoria: "conceito", erro: "equacao_quadratica_ignora_raiz_negativa", descricao: "Admitiu apenas a extração formal da raiz de números naturais, desconhecendo a natureza duplicada simétrica do expoente de grau 2.", peso: 3 },
            { valor: "x = 12,5", tipo: "erro", categoria: "procedimento", erro: "equacao_quadratica_divide_por_dois", descricao: "Ao tentar suprimir o grau da incógnita, partiu a base numérica em dois, confundindo potenciação com produto par.", peso: 2 },
            { valor: "x = 25", tipo: "erro", categoria: "interpretacao", erro: "equacao_quadratica_retorna_constante", descricao: "Transferiu o número contido no segundo lado do cenário como resposta, ignorando a dependência do grau 2.", peso: 1 }
        ],
        passo: "Sempre que tiramos a raiz quadrada em uma equação, a reposta exige ± (mais e menos). Pois 5 × 5 = 25, mas (-5) × (-5) também dá 25.",
        dica: "Quando o x estiver com o expoente pequeno '2' em cima, a reposta tem duas saídas. O espelho positivo e o espelho negativo do número."
    },
    {
        id: "B4Q20", bloco: 4, aula: 8, tipo: "aritmetica",
        bncc: "EF08MA06", bncc_desc: "Verificação de Solução",
        display: "Faça o cálculo isolado: qual o valor de x que valida o espelho e satisfaz a equação 2x - 1 = x + 3?",
        res: "x = 4",
        alternativas: [
            { valor: "x = 4", tipo: "acerto" },
            { valor: "x = 2", tipo: "erro", categoria: "procedimento", erro: "equacao_verificacao_subtrai_constante_errado", descricao: "Manejou a constante unitária (-1) de forma irregular, passando-a diminuindo pro segundo lado onde formou (3 - 1).", peso: 2 },
            { valor: "x = -4", tipo: "erro", categoria: "procedimento", erro: "equacao_verificacao_erro_sinal_variavel", descricao: "Fez a transposição formal das famílias perfeitamente, mas no acoplamento das letras trocou bruscamente o sinal de toda a expressão.", peso: 2 },
            { valor: "x = 3", tipo: "erro", categoria: "calculo", erro: "equacao_verificacao_chute_invalido", descricao: "Introduziu um fator empírico pela fresta do chute livre de dedução, atestando como provado algo não exato.", peso: 1 }
        ],
        passo: "Reúna as letras passando o x pra esquerda (vira negativo) e o -1 pra direita (vira positivo). 2x - 1x = 3 + 1. Resultado: x = 4. Testando: 2(4)-1 = 7, e 4+3 = 7.",
        dica: "Mova todas as letras pro lado esquerdo e os números pro lado direito trocando o sinal. O valor que encontrar deve igualar os dois lados quando substituído."
    }
];
