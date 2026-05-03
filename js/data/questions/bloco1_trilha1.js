// js/data/questions/bloco1_trilha1.js
// Bloco 1 — A Base Numérica | Trilha 1 Completa
// Aula 1: Sistema Decimal e Valor Posicional
// Aula 2: Adição e Subtração com Reagrupamento

export const bloco1_trilha1 = [

    // ── AULA 1: VALOR POSICIONAL (TRILHAS 1, 2 E 3) ──────────────────────

    {
        id: "B1T1Q01", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Qual é o valor posicional do algarismo 4 em 349.205?",
        botoes: ["40.000", "4.000", "400", "4"],
        res: "40.000",
        erroConceito: ["4"],
        passo: "O 4 ocupa a posição da dezena de milhar, valendo 40.000. Valor posicional depende da posição, não só do algarismo.",
        dica: "Escreva o número na tabela: C.Milhar | D.Milhar | U.Milhar | C | D | U"
    },
    {
        id: "B1T1Q02", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "No número 5.847, quanto vale o algarismo 8?",
        botoes: ["800", "80", "8", "8.000"],
        res: "800",
        erroConceito: ["8"],
        passo: "O 8 está na posição das centenas. Valor posicional = 800.",
        dica: "Posição das centenas vale cem vezes mais do que a das unidades."
    },
    {
        id: "B1T1Q03", bloco: 1, aula: 1, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Leitura de Números",
        display: "Como se lê corretamente o número 10.030?",
        botoes: ["Dez mil e trinta", "Dez mil trinta", "Cem e trinta", "Um zero zero trinta"],
        res: "Dez mil e trinta",
        erroConceito: ["Um zero zero trinta"],
        passo: "10.030 = dez mil e trinta. O 'e' aparece antes das ordens menores que a última ordem não nula.",
        dica: "O zero na posição das centenas não some — ele ocupa a posição e por isso usamos o 'e'."
    },
    {
        id: "B1T1Q04", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "O número 250.004 tem quantos algarismos na posição das centenas?",
        botoes: ["0", "2", "5", "4"],
        res: "0",
        erroConceito: ["2", "5"],
        passo: "250.004: C.Milhar=2, D.Milhar=5, U.Milhar=0, Centena=0, Dezena=0, Unidade=4. A centena vale 0.",
        dica: "O zero guarda a posição. Ele não contribui com valor, mas não pode ser ignorado."
    },
    {
        id: "B1T1Q05", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Comparação de Números",
        display: "Três turmas fizeram pontos: A=1.234, B=1.032, C=1.302. Qual turma teve MAIS pontos?",
        botoes: ["Turma A", "Turma B", "Turma C", "Empataram"],
        res: "Turma C",
        erroConceito: ["Empataram", "Turma A"],
        passo: "Compare a ordem das centenas: Turma C tem 3 (1.302) e Turma A tem 2 (1.234). Logo, 1.302 > 1.234.",
        dica: "Compare da maior para a menor ordem: milhares → centenas → dezenas."
    },
    {
        id: "B1T1Q06", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF07MA01", bncc_desc: "Ordenação de Números",
        display: "Qual é a ordem crescente correta? (do menor para o maior)",
        botoes: ["4.023 < 4.203 < 4.230 < 4.302 < 4.320", "4.320 < 4.302 < 4.230 < 4.203 < 4.023", "4.023 < 4.230 < 4.203 < 4.302 < 4.320", "4.302 < 4.230 < 4.203 < 4.023 < 4.320"],
        res: "4.023 < 4.203 < 4.230 < 4.302 < 4.320",
        erroConceito: ["4.320 < 4.302 < 4.230 < 4.203 < 4.023"],
        passo: "Com milhares iguais, o desempate vem da centena: 0 < 2 < 3. Com centenas iguais, olhamos a dezena.",
        dica: "Crescente é como uma escada: do menor para o maior."
    },
    {
        id: "B1T1Q07", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Decomposição em Valor Posicional",
        display: "Qual decomposição representa corretamente o número 27.350?",
        botoes: ["20.000+7.000+300+50", "2.000+700+350", "27.000+350", "20.000+7.000+300+5"],
        res: "20.000+7.000+300+50",
        erroConceito: ["20.000+7.000+300+5"],
        passo: "27.350 = 2×10.000 + 7×1.000 + 3×100 + 5×10. Isso resulta em 20.000+7.000+300+50.",
        dica: "Cada algarismo multiplica o valor da sua posição (10.000, 1.000, 100...)."
    },
    {
        id: "B1T1Q08", bloco: 1, aula: 1, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Entre 12.450 e 12.504, qual valor é MAIOR?",
        botoes: ["12.504", "12.450", "Igual", "Impossível saber"],
        res: "12.504",
        erroConceito: ["Igual"],
        passo: "As unidades de milhar são iguais (12). Nas centenas, 5 é maior que 4. Logo, 12.504 > 12.450.",
        dica: "O primeiro algarismo diferente (da esquerda para a direita) define o maior número."
    },
    {
        id: "B1T1Q09", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando os algarismos 3, 0, 7 e 5 (uma vez cada), qual é o MAIOR número possível?",
        botoes: ["7.530", "7.503", "7.350", "5.730"],
        res: "7.530",
        erroConceito: ["5.730"],
        passo: "Para o maior número, colocamos os maiores algarismos nas maiores posições: 7 no milhar, 5 na centena, 3 na dezena.",
        dica: "Coloque os algarismos em ordem decrescente."
    },
    {
        id: "B1T1Q10", bloco: 1, aula: 1, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando 3, 0, 7 e 5 (uma vez cada), qual o MENOR número sem o zero na frente?",
        botoes: ["3.057", "0.357", "3.075", "3.507"],
        res: "3.057",
        erroConceito: ["0.357"],
        passo: "O menor algarismo não nulo (3) inicia o milhar. O zero ocupa a próxima posição para manter o número pequeno.",
        dica: "O zero não pode começar um número de 4 dígitos, mas pode ser a segunda casa."
    },

    // ── AULA 2: ADIÇÃO E SUBTRAÇÃO (TRILHAS 1, 2 E 3) ──────────────────────

    {
        id: "B1T1Q11", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "1.245 + 879 = ?",
        botoes: ["2.124", "2.114", "2.024", "1.124"],
        res: "2.124",
        erroConceito: ["1.124"],
        passo: "5+9=14 (sobe 1). 4+7+1=12 (sobe 1). 2+8+1=11 (sobe 1). 1+1=2. Resultado: 2.124.",
        dica: "Não esqueça de somar o número que 'subiu' para a próxima coluna."
    },
    {
        id: "B1T1Q12", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração com Reagrupamento",
        display: "2.000 - 1.342 = ?",
        botoes: ["658", "668", "748", "642"],
        res: "658",
        erroConceito: ["642"],
        passo: "Ao tirar de 2.000, reagrupamos: o 2 vira 1, as dezenas e centenas viram 9 e a unidade vira 10. 10-2=8, 9-4=5, 9-3=6.",
        dica: "Subtração com zeros exige reagrupamentos sucessivos."
    },
    {
        id: "B1T1Q13", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "O que representa o '1' que 'sobe' na conta de adição?",
        botoes: ["Uma dezena inteira", "Uma unidade extra", "Um erro de conta", "O algarismo 1"],
        res: "Uma dezena inteira",
        erroConceito: ["Uma unidade extra"],
        passo: "Quando somamos 10 unidades, elas se tornam 1 dezena que deve ser somada na coluna das dezenas.",
        dica: "Reagrupar é transformar 10 de uma ordem em 1 da ordem seguinte."
    },
    {
        id: "B1T1Q14", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Contexto",
        display: "Caixa tinha R$450. Vendeu R$187 e pagou R$215. Quanto sobrou?",
        botoes: ["R$ 422,00", "R$ 48,00", "R$ 32,00", "R$ 235,00"],
        res: "R$ 422,00",
        erroConceito: ["R$ 48,00"],
        passo: "Dinheiro inicial (450) + Venda (187) - Pagamento (215) = 422. Venda é entrada, pagamento é saída.",
        dica: "Identifique o que entra (+) e o que sai (-) no caixa."
    },
    {
        id: "B1T1Q15", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Contexto",
        display: "Atleta correu 1.250m na segunda e 350m A MAIS na terça. Total dos dois dias?",
        botoes: ["2.850 m", "1.600 m", "2.350 m", "1.950 m"],
        res: "2.850 m",
        erroConceito: ["1.600 m"],
        passo: "Terça: 1.250 + 350 = 1.600. Total: 1.250 (seg) + 1.600 (ter) = 2.850 m.",
        dica: "Calcule primeiro o valor da terça para depois somar o total."
    },
    {
        id: "B1T1Q16", bloco: 1, aula: 2, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Clínica do Erro",
        display: "Na subtração 5.000 - 2.674, qual o resultado?",
        botoes: ["2.326", "2.436", "3.326", "2.306"],
        res: "2.326",
        erroConceito: ["3.326"],
        passo: "Reagrupando: 10-4=6, 9-7=2, 9-6=3, 4-2=2. Resultado: 2.326.",
        dica: "O 'pede emprestado' sucessivo transforma os zeros em 9."
    },
    {
        id: "B1T1Q17", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Investigação",
        display: "4__8 + 275 = 723. Qual o algarismo que falta?",
        botoes: ["4", "3", "5", "2"],
        res: "4",
        erroConceito: ["5"],
        passo: "8+5=13 (sobe 1). 1+__+7 deve terminar em 2. Logo, 1+4+7=12. O algarismo é 4.",
        dica: "Trabalhe coluna por coluna, lembrando do que 'sobe'."
    },
    {
        id: "B1T1Q18", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Sentido",
        display: "Ao 'pedir emprestado' na subtração, o que acontece com o vizinho?",
        botoes: ["Ele diminui em 1", "Ele aumenta em 1", "Ele não muda", "Vai a zero"],
        res: "Ele diminui em 1",
        erroConceito: ["Ele não muda"],
        passo: "Ao reagrupar, você retira 1 de uma ordem superior para dar 10 para a ordem inferior.",
        dica: "Reagrupar é como trocar uma nota de 10 por dez moedas de 1."
    },
    {
        id: "B1T1Q19", bloco: 1, aula: 2, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Verificação",
        display: "Como conferir se 1.600 - 937 = 663 sem refazer a conta?",
        botoes: ["Somar 663 + 937", "Dividir 1.600 por 2", "Subtrair 663 de 937", "Multiplicar 663 x 2"],
        res: "Somar 663 + 937",
        erroConceito: ["Subtrair 663 de 937"],
        passo: "A operação inversa da subtração é a adição. Somando o resto ao subtraendo, voltamos ao total.",
        dica: "A prova real desfaz a operação original."
    },
    {
        id: "B1T1Q20", bloco: 1, aula: 2, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Aplicação",
        display: "Loja tinha 3.500 itens. Vendeu 1.847 e recebeu 620. Saldo atual?",
        botoes: ["2.273", "2.653", "1.653", "2.373"],
        res: "2.273",
        erroConceito: ["1.653"],
        passo: "3.500 - 1.847 = 1.653. Saldo parcial + 620 novos itens = 2.273.",
        dica: "Vender diminui o estoque, receber aumenta."
    }
];
