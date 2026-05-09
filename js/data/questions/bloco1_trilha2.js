// js/data/questions/bloco1_trilha2.js
// Bloco 1 — A Base Numérica | Trilha 2 Completa
// Aula 3: Multiplicação | Aula 4: Divisão | Aula 5: Expressões Numéricas
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, calculo, atencao, estrategia, interpretacao

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
            { valor: "7 ÷ 4", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_operador_inverso", descricao: "Aplicou divisão de forma aleatória aos números apresentados.", peso: 1 }
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
            { valor: "29", tipo: "erro", categoria: "conceito", erro: "multiplicacao_operacao_errada", descricao: "Somou os valores em vez de multiplicá-los (24 + 5 = 29).", peso: 3 },
            { valor: "100", tipo: "erro", categoria: "calculo", erro: "multiplicacao_esquece_unidade", descricao: "Multiplicou apenas a dezena (20 × 5) e ignorou a unidade ou o reagrupamento.", peso: 2 },
            { valor: "124", tipo: "erro", categoria: "atencao", erro: "multiplicacao_erro_misto_soma", descricao: "Multiplicou a dezena e tentou somar a unidade incorretamente.", peso: 1 }
        ],
        passo: "5 × 4 = 20 (sobe 2). 5 × 2 = 10, mais 2 = 12. Resultado: 120.",
        dica: "Multiplique a unidade, depois a dezena. Não esqueça o reagrupamento."
    },
    {
        id: "B1T2Q03", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Propriedade Comutativa",
        display: "É verdade que 6 × 9 = 9 × 6?",
        res: "Sim, sempre",
        alternativas: [
            { valor: "Sim, sempre", tipo: "acerto" },
            { valor: "Não, a ordem importa", tipo: "erro", categoria: "conceito", erro: "multiplicacao_desconhece_comutativa", descricao: "Desconhece a propriedade comutativa e acha que a ordem dos fatores altera o produto.", peso: 3 },
            { valor: "Só quando iguais", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_regra_falsa", descricao: "Inventou uma premissa matemática que não se aplica ao modelo multiplicativo.", peso: 2 },
            { valor: "Depende do número", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_inseguranca_regra", descricao: "Demonstra incerteza sobre a universalidade da regra da multiplicação.", peso: 2 }
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
            { valor: "120", tipo: "erro", categoria: "conceito", erro: "problema_agrupamento_falho", descricao: "Não realizou a multiplicação combinatória das dimensões da matriz corretamente.", peso: 3 },
            { valor: "48", tipo: "erro", categoria: "interpretacao", erro: "problema_calculo_incompleto", descricao: "Calculou a área de uma única bandeja e parou a conta antes da etapa final.", peso: 2 },
            { valor: "280", tipo: "erro", categoria: "calculo", erro: "problema_erro_tabuada", descricao: "Errou mentalmente a tabuada em uma das etapas da multiplicação encadeada.", peso: 1 }
        ],
        passo: "Uma bandeja: 6 × 8 = 48. Cinco bandejas: 48 × 5 = 240 pães.",
        dica: "Multiplique as dimensões da bandeja e depois pelo número de bandejas."
    },
    {
        id: "B1T2Q05", bloco: 1, aula: 3, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Algoritmo",
        display: "45 × 13 = ?",
        res: "585",
        alternativas: [
            { valor: "585", tipo: "acerto" },
            { valor: "495", tipo: "erro", categoria: "conceito", erro: "multiplicacao_ignora_posicao_dezena", descricao: "Ao multiplicar a dezena, não alinhou o zero ou não 'pulou' a casa da unidade.", peso: 3 },
            { valor: "555", tipo: "erro", categoria: "calculo", erro: "multiplicacao_erro_soma_final", descricao: "Acertou a multiplicação estrutural, mas errou a soma de parcelas finais.", peso: 2 },
            { valor: "580", tipo: "erro", categoria: "atencao", erro: "multiplicacao_falha_unidade", descricao: "Erro leve de operação rápida na multiplicação simples da unidade.", peso: 1 }
        ],
        passo: "45 × 3 = 135. 45 × 10 = 450. 135 + 450 = 585.",
        dica: "Lembre-se de pular uma casa (colocar o 0) ao multiplicar pela dezena."
    },
    {
        id: "B1T2Q06", bloco: 1, aula: 3, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Multiplicação — Zero",
        display: "Quanto é qualquer número multiplicado por zero?",
        res: "Zero",
        alternativas: [
            { valor: "Zero", tipo: "acerto" },
            { valor: "O próprio número", tipo: "erro", categoria: "conceito", erro: "multiplicacao_confunde_zero_um", descricao: "Confundiu a propriedade absorvente do zero com a propriedade neutra do elemento 1 (adição).", peso: 3 },
            { valor: "Um", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_potenciacao", descricao: "Confundiu multiplicação por zero com elevado a zero, ou divisão absurda.", peso: 2 },
            { valor: "Indefinido", tipo: "erro", categoria: "interpretacao", erro: "multiplicacao_confunde_divisao_zero", descricao: "Assimilou a regra da divisão por zero equivocadamente para a multiplicação.", peso: 2 }
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
            { valor: "6", tipo: "erro", categoria: "calculo", erro: "equacao_erro_tabuada_estimativa", descricao: "Errou mentalmente a divisão/tabuada.", peso: 2 },
            { valor: "9", tipo: "erro", categoria: "atencao", erro: "equacao_estimativa_proxima_falha", descricao: "Realizou estimativa mental aproximada, mas falhou por 1 unidade.", peso: 1 }
        ],
        passo: "Para achar o valor desconhecido, usamos a operação inversa: 120 ÷ 15 = 8.",
        dica: "Qual número vezes 15 chega em 120?"
    },

    // ── AULA 4: DIVISÃO ──────────────────────────────────────────────────

    {
        id: "B1T2Q08", bloco: 1, aula: 4, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Sentido",
        display: "Quantas notas de R$10 cabem em R$100?",
        res: "10 notas",
        alternativas: [
            { valor: "10 notas", tipo: "acerto" },
            { valor: "1 nota", tipo: "erro", categoria: "conceito", erro: "divisao_ignora_fator_escala", descricao: "Não compreendeu a lógica da divisão partitiva, respondendo a quantidade unitária do divisor.", peso: 3 },
            { valor: "90 notas", tipo: "erro", categoria: "atencao", erro: "divisao_aplica_subtracao", descricao: "Subtraiu o valor da nota do total em vez de dividir.", peso: 2 },
            { valor: "100 notas", tipo: "erro", categoria: "interpretacao", erro: "divisao_confunde_total_unidade", descricao: "Tomou o montante total financeiro e interpretou como quantidade de cédulas.", peso: 2 }
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
            { valor: "32 com resto 0", tipo: "erro", categoria: "conceito", erro: "divisao_ignora_resto_existente", descricao: "Fez a divisão base, mas assumiu zeramento automático no fim da operação.", peso: 3 },
            { valor: "30 com resto 10", tipo: "erro", categoria: "interpretacao", erro: "divisao_resto_maior_divisor", descricao: "Concluiu a conta prematuramente deixando um resto que ainda podia ser dividido.", peso: 2 },
            { valor: "33 com resto 2", tipo: "erro", categoria: "calculo", erro: "divisao_quociente_errado", descricao: "Pequeno erro de cálculo no quociente durante o processo.", peso: 1 }
        ],
        passo: "13 ÷ 4 = 3 (resto 1). 10 ÷ 4 = 2 (resto 2). Quociente 32, Resto 2.",
        dica: "Nem toda divisão é exata. O que sobra e é menor que o divisor é o resto."
    },
    {
        id: "B1T2Q10", bloco: 1, aula: 4, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Contexto",
        display: "4 amigos dividiram R$130 igualmente, sem moedas. Quanto cada um recebe e o que sobra?",
        res: "R$32 e sobram R$2",
        alternativas: [
            { valor: "R$32 e sobram R$2", tipo: "acerto" },
            { valor: "R$32,50", tipo: "erro", categoria: "conceito", erro: "problema_ignora_condicao_inteira", descricao: "Fez a divisão decimal perfeitamente, ignorando a restrição contextual do problema (sem moedas).", peso: 3 },
            { valor: "R$30 e sobram R$10", tipo: "erro", categoria: "estrategia", erro: "problema_divisao_incompleta", descricao: "Fez divisão por aproximação deixando sobras desproporcionais grandes.", peso: 2 },
            { valor: "R$33 e sobram R$2", tipo: "erro", categoria: "calculo", erro: "problema_erro_quociente", descricao: "Erro mecânico na obtenção do quociente exato.", peso: 1 }
        ],
        passo: "Cada um recebe R$32 inteiros. Sobram R$2 que não permitem nova divisão inteira sem usar moedas.",
        dica: "Foque na divisão inteira para identificar o resto físico."
    },
    {
        id: "B1T2Q11", bloco: 1, aula: 4, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Exata",
        display: "45 ÷ 5 é uma divisão exata ou inexata?",
        res: "Exata (resto zero)",
        alternativas: [
            { valor: "Exata (resto zero)", tipo: "acerto" },
            { valor: "Inexata (tem resto)", tipo: "erro", categoria: "conceito", erro: "divisao_desconhece_tabuada", descricao: "Não domina a tabuada base, assumindo sobras incorretas.", peso: 3 },
            { valor: "Depende", tipo: "erro", categoria: "estrategia", erro: "divisao_inseguranca_sistema", descricao: "Incerteza estrutural na previsibilidade da matemática.", peso: 2 },
            { valor: "Impossível", tipo: "erro", categoria: "interpretacao", erro: "divisao_alienacao_operacao", descricao: "Desconexão total com a mecânica da operação solicitada.", peso: 2 }
        ],
        passo: "45 ÷ 5 = 9. Como o resto é zero, a divisão é chamada de exata.",
        dica: "Divisões sem sobra (resultado inteiro no final) são exatas."
    },
    {
        id: "B1T2Q12", bloco: 1, aula: 4, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão — Raciocínio Inverso",
        display: "Pensei num número, dividi por 6 e deu 10 com resto 2. Qual o número?",
        res: "62",
        alternativas: [
            { valor: "62", tipo: "acerto" },
            { valor: "60", tipo: "erro", categoria: "conceito", erro: "prova_real_ignora_resto", descricao: "Fez a operação inversa (multiplicação) mas esqueceu de adicionar o resto ao dividendo.", peso: 3 },
            { valor: "17", tipo: "erro", categoria: "interpretacao", erro: "prova_real_operadores_aleatorios", descricao: "Somou e diminuiu os elementos descritos sem lógica matemática.", peso: 2 },
            { valor: "68", tipo: "erro", categoria: "calculo", erro: "prova_real_calculo_mental_falho", descricao: "Erro básico de operação mental na reconstrução.", peso: 1 }
        ],
        passo: "Dividendo = (Divisor × Quociente) + Resto. Logo, (6 × 10) + 2 = 62.",
        dica: "A multiplicação desfaz a divisão, depois adicione o que sobrou."
    },
    {
        id: "B1T2Q13", bloco: 1, aula: 4, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Divisão por Zero",
        display: "É possível calcular 10 ÷ 0?",
        res: "Não, é indefinido",
        alternativas: [
            { valor: "Não, é indefinido", tipo: "acerto" },
            { valor: "Sim, é 0", tipo: "erro", categoria: "conceito", erro: "divisao_confunde_com_multiplicacao", descricao: "Aplicou a regra da multiplicação pelo zero à operação de divisão.", peso: 3 },
            { valor: "Sim, é 10", tipo: "erro", categoria: "atencao", erro: "divisao_trata_zero_neutro", descricao: "Tratou o zero como se fosse o número 1, mantendo a base intacta.", peso: 2 },
            { valor: "Sim, é infinito", tipo: "erro", categoria: "interpretacao", erro: "divisao_
