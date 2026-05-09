// js/data/questions/bloco1_trilha2.js
// Bloco 1 — A Base Numérica | Trilha 2 Completa
// Aula 3: Multiplicação | Aula 4: Divisão | Aula 5: Expressões Numéricas
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco1_trilha2 = [

    // ── AULA 3: MULTIPLICAÇÃO ────────────────────────────────────────────

    {
        id: "B1T2Q01", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Sentido",
        display: "7 + 7 + 7 + 7 = ? Qual multiplicação representa essa soma?",
        res: "4 × 7",
        alternativas: [
            { valor: "4 × 7", tipo: "acerto" },
            { valor: "7 × 7", tipo: "erro", categoria: "conceito", erro: "multiplicacao_ignora_fatores", descricao: "Tratou a base repetida como multiplicador dela mesma.", peso: 3 },
            { valor: "4 + 7", tipo: "erro", categoria: "atencao", erro: "multiplicacao_confunde_operador", descricao: "Contou os termos corretamente, mas utilizou o operador de soma em vez da multiplicação.", peso: 2 },
            { valor: "7 ÷ 4", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_operador_inverso", descricao: "Aplicou operador de divisão aos números apresentados no agrupamento.", peso: 1 }
        ],
        passo: "O 7 aparece 4 vezes. Logo: 4 × 7 = 28. Multiplicação é uma soma de parcelas iguais.",
        dica: "Conte quantas vezes o número aparece — esse é o multiplicador."
    },
    {
        id: "B1T2Q02", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "24 × 5 = ?",
        res: "120",
        alternativas: [
            { valor: "120", tipo: "acerto" },
            { valor: "29", tipo: "erro", categoria: "conceito", erro: "multiplicacao_operacao_aditiva", descricao: "Somou os valores em vez de multiplicá-los.", peso: 3 },
            { valor: "100", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_esquece_unidade", descricao: "Multiplicou apenas a dezena e ignorou a unidade na composição final.", peso: 2 },
            { valor: "124", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_erro_misto_soma", descricao: "Multiplicou a dezena, mas somou a unidade em vez de multiplicá-la.", peso: 2 }
        ],
        passo: "5 × 4 = 20 (sobe 2). 5 × 2 = 10, mais 2 = 12. Resultado: 120.",
        dica: "Multiplique a unidade, depois a dezena. Não esqueça de somar o reagrupamento."
    },
    {
        id: "B1T2Q03", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Propriedade Comutativa",
        display: "É verdade que 6 × 9 = 9 × 6?",
        res: "Sim, sempre",
        alternativas: [
            { valor: "Sim, sempre", tipo: "acerto" },
            { valor: "Não, a ordem importa", tipo: "erro", categoria: "conceito", erro: "multiplicacao_desconhece_comutativa", descricao: "Afirmou que a ordem dos fatores altera o produto.", peso: 3 },
            { valor: "Só quando iguais", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_regra_falsa", descricao: "Criou uma regra restritiva inexistente para a propriedade multiplicativa.", peso: 2 },
            { valor: "Depende do número", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_excecao_indevida", descricao: "Afirmou que a regra matemática varia conforme os fatores apresentados.", peso: 2 }
        ],
        passo: "A ordem dos fatores não altera o produto. 6 × 9 e 9 × 6 resultam em 54.",
        dica: "Trocar a ordem na multiplicação não muda o resultado final."
    },
    {
        id: "B1T2Q04", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Contexto",
        display: "Uma bandeja tem 6 colunas e 8 linhas. Joaquim precisa de 5 bandejas. Total de pães?",
        res: "240",
        alternativas: [
            { valor: "240", tipo: "acerto" },
            { valor: "120", tipo: "erro", categoria: "procedimento", erro: "problema_agrupamento_falho", descricao: "Omitiu um dos fatores dimensionais na multiplicação sucessiva.", peso: 3 },
            { valor: "48", tipo: "erro", categoria: "interpretacao", erro: "problema_calculo_incompleto", descricao: "Calculou a área de uma única bandeja e encerrou a resolução.", peso: 2 },
            { valor: "280", tipo: "erro", categoria: "calculo", erro: "problema_erro_tabuada", descricao: "Errou a tabuada durante a execução da multiplicação encadeada.", peso: 1 }
        ],
        passo: "Uma bandeja: 6 × 8 = 48. Cinco bandejas: 48 × 5 = 240 pães.",
        dica: "Multiplique as dimensões da bandeja e depois o resultado pelo número de bandejas."
    },
    {
        id: "B1T2Q05", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "45 × 13 = ?",
        res: "585",
        alternativas: [
            { valor: "585", tipo: "acerto" },
            { valor: "495", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_ignora_posicao_dezena", descricao: "Ao multiplicar a dezena, não alinhou a casa corretamente (omitiu o zero posicional).", peso: 3 },
            { valor: "555", tipo: "erro", categoria: "calculo", erro: "multiplicacao_erro_soma_final", descricao: "Acertou a etapa multiplicativa estrutural, mas errou a adição das parcelas.", peso: 2 },
            { valor: "580", tipo: "erro", categoria: "calculo", erro: "multiplicacao_falha_unidade", descricao: "Erro de tabuada simples ao multiplicar as unidades.", peso: 1 }
        ],
        passo: "45 × 3 = 135. 45 × 10 = 450. 135 + 450 = 585.",
        dica: "Lembre-se de pular uma casa (colocar o 0) ao multiplicar pelo dígito da dezena."
    },
    {
        id: "B1T2Q06", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Zero",
        display: "Quanto é qualquer número multiplicado por zero?",
        res: "Zero",
        alternativas: [
            { valor: "Zero", tipo: "acerto" },
            { valor: "O próprio número", tipo: "erro", categoria: "conceito", erro: "multiplicacao_confunde_zero_um", descricao: "Aplicou a propriedade do elemento neutro da adição (ou multiplicativo por 1) ao zero.", peso: 3 },
            { valor: "Um", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_potenciacao", descricao: "Associou a operação à regra de potenciação de expoente zero.", peso: 2 },
            { valor: "Indefinido", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_confunde_divisao_zero", descricao: "Aplicou a regra de inexistência da divisão por zero à multiplicação.", peso: 2 }
        ],
        passo: "Ter zero grupos de qualquer valor resulta em zero. 0 × 50 = 0.",
        dica: "Pense em caixas vazias: 10 caixas com zero pães = zero pães."
    },
    {
        id: "B1T2Q07", bloco: 1, aula: 3, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Investigação",
        display: "Se 15 × N = 120, qual é o valor de N?",
        res: "8",
        alternativas: [
            { valor: "8", tipo: "acerto" },
            { valor: "105", tipo: "erro", categoria: "conceito", erro: "equacao_inverte_operador_errado", descricao: "Subtraiu (120 - 15) em vez de aplicar a operação inversa adequada (divisão).", peso: 3 },
            { valor: "6", tipo: "erro", categoria: "calculo", erro: "equacao_erro_tabuada", descricao: "Errou o cálculo de divisão ou a tabuada ao testar o fator.", peso: 2 },
            { valor: "9", tipo: "erro", categoria: "atencao", erro: "equacao_estimativa_proxima_falha", descricao: "Realizou estimativa aproximada, falhando por uma única unidade.", peso: 1 }
        ],
        passo: "Para achar o valor desconhecido, usamos a operação inversa: 120 ÷ 15 = 8.",
        dica: "Pense na operação inversa: 120 dividido por 15 resulta em qual número?"
    },

    // ── AULA 4: DIVISÃO ──────────────────────────────────────────────────

    {
        id: "B1T2Q08", bloco: 1, aula: 4, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Sentido",
        display: "Quantas notas de R$10 cabem em R$100?",
        res: "10 notas",
        alternativas: [
            { valor: "10 notas", tipo: "acerto" },
            { valor: "1 nota", tipo: "erro", categoria: "conceito", erro: "divisao_ignora_fator_escala", descricao: "Respondeu com a unidade do divisor, ignorando o processo de partição ou medida.", peso: 3 },
            { valor: "90 notas", tipo: "erro", categoria: "procedimento", erro: "divisao_aplica_subtracao", descricao: "Subtraiu o valor da nota do montante total em vez de realizar a divisão.", peso: 2 },
            { valor: "100 notas", tipo: "erro", categoria: "interpretacao", erro: "divisao_confunde_total_unidade", descricao: "Registrou o valor do montante total financeiro como sendo a quantidade física de cédulas.", peso: 2 }
        ],
        passo: "100 ÷ 10 = 10. A divisão mostra quantas vezes o 10 'cabe' no 100.",
        dica: "Conte de 10 em 10 até chegar a 100."
    },
    {
        id: "B1T2Q09", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Resto",
        display: "130 ÷ 4 = ?",
        res: "32 com resto 2",
        alternativas: [
            { valor: "32 com resto 2", tipo: "acerto" },
            { valor: "32 com resto 0", tipo: "erro", categoria: "conceito", erro: "divisao_ignora_resto_existente", descricao: "Encontrou o quociente correto, mas omitiu o registro do resto final.", peso: 3 },
            { valor: "30 com resto 10", tipo: "erro", categoria: "procedimento", erro: "divisao_resto_maior_divisor", descricao: "Encerrou o algoritmo prematuramente, mantendo um resto que ainda era divisível.", peso: 2 },
            { valor: "33 com resto 2", tipo: "erro", categoria: "calculo", erro: "divisao_quociente_errado", descricao: "Registrou um quociente inexato devido a falha na tabuada.", peso: 1 }
        ],
        passo: "13 ÷ 4 = 3 (resto 1). Junta com o 0, fica 10. 10 ÷ 4 = 2 (resto 2). Quociente 32, Resto 2.",
        dica: "A divisão inteira pode deixar sobras. Esse valor final menor que o divisor é o resto."
    },
    {
        id: "B1T2Q10", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Contexto",
        display: "4 amigos dividiram R$130 igualmente, sem moedas. Quanto cada um recebe e o que sobra?",
        res: "R$32 e sobram R$2",
        alternativas: [
            { valor: "R$32 e sobram R$2", tipo: "acerto" },
            { valor: "R$32,50", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_condicao_inteira", descricao: "Fez a divisão decimal exata, ignorando a restrição textual do problema (sem moedas).", peso: 3 },
            { valor: "R$30 e sobram R$10", tipo: "erro", categoria: "procedimento", erro: "problema_divisao
