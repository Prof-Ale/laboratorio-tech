// js/data/questions/bloco2_trilha3.js
// Bloco 2 — Números e Operações | Trilha 3
// Aula 6: Adição e Subtração de Frações (EF07MA04)
// Aula 7: Multiplicação e Divisão de Frações (EF07MA04)
// Aula 8: Números Racionais e Decimais (EF07MA04)
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco2_trilha3 = [

    // ── AULA 6: ADIÇÃO E SUBTRAÇÃO DE FRAÇÕES ───────────────────────────

    {
        id: "B2T3Q01", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Mesmo Denominador",
        display: "3/8 + 2/8 = ?",
        res: "5/8",
        alternativas: [
            { valor: "5/8", tipo: "acerto" },
            { valor: "5/16", tipo: "erro", categoria: "conceito", erro: "fracao_soma_denominadores", descricao: "Somou os denominadores em vez de conservá-los na adição de bases iguais.", peso: 3 },
            { valor: "6/16", tipo: "erro", categoria: "procedimento", erro: "fracao_multiplica_numerador_soma_denominador", descricao: "Misturou regras de multiplicação no topo e soma na base da fração.", peso: 2 },
            { valor: "1/8", tipo: "erro", categoria: "atencao", erro: "fracao_subtrai_em_vez_de_somar", descricao: "Subtraiu os numeradores em vez de aplicar a operação de adição solicitada.", peso: 1 }
        ],
        passo: "Denominadores iguais: some apenas os numeradores e mantenha a base. 3+2=5, denominador 8 → 5/8.",
        dica: "Quando o número de baixo é igual, basta repeti-lo. Você só soma a parte de cima!"
    },
    {
        id: "B2T3Q02", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Mesmo Denominador",
        display: "7/10 - 3/10 = ?",
        res: "4/10 (ou 2/5)",
        alternativas: [
            { valor: "4/10 (ou 2/5)", tipo: "acerto" },
            { valor: "4/20", tipo: "erro", categoria: "conceito", erro: "fracao_soma_denominadores_subtracao", descricao: "Aplicou soma nos denominadores durante uma operação de subtração fracionária.", peso: 3 },
            { valor: "4/0", tipo: "erro", categoria: "conceito", erro: "fracao_subtrai_denominadores", descricao: "Subtraiu os denominadores (10-10), zerando matematicamente a base da proporção.", peso: 3 },
            { valor: "10/10", tipo: "erro", categoria: "atencao", erro: "fracao_soma_em_vez_de_subtrair", descricao: "Somou os numeradores (7+3) ignorando o operador de subtração.", peso: 1 }
        ],
        passo: "7-3=4, denominador mantido 10 → 4/10. Simplificando tudo por 2 (MDC), temos 2/5.",
        dica: "Subtraia a parte de cima e repita a parte de baixo. Se der, simplifique o resultado dividindo os dois por um mesmo número."
    },
    {
        id: "B2T3Q03", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Denominadores Diferentes",
        display: "1/2 + 1/3 = ?",
        res: "5/6",
        alternativas: [
            { valor: "5/6", tipo: "acerto" },
            { valor: "2/5", tipo: "erro", categoria: "conceito", erro: "fracao_soma_direta_bases_diferentes", descricao: "Somou os numeradores entre si e os denominadores entre si, ignorando o algoritmo de MMC.", peso: 3 },
            { valor: "2/6", tipo: "erro", categoria: "procedimento", erro: "fracao_aplica_mmc_esquece_numerador", descricao: "Encontrou o MMC correto (6), mas apenas repetiu os numeradores antigos na nova base.", peso: 2 },
            { valor: "4/6", tipo: "erro", categoria: "calculo", erro: "fracao_erro_proporcao_numerador", descricao: "Encontrou o MMC, mas multiplicou os numeradores incorretamente durante a conversão.", peso: 2 }
        ],
        passo: "O MMC de 2 e 3 é 6. As frações equivalentes são 3/6 e 2/6. Somando: 3/6 + 2/6 = 5/6.",
        dica: "Bases diferentes não podem ser somadas! Descubra o MMC para igualar os denominadores primeiro."
    },
    {
        id: "B2T3Q04", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Denominadores Diferentes",
        display: "3/4 - 1/6 = ?",
        res: "7/12",
        alternativas: [
            { valor: "7/12", tipo: "acerto" },
            { valor: "2/2 (ou 1)", tipo: "erro", categoria: "conceito", erro: "fracao_subtrai_direto_denominadores_diferentes", descricao: "Subtraiu diretamente numeradores (3-1) e usou subtração/aproximação nos denominadores sem MMC.", peso: 3 },
            { valor: "8/12 (ou 2/3)", tipo: "erro", categoria: "calculo", erro: "fracao_erro_subtracao_numerador_convertido", descricao: "Encontrou MMC (12) e converteu (9/12 e 2/12), mas errou a conta de subtrair no numerador.", peso: 1 },
            { valor: "2/3", tipo: "erro", categoria: "estrategia", erro: "fracao_chute_aproximacao_comum", descricao: "Selecionou uma fração irredutível esteticamente agradável sem tentativa de estruturar o MMC.", peso: 2 }
        ],
        passo: "O MMC de 4 e 6 é 12. Convertendo: 3/4 = 9/12 e 1/6 = 2/12. Subtraindo: 9/12 - 2/12 = 7/12.",
        dica: "Tire o MMC de 4 e 6 (que é 12). Transforme as duas frações para base 12 antes de fazer a conta de menos."
    },
    {
        id: "B2T3Q05", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Contexto Corrida",
        display: "Lucas correu 2/3 do percurso e Bianca correu 3/4 do percurso. Juntos, que fração da pista eles cobriram no total?",
        res: "17/12 (passa de 1 pista)",
        alternativas: [
            { valor: "17/12 (passa de 1 pista)", tipo: "acerto" },
            { valor: "5/7", tipo: "erro", categoria: "conceito", erro: "problema_soma_fracao_linear", descricao: "Somou os valores do texto (2+3 e 3+4) sem equiparar as proporções com MMC.", peso: 3 },
            { valor: "5/12", tipo: "erro", categoria: "procedimento", erro: "fracao_aplica_mmc_soma_numeradores_base", descricao: "Equiparou a base em 12, mas somou os numeradores originais (2+3) sem a conversão escalar.", peso: 2 },
            { valor: "1/12", tipo: "erro", categoria: "interpretacao", erro: "problema_subtrai_em_vez_de_somar", descricao: "Montou a estrutura de MMC, mas calculou a diferença (quem correu mais) em vez de somar os totais.", peso: 2 }
        ],
        passo: "Somando 2/3 + 3/4. O MMC é 12. Fica 8/12 + 9/12 = 17/12. Como o numerador é maior que o denominador, passou de 1 pista inteira.",
        dica: "A palavra 'Juntos' significa adição. Ache o MMC de 3 e 4 para juntar essas distâncias."
    },
    {
        id: "B2T3Q06", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Subtração de Frações — Contexto Salário",
        display: "Pedro gastou 3/8 do seu salário com aluguel e 1/4 com alimentação. Que fração do salário sobrou?",
        res: "3/8",
        alternativas: [
            { valor: "3/8", tipo: "acerto" },
            { valor: "5/8", tipo: "erro", categoria: "interpretacao", erro: "problema_calcula_gasto_esquece_sobra", descricao: "Calculou perfeitamente o total gasto pelo personagem, mas não respondeu quanto sobrou do todo.", peso: 3 },
            { valor: "4/8 (ou 1/2)", tipo: "erro", categoria: "conceito", erro: "fracao_soma_direta_ignorando_mmc", descricao: "Somou 3+1 no numerador sem equiparar o denominador 4 ao 8.", peso: 3 },
            { valor: "1/2", tipo: "erro", categoria: "calculo", erro: "fracao_erro_conversao_subtracao_final", descricao: "Cometeu erro aritmético ou de simplificação na etapa de subtrair o gasto do salário integral.", peso: 2 }
        ],
        passo: "O 1/4 equivale a 2/8. Gastos totais: 3/8 + 2/8 = 5/8. Salário total é 8/8. O que sobrou: 8/8 - 5/8 = 3/8.",
        dica: "O salário todo é '1 inteiro' (ou 8/8). Calcule primeiro o total de gastos e depois tire isso do salário inteiro."
    },
    {
        id: "B2T3Q07", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Três Parcelas",
        display: "Calcule a expressão fracionária: 1/3 + 1/4 + 1/6 = ?",
        res: "3/4",
        alternativas: [
            { valor: "3/4", tipo: "acerto" },
            { valor: "3/13", tipo: "erro", categoria: "conceito", erro: "fracao_soma_direta_multiplas_bases", descricao: "Somou os três numeradores e os três denominadores horizontalmente em blocos absolutos.", peso: 3 },
            { valor: "9/12", tipo: "erro", categoria: "procedimento", erro: "fracao_omite_simplificacao_final", descricao: "Realizou a soma corretamente através do MMC, mas parou a conta antes de simplificar por 3.", peso: 1 },
            { valor: "7/12", tipo: "erro", categoria: "calculo", erro: "fracao_erro_conversao_numerador_multiplo", descricao: "Achou o MMC (12), mas errou o cálculo de proporção em uma das frações na parte de cima.", peso: 2 }
        ],
        passo: "O MMC de 3, 4 e 6 é 12. Convertendo: 4/12 + 3/12 + 2/12 = 9/12. Simplificando por 3, chegamos a 3/4.",
        dica: "Tire o MMC das três bases de uma vez só. Lembre-se de simplificar a fração que encontrar no final."
    },

    // ── AULA 7: MULTIPLICAÇÃO E DIVISÃO DE FRAÇÕES ──────────────────────

    {
        id: "B2T3Q08", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações",
        display: "2/3 × 3/4 = ?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "5/7", tipo: "erro", categoria: "conceito", erro: "multiplicacao_confunde_com_adicao_direta", descricao: "Aplicou a falsa regra da adição horizontal, somando numeradores (2+3) e denominadores (3+4).", peso: 3 },
            { valor: "6/12", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_omite_simplificacao", descricao: "Multiplicou corretamente de frente, mas não entregou a fração na sua forma irredutível.", peso: 1 },
            { valor: "2/4", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_simplificacao_parcial", descricao: "Cortou o fator 3, mas não simplificou o resultado 2/4 até atingir o 1/2 final.", peso: 1 }
        ],
        passo: "Multiplica-se numerador por numerador (2×3=6) e denominador por denominador (3×4=12). 6/12 simplificado por 6 resulta em 1/2.",
        dica: "Na multiplicação não precisa de MMC. É só multiplicar o de cima pelo de cima, e o de baixo pelo de baixo."
    },
    {
        id: "B2T3Q09", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Inverso",
        display: "3/4 ÷ 1/2 = ?",
        res: "3/2 (ou 1 e 1/2)",
        alternativas: [
            { valor: "3/2 (ou 1 e 1/2)", tipo: "acerto" },
            { valor: "3/8", tipo: "erro", categoria: "conceito", erro: "divisao_multiplica_direto_sem_inverter", descricao: "Processou a equação como se fosse uma multiplicação, não invertendo o segundo termo.", peso: 3 },
            { valor: "6/4", tipo: "erro", categoria: "procedimento", erro: "divisao_omite_simplificacao_resultado", descricao: "Aplicou a regra de inversão corretamente, mas esqueceu de simplificar a fração obtida.", peso: 1 },
            { valor: "1/2", tipo: "erro", categoria: "estrategia", erro: "divisao_inversao_caotica_fatores", descricao: "Tentou cruzar fatores mas se perdeu no algoritmo de montagem da divisão.", peso: 2 }
        ],
        passo: "Para dividir, conserve a primeira fração (3/4) e multiplique pelo inverso da segunda (2/1). Fica 3/4 × 2/1 = 6/4. Simplificando: 3/2.",
        dica: "Regra da divisão: Copia a primeira, troca o sinal para 'vezes', e vira a segunda fração de cabeça para baixo."
    },
    {
        id: "B2T3Q10", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Inverso",
        display: "2/5 ÷ 4/5 = ?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "8/25", tipo: "erro", categoria: "conceito", erro: "divisao_multiplica_direto_sem_inverter", descricao: "Ignorou o sinal de divisão e multiplicou diretamente numerador e denominador em linha reta.", peso: 3 },
            { valor: "10/20", tipo: "erro", categoria: "procedimento", erro: "divisao_omite_simplificacao", descricao: "Realizou a inversão e multiplicação com sucesso, mas não efetuou a divisão por 10.", peso: 1 },
            { valor: "2/4", tipo: "erro", categoria: "procedimento", erro: "divisao_simplifica_parcial_bases_iguais", descricao: "Eliminou os cincos idênticos, mas não simplificou a fração final resultante.", peso: 1 }
        ],
        passo: "Invertendo a segunda: 2/5 × 5/4 = 10/20. Simplificando tudo por 10, chegamos em 1/2.",
        dica: "Como os denominadores são iguais (5), ao inverter a segunda fração os cincos vão se anular na multiplicação."
    },
    {
        id: "B2T3Q11", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Contexto Torneira",
        display: "Uma torneira enche 3/4 de um tanque por hora. Se ela ficar aberta por apenas 2/3 de hora, que fração do tanque será preenchida?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "5/7", tipo: "erro", categoria: "conceito", erro: "problema_soma_em_vez_de_multiplicar", descricao: "Aplicou soma linear das proporções (3+2 e 4+3) em vez de calcular fração da fração.", peso: 3 },
            { valor: "2/3", tipo: "erro", categoria: "interpretacao", erro: "problema_elege_dado_isolado_enunciado", descricao: "Elegeu a fração temporal do texto como resposta para a proporção volumétrica do tanque.", peso: 2 },
            { valor: "1/4", tipo: "erro", categoria: "calculo", erro: "multiplicacao_erro_simplificacao_cruzada", descricao: "Cometeu erro mecânico na aplicação dos cortes/cancelamentos durante a multiplicação.", peso: 2 }
        ],
        passo: "Calcular '2/3 de 3/4' exige multiplicação: 2/3 × 3/4 = 6/12. Simplificando, chegamos a 1/2 do tanque.",
        dica: "A palavra 'DE' na matemática (2/3 de 3/4) quase sempre significa MULTIPLICAÇÃO."
    },
    {
        id: "B2T3Q12", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Contexto Trabalho",
        display: "Ana cumpriu 3/4 de uma jornada de trabalho de 8 horas. Quantas horas ela trabalhou de fato?",
        res: "6 horas",
        alternativas: [
            { valor: "6 horas", tipo: "acerto" },
            { valor: "4 horas", tipo: "erro", categoria: "conceito", erro: "problema_divide_inteiro_pelo_numerador", descricao: "Dividiu a carga horária pelo número do topo (8/3 aprox 4), ignorando a função proporcional.", peso: 3 },
            { valor: "2 horas", tipo: "erro", categoria: "procedimento", erro: "problema_calcula_um_quarto_apenas", descricao: "Dividiu o 8 por 4, encontrando o bloco de 1/4 (2h), mas não multiplicou pelas 3 partes que Ana cumpriu.", peso: 2 },
            { valor: "5 horas", tipo: "erro", categoria: "calculo", erro: "problema_chute_aproximado", descricao: "Produziu uma aproximação visual sem estruturar o algoritmo de multiplicação de inteiro por fração.", peso: 2 }
        ],
        passo: "3/4 × 8. Dividimos 8 pelo de baixo (8 ÷ 4 = 2) e multiplicamos pelo de cima (2 × 3 = 6).",
        dica: "Para achar fração de um número inteiro: divida pelo denominador (baixo) e multiplique pelo numerador (cima)."
    },
    {
        id: "B2T3Q13", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações — Contexto Porções",
        display: "Tenho 3/4 de Kg de arroz e quero separar em porções exatas de 1/8 de Kg cada. Quantas porções vou conseguir formar?",
        res: "6 porções",
        alternativas: [
            { valor: "6 porções", tipo: "acerto" },
            { valor: "3 porções", tipo: "erro", categoria: "interpretacao", erro: "problema_associa_numerador_resultado", descricao: "Assumiu o numerador da primeira fração do texto como resposta, sem modelar a conta.", peso: 2 },
            { valor: "12 porções", tipo: "erro", categoria: "procedimento", erro: "divisao_multiplica_denominador_errado", descricao: "Inverteu os cálculos e acabou cruzando numeradores com fatores irreais.", peso: 2 },
            { valor: "8 porções", tipo: "erro", categoria: "estrategia", erro: "problema_associa_denominador_porcao", descricao: "Pinçou o denominador da porção alvo (8) para servir como resposta totalitária do texto.", peso: 2 }
        ],
        passo: "Dividir o total pela porção: 3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6. O pacote rende 6 saquinhos.",
        dica: "A pergunta é: 'Quantas vezes 1/8 cabe dentro de 3/4?'. Isso é uma clássica divisão de frações."
    },
    {
        id: "B2T3Q14", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações — Investigação",
        display: "Investigação: Multiplicar uma fração própria (menor que 1) por outra fração própria fará o resultado:",
        res: "Diminuir o valor",
        alternativas: [
            { valor: "Diminuir o valor", tipo: "acerto" },
            { valor: "Aumentar o valor", tipo: "erro", categoria: "conceito", erro: "multiplicacao_pressupoe_aumento_absoluto", descricao: "Ancorou-se no paradigma dos números inteiros, onde o sinal de 'vezes' sempre amplia a grandeza original.", peso: 3 },
            { valor: "Depende dos números", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_fracao_relativiza_regra", descricao: "Acreditou que existe exceção à regra de redução multiplicativa com base decimal/fracionária própria.", peso: 2 },
            { valor: "Manter o valor", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_elemento_neutro", descricao: "Criou premissa de que a fragilidade das frações torna a operação neutra.", peso: 1 }
        ],
        passo: "Qualquer número multiplicado por algo menor que 1 (fração própria) tem seu valor original reduzido. Ex: 1/2 × 1/2 = 1/4 (e 1/4 é menor que 1/2).",
        dica: "Se você tem meia pizza (1/2) e multiplica por 1/2 (quer a metade da metade), a fatia fica menor ainda."
    },

    // ── AULA 8: RACIONAIS E DECIMAIS ────────────────────────────────────

    {
        id: "B2T3Q15", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Fração para Decimal",
        display: "A fração 1/4 convertida para número decimal é:",
        res: "0,25",
        alternativas: [
            { valor: "0,25", tipo: "acerto" },
            { valor: "0,14", tipo: "erro", categoria: "conceito", erro: "conversao_justapoe_numeros_virgula", descricao: "Pegou o 1 e o 4 e os uniu graficamente após a vírgula, sem operar a divisão matemática.", peso: 3 },
            { valor: "0,4", tipo: "erro", categoria: "procedimento", erro: "conversao_usa_denominador_como_decimal", descricao: "Elegeu o denominador para preencher a única casa decimal após o zero.", peso: 2 },
            { valor: "1,4", tipo: "erro", categoria: "atencao", erro: "conversao_justapoe_inteiro_decimal", descricao: "Posicionou numerador como inteiro e denominador como decimal sem conexão algorítmica.", peso: 2 }
        ],
        passo: "Basta dividir o topo pela base: 1 ÷ 4 = 0,25. Se pensar em dinheiro, 1 real dividido por 4 pessoas dá 25 centavos (0,25).",
        dica: "Toda fração é, na essência, uma conta de dividir camuflada."
    },
    {
        id: "B2T3Q16", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimal para Fração",
        display: "O número 0,35 convertido para fração e SIMPLIFICADO resulta em:",
        res: "7/20",
        alternativas: [
            { valor: "7/20", tipo: "acerto" },
            { valor: "35/100", tipo: "erro", categoria: "procedimento", erro: "conversao_omite_simplificacao_decimal", descricao: "Transcreveu corretamente o decimal para base 100, mas parou antes de simplificar a fração.", peso: 1 },
            { valor: "35/10", tipo: "erro", categoria: "conceito", erro: "conversao_erro_ordem_grandeza_décimos", descricao: "Manteve o número 35 sobre a base 10, não reconhecendo que existem duas casas decimais no numeral original.", peso: 3 },
            { valor: "7/10", tipo: "erro", categoria: "calculo", erro: "conversao_simplifica_base_errada", descricao: "Cortou o topo por 5 corretamente, mas partiu da base errada de 10 em vez de 100.", peso: 2 }
        ],
        passo: "Duas casas após a vírgula = base 100. Fica 35/100. O MDC de 35 e 100 é 5. Dividindo ambos por 5, chegamos a 7/20.",
        dica: "0,35 = 35 centésimos. Comece montando sobre o 100. Depois, procure a tabuada em comum (a do 5)."
    },
    {
        id: "B2T3Q17", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimal para Fração",
        display: "O número 0,125 convertido em fração irredutível é:",
        res: "1/8",
        alternativas: [
            { valor: "1/8", tipo: "acerto" },
            { valor: "125/100", tipo: "erro", categoria: "conceito", erro: "conversao_erro_casas_decimais_milesimo", descricao: "Usou a base 100 para um número que possui 3 casas após a vírgula (milésimos).", peso: 3 },
            { valor: "5/40", tipo: "erro", categoria: "procedimento", erro: "conversao_simplificacao_parcial_longa", descricao: "Iniciou a simplificação da base 1.000, mas cansou/parou na fração intermediária 5/40.", peso: 1 },
            { valor: "1/4", tipo: "erro", categoria: "calculo", erro: "conversao_confunde_decimais_notaveis", descricao: "Confundiu a imagem gráfica de um quarto (0,25) com oitavo (0,125).", peso: 2 }
        ],
        passo: "Três casas decimais apontam para o milésimo: 125/1000. Dividindo seguidamente por 5 até o talo, chegamos a 1/8.",
        dica: "Pela quantidade de casas após a vírgula (3 casas), sua base começa como 1000. Depois é só simplificar."
    },
    {
        id: "B2T3Q18", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Comparação Fração e Decimal",
        display: "Se um produto custa R$ 4,75 e o outro custa 'R$ 4 e 3/4', eles representam o MESMO valor?",
        res: "Sim, pois 3/4 = 0,75",
        alternativas: [
            { valor: "Sim, pois 3/4 = 0,75", tipo: "acerto" },
            { valor: "Não, são valores diferentes", tipo: "erro", categoria: "conceito", erro: "conversao_desconhece_equivalencia_mista", descricao: "Não percebeu a correspondência algorítmica entre o decimal 0,75 e a fração de três quartos.", peso: 3 },
            { valor: "Só se o câmbio for igual", tipo: "erro", categoria: "interpretacao", erro: "problema_insere_variavel_externa_ficticia", descricao: "Criou cenário econômico ilusório para resolver um problema de purismo numérico.", peso: 2 },
            { valor: "Depende da loja", tipo: "erro", categoria: "estrategia", erro: "problema_relativiza_matematica_cotidiano", descricao: "Substituiu a lei natural matemática por variável social de comércio cotidiano.", peso: 2 }
        ],
        passo: "A fração 3/4 resulta da divisão 3÷4 = 0,75. Portanto, R$ 4 + 0,75 é rigorosamente idêntico a R$ 4,75.",
        dica: "Pense em dinheiro vivo: 1/4 (uma moeda de 25 centavos). 3 moedas de 25 formam os 75 centavos."
    },
    {
        id: "B2T3Q19", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Ordenação de Racionais",
        display: "Qual é a ordem CRESCENTE da sequência: 0,5 / 3/7 / 0,4 / 2/5 / 3/8?",
        res: "3/8 < 2/5 = 0,4 < 3/7 < 0,5",
        alternativas: [
            { valor: "3/8 < 2/5 = 0,4 < 3/7 < 0,5", tipo: "acerto" },
            { valor: "0,5 < 3/7 < 0,4 < 2/5 < 3/8", tipo: "erro", categoria: "interpretacao", erro: "ordenacao_inverte_crescente_decrescente", descricao: "Reverteu o comando, dispondo os componentes do maior para o menor.", peso: 2 },
            { valor: "3/8 < 3/7 < 2/5 = 0,4 < 0,5", tipo: "erro", categoria: "procedimento", erro: "ordenacao_erro_conversao_intercalada", descricao: "Realizou conversão mental imperfeita para a fração 3/7 posicionando-a abaixo de 2/5.", peso: 2 },
            { valor: "2/5 = 0,4 < 3/8 < 3/7 < 0,5", tipo: "erro", categoria: "calculo", erro: "ordenacao_falha_divisao_comparativa", descricao: "Falhou severamente na testagem base de 3/8 alocando-o na frente do marco 0,4.", peso: 2 }
        ],
        passo: "Trazendo tudo para decimais: 3/8 = 0,375 | 2/5 = 0,400 | 3/7 ≈ 0,428. Ordem correta: 0,375 < 0,400 < 0,428 < 0,500.",
        dica: "É muito difícil ordenar as frações só olhando. Transforme todas em decimais (divida cima por baixo) e organize-as pelo dinheiro."
    }
];
