// js/data/questions/bloco2_trilha4.js
// Bloco 2 — Números e Operações | Trilha 4
// Aula 9: Operações com Decimais e Racionais (EF07MA04)
// Aula 10: Proporcionalidade — Razão e Proporção (EF07MA04)
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco2_trilha4 = [

    // ── AULA 9: OPERAÇÕES COM DECIMAIS ──────────────────────────────────

    {
        id: "B2T4Q01", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Decimais",
        display: "3,7 + 2,45 = ?",
        res: "6,15",
        alternativas: [
            { valor: "6,15", tipo: "acerto" },
            { valor: "5,75", tipo: "erro", categoria: "procedimento", erro: "decimal_soma_desalinha_virgula", descricao: "Somou os números alinhando pela última casa da direita (7 com 5), ignorando a posição das vírgulas.", peso: 3 },
            { valor: "6,05", tipo: "erro", categoria: "calculo", erro: "decimal_soma_falha_reagrupamento", descricao: "Alinhou as vírgulas corretamente, mas errou o cálculo de transporte na casa dos décimos (vai um).", peso: 2 },
            { valor: "6,1", tipo: "erro", categoria: "atencao", erro: "decimal_omite_casa_centezimal", descricao: "Executou a soma base mas abandonou o último dígito decimal do segundo fator.", peso: 1 }
        ],
        passo: "A regra de ouro: vírgula embaixo de vírgula. Complete com zeros: 3,70 + 2,45. A soma dá 6,15.",
        dica: "Sempre adicione um zero (3,70) para as casas ficarem do mesmo tamanho antes de somar."
    },
    {
        id: "B2T4Q02", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Decimais",
        display: "10,2 - 6,75 = ?",
        res: "3,45",
        alternativas: [
            { valor: "3,45", tipo: "acerto" },
            { valor: "3,55", tipo: "erro", categoria: "procedimento", erro: "decimal_subtracao_ignora_emprestimo_zero", descricao: "Desceu o 5 direto em vez de colocar o zero no 10,20 e pedir emprestado (0 - 5 = 5).", peso: 3 },
            { valor: "4,45", tipo: "erro", categoria: "calculo", erro: "decimal_subtracao_erro_emprestimo_inteiro", descricao: "Esqueceu de reduzir 1 da parte inteira ao pedir emprestado para as casas decimais.", peso: 2 },
            { valor: "3,25", tipo: "erro", categoria: "calculo", erro: "decimal_subtracao_erro_tabuada", descricao: "Errou uma subtração básica no meio do algoritmo armado.", peso: 1 }
        ],
        passo: "Alinhe as vírgulas e preencha com zero: 10,20 - 6,75. Zero menos cinco pede emprestado. O resultado é 3,45.",
        dica: "Coloque o zero: 10,20. Ao subtrair 5 de 0, lembre-se de 'pedir emprestado' para o número do lado."
    },
    {
        id: "B2T4Q03", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Decimais",
        display: "1,5 × 2,4 = ?",
        res: "3,6",
        alternativas: [
            { valor: "3,6", tipo: "acerto" },
            { valor: "36", tipo: "erro", categoria: "conceito", erro: "decimal_multiplicacao_ignora_casas_totais", descricao: "Multiplicou os números como inteiros e esqueceu de devolver as casas decimais ao resultado.", peso: 3 },
            { valor: "0,36", tipo: "erro", categoria: "procedimento", erro: "decimal_multiplicacao_excesso_casas", descricao: "Aplicou casas decimais além da conta necessária a partir do algarismo significativo.", peso: 2 },
            { valor: "3,06", tipo: "erro", categoria: "estrategia", erro: "decimal_multiplicacao_erro_posicional", descricao: "Inseriu o zero como espaçador incorreto na arquitetura do decimal resultante.", peso: 2 }
        ],
        passo: "Multiplique como se não houvesse vírgula: 15 × 24 = 360. Temos 1 casa no (1,5) e 1 casa no (2,4) = 2 casas totais. 360 vira 3,60 (ou 3,6).",
        dica: "Multiplique normal (15 × 24). Depois, conte quantas casas existem depois das vírgulas nas perguntas e devolva na resposta."
    },
    {
        id: "B2T4Q04", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Decimais",
        display: "8,4 ÷ 0,7 = ?",
        res: "12",
        alternativas: [
            { valor: "12", tipo: "acerto" },
            { valor: "1,2", tipo: "erro", categoria: "conceito", erro: "decimal_divisao_mantem_virgula_errada", descricao: "Dividiu os módulos (84/7) e forçou a manutenção de 1 casa decimal na resposta.", peso: 3 },
            { valor: "0,12", tipo: "erro", categoria: "procedimento", erro: "decimal_divisao_desloca_virgula_inversa", descricao: "Acumulou as casas decimais em vez de anular a proporção de deslocamento.", peso: 2 },
            { valor: "120", tipo: "erro", categoria: "procedimento", erro: "decimal_divisao_multiplica_base_sobra", descricao: "Multiplicou o dividendo de forma desproporcional ao divisor na conversão.", peso: 2 }
        ],
        passo: "Ambos os números têm 1 casa decimal. Se multiplicarmos os dois por 10, a conta vira 84 ÷ 7. O resultado limpo é 12.",
        dica: "Multiplique os dois lados por 10 para sumir com as vírgulas. A conta fica muito mais fácil: 84 ÷ 7."
    },
    {
        id: "B2T4Q05", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Operações com Decimais — Contexto Compras",
        display: "Compras: R$ 12,50 + R$ 8,75 + R$ 6,30. Se pagar com nota de R$ 30,00, vai ter troco ou vai faltar?",
        res: "Sim, sobram R$ 2,45",
        alternativas: [
            { valor: "Sim, sobram R$ 2,45", tipo: "acerto" },
            { valor: "Não, faltam R$ 2,45", tipo: "erro", categoria: "interpretacao", erro: "problema_inverte_situacao_caixa", descricao: "Calculou a diferença correta, mas interpretou o saldo negativo (dívida) em vez de troco positivo.", peso: 3 },
            { valor: "Sim, sobram R$ 3,45", tipo: "erro", categoria: "calculo", erro: "decimal_subtracao_emprestimo_erro_contexto", descricao: "Errou um valor no cálculo de pedir emprestado ao fazer a conta do troco (30,00 - 27,55).", peso: 2 },
            { valor: "Não, faltam R$ 0,45", tipo: "erro", categoria: "calculo", erro: "decimal_soma_parcial_errada", descricao: "Errou a soma inicial dos produtos antes de abater do pagamento.", peso: 1 }
        ],
        passo: "A soma das compras: 12,50 + 8,75 + 6,30 = 27,55. O troco é: 30,00 - 27,55 = R$ 2,45.",
        dica: "Soma tudo organizando vírgula sob vírgula. Depois tire de R$ 30,00."
    },
    {
        id: "B2T4Q06", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Decimais — Combustível",
        display: "Um carro percorre 12,5 km por litro. Quantos quilômetros ele anda com exatos 8,4 litros?",
        res: "105 km",
        alternativas: [
            { valor: "105 km", tipo: "acerto" },
            { valor: "1.050 km", tipo: "erro", categoria: "procedimento", erro: "decimal_multiplicacao_esquece_uma_casa", descricao: "Aplicou apenas uma casa decimal no final (do 8,4) e ignorou a do fator 12,5.", peso: 3 },
            { valor: "10,5 km", tipo: "erro", categoria: "procedimento", erro: "decimal_multiplicacao_excesso_casas_contexto", descricao: "Realizou o recuo de 3 casas decimais no algoritmo final.", peso: 2 },
            { valor: "20,9 km", tipo: "erro", categoria: "conceito", erro: "problema_soma_fatores_multiplicativos", descricao: "Somou os valores (12,5 + 8,4) em vez de aplicar a multiplicação proporcional.", peso: 3 }
        ],
        passo: "Multiplicação: 125 × 84 = 10.500. Como temos 2 casas decimais no total (uma em cada fator), o recuo gera 105,00 = 105 km.",
        dica: "Para saber o percurso total: multiplique o que o carro faz com 1 litro pela quantidade total de litros no tanque."
    },
    {
        id: "B2T4Q07", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Decimais — Fita",
        display: "Uma fita de 15 metros será cortada em pedaços menores de 0,75 m. Quantos pedaços inteiros teremos?",
        res: "20 pedaços",
        alternativas: [
            { valor: "20 pedaços", tipo: "acerto" },
            { valor: "2 pedaços", tipo: "erro", categoria: "procedimento", erro: "decimal_divisao_erro_fator_dez", descricao: "Não multiplicou a base inteira (15) pelo mesmo fator (100) que usou para eliminar a vírgula do divisor.", peso: 3 },
            { valor: "200 pedaços", tipo: "erro", categoria: "calculo", erro: "decimal_divisao_excesso_zeros_alocados", descricao: "Adicionou zeros demais durante a etapa de reequilíbrio da divisão armadada.", peso: 2 },
            { valor: "11,25 pedaços", tipo: "erro", categoria: "conceito", erro: "problema_multiplica_em_vez_dividir", descricao: "Multiplicou os 15 metros por 0,75 em vez de efetuar o particionamento da divisão.", peso: 3 }
        ],
        passo: "Para cortar (dividir), iguale as casas: 15,00 ÷ 0,75. Cortando as vírgulas fica 1500 ÷ 75 = 20 pedaços exatos.",
        dica: "Corte e repartição pedem divisão. Coloque 2 zeros no 15 (15,00) para poder 'matar' a vírgula do 0,75."
    },
    {
        id: "B2T4Q08", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimais — Investigação",
        display: "Investigação matemática: Qual grandeza é MAIOR, o produto de (0,1 × 0,1) ou a soma de (0,1 + 0,1)?",
        res: "0,1 + 0,1 (= 0,2 > 0,01)",
        alternativas: [
            { valor: "0,1 + 0,1 (= 0,2 > 0,01)", tipo: "acerto" },
            { valor: "0,1 × 0,1 (= 0,01 > 0,2)", tipo: "erro", categoria: "conceito", erro: "decimal_investigacao_assume_multiplicacao_maior", descricao: "Convicção baseada em inteiros de que o símbolo 'vezes' sempre gera o maior número matemático.", peso: 3 },
            { valor: "São iguais", tipo: "erro", categoria: "estrategia", erro: "decimal_investigacao_pressupoe_anulacao_igualitaria", descricao: "Presumiu que o fator numérico 1 atua como neutro absoluto anulando diferenças entre operações.", peso: 2 },
            { valor: "Depende do contexto", tipo: "erro", categoria: "interpretacao", erro: "decimal_investigacao_nega_certeza_aritmetica", descricao: "Relativizou resultados de operações puramente numéricas objetivas.", peso: 1 }
        ],
        passo: "A soma dá 0,2. A multiplicação de números menores que 1 os 'encolhe': 0,1 × 0,1 = 0,01. Logo, a soma é maior.",
        dica: "Atenção: multiplicar fatias menores que um inteiro (zero vírgula algo) faz o resultado final diminuir, não aumentar!"
    },
    {
        id: "B2T4Q09", bloco: 2, aula: 9, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Posição da Vírgula",
        display: "Sabemos que 36 × 4 = 144. Na conta (3,6 × 4), onde deve ser posicionada a vírgula no resultado final?",
        res: "14,4",
        alternativas: [
            { valor: "14,4", tipo: "acerto" },
            { valor: "144,0", tipo: "erro", categoria: "conceito", erro: "decimal_ignora_posicionamento_virgula", descricao: "Assumiu o numeral como inteiro limpo, posicionando a vírgula na margem ociosa externa.", peso: 3 },
            { valor: "1,44", tipo: "erro", categoria: "procedimento", erro: "decimal_deslocamento_excesso_virgula", descricao: "Deslocou a vírgula duas posições, aplicando a casa também sobre um fator que é apenas inteiro.", peso: 2 },
            { valor: "1.440", tipo: "erro", categoria: "estrategia", erro: "decimal_multiplica_fator_decimal_ampliado", descricao: "Multiplicou mentalmente o resultado por 10 em vez de devolver as casas decimais.", peso: 2 }
        ],
        passo: "O 3,6 tem uma única casa decimal. O 4 é inteiro (zero casas). Somando, recuamos 1 casa no resultado 144, ficando 14,4.",
        dica: "Conte quantas casas depois da vírgula os números originais da conta possuem. Esse é o número de pulos da vírgula no final."
    },

    // ── AULA 10: PROPORCIONALIDADE ───────────────────────────────────────

    {
        id: "B2T4Q10", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Razão",
        display: "Um carro percorre 120 km em 3 horas ininterruptas. Qual é a RAZÃO dessa viagem expressa em km/hora?",
        res: "40 km/h",
        alternativas: [
            { valor: "40 km/h", tipo: "acerto" },
            { valor: "360 km/h", tipo: "erro", categoria: "conceito", erro: "razao_multiplica_termos", descricao: "Efetuou a multiplicação das variáveis em vez de estabelecer a divisão de base estática.", peso: 3 },
            { valor: "123 km/h", tipo: "erro", categoria: "estrategia", erro: "razao_soma_termos", descricao: "Somou grandezas não lineares (120 + 3) formando uma proporção ilusória.", peso: 2 },
            { valor: "3 km/h", tipo: "erro", categoria: "interpretacao", erro: "razao_elege_valor_secundario_resposta", descricao: "Selecionou a variável tempo como sendo a resposta final da velocidade.", peso: 1 }
        ],
        passo: "A Razão é a comparação/divisão entre duas grandezas. Dividimos os 120 km pelo bloco de 3 horas. Resultado = 40 km a cada hora.",
        dica: "Para achar a proporção de km por hora, basta efetuar uma conta de divisão limpa."
    },
    {
        id: "B2T4Q11", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporção — Produto Cruzado",
        display: "Ao observarmos as frações 2/3 e 8/12, podemos dizer que elas formam uma PROPORÇÃO válida?",
        res: "Sim (2×12 = 3×8 = 24)",
        alternativas: [
            { valor: "Sim (2×12 = 3×8 = 24)", tipo: "acerto" },
            { valor: "Não (2×12 ≠ 3×8)", tipo: "erro", categoria: "calculo", erro: "proporcao_erro_multiplicacao_cruzada", descricao: "Cometeu falha aritmética ao processar mentalmente os produtos da cruz e julgou-os desiguais.", peso: 2 },
            { valor: "Sim, mas só por coincidência", tipo: "erro", categoria: "conceito", erro: "proporcao_nega_relacao_matematica", descricao: "Acredita que o fenômeno é acidental e não originário das leis de amplificação proporcional.", peso: 3 },
            { valor: "Não há como saber", tipo: "erro", categoria: "estrategia", erro: "proporcao_desconhece_teste_cruzado", descricao: "Declarou ignorância do algoritmo de produto dos meios e extremos.", peso: 2 }
        ],
        passo: "Sim. A regra de ouro da proporção diz que o produto cruzado precisa dar igual: 2×12 = 24 e 3×8 = 24.",
        dica: "Se a conta em 'X' (multiplicação cruzada) der o mesmo valor dos dois lados, então são proporções verdadeiras."
    },
    {
        id: "B2T4Q12", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Regra de Três Simples Direta",
        display: "Uma receita para 6 pessoas utiliza 3 ovos. Quantos ovos seriam necessários para atender a 10 pessoas?",
        res: "5 ovos",
        alternativas: [
            { valor: "5 ovos", tipo: "acerto" },
            { valor: "30 ovos", tipo: "erro", categoria: "procedimento", erro: "regra3_multiplica_sem_dividir", descricao: "Aplicou a multiplicação da regra (3x10), mas esqueceu de dividir o montante pela base (6).", peso: 2 },
            { valor: "6 ovos", tipo: "erro", categoria: "estrategia", erro: "regra3_associa_numero_inicial_proporcao", descricao: "Respondeu baseando-se no numeral de pessoas presente no texto original.", peso: 1 },
            { valor: "4 ovos", tipo: "erro", categoria: "calculo", erro: "regra3_calculo_divisao_imprecisa", descricao: "Aplicou os fatores adequados na regra, mas errou a tabuada da divisão final.", peso: 2 }
        ],
        passo: "Pessoas e ovos crescem juntos (direta). Multiplica-se em X: (6x) = 30. Portanto, x = 30 ÷ 6 = 5 ovos.",
        dica: "Se aumenta o número de convidados, aumenta a receita. Monte as duplas e faça a regra em 'X'."
    },
    {
        id: "B2T4Q13", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Regra de Três Simples Direta — Velocidade",
        display: "O carro correu 240 km em 3 horas. Quanto tempo precisará para chegar a 400 km mantendo o mesmo ritmo?",
        res: "5 horas",
        alternativas: [
            { valor: "5 horas", tipo: "acerto" },
            { valor: "160 horas", tipo: "erro", categoria: "procedimento", erro: "regra3_aplica_subtracao_em_vez_de_razao", descricao: "Diminuiu os 240 dos 400 sem engajar na regra multiplicativa da proporção horária.", peso: 3 },
            { valor: "4 horas", tipo: "erro", categoria: "calculo", erro: "regra3_erro_aritmetico_quociente", descricao: "Montou a estrutura cruzada (1200/240), mas operou os zeros/divisão equivocadamente.", peso: 2 },
            { valor: "6 horas", tipo: "erro", categoria: "estrategia", erro: "regra3_chute_aproximacao_mental", descricao: "Tentou deduzir uma grandeza de tempo visual sem executar o cálculo rigoroso.", peso: 1 }
        ],
        passo: "A proporção é (240 / 3) = (400 / x). 240x = 1200. X = 1200 ÷ 240, que rende 5 horas.",
        dica: "Divida 240 por 3 pra saber a velocidade (dá 80 km/h). Agora veja quantas vezes 80 cabe em 400."
    },
    {
        id: "B2T4Q14", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade Inversa",
        display: "Um tanque é preenchido por 4 torneiras em 6 horas. Quantas horas levaria se fossem 8 torneiras idênticas?",
        res: "3 horas",
        alternativas: [
            { valor: "3 horas", tipo: "acerto" },
            { valor: "12 horas", tipo: "erro", categoria: "conceito", erro: "regra3_trata_inversa_como_direta", descricao: "Calculou a multiplicação cruzada como proporção direta: dobrar o tempo quando a vazão de água foi dobrada.", peso: 3 },
            { valor: "48 horas", tipo: "erro", categoria: "procedimento", erro: "regra3_multiplica_fatores_inversos", descricao: "Multiplicou as variáveis de torneiras pelas variáveis de tempo sem estabelecer correlação divisional.", peso: 2 },
            { valor: "2 horas", tipo: "erro", categoria: "calculo", erro: "regra3_erro_proporcao_tempo", descricao: "Identificou a diminuição de tempo, mas errou no algoritmo de correspondência (cortou em 3 partes).", peso: 2 }
        ],
        passo: "Se DOBRAMOS as torneiras de água, o tempo necessário cai pela METADE. Portanto: 6 horas ÷ 2 = 3 horas.",
        dica: "Cuidado! Mais torneiras ligadas enchem a piscina MAIS RÁPIDO (o tempo diminui). É inversamente proporcional."
    },
    {
        id: "B2T4Q15", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporção — Valor Desconhecido",
        display: "Se (3/4 = x/12), qual é o valor numérico isolado de X?",
        res: "9",
        alternativas: [
            { valor: "9", tipo: "acerto" },
            { valor: "16", tipo: "erro", categoria: "procedimento", erro: "proporcao_multiplica_termos_isolados", descricao: "Realizou 4x4 sem contexto ou tentou elevar a casa sem obedecer à igualdade fracionária.", peso: 2 },
            { valor: "4", tipo: "erro", categoria: "interpretacao", erro: "proporcao_replica_denominador_referencia", descricao: "Apenas copiou o valor denominador do primeiro fator (4) julgando que o numerador o acompanhava.", peso: 1 },
            { valor: "36", tipo: "erro", categoria: "procedimento", erro: "proporcao_omite_divisao_final", descricao: "Realizou a multiplicação cruzada de (3x12) corretamente mas esqueceu de dividir por 4.", peso: 2 }
        ],
        passo: "Aplicando Produto Cruzado: 4 vezes X é igual a 3 vezes 12. Ou seja: 4x = 36. Dividindo, x = 9.",
        dica: "Do 4 (baixo) pro 12 (baixo) a conta multiplicou por 3. Logo, basta multiplicar o 3 (cima) por 3 também."
    },
    {
        id: "B2T4Q16", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade — Escala de Mapa",
        display: "Em um mapa, 1 cm equivale a 50 km reais. Se duas cidades estão a 3,5 cm no mapa, qual a distância verdadeira?",
        res: "175 km",
        alternativas: [
            { valor: "175 km", tipo: "acerto" },
            { valor: "350 km", tipo: "erro", categoria: "procedimento", erro: "escala_multiplica_sem_casa_decimal", descricao: "Tirou a vírgula do 3,5 multiplicando como 35 inteiros × 50 e esquecendo de devolver a dezena.", peso: 2 },
            { valor: "53,5 km", tipo: "erro", categoria: "conceito", erro: "escala_soma_proporcoes_multiplicativas", descricao: "Realizou a soma de centímetros e quilômetros em vez de utilizar o fator de conversão de escala.", peso: 3 },
            { valor: "17,5 km", tipo: "erro", categoria: "calculo", erro: "escala_erro_posicional_virgula", descricao: "Multiplicou corretamente a base, mas errou o recuo das casas decimais.", peso: 2 }
        ],
        passo: "Regra direta de 1 pra 50. Multiplicamos a medição na régua pelo fator. 3,5 × 50 = 175 km.",
        dica: "A conta básica de mapas: Distância Desenhada × A Escala do Mapa = Distância Real."
    },
    {
        id: "B2T4Q17", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Proporcionalidade — Câmbio",
        display: "O dólar está cotado a R$ 5,20. Se você tiver exatos R$ 100,00 reais, quantos dólares conseguirá comprar?",
        res: "≈ 19,23 dólares",
        alternativas: [
            { valor: "≈ 19,23 dólares", tipo: "acerto" },
            { valor: "≈ 94,80 dólares", tipo: "erro", categoria: "procedimento", erro: "cambio_subtrai_cotacao", descricao: "Abateu o preço de uma unidade de dólar dos 100 reais, ignorando a dinâmica de lotes proporcionais.", peso: 3 },
            { valor: "≈ 520 dólares", tipo: "erro", categoria: "conceito", erro: "cambio_multiplica_capital_cotacao", descricao: "Multiplicou a moeda fraca pela cotação do câmbio, tratando a moeda alvo como mais barata.", peso: 3 },
            { valor: "≈ 5,20 dólares", tipo: "erro", categoria: "interpretacao", erro: "cambio_replica_valor_referencia", descricao: "Manteve o número do dado original da pergunta, ignorando a injeção do capital de cem reais.", peso: 1 }
        ],
        passo: "Para descobrir quantas fatias de R$ 5,20 cabem dentro da sua nota de R$ 100, devemos dividir: 100 ÷ 5,20 ≈ 19,23.",
        dica: "Como a moeda de compra (dólar) é mais cara, você receberá um número MENOR. Portanto, divida 100 pelo câmbio."
    },
    {
        id: "B2T4Q18", bloco: 2, aula: 10, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Tipo de Proporcionalidade",
        display: "Quando a cotação do câmbio sobe (fica mais cara), com a MESMA quantidade em Reais você compra:",
        res: "Menos dólares (inversa)",
        alternativas: [
            { valor: "Menos dólares (inversa)", tipo: "acerto" },
            { valor: "Mais dólares (direta)", tipo: "erro", categoria: "conceito", erro: "proporcao_confunde_natureza_inversa_mercado", descricao: "Assumiu que cotações mais altas favorecem o montante final, ignorando a corrosão de poder de compra.", peso: 3 },
            { valor: "A mesma quantidade", tipo: "erro", categoria: "estrategia", erro: "proporcao_nega_impacto_cotacao", descricao: "Deduziu que o valor monetário da moeda de origem blinda a conversão de taxas.", peso: 2 },
            { valor: "Depende do banco", tipo: "erro", categoria: "interpretacao", erro: "proporcao_terceiriza_matematica_cotidiano", descricao: "Trocou a lógica purista das regras de proporção por externalidades logísticas.", peso: 1 }
        ],
        passo: "O dinheiro rende menos quando as coisas ficam caras. Portanto, o preço de algo sobe, a quantidade comprada cai. É o clássico perfil inversamente proporcional.",
        dica: "Pense na padaria: se o preço do pão (dólar) aumentar, com a sua mesma moedinha (reais) você compra menos pães (Inverso)."
    }
];
