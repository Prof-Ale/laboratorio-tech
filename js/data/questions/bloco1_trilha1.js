// js/data/questions/bloco1_trilha1.js
// Bloco 1 — A Base Numérica | Trilha 1 Completa
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, calculo, atencao, estrategia, interpretacao

export const bloco1_trilha1 = [
    // ── AULA 1: VALOR POSICIONAL (TRILHAS 1, 2 E 3) ──────────────────────
    {
        id: "B1T1Q01", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Qual é o valor posicional do algarismo 4 em 349.205?",
        res: "40.000",
        alternativas: [
            { valor: "40.000", tipo: "acerto" },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Considerou apenas o valor absoluto do algarismo, ignorando a ordem de milhar.", peso: 3 },
            { valor: "4.000", tipo: "erro", categoria: "calculo", erro: "valorposicional_erro_ordem_grandeza", descricao: "Identificou a classe do milhar, mas reduziu de dezena para unidade de milhar.", peso: 2 },
            { valor: "400", tipo: "erro", categoria: "atencao", erro: "valorposicional_confunde_classe_simples", descricao: "Confundiu a dezena de milhar com a centena simples.", peso: 1 }
        ],
        passo: "O 4 ocupa a posição da dezena de milhar, valendo 40.000. Valor posicional depende da posição, não só do algarismo.",
        dica: "Escreva o número na tabela: C.Milhar | D.Milhar | U.Milhar | C | D | U"
    },
    {
        id: "B1T1Q02", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "No número 5.847, quanto vale o algarismo 8?",
        res: "800",
        alternativas: [
            { valor: "800", tipo: "acerto" },
            { valor: "8", tipo: "erro", categoria: "conceito", erro: "valorposicional_ignora_ordem", descricao: "Focou apenas no algarismo, sem considerar a posição de centena.", peso: 3 },
            { valor: "80", tipo: "erro", categoria: "calculo", erro: "valorposicional_confunde_dezena_centena", descricao: "Confundiu a posição de centena com a de dezena.", peso: 2 },
            { valor: "8.000", tipo: "erro", categoria: "calculo", erro: "valorposicional_confunde_centena_milhar", descricao: "Superestimou a ordem, associando à unidade de milhar.", peso: 2 }
        ],
        passo: "O 8 está na posição das centenas. Valor posicional = 800.",
        dica: "Posição das centenas vale cem vezes mais do que a das unidades."
    },
    {
        id: "B1T1Q03", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Leitura de Números",
        display: "Como se lê corretamente o número 10.030?",
        res: "Dez mil e trinta",
        alternativas: [
            { valor: "Dez mil e trinta", tipo: "acerto" },
            { valor: "Um zero zero trinta", tipo: "erro", categoria: "conceito", erro: "leitura_algarismo_isolado", descricao: "Leu os dígitos individualmente sem agrupá-los em classes numéricas.", peso: 3 },
            { valor: "Dez mil trinta", tipo: "erro", categoria: "atencao", erro: "leitura_omissao_conectivo", descricao: "Esqueceu o conectivo 'e' entre as classes/ordens.", peso: 1 },
            { valor: "Cem e trinta", tipo: "erro", categoria: "conceito", erro: "leitura_ignora_classe_milhar", descricao: "Não reconheceu a grandeza da classe dos milhares, lendo como centena.", peso: 3 }
        ],
        passo: "10.030 = dez mil e trinta. O 'e' aparece antes das ordens menores que a última ordem não nula.",
        dica: "O zero na posição das centenas não some — ele ocupa a posição e por isso usamos o 'e'."
    },
    {
        id: "B1T1Q04", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "O número 250.004 tem quantos algarismos na posição das centenas?",
        res: "0",
        alternativas: [
            { valor: "0", tipo: "acerto" },
            { valor: "4", tipo: "erro", categoria: "conceito", erro: "valorposicional_confunde_unidade_centena", descricao: "Indicou a unidade simples ao invés da centena simples.", peso: 3 },
            { valor: "2", tipo: "erro", categoria: "atencao", erro: "valorposicional_confunde_centena_milhar", descricao: "Identificou a centena de milhar em vez da centena simples.", peso: 2 },
            { valor: "5", tipo: "erro", categoria: "atencao", erro: "valorposicional_selecao_ordem_aleatoria", descricao: "Selecionou a dezena de milhar equivocadamente.", peso: 2 }
        ],
        passo: "250.004: C.Milhar=2, D.Milhar=5, U.Milhar=0, Centena=0, Dezena=0, Unidade=4. A centena vale 0.",
        dica: "O zero guarda a posição. Ele não contribui com valor, mas não pode ser ignorado."
    },
    {
        id: "B1T1Q05", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Comparação de Números",
        display: "Três turmas fizeram pontos: A=1.234, B=1.032, C=1.302. Qual turma teve MAIS pontos?",
        res: "Turma C",
        alternativas: [
            { valor: "Turma C", tipo: "acerto" },
            { valor: "Turma A", tipo: "erro", categoria: "estrategia", erro: "comparacao_erro_analise_ordem", descricao: "Não focou na maior casa de desempate (a centena), comparando outras ordens.", peso: 2 },
            { valor: "Turma B", tipo: "erro", categoria: "interpretacao", erro: "comparacao_inverte_maior_menor", descricao: "Identificou equivocadamente a menor pontuação em vez da maior.", peso: 2 },
            { valor: "Empataram", tipo: "erro", categoria: "conceito", erro: "comparacao_ignora_diferenca_posicional", descricao: "Não soube estruturar a diferença posicional ao ver algarismos semelhantes.", peso: 3 }
        ],
        passo: "Compare a ordem das centenas: Turma C tem 3 (1.302) e Turma A tem 2 (1.234). Logo, 1.302 > 1.234.",
        dica: "Compare da maior para a menor ordem: milhares → centenas → dezenas."
    },
    {
        id: "B1T1Q06", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF07MA01", bncc_desc: "Ordenação de Números",
        display: "Qual é a ordem crescente correta? (do menor para o maior)",
        res: "4.023 < 4.203 < 4.230 < 4.302 < 4.320",
        alternativas: [
            { valor: "4.023 < 4.203 < 4.230 < 4.302 < 4.320", tipo: "acerto" },
            { valor: "4.320 < 4.302 < 4.230 < 4.203 < 4.023", tipo: "erro", categoria: "interpretacao", erro: "ordenacao_confunde_crescente_decrescente", descricao: "Escolheu a ordem decrescente (do maior para o menor).", peso: 2 },
            { valor: "4.023 < 4.230 < 4.203 < 4.302 < 4.320", tipo: "erro", categoria: "atencao", erro: "ordenacao_falha_desempate_interno", descricao: "Errou no desempate posicional entre os numerais 4.230 e 4.203.", peso: 1 },
            { valor: "4.302 < 4.230 < 4.203 < 4.023 < 4.320", tipo: "erro", categoria: "conceito", erro: "ordenacao_falha_estrutural", descricao: "Apresenta dificuldade estrutural severa para alinhar a grandeza dos números.", peso: 3 }
        ],
        passo: "Com milhares iguais, o desempate vem da centena: 0 < 2 < 3. Com centenas iguais, olhamos a dezena.",
        dica: "Crescente é como uma escada: do menor para o maior."
    },
    {
        id: "B1T1Q07", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Decomposição em Valor Posicional",
        display: "Qual decomposição representa corretamente o número 27.350?",
        res: "20.000+7.000+300+50",
        alternativas: [
            { valor: "20.000+7.000+300+50", tipo: "acerto" },
            { valor: "20.000+7.000+300+5", tipo: "erro", categoria: "conceito", erro: "decomposicao_confunde_dezena_unidade", descricao: "Transformou a dezena 50 em unidade isolada 5.", peso: 3 },
            { valor: "2.000+700+350", tipo: "erro", categoria: "calculo", erro: "decomposicao_reduz_ordem_grandeza", descricao: "Reduziu todas as ordens de grandeza por um fator de 10.", peso: 2 },
            { valor: "27.000+350", tipo: "erro", categoria: "estrategia", erro: "decomposicao_incompleta_classes", descricao: "Separou o número estruturalmente por classes em vez de ordens base 10.", peso: 1 }
        ],
        passo: "27.350 = 2×10.000 + 7×1.000 + 3×100 + 5×10. Isso resulta em 20.000+7.000+300+50.",
        dica: "Cada algarismo multiplica o valor da sua posição (10.000, 1.000, 100...)."
    },
    {
        id: "B1T1Q08", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Entre 12.450 e 12.504, qual valor é MAIOR?",
        res: "12.504",
        alternativas: [
            { valor: "12.504", tipo: "acerto" },
            { valor: "12.450", tipo: "erro", categoria: "atencao", erro: "comparacao_foco_ordens_inferiores", descricao: "Elegeu a terminação 50 maior que 04, mas esqueceu de desempatar pela centena primeiro.", peso: 2 },
            { valor: "Igual", tipo: "erro", categoria: "conceito", erro: "comparacao_ignora_posicao_algarismo", descricao: "Acreditou que possuir os mesmos dígitos (embaralhados) gera números iguais.", peso: 3 },
            { valor: "Impossível saber", tipo: "erro", categoria: "interpretacao", erro: "comparacao_inseguranca_sistema", descricao: "Demonstra insegurança total na lógica do sistema decimal comparativo.", peso: 3 }
        ],
        passo: "As unidades de milhar são iguais (12). Nas centenas, 5 é maior que 4. Logo, 12.504 > 12.450.",
        dica: "O primeiro algarismo diferente (da esquerda para a direita) define o maior número."
    },
    {
        id: "B1T1Q09", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando os algarismos 3, 0, 7 e 5 (uma vez cada), qual é o MAIOR número possível?",
        res: "7.530",
        alternativas: [
            { valor: "7.530", tipo: "acerto" },
            { valor: "7.503", tipo: "erro", categoria: "atencao", erro: "investigacao_ordem_decrescente_final", descricao: "Não finalizou a ordem decrescente corretamente nos últimos algarismos.", peso: 1 },
            { valor: "7.350", tipo: "erro", categoria: "atencao", erro: "investigacao_ordem_decrescente_meio", descricao: "Errou a priorização decrescente no meio do numeral.", peso: 1 },
            { valor: "5.730", tipo: "erro", categoria: "estrategia", erro: "investigacao_falha_prioridade_maxima", descricao: "Não colocou o maior algarismo disponível na ordem de maior valor (milhar).", peso: 2 }
        ],
        passo: "Para o maior número, colocamos os maiores algarismos nas maiores posições: 7 no milhar, 5 na centena, 3 na dezena.",
        dica: "Coloque os algarismos em ordem decrescente."
    },
    {
        id: "B1T1Q10", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando 3, 0, 7 e 5 (uma vez cada), qual o MENOR número sem o zero na frente?",
        res: "3.057",
        alternativas: [
            { valor: "3.057", tipo: "acerto" },
            { valor: "0.357", tipo: "erro", categoria: "interpretacao", erro: "investigacao_ignora_restricao_zero", descricao: "Desrespeitou a regra explícita do enunciado de não usar o zero no começo.", peso: 3 },
            { valor: "3.075", tipo: "erro", categoria: "atencao", erro: "investigacao_ordem_crescente_final", descricao: "Errou a ordenação crescente exigida nas ordens inferiores (dezena e unidade).", peso: 1 },
            { valor: "3.507", tipo: "erro", categoria: "estrategia", erro: "investigacao_nao_minimiza_ordem_alta", descricao: "Não aproveitou o zero na maior posição válida (centena) para reduzir o valor global.", peso: 2 }
        ],
        passo: "O menor algarismo não nulo (3) inicia o milhar. O zero ocupa a próxima posição para manter o número pequeno.",
        dica: "O zero não pode começar um número de 4 dígitos, mas pode ser a segunda casa."
    },
    // ── AULA 2: ADIÇÃO E SUBTRAÇÃO (TRILHAS 1, 2 E 3) ──────────────────────
    {
        id: "B1T1Q11", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "1.245 + 879 = ?",
        res: "2.124",
        alternativas: [
            { valor: "2.124", tipo: "acerto" },
            { valor: "2.114", tipo: "erro", categoria: "atencao", erro: "adicao_erro_operacional_simples", descricao: "Errou uma soma de rotina na tabuada básica ou contagem.", peso: 1 },
            { valor: "2.024", tipo: "erro", categoria: "calculo", erro: "adicao_falha_reagrupamento_meio", descricao: "Não transportou corretamente a reserva (o sobe 1) no meio do algoritmo.", peso: 2 },
            { valor: "1.124", tipo: "erro", categoria: "conceito", erro: "adicao_ignora_reagrupamento_milhar", descricao: "Ignorou completamente o transporte final que formaria uma nova unidade de milhar.", peso: 3 }
        ],
        passo: "5+9=14 (sobe 1). 4+7+1=12 (sobe 1). 2+8+1=11 (sobe 1). 1+1=2. Resultado: 2.124.",
        dica: "Não esqueça de somar o número que 'subiu' para a próxima coluna."
    },
    {
        id: "B1T1Q12", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração com Reagrupamento",
        display: "2.000 - 1.342 = ?",
        res: "658",
        alternativas: [
            { valor: "658", tipo: "acerto" },
            { valor: "668", tipo: "erro", categoria: "atencao", erro: "subtracao_erro_operacional_simples", descricao: "Erro pontual de subtração em uma das casas durante o fluxo.", peso: 1 },
            { valor: "748", tipo: "erro", categoria: "calculo", erro: "subtracao_falha_emprestimo_sucessivo", descricao: "Realizou a transformação dos zeros intermediários em 10, e não em 9.", peso: 2 },
            { valor: "642", tipo: "erro", categoria: "conceito", erro: "subtracao_inverte_posicao_algarismo", descricao: "Subtraiu do menor para o maior porque o minuendo era zero, sem pedir emprestado.", peso: 3 }
        ],
        passo: "Ao tirar de 2.000, reagrupamos: o 2 vira 1, as dezenas e centenas viram 9 e a unidade vira 10. 10-2=8, 9-4=5, 9-3=6.",
        dica: "Subtração com zeros exige reagrupamentos sucessivos."
    },
    {
        id: "B1T1Q13", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "O que representa o '1' que 'sobe' na conta de adição?",
        res: "Uma dezena inteira",
        alternativas: [
            { valor: "Uma dezena inteira", tipo: "acerto" },
            { valor: "Uma unidade extra", tipo: "erro", categoria: "conceito", erro: "algoritmo_nao_compreende_reagrupamento", descricao: "Acredita que o transporte trata-se de adicionar unidades avulsas ao invés de grupos.", peso: 3 },
            { valor: "O algarismo 1", tipo: "erro", categoria: "interpretacao", erro: "algoritmo_literalidade_matematica", descricao: "Interpreta o algoritmo de forma puramente gráfica/literal, sem dar significado de base-10.", peso: 2 },
            { valor: "Um erro de conta", tipo: "erro", categoria: "estrategia", erro: "algoritmo_desconhecimento_total", descricao: "Desconhece completamente a regra mecânica do transporte na adição.", peso: 3 }
        ],
        passo: "Quando somamos 10 unidades, elas se tornam 1 dezena que deve ser somada na coluna das dezenas.",
        dica: "Reagrupar é transformar 10 de uma ordem em 1 da ordem seguinte."
    },
    {
        id: "B1T1Q14", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Contexto",
        display: "Caixa tinha R$450. Vendeu R$187 e pagou R$215. Quanto sobrou?",
        res: "R$ 422,00",
        alternativas: [
            { valor: "R$ 422,00", tipo: "acerto" },
            { valor: "R$ 48,00", tipo: "erro", categoria: "interpretacao", erro: "problema_subtrai_entrada_saida", descricao: "Tratou tanto a 'venda' (entrada) quanto o 'pagou' (saída) como subtrações do saldo.", peso: 3 },
            { valor: "R$ 32,00", tipo: "erro", categoria: "calculo", erro: "problema_erro_duplo_operacional", descricao: "Cometeu erro operatório duplo no fluxo (soma e subtração).", peso: 2 },
            { valor: "R$ 235,00", tipo: "erro", categoria: "atencao", erro: "problema_calculo_parcial", descricao: "Fez apenas uma das etapas da conta ou inverteu as grandezas.", peso: 1 }
        ],
        passo: "Dinheiro inicial (450) + Venda (187) - Pagamento (215) = 422. Venda é entrada, pagamento é saída.",
        dica: "Identifique o que entra (+) e o que sai (-) no caixa."
    },
    {
        id: "B1T1Q15", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Contexto",
        display: "Atleta correu 1.250m na segunda e 350m A MAIS na terça. Total dos dois dias?",
        res: "2.850 m",
        alternativas: [
            { valor: "2.850 m", tipo: "acerto" },
            { valor: "1.600 m", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_acumulativo", descricao: "Calculou o valor de terça, mas esqueceu de somar com o de segunda para obter o total dos dias.", peso: 3 },
            { valor: "2.350 m", tipo: "erro", categoria: "atencao", erro: "problema_soma_indevida_menor", descricao: "Erro de cálculo rápido na soma de centenas.", peso: 1 },
            { valor: "1.950 m", tipo: "erro", categoria: "calculo", erro: "problema_ignora_a_mais", descricao: "Somou apenas 1.250 + 350 para achar o total, interpretando incorretamente a expressão 'A MAIS'.", peso: 2 }
        ],
        passo: "Terça: 1.250 + 350 = 1.600. Total: 1.250 (seg) + 1.600 (ter) = 2.850 m.",
        dica: "Calcule primeiro o valor da terça para depois somar o total."
    },
    {
        id: "B1T1Q16", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Clínica do Erro",
        display: "Na subtração 5.000 - 2.674, qual o resultado?",
        res: "2.326",
        alternativas: [
            { valor: "2.326", tipo: "acerto" },
            { valor: "3.326", tipo: "erro", categoria: "conceito", erro: "subtracao_ignora_reducao_milhar", descricao: "Emprestou para ordens inferiores, mas não reduziu 1 unidade do valor cedente (o 5).", peso: 3 },
            { valor: "2.436", tipo: "erro", categoria: "calculo", erro: "subtracao_falha_reagrupamento_centena", descricao: "Considerou 10-6=4 no meio do fluxo, ao invés de 9-6=3 na centena.", peso: 2 },
            { valor: "2.306", tipo: "erro", categoria: "atencao", erro: "subtracao_erro_operacional_simples", descricao: "Pequeno erro no processo de subtração básica (9-7=0).", peso: 1 }
        ],
        passo: "Reagrupando: 10-4=6, 9-7=2, 9-6=3, 4-2=2. Resultado: 2.326.",
        dica: "O 'pede emprestado' sucessivo transforma os zeros em 9."
    },
    {
        id: "B1T1Q17", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Investigação",
        display: "4__8 + 275 = 723. Qual o algarismo que falta?",
        res: "4",
        alternativas: [
            { valor: "4", tipo: "acerto" },
            { valor: "5", tipo: "erro", categoria: "conceito", erro: "adicao_ignora_transporte_oculto", descricao: "Não considerou o 'sobe 1' vindo da operação anterior na unidade (8+5=13).", peso: 3 },
            { valor: "3", tipo: "erro", categoria: "atencao", erro: "adicao_erro_estimativa_mental", descricao: "Errou mentalmente a conta de subtração/complemento.", peso: 1 },
            { valor: "2", tipo: "erro", categoria: "estrategia", erro: "adicao_calculo_sem_logica", descricao: "Dedução falha guiada apenas pelos últimos dígitos sem ver a estrutura inteira.", peso: 2 }
        ],
        passo: "8+5=13 (sobe 1). 1+__+7 deve terminar em 2. Logo, 1+4+7=12. O algarismo é 4.",
        dica: "Trabalhe coluna por coluna, lembrando do que 'sobe'."
    },
    {
        id: "B1T1Q18", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Sentido",
        display: "Ao 'pedir emprestado' na subtração, o que acontece com o vizinho?",
        res: "Ele diminui em 1",
        alternativas: [
            { valor: "Ele diminui em 1", tipo: "acerto" },
            { valor: "Ele não muda", tipo: "erro", categoria: "conceito", erro: "algoritmo_nao_reduz_emprestimo", descricao: "O aluno entende o empréstimo como cópia de valor, não como deslocamento de posições base 10.", peso: 3 },
            { valor: "Ele aumenta em 1", tipo: "erro", categoria: "estrategia", erro: "algoritmo_confunde_adicao_subtracao", descricao: "Confundiu a mecânica posicional de subtração com o 'sobe 1' da adição.", peso: 2 },
            { valor: "Vai a zero", tipo: "erro", categoria: "interpretacao", erro: "algoritmo_extrema_generalizacao", descricao: "Imaginou que qualquer valor que empreste na matemática perde tudo o que tem.", peso: 1 }
        ],
        passo: "Ao reagrupar, você retira 1 de uma ordem superior para dar 10 para a ordem inferior.",
        dica: "Reagrupar é como trocar uma nota de 10 por dez moedas de 1."
    },
    {
        id: "B1T1Q19", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Verificação",
        display: "Como conferir se 1.600 - 937 = 663 sem refazer a conta?",
        res: "Somar 663 + 937",
        alternativas: [
            { valor: "Somar 663 + 937", tipo: "acerto" },
            { valor: "Subtrair 663 de 937", tipo: "erro", categoria: "conceito", erro: "prova_real_inverte_operador_errado", descricao: "Aplica o mesmo operador matemático ao invés de buscar a operação inversa.", peso: 3 },
            { valor: "Dividir 1.600 por 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_chute_logico", descricao: "Lógica falha sobre como relacionar grandezas nas provas matemáticas.", peso: 2 },
            { valor: "Multiplicar 663 x 2", tipo: "erro", categoria: "estrategia", erro: "prova_real_confunde_dobro", descricao: "Tenta resolver com múltiplos ignorando a essência da prova real.", peso: 2 }
        ],
        passo: "A operação inversa da subtração é a adição. Somando o resto ao subtraendo, voltamos ao total.",
        dica: "A prova real desfaz a operação original."
    },
    {
        id: "B1T1Q20", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Aplicação",
        display: "Loja tinha 3.500 itens. Vendeu 1.847 e recebeu 620. Saldo atual?",
        res: "2.273",
        alternativas: [
            { valor: "2.273", tipo: "acerto" },
            { valor: "1.653", tipo: "erro", categoria: "interpretacao", erro: "problema_ignora_nova_entrada", descricao: "Realizou corretamente a subtração de venda e parou, ignorando a reposição final de estoque.", peso: 3 },
            { valor: "2.653", tipo: "erro", categoria: "calculo", erro: "problema_soma_falha", descricao: "Falhou no cálculo de adição final (1653 + 620).", peso: 1 },
            { valor: "2.373", tipo: "erro", categoria: "calculo", erro: "problema_subtracao_falha_reagrupamento", descricao: "Falhou no reagrupamento inicial do estoque (3.500 - 1.847).", peso: 2 }
        ],
        passo: "3.500 - 1.847 = 1.653. Saldo parcial + 620 novos itens = 2.273.",
        dica: "Vender diminui o estoque, receber aumenta."
    }
];
