// js/data/questions/bloco1_trilha1.js
// Bloco 1 — A Base Numérica | Trilha 1 Completa
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco1_trilha1 = [
    // ── AULA 1: VALOR POSICIONAL (TRILHAS 1, 2 E 3) ──────────────────────
    {
        id: "B1T1Q01", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Qual é o valor posicional do algarismo 4 em 349.205?",
        res: "40.000",
        alternativas: [
            { valor: "40.000", tipo: "acerto" },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Considerou apenas o valor absoluto do algarismo, não aplicando o multiplicador da base 10.", peso: 3 },
            { valor: "4.000", tipo: "erro", categoria: "procedimento", erro: "valorposicional_erro_ordem_grandeza", descricao: "Identificou a classe do milhar, mas associou incorretamente à unidade em vez da dezena.", peso: 2 },
            { valor: "400", tipo: "erro", categoria: "atencao", erro: "valorposicional_confunde_classe_simples", descricao: "Assinalou o valor da centena simples em vez da dezena de milhar.", peso: 1 }
        ],
        passo: "O 4 ocupa a posição da dezena de milhar, valendo 40.000. O valor posicional multiplica o algarismo pela sua casa.",
        dica: "Escreva o número na tabela: C.Milhar | D.Milhar | U.Milhar | C | D | U"
    },
    {
        id: "B1T1Q02", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "No número 5.847, quanto vale o algarismo 8?",
        res: "800",
        alternativas: [
            { valor: "800", tipo: "acerto" },
            { valor: "8", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Selecionou o valor isolado do algarismo, ignorando sua posição no numeral.", peso: 3 },
            { valor: "80", tipo: "erro", categoria: "procedimento", erro: "valorposicional_reduz_ordem", descricao: "Atribuiu o multiplicador de dezena ao invés de centena.", peso: 2 },
            { valor: "8.000", tipo: "erro", categoria: "procedimento", erro: "valorposicional_aumenta_ordem", descricao: "Atribuiu o multiplicador de milhar ao invés de centena.", peso: 2 }
        ],
        passo: "O 8 está na posição das centenas. Ele representa 8 grupos de 100.",
        dica: "A posição das centenas vale cem vezes mais do que a das unidades."
    },
    {
        id: "B1T1Q03", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Leitura de Números",
        display: "Como se lê corretamente o número 10.030?",
        res: "Dez mil e trinta",
        alternativas: [
            { valor: "Dez mil e trinta", tipo: "acerto" },
            { valor: "Um zero zero trinta", tipo: "erro", categoria: "conceito", erro: "leitura_algarismo_isolado", descricao: "Leu os algarismos em sequência sem agrupá-los em classes base-10.", peso: 3 },
            { valor: "Dez mil trinta", tipo: "erro", categoria: "procedimento", erro: "leitura_omissao_conectivo", descricao: "Esqueceu de aplicar a regra gramatical do conectivo 'e' entre as classes.", peso: 1 },
            { valor: "Cem e trinta", tipo: "erro", categoria: "conceito", erro: "leitura_ignora_classe_milhar", descricao: "Não reconheceu a grandeza estrutural dos milhares, lendo o número como centena.", peso: 3 }
        ],
        passo: "O número pertence à classe dos milhares (10.000) e possui 3 dezenas simples (30).",
        dica: "O zero na posição das centenas indica ausência de centena, mas não elimina a grandeza do milhar."
    },
    {
        id: "B1T1Q04", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional (Zero)",
        display: "O número 250.004 tem quantos algarismos na posição das centenas?",
        res: "0",
        alternativas: [
            { valor: "0", tipo: "acerto" },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "valorposicional_confunde_unidade_centena", descricao: "Indicou o algarismo da unidade simples ao invés da centena simples.", peso: 3 },
            { valor: "2", tipo: "erro", categoria: "atencao", erro: "valorposicional_confunde_classes", descricao: "Indicou a centena de milhar em vez da centena simples.", peso: 2 },
            { valor: "5", tipo: "erro", categoria: "estrategia", erro: "valorposicional_selecao_arbitraria", descricao: "Selecionou um dígito não-nulo aleatório do numeral.", peso: 2 }
        ],
        passo: "A centena é a 3ª posição da direita para a esquerda. Nesse número, ela é ocupada pelo zero.",
        dica: "O zero é essencial: ele guarda a posição para que o 250 fique na classe do milhar."
    },
    {
        id: "B1T1Q05", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Comparação de Números",
        display: "Três turmas fizeram pontos: A=1.234, B=1.032, C=1.302. Qual turma teve MAIS pontos?",
        res: "Turma C",
        alternativas: [
            { valor: "Turma C", tipo: "acerto" },
            { valor: "Turma A", tipo: "erro", categoria: "procedimento", erro: "comparacao_erro_analise_ordem", descricao: "Não utilizou a centena como primeiro critério válido de desempate.", peso: 2 },
            { valor: "Turma B", tipo: "erro", categoria: "interpretacao", erro: "comparacao_inverte_comando", descricao: "Selecionou o menor valor do conjunto em vez do maior.", peso: 2 },
            { valor: "Empataram", tipo: "erro", categoria: "conceito", erro: "comparacao_ignora_posicao", descricao: "Assumiu que dígitos semelhantes embaralhados produzem o mesmo valor.", peso: 3 }
        ],
        passo: "Todos têm 1 milhar. O desempate ocorre na centena: C tem 3 (1.302) e A tem 2 (1.234).",
        dica: "Compare sempre da maior ordem (milhar) para a menor (unidade)."
    },
    {
        id: "B1T1Q06", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF07MA01", bncc_desc: "Ordenação de Números",
        display: "Qual é a ordem crescente correta?",
        res: "4.023 < 4.203 < 4.230 < 4.302 < 4.320",
        alternativas: [
            { valor: "4.023 < 4.203 < 4.230 < 4.302 < 4.320", tipo: "acerto" },
            { valor: "4.320 < 4.302 < 4.230 < 4.203 < 4.023", tipo: "erro", categoria: "interpretacao", erro: "ordenacao_inverte_comando", descricao: "Aplicou a ordenação decrescente em vez de crescente.", peso: 2 },
            { valor: "4.023 < 4.230 < 4.203 < 4.302 < 4.320", tipo: "erro", categoria: "procedimento", erro: "ordenacao_falha_desempate_dezena", descricao: "Errou o desempate na ordem das dezenas entre 4.230 e 4.203.", peso: 1 },
            { valor: "4.302 < 4.230 < 4.203 < 4.023 < 4.320", tipo: "erro", categoria: "conceito", erro: "ordenacao_falha_estrutural_base", descricao: "Ordenou os valores sem seguir o alinhamento posicional da base 10.", peso: 3 }
        ],
        passo: "A ordem crescente exige que o algarismo da centena desempatado defina a posição lógica.",
        dica: "Ordem crescente significa ir do menor valor absoluto para o maior."
    },
    {
        id: "B1T1Q07", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Decomposição em Valor Posicional",
        display: "Qual decomposição representa corretamente o número 27.350?",
        res: "20.000+7.000+300+50",
        alternativas: [
            { valor: "20.000+7.000+300+50", tipo: "acerto" },
            { valor: "20.000+7.000+300+5", tipo: "erro", categoria: "conceito", erro: "decomposicao_reduz_dezena_unidade", descricao: "Transformou a grandeza da dezena (50) em unidade isolada (5).", peso: 3 },
            { valor: "2.000+700+350", tipo: "erro", categoria: "procedimento", erro: "decomposicao_reduz_ordem_global", descricao: "Aplicou um fator de divisão por 10 em todas as ordens de grandeza.", peso: 2 },
            { valor: "27.000+350", tipo: "erro", categoria: "estrategia", erro: "decomposicao_agrupa_por_classe", descricao: "Decompôs o número por classes (milhar/simples) e não por ordens base-10.", peso: 1 }
        ],
        passo: "27.350 é composto por 2 dezenas de milhar, 7 unidades de milhar, 3 centenas e 5 dezenas.",
        dica: "A decomposição separa o valor de cada algarismo de acordo com a sua posição."
    },
    {
        id: "B1T1Q08", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Entre 12.450 e 12.504, qual valor é MAIOR?",
        res: "12.504",
        alternativas: [
            { valor: "12.504", tipo: "acerto" },
            { valor: "12.450", tipo: "erro", categoria: "procedimento", erro: "comparacao_foco_ordem_inferior", descricao: "Avaliou as dezenas finais (50 > 04) antes de avaliar as centenas (4 < 5).", peso: 2 },
            { valor: "Igual", tipo: "erro", categoria: "conceito", erro: "comparacao_ignora_posicao", descricao: "Deduziu igualdade pelo fato dos números possuírem os mesmos algarismos embaralhados.", peso: 3 },
            { valor: "Impossível saber", tipo: "erro", categoria: "estrategia", erro: "comparacao_desiste_analise", descricao: "Não tentou aplicar o algoritmo de comparação da base 10.", peso: 2 }
        ],
        passo: "Ambos têm 12 mil. Na centena, 5 é maior que 4. A análise para aqui: 12.504 é o maior.",
        dica: "A ordem maior (neste caso, a centena) tem prioridade absoluta no desempate."
    },
    {
        id: "B1T1Q09", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando os algarismos 3, 0, 7 e 5 (uma vez cada), qual é o MAIOR número possível?",
        res: "7.530",
        alternativas: [
            { valor: "7.530", tipo: "acerto" },
            { valor: "7.503", tipo: "erro", categoria: "procedimento", erro: "investigacao_ordem_decrescente_falha", descricao: "Não manteve a ordem decrescente nas casas de dezena e unidade.", peso: 1 },
            { valor: "7.350", tipo: "erro", categoria: "atencao", erro: "investigacao_falha_comparacao_interna", descricao: "Inverteu a posição da centena e da dezena na montagem.", peso: 1 },
            { valor: "5.730", tipo: "erro", categoria: "conceito", erro: "investigacao_ignora_maior_ordem", descricao: "Não alocou o algarismo de maior valor absoluto na casa de maior grandeza.", peso: 3 }
        ],
        passo: "Para maximizar o valor, os maiores dígitos devem ocupar as maiores casas (milhar, depois centena).",
        dica: "Ordene os algarismos do maior para o menor."
    },
    {
        id: "B1T1Q10", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando 3, 0, 7 e 5 (uma vez cada), qual o MENOR número sem o zero na frente?",
        res: "3.057",
        alternativas: [
            { valor: "3.057", tipo: "acerto" },
            { valor: "0.357", tipo: "erro", categoria: "interpretacao", erro: "investigacao_ignora_restricao", descricao: "Desrespeitou a regra explícita do enunciado de não usar o zero no começo.", peso: 3 },
            { valor: "3.075", tipo: "erro", categoria: "procedimento", erro: "investigacao_ordem_crescente_falha", descricao: "Não aplicou a ordenação crescente exigida nas ordens inferiores.", peso: 1 },
            { valor: "3.507", tipo: "erro", categoria: "estrategia", erro: "investigacao_falha_minimizacao_centena", descricao: "Não usou o zero na segunda maior posição para reduzir o valor global.", peso: 2 }
        ],
        passo: "O menor algarismo válido (3) inicia o milhar. O zero entra imediatamente depois na centena.",
        dica: "O zero não pode liderar o número, mas deve assumir a próxima casa de maior valor para reduzi-lo."
    },
    // ── AULA 2: ADIÇÃO E SUBTRAÇÃO (TRILHAS 1, 2 E 3) ──────────────────────
    {
        id: "B1T1Q11", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "1.245 + 879 = ?",
        res: "2.124",
        alternativas: [
            { valor: "2.124", tipo: "acerto" },
            { valor: "2.114", tipo: "erro", categoria: "calculo", erro: "adicao_erro_tabuada", descricao: "Errou soma básica na etapa das dezenas.", peso: 1 },
            { valor: "2.024", tipo: "erro", categoria: "procedimento", erro: "adicao_falha_reagrupamento_meio", descricao: "Esqueceu de adicionar a reserva (transporte) na casa das centenas.", peso: 2 },
            { valor: "1.124", tipo: "erro", categoria: "conceito", erro: "adicao_ignora_reagrupamento_milhar", descricao: "Não executou o reagrupamento que forma uma nova ordem de milhar.", peso: 3 }
        ],
        passo: "5+9=14 (sobe 1). 4+7+1=12 (sobe 1). 2+8+1=11 (sobe 1). 1+1=2.",
        dica: "Não esqueça de adicionar a reserva ('vai um') na coluna seguinte."
    },
    {
        id: "B1T1Q12", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração com Reagrupamento",
        display: "2.000 - 1.342 = ?",
        res: "658",
        alternativas: [
            { valor: "658", tipo: "acerto" },
            { valor: "668", tipo: "erro", categoria: "calculo", erro: "subtracao_erro_tabuada", descricao: "Erro mecânico em uma das etapas de subtração.", peso: 1 },
            { valor: "748", tipo: "erro", categoria: "procedimento", erro: "subtracao_falha_emprestimo_sucessivo", descricao: "Tratou os zeros intermediários emprestados como 10 ao invés de 9.", peso: 2 },
            { valor: "642", tipo: "erro", categoria: "conceito", erro: "subtracao_inverte_minuendo_subtraendo", descricao: "Subtraiu o número de cima pelo de baixo porque não sabia reagrupar a partir do zero.", peso: 3 }
        ],
        passo: "O 2 cede valor: as centenas/dezenas ficam 9, a unidade fica 10. 10-2=8, 9-4=5, 9-3=6.",
        dica: "Na subtração de zeros em sequência, a primeira casa que pede emprestado fica 10, e as do meio ficam 9."
    },
    {
        id: "B1T1Q13", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "O que representa o '1' que 'sobe' na conta de adição?",
        res: "Uma dezena (ou nova ordem inteira)",
        alternativas: [
            { valor: "Uma dezena (ou nova ordem inteira)", tipo: "acerto" },
            { valor: "Uma unidade isolada", tipo: "erro", categoria: "conceito", erro: "algoritmo_nao_compreende_reagrupamento", descricao: "Interpreta a reserva como uma unidade de valor 1, ignorando a lógica da base 10.", peso: 3 },
            { valor: "O algarismo 1 sem valor", tipo: "erro", categoria: "procedimento", erro: "algoritmo_literalidade_visual", descricao: "Entende a reserva como uma etapa puramente gráfica do desenho da conta.", peso: 2 },
            { valor: "A sobra da conta", tipo: "erro", categoria: "interpretacao", erro: "algoritmo_confunde_com_resto", descricao: "Confunde o conceito de reserva da adição com o resto da divisão.", peso: 2 }
        ],
        passo: "O nosso sistema é base 10. Quando acumulamos 10 na unidade, ela é transferida e vira 1 dezena.",
        dica: "Reagrupar é trocar 10 unidades de uma casa por 1 unidade da casa seguinte."
    },
    {
        id: "B1T1Q14", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Contexto",
        display: "O caixa tinha R$450. Vendeu R$187 e depois pagou uma conta de R$215. Quanto sobrou no caixa?",
        res: "R$ 422,00",
        alternativas: [
            { valor: "R$ 422,00", tipo: "acerto" },
            { valor: "R$ 48,00", tipo: "erro", categoria: "interpretacao", erro: "problema_subtrai_entrada", descricao: "Classificou a palavra 'vendeu' como uma retirada de dinheiro, em vez de entrada.", peso: 3 },
            { valor: "R$ 32,00", tipo: "erro", categoria: "calculo", erro: "problema_falha_operacional_dupla", descricao: "Cometeu erros de tabuada ou transporte nas duas operações em sequência.", peso: 2 },
            { valor: "R$ 235,00", tipo: "erro", categoria: "estrategia", erro: "problema_resolve_metade", descricao: "Calculou apenas a primeira interação e parou o raciocínio matemático.", peso: 1 }
        ],
        passo: "Dinheiro inicial (450) + Venda (187) - Pagamento (215) = 422.",
        dica: "Venda significa que dinheiro ENTROU (+). Pagamento significa que dinheiro SAIU (-)."
    },
    {
        id: "B1T1Q15", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Contexto",
        display: "Um atleta correu 1.250m na segunda e 350m A MAIS na terça. Qual o total dos dois dias?",
        res: "2.850 m",
        alternativas: [
            { valor: "2.850 m", tipo: "acerto" },
            { valor: "1.600 m", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_agrupamento_final", descricao: "Calculou a distância de terça-feira e usou como resposta, esquecendo de somar os dois dias.", peso: 3 },
            { valor: "2.350 m", tipo: "erro", categoria: "calculo", erro: "problema_soma_centena_falha", descricao: "Erro operacional leve durante o agrupamento final das centenas.", peso: 1 },
            { valor: "1.950 m", tipo: "erro", categoria: "conceito", erro: "problema_ignora_relacao_aditiva", descricao: "Apenas somou 1250+350, ignorando o significado semântico do termo 'A MAIS'.", peso: 2 }
        ],
        passo: "Valor de Terça: 1.250 + 350 = 1.600. Total = 1.250 (segunda) + 1.600 (terça) = 2.850 m.",
        dica: "Você precisa descobrir o valor da terça antes de calcular o total."
    },
    {
        id: "B1T1Q16", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Algoritmo",
        display: "Na subtração 5.000 - 2.674, qual o resultado?",
        res: "2.326",
        alternativas: [
            { valor: "2.326", tipo: "acerto" },
            { valor: "3.326", tipo: "erro", categoria: "procedimento", erro: "subtracao_ignora_reducao_milhar", descricao: "Executou os empréstimos sucessivos mas não subtraiu 1 unidade do algarismo 5 no milhar.", peso: 3 },
            { valor: "2.436", tipo: "erro", categoria: "procedimento", erro: "subtracao_falha_reagrupamento_intermediario", descricao: "Considerou o zero intermediário como 10 no momento do empréstimo em vez de 9.", peso: 2 },
            { valor: "2.306", tipo: "erro", categoria: "calculo", erro: "subtracao_erro_tabuada", descricao: "Falha de tabuada simples (ex: 9-7=0).", peso: 1 }
        ],
        passo: "10-4=6, 9-7=2, 9-6=3 e 4-2=2. Resultado: 2.326.",
        dica: "Quando o milhar empresta para centenas zeradas, ele também precisa diminuir 1."
    },
    {
        id: "B1T1Q17", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Investigação",
        display: "Na soma 4__8 + 275 = 723. Qual é o algarismo oculto na dezena?",
        res: "4",
        alternativas: [
            { valor: "4", tipo: "acerto" },
            { valor: "5", tipo: "erro", categoria: "procedimento", erro: "adicao_ignora_transporte_oculto", descricao: "Calculou a diferença sem considerar a unidade que 'subiu' do 8+5.", peso: 3 },
            { valor: "3", tipo: "erro", categoria: "calculo", erro: "adicao_erro_estimativa", descricao: "Errou mentalmente a verificação aditiva.", peso: 1 },
            { valor: "2", tipo: "erro", categoria: "estrategia", erro: "adicao_deducao_falha", descricao: "Baseou a resposta nos numerais expostos sem aplicar algoritmo de complemento.", peso: 2 }
        ],
        passo: "Unidades: 8+5=13 (sobe 1). Dezenas: 1 (reserva) + __ + 7 precisa terminar em 2 (12). Logo, o algarismo é 4.",
        dica: "Use a coluna da unidade para verificar se houve reserva ('vai um') para a dezena."
    },
    {
        id: "B1T1Q18", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Sentido",
        display: "Ao 'pedir emprestado' na subtração, o que acontece com a ordem vizinha que emprestou?",
        res: "Ela diminui em 1",
        alternativas: [
            { valor: "Ela diminui em 1", tipo: "acerto" },
            { valor: "Ela não muda", tipo: "erro", categoria: "conceito", erro: "algoritmo_nao_reduz_emprestimo", descricao: "Acredita que o reagrupamento duplica valor em vez de transferi-lo entre as bases.", peso: 3 },
            { valor: "Ela aumenta em 1", tipo: "erro", categoria: "procedimento", erro: "algoritmo_confunde_adicao_subtracao", descricao: "Aplicou a regra mecânica do 'vai um' da adição na operação de subtração.", peso: 2 },
            { valor: "Ela zera", tipo: "erro", categoria: "interpretacao", erro: "algoritmo_extrema_generalizacao", descricao: "Interpreta 'emprestar' como a doação total de valor da casa vizinha.", peso: 1 }
        ],
        passo: "O reagrupamento retira 1 de uma ordem superior (que vale mais) e a transforma em 10 da ordem inferior.",
        dica: "Reagrupar é como trocar uma nota de 10 por dez moedas de 1."
    },
    {
        id: "B1T1Q19", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Operações Inversas",
        display: "Como verificar se o cálculo 1.600 - 937 = 663 está correto sem refazer a conta?",
        res: "Somar 663 + 937",
        alternativas: [
            { valor: "Somar 663 + 937", tipo: "acerto" },
            { valor: "Subtrair 663 de 937", tipo: "erro", categoria: "conceito", erro: "prova_real_mantem_operador", descricao: "Manteve o operador original em vez de aplicar o conceito de operação inversa.", peso: 3 },
            { valor: "Dividir 1.600 por 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_chute", descricao: "Sugeriu operador sem correlação lógica com o modelo aditivo/subtrativo.", peso: 2 },
            { valor: "Multiplicar 663 x 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_aplica_dobro", descricao: "Tentou validar a conta com proporções não existentes na expressão.", peso: 2 }
        ],
        passo: "A operação inversa da subtração é a adição. Somando o resultado com a parte retirada, você encontra o valor inicial.",
        dica: "A prova real sempre 'desfaz' a conta original."
    },
    {
        id: "B1T1Q20", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Aplicação",
        display: "Loja tinha 3.500 itens. Vendeu 1.847 e depois recebeu uma carga de 620 novos itens. Saldo atual?",
        res: "2.273",
        alternativas: [
            { valor: "2.273", tipo: "acerto" },
            { valor: "1.653", tipo: "erro", categoria: "interpretacao", erro: "problema_omite_etapa_final", descricao: "Efetuou a subtração da venda, mas ignorou o texto da última entrada de carga.", peso: 3 },
            { valor: "2.653", tipo: "erro", categoria: "calculo", erro: "problema_erro_soma_carga", descricao: "Errou a adição na fase final da reposição de estoque.", peso: 1 },
            { valor: "2.373", tipo: "erro", categoria: "procedimento", erro: "problema_falha_reagrupamento_estoque", descricao: "Executou erro mecânico de empréstimo nos zeros de 3.500.", peso: 2 }
        ],
        passo: "Estoque (3.500) - Venda (1.847) = 1.653. Depois, Saldo Parcial (1.653) + Carga (620) = 2.273.",
        dica: "A palavra 'vendeu' reduz o estoque. A palavra 'recebeu' aumenta o estoque."
    }
];
