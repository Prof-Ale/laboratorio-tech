// js/data/questions/bloco1_trilha3.js
// Bloco 1 — A Base Numérica | Trilha 3 Completa
// Aula 6: Critérios de Divisibilidade | Aula 7: Divisores e Números Primos
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco1_trilha3 = [

    // ── AULA 6: DIVISIBILIDADE ───────────────────────────────────────────

    {
        id: "B1T3Q01", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 2",
        display: "Qual destes números NÃO é divisível por 2?",
        res: "77",
        alternativas: [
            { valor: "77", tipo: "acerto" },
            { valor: "990", tipo: "erro", categoria: "conceito", erro: "divisibilidade_desconhece_regra_paridade", descricao: "Selecionou um número par terminado em 0, desconhecendo a regra básica do 2.", peso: 3 },
            { valor: "342", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_foco_ordem_incorreta", descricao: "Focou possivelmente no algarismo inicial '3' (ímpar) em vez da unidade final.", peso: 2 },
            { valor: "128", tipo: "erro", categoria: "interpretacao", erro: "divisibilidade_inverte_comando", descricao: "Procurou por um número que fosse divisível em vez do que NÃO era divisível.", peso: 2 }
        ],
        passo: "Para ser divisível por 2, o número deve ser par. 77 é ímpar, logo a divisão não é exata.",
        dica: "Olhe apenas o último algarismo (a unidade): se for par, é divisível por 2."
    },
    {
        id: "B1T3Q02", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 3",
        display: "O número 471 é divisível por 3?",
        res: "Sim (4+7+1=12)",
        alternativas: [
            { valor: "Sim (4+7+1=12)", tipo: "acerto" },
            { valor: "Não (termina em 1)", tipo: "erro", categoria: "conceito", erro: "divisibilidade_aplica_regra_dois_no_tres", descricao: "Aplicou a regra de observação do último dígito (usada no 2 ou 5) para justificar a resposta sobre o 3.", peso: 3 },
            { valor: "Sim (termina em 1)", tipo: "erro", categoria: "estrategia", erro: "divisibilidade_justificativa_incoerente", descricao: "Acertou a condição 'sim', mas justificou usando uma falsa propriedade de finalização por 1.", peso: 2 },
            { valor: "Não (soma é 12)", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_falha_analise_soma", descricao: "Somou os algarismos corretamente (12), mas não reconheceu o 12 como múltiplo de 3.", peso: 2 }
        ],
        passo: "Soma dos algarismos: 4+7+1=12. Como 12 é múltiplo de 3, 471 também é.",
        dica: "Diferente do 2, no critério do 3 você precisa somar TODOS os algarismos."
    },
    {
        id: "B1T3Q03", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 5",
        display: "Quais destes são divisíveis por 5?",
        res: "85 e 120",
        alternativas: [
            { valor: "85 e 120", tipo: "acerto" },
            { valor: "120 e 207", tipo: "erro", categoria: "conceito", erro: "divisibilidade_ignora_regra_cinco", descricao: "Incluiu um número terminado em 7, demonstrando desconhecimento da regra do 5.", peso: 3 },
            { valor: "73 e 85", tipo: "erro", categoria: "atencao", erro: "divisibilidade_falha_verificacao_dupla", descricao: "Verificou o 85 corretamente, mas não observou o dígito final do 73.", peso: 1 },
            { valor: "85 e 207", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_associa_zero_incorretamente", descricao: "Identificou o 85, mas escolheu 207 por ter um zero posicionado na dezena.", peso: 2 }
        ],
        passo: "Números divisíveis por 5 devem terminar em 0 ou 5. 85 e 120 seguem a regra.",
        dica: "Ignore o início do número, foque apenas no último dígito: ele precisa ser 0 ou 5."
    },
    {
        id: "B1T3Q04", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 10",
        display: "Se um número termina em 0, ele é divisível por quais destes conjuntos?",
        res: "Por 2, 5 e 10",
        alternativas: [
            { valor: "Por 2, 5 e 10", tipo: "acerto" },
            { valor: "Só por 10", tipo: "erro", categoria: "conceito", erro: "divisibilidade_ignora_propriedade_fator_comum", descricao: "Restringiu a divisão ao número base, não percebendo a inter-relação entre 2, 5 e 10.", peso: 3 },
            { valor: "Por 2 e 10", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_esquece_regra_cinco", descricao: "Identificou a paridade e a dezena, mas falhou ao lembrar a regra ampla do 5.", peso: 2 },
            { valor: "Por 5 e 10", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_esquece_regra_par", descricao: "Identificou as terminações puras de base 5 e 10, esquecendo que o zero atende à regra de números pares.", peso: 2 }
        ],
        passo: "Todo número que termina em 0 é par (div. por 2) e segue a regra do 5 e do 10.",
        dica: "Múltiplos de 10 são sempre múltiplos de 2 e 5 ao mesmo tempo."
    },
    {
        id: "B1T3Q05", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Aplicação",
        display: "Uma padaria vende pacotes de 10 pães. Um pedido de 245 pães pode ser atendido com pacotes completos (sem sobrar nenhum pão solto)?",
        res: "Não (não termina em 0)",
        alternativas: [
            { valor: "Não (não termina em 0)", tipo: "acerto" },
            { valor: "Sim (termina em 5)", tipo: "erro", categoria: "conceito", erro: "problema_aplica_regra_base_errada", descricao: "Aplicou a regra de divisibilidade do 5 para resolver uma demanda estruturada na base 10.", peso: 3 },
            { valor: "Sim (2+4+5=11)", tipo: "erro", categoria: "estrategia", erro: "problema_aplica_regra_soma_indevida", descricao: "Usou a soma de dígitos (regra do 3) de forma inútil para o contexto de empacotamento base 10.", peso: 2 },
            { valor: "Não (é ímpar)", tipo: "erro", categoria: "interpretacao", erro: "problema_justificativa_incompleta", descricao: "Chegou à resposta correta, mas justificou via paridade que não é a restrição central do fator 10.", peso: 2 }
        ],
        passo: "Para formar pacotes exatos de 10, o número total deve terminar em 0. Em 245, sobram 5 pães avulsos.",
        dica: "O critério do 10 é mais rígido: todo pacote de 10 deve terminar obrigatoriamente com o algarismo zero."
    },
    {
        id: "B1T3Q06", bloco: 1, aula: 6, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Múltiplas Condições",
        display: "Qual número é divisível por 2, 3 e 5 ao mesmo tempo?",
        res: "120",
        alternativas: [
            { valor: "120", tipo: "acerto" },
            { valor: "135", tipo: "erro", categoria: "conceito", erro: "divisibilidade_ignora_condicao_paridade", descricao: "Escolheu um número terminado em 5, que é divisível por 3 e 5, mas violou a regra do 2.", peso: 3 },
            { valor: "125", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_ignora_soma_digitos", descricao: "Escolheu um múltiplo de 5, mas falhou ao verificar que 1+2+5=8 (não divide por 3).", peso: 2 },
            { valor: "122", tipo: "erro", categoria: "atencao", erro: "divisibilidade_confunde_criterios_gerais", descricao: "Selecionou um número par, mas que não divide nem por 3 nem por 5.", peso: 1 }
        ],
        passo: "Para 2 e 5, o número deve terminar em 0. Para o 3, a soma (1+2+0=3) deve ser divisível por 3.",
        dica: "Comece eliminando os que não terminam em 0, pois eles são obrigatórios para as regras do 2 e do 5."
    },
    {
        id: "B1T3Q08", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Contexto",
        display: "Há 342 alunos que precisam formar fileiras de exatos 3 alunos. Todos conseguirão lugar sem sobrar ninguém avulso?",
        res: "Sim (3+4+2=9)",
        alternativas: [
            { valor: "Sim (3+4+2=9)", tipo: "acerto" },
            { valor: "Não (342 não termina em 3)", tipo: "erro", categoria: "conceito", erro: "problema_confunde_final_com_divisor", descricao: "Acreditou que um número precisa terminar em '3' para ser múltiplo de 3.", peso: 3 },
            { valor: "Não (342 é par)", tipo: "erro", categoria: "estrategia", erro: "problema_opoe_par_multiplo_tres", descricao: "Presumiu equivocadamente que números pares não podem ser múltiplos de 3.", peso: 2 },
            { valor: "Sim (342 termina em 2)", tipo: "erro", categoria: "interpretacao", erro: "problema_acerto_por_deducao_falsa", descricao: "Acertou que não há sobras, mas justificou usando a regra da paridade.", peso: 2 }
        ],
        passo: "Somando os dígitos: 3+4+2=9. O 9 é divisível por 3, logo 342 alunos preenchem as fileiras de 3 sem sobra.",
        dica: "Ignore o fato de o número ser par ou terminar em 2; o que importa para o divisor 3 é a soma dos dígitos."
    },

    // ── AULA 7: DIVISORES E NÚMEROS PRIMOS ──────────────────────────────

    {
        id: "B1T3Q09", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores de um Número",
        display: "Quais são todos os divisores naturais do número 12?",
        res: "{1,2,3,4,6,12}",
        alternativas: [
            { valor: "{1,2,3,4,6,12}", tipo: "acerto" },
            { valor: "{2,3,4,6}", tipo: "erro", categoria: "conceito", erro: "divisores_omite_extremos_triviais", descricao: "Omite o número 1 e o próprio número 12 do conjunto de divisores.", peso: 3 },
            { valor: "{1,2,4,12}", tipo: "erro", categoria: "procedimento", erro: "divisores_omite_fator_central", descricao: "Listou a maioria, mas pulou o fator (3x4), ocultando os divisores 3 e 6.", peso: 2 },
            { valor: "{1,3,4,12}", tipo: "erro", categoria: "atencao", erro: "divisores_omite_base_par", descricao: "Esqueceu de registrar os divisores elementares baseados no número 2 (2 e 6).", peso: 1 }
        ],
        passo: "Os divisores formam pares: 1×12, 2×6, 3×4. O conjunto final é {1,2,3,4,6,12}.",
        dica: "Lembre-se: o número 1 e o próprio número sempre fazem parte do conjunto de divisores."
    },
    {
        id: "B1T3Q10", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo",
        display: "Qual destes números é um número PRIMO?",
        res: "11",
        alternativas: [
            { valor: "11", tipo: "acerto" },
            { valor: "9", tipo: "erro", categoria: "conceito", erro: "primo_confunde_com_impar", descricao: "Identificou um número composto (3x3) como primo por ele ser ímpar.", peso: 3 },
            { valor: "15", tipo: "erro", categoria: "procedimento", erro: "primo_ignora_fator_cinco", descricao: "Identificou o número terminado em 5 como primo, não realizando a checagem da tabuada do 5.", peso: 2 },
            { valor: "21", tipo: "erro", categoria: "calculo", erro: "primo_falha_revisao_tabuada", descricao: "Falhou em lembrar que 21 é derivado de 3x7.", peso: 2 }
        ],
        passo: "O 11 só pode ser dividido de forma exata por 1 e por ele mesmo. 9, 15 e 21 têm outros divisores.",
        dica: "O número primo é 'teimoso': não aceita ser dividido por ninguém da tabuada além do 1 e de si próprio."
    },
    {
        id: "B1T3Q11", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número 1 — Caso Especial",
        display: "Matematicamente, o número 1 é considerado primo, composto ou nenhum dos dois?",
        res: "Nenhum dos dois",
        alternativas: [
            { valor: "Nenhum dos dois", tipo: "acerto" },
            { valor: "Primo", tipo: "erro", categoria: "conceito", erro: "primo_classifica_um_como_primo", descricao: "Acredita que o 1 atende à regra dos primos por se dividir por ele mesmo, não entendendo o critério de 'dois divisores distintos'.", peso: 3 },
            { valor: "Composto", tipo: "erro", categoria: "estrategia", erro: "primo_classifica_um_como_composto", descricao: "Aplicou ao 1 a regra genérica dos demais numerais operáveis.", peso: 2 },
            { valor: "Depende", tipo: "erro", categoria: "interpretacao", erro: "primo_relativiza_definicao_base", descricao: "Tratou uma regra axiomática de taxonomia matemática como se fosse variável.", peso: 2 }
        ],
        passo: "Para ser primo, o número exige EXATAMENTE 2 divisores (1 e ele mesmo, em blocos separados). O 1 possui apenas um divisor.",
        dica: "Para ser primo, é preciso que a 'carteirinha de identidade' possua duas assinaturas diferentes."
    },
    {
        id: "B1T3Q12", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — O 2",
        display: "Por que o 2 é considerado o ÚNICO número primo par?",
        res: "Pares > 2 dividem por 2, logo 3+ divisores",
        alternativas: [
            { valor: "Pares > 2 dividem por 2, logo 3+ divisores", tipo: "acerto" },
            { valor: "Por convenção", tipo: "erro", categoria: "conceito", erro: "primo_crenca_em_regra_arbitraria", descricao: "Acreditou que é uma regra inventada sem base na lei de divisibilidade universal.", peso: 3 },
            { valor: "Porque 2 é pequeno", tipo: "erro", categoria: "estrategia", erro: "primo_associa_grandeza_a_fator", descricao: "Estabeleceu uma relação ilógica entre o tamanho do numeral e a sua fatoração.", peso: 2 },
            { valor: "É o único ímpar", tipo: "erro", categoria: "atencao", erro: "primo_nega_paridade_evidente", descricao: "Lê o numeral 2 e afirma textualmente que ele atende à classificação de ímpar.", peso: 1 }
        ],
        passo: "Qualquer par maior que 2 terá obrigatoriamente pelo menos três divisores: o 1, o 2, e ele próprio.",
        dica: "Se o número for par e maior que 2, o número 2 'fura a fila' e entra como divisor, anulando o status de primo."
    },
    {
        id: "B1T3Q14", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo — Identificação",
        display: "Quantos números primos existem na sequência entre 20 e 30?",
        res: "2 (23 e 29)",
        alternativas: [
            { valor: "2 (23 e 29)", tipo: "acerto" },
            { valor: "3 (23, 27 e 29)", tipo: "erro", categoria: "procedimento", erro: "primo_inclui_multiplo_tres_impar", descricao: "Incluiu o 27, confundindo-o com primo por ser ímpar, não testando a tabuada do 3.", peso: 3 },
            { valor: "4 (21, 23, 27, 29)", tipo: "erro", categoria: "conceito", erro: "primo_assume_todo_impar", descricao: "Assumiu que quase todos os ímpares da faixa são primos (21 e 27 entraram).", peso: 3 },
            { valor: "1 (23)", tipo: "erro", categoria: "calculo", erro: "primo_exclui_primo_valido", descricao: "Fez a testagem mental, mas esqueceu que o 29 é primo autêntico.", peso: 2 }
        ],
        passo: "Ímpares entre 20 e 30: 21, 23, 25, 27, 29. Eliminamos 21 (3x7), 25 (5x5) e 27 (3x9). Sobram 23 e 29.",
        dica: "Cuidado com números que 'parecem' primos: o 21 e o 27 estão em tabuadas bem conhecidas."
    },
    {
        id: "B1T3Q15", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Soma de Primos",
        display: "Qual opção mostra o número 16 expresso apenas como a soma de dois números PRIMOS?",
        res: "3 + 13",
        alternativas: [
            { valor: "3 + 13", tipo: "acerto" },
            { valor: "8 + 8", tipo: "erro", categoria: "conceito", erro: "primo_usa_parcela_composta_par", descricao: "Identificou uma soma válida (16), mas ignorou a regra textual de buscar parcelas primas (8 é composto).", peso: 3 },
            { valor: "4 + 12", tipo: "erro", categoria: "procedimento", erro: "primo_usa_parcelas_compostas", descricao: "Focou apenas no resultado 16, utilizando dois numerais de tabuadas fartas.", peso: 2 },
            { valor: "6 + 10", tipo: "erro", categoria: "atencao", erro: "primo_soma_pares", descricao: "Usou numerais pares que dividem por 2, violando a regra básica de busca de primos.", peso: 1 }
        ],
        passo: "O 3 e o 13 são os únicos números da lista que não podem ser divididos por outros numerais. 3 + 13 = 16.",
        dica: "Verifique se AMBOS os números apresentados na adição são primos antes de assinalar."
    },

    // ── QUESTÕES ENRIQUECIDAS (TRILHA 3 - INVESTIGAÇÃO) ─────────────────

    {
        id: "B1T3Q16", bloco: 1, aula: 6, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Algarismo Oculto",
        display: "No número 5.4_2, qual algarismo pode ser colocado no espaço vazio para que o número seja múltiplo de 3?",
        res: "1",
        alternativas: [
            { valor: "1", tipo: "acerto" },
            { valor: "2", tipo: "erro", categoria: "conceito", erro: "divisibilidade_aplica_regra_paridade", descricao: "Aplicou a regra de múltiplos de 2 (colocando um par) para tentar responder ao critério do 3.", peso: 3 },
            { valor: "5", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_soma_insuficiente", descricao: "Soma 5+4+5+2 = 16, o que não atende à divisibilidade por 3.", peso: 2 },
            { valor: "3", tipo: "erro", categoria: "estrategia", erro: "divisibilidade_literalidade_algarismo", descricao: "Acreditou que inserir um dígito '3' garante que o numeral se torne múltiplo de 3.", peso: 2 }
        ],
        passo: "A soma fixa é 5+4+_+2 = 11. Se colocarmos o 1, teremos 11+1=12. Doze é divisível por 3.",
        dica: "A soma de todos os quatro algarismos precisará resultar em 12, 15 ou 18."
    },
    {
        id: "B1T3Q17", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores — Desafio",
        display: "Qual é o menor número natural (diferente de zero) que possui EXATAMENTE 3 divisores?",
        res: "4",
        alternativas: [
            { valor: "4", tipo: "acerto" },
            { valor: "2", tipo: "erro", categoria: "conceito", erro: "divisores_confunde_com_primo", descricao: "Apontou para o menor primo, ignorando a restrição explícita de possuir 'três divisores'.", peso: 3 },
            { valor: "6", tipo: "erro", categoria: "procedimento", erro: "divisores_soma_excedente", descricao: "Escolheu o 6, mas ele possui 4 divisores {1,2,3,6}.", peso: 2 },
            { valor: "9", tipo: "erro", categoria: "atencao", erro: "divisores_falha_fator_minimo", descricao: "O 9 tem 3 divisores {1,3,9}, mas não é o menor possível (que é o 4).", peso: 1 }
        ],
        passo: "Divisores de 4: {1, 2, 4}. São três. O próximo com essa propriedade seria o 9 {1, 3, 9}.",
        dica: "Números primos têm 2 divisores. Quem tem 3 divisores geralmente é o resultado de um primo x ele mesmo."
    },
    {
        id: "B1T3Q18", bloco: 1, aula: 7, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Números Compostos",
        display: "Na matemática, o que define um número ser classificado como COMPOSTO?",
        res: "Ter mais de 2 divisores",
        alternativas: [
            { valor: "Ter mais de 2 divisores", tipo: "acerto" },
            { valor: "Ser um número par", tipo: "erro", categoria: "conceito", erro: "composto_associa_paridade_exclusiva", descricao: "Acredita que números ímpares não podem ser compostos.", peso: 3 },
            { valor: "Ser divisível por 3", tipo: "erro", categoria: "estrategia", erro: "composto_regra_limitada", descricao: "Restringiu a definição ampla aos múltiplos da tabuada do 3.", peso: 2 },
            { valor: "Terminar em 5", tipo: "erro", categoria: "atencao", erro: "composto_confunde_multiplo_cinco", descricao: "Utilizou critério de divisibilidade como se fosse a definição estrutural de decomposição.", peso: 1 }
        ],
        passo: "Diferente dos primos (que só aceitam 1 e ele mesmo), os compostos podem ser 'desmontados' por outros fatores do sistema.",
        dica: "Composto é o oposto de Primo: ele aceita maior quantidade de divisões exatas."
    },
    {
        id: "B1T3Q19", bloco: 1, aula: 6, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério do 5 e 10",
        display: "Todo número divisível por 10 também é garantidamente divisível por 5?",
        res: "Sim, sempre",
        alternativas: [
            { valor: "Sim, sempre", tipo: "acerto" },
            { valor: "Às vezes", tipo: "erro", categoria: "conceito", erro: "divisibilidade_relativiza_regra_herdada", descricao: "Acreditou que há intersecções em que um múltiplo de 10 não finaliza em zero.", peso: 3 },
            { valor: "Não, nunca", tipo: "erro", categoria: "estrategia", erro: "divisibilidade_desassocia_fatores", descricao: "Separou completamente a relação matricial do 10 sendo composto por 5.", peso: 2 },
            { valor: "Só se for par", tipo: "erro", categoria: "interpretacao", erro: "divisibilidade_condicao_redundante", descricao: "Aplicou uma exigência de paridade redundante, pois todo múltiplo de 10 já é inerentemente par.", peso: 2 }
        ],
        passo: "Se um número termina em 0 (exigência do 10), ele automaticamente atende à regra do 5 (terminar em 0 ou 5).",
        dica: "O 10 é formado por 2 x 5. Portanto, qualquer coisa que o 10 dividir, o 5 também dividirá."
    },
    {
        id: "B1T3Q20", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Primos Gêmeos",
        display: "Primos gêmeos são pares de números primos que têm diferença de apenas 2 unidades. Qual destes pares são gêmeos autênticos?",
        res: "17 e 19",
        alternativas: [
            { valor: "17 e 19", tipo: "acerto" },
            { valor: "13 e 15", tipo: "erro", categoria: "procedimento", erro: "primos_gemeos_inclui_multiplo_tres", descricao: "Validou a diferença de 2 casas, mas não conferiu que o 15 é múltiplo de 3.", peso: 3 },
            { valor: "7 e 9", tipo: "erro", categoria: "calculo", erro: "primos_gemeos_inclui_composto_impar", descricao: "Aprovou o número 9 como primo (composto por 3x3).", peso: 2 },
            { valor: "19 e 21", tipo: "erro", categoria: "atencao", erro: "primos_gemeos_inclui_multiplo_sete", descricao: "Aprovou o 21 como primo por estar próximo a outros numerais ímpares.", peso: 1 }
        ],
        passo: "17 e 19 são primos com 2 de distância. Em todas as outras opções existe um número da tabuada do 3 (15, 9, 21).",
        dica: "Certifique-se de que AMBOS os números do par realmente são primos e não aparecem em outras tabuadas."
    }
];
