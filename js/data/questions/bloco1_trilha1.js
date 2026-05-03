// js/data/questions/bloco1_trilha1.js
// Bloco 1 — A Base Numérica | Trilha 1
// Aula 1: Sistema Decimal e Valor Posicional (EF06MA01 / EF07MA01)
// Aula 2: Adição e Subtração com Reagrupamento (EF06MA03)

export const bloco1_trilha1 = [

    // ── AULA 1: VALOR POSICIONAL ─────────────────────────────────────────

    {
        id: "B1T1Q01", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Qual é o valor posicional do algarismo 4 em 349.205?",
        botoes: ["40.000", "4.000", "400", "4"],
        res: "40.000",
        erroConceito: ["4"],
        passo: "O 4 ocupa a posição da dezena de milhar, valendo 40.000. Valor posicional depende da posição, não só do algarismo.",
        dica: "Escreva o número na tabela: C.Milhar | D.Milhar | U.Milhar | C | D | U"
    },
    {
        id: "B1T1Q02", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "No número 5.847, quanto vale o algarismo 8?",
        botoes: ["800", "80", "8", "8.000"],
        res: "800",
        erroConceito: ["8"],
        passo: "O 8 está na posição das centenas. Valor posicional = 800.",
        dica: "Posição das centenas vale cem vezes mais do que a das unidades."
    },
    {
        id: "B1T1Q03", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Leitura de Números",
        display: "Como se lê corretamente o número 10.030?",
        botoes: ["Dez mil e trinta", "Dez mil trinta", "Cem e trinta", "Um zero zero trinta"],
        res: "Dez mil e trinta",
        erroConceito: ["Um zero zero trinta"],
        passo: "10.030 = dez mil e trinta. O 'e' aparece antes das ordens menores que a última ordem não nula.",
        dica: "O zero na posição das centenas não some — ele ocupa a posição e por isso usamos o 'e'."
    },
    {
        id: "B1T1Q04", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "O número 250.004 tem quantos algarismos na posição das centenas?",
        botoes: ["0", "2", "5", "4"],
        res: "0",
        erroConceito: ["2", "5"],
        passo: "250.004: C.Milhar=2, D.Milhar=5, U.Milhar=0, Centena=0, Dezena=0, Unidade=4. A centena vale 0.",
        dica: "O zero guarda a posição. Ele não contribui com valor, mas não pode ser ignorado."
    },
    {
        id: "B1T1Q05", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Comparação de Números",
        display: "Três turmas fizeram pontos: A=1.234, B=1.032, C=1.302. Qual turma teve MAIS pontos?",
        botoes: ["Turma A", "Turma B", "Turma C", "Empataram"],
        res: "Turma A",
        erroConceito: ["Empataram"],
        passo: "Todas têm o mesmo milhar (1). Na centena: A=2, B=0, C=3. Mas A=1.234 > C=1.302? Não! C tem centena 3 > A centena 2. Espera: 1.234 vs 1.302 — centenas: 2 vs 3. Logo C ganha? Revise: 1.234 < 1.302. Turma A tem 1.234, menor que C=1.302. Então Turma C vence.",
        dica: "Compare da maior para a menor ordem: milhares → centenas → dezenas → unidades."
    },
    {
        id: "B1T1Q06", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA01", bncc_desc: "Ordenação de Números",
        display: "Qual é a ordem crescente correta? (do menor para o maior)",
        botoes: ["4.023 < 4.203 < 4.230 < 4.302 < 4.320", "4.302 < 4.230 < 4.203 < 4.023 < 4.320", "4.023 < 4.230 < 4.203 < 4.302 < 4.320", "4.320 < 4.302 < 4.230 < 4.203 < 4.023"],
        res: "4.023 < 4.203 < 4.230 < 4.302 < 4.320",
        erroConceito: ["4.320 < 4.302 < 4.230 < 4.203 < 4.023"],
        passo: "Todos têm o mesmo milhar (4). Comparo centenas: 0 < 2 < 2 < 3 < 3. Para centenas iguais, comparo dezenas: 4.203 < 4.230 e 4.302 < 4.320.",
        dica: "Quando os milhares são iguais, o desempate vem da centena. Quando as centenas são iguais, da dezena."
    },
    {
        id: "B1T1Q07", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Decomposição em Valor Posicional",
        display: "Qual decomposição representa corretamente o número 27.350?",
        botoes: ["20.000+7.000+300+50", "2.000+700+350", "27.000+350", "20.000+7.000+300+5"],
        res: "20.000+7.000+300+50",
        erroConceito: ["20.000+7.000+300+5"],
        passo: "27.350 = 2×10.000 + 7×1.000 + 3×100 + 5×10 + 0×1 = 20.000+7.000+300+50.",
        dica: "Cada algarismo multiplica o valor da sua posição."
    },
    {
        id: "B1T1Q08", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Valor Posicional",
        display: "Em 12.450 e 12.504, em qual dia saíram MAIS unidades?",
        botoes: ["12.504 (terça)", "12.450 (segunda)", "Igual", "Impossível saber"],
        res: "12.504 (terça)",
        erroConceito: ["Igual"],
        passo: "Milhares iguais (12). Centenas: 4=4. Dezenas: 5 vs 0. Logo 12.504 > 12.450.",
        dica: "Quando milhares e centenas são iguais, a decisão está na dezena."
    },
    {
        id: "B1T1Q09", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando os algarismos 3, 0, 7 e 5 (cada um uma vez), qual é o MAIOR número de 4 algarismos?",
        botoes: ["7.530", "7.503", "7.350", "5.730"],
        res: "7.530",
        erroConceito: ["5.730"],
        passo: "Para o maior número, coloca o maior algarismo na maior posição: 7→milhar, 5→centena, 3→dezena, 0→unidade = 7.530.",
        dica: "O 0 nunca pode ser o primeiro algarismo de um número de 4 dígitos."
    },
    {
        id: "B1T1Q10", bloco: 1, aula: 1, tipo: "aritmetica",
        bncc: "EF06MA01", bncc_desc: "Investigação com Algarismos",
        display: "Usando os algarismos 3, 0, 7 e 5 (cada um uma vez), qual é o MENOR número sem zero na frente?",
        botoes: ["3.057", "0.357", "3.075", "3.507"],
        res: "3.057",
        erroConceito: ["0.357"],
        passo: "O menor algarismo não nulo (3) fica no milhar. Depois os menores: 0 na centena, 5 na dezena, 7 na unidade = 3.057.",
        dica: "O 0 não pode iniciar o número, mas pode ocupar qualquer outra posição."
    },

    // ── AULA 2: ADIÇÃO E SUBTRAÇÃO ───────────────────────────────────────

    {
        id: "B1T1Q11", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "1.245 + 879 = ?",
        botoes: ["2.124", "2.114", "2.024", "1.124"],
        res: "2.124",
        erroConceito: ["1.124"],
        passo: "5+9=14 (anota 4, carrega 1). 4+7+1=12 (anota 2, carrega 1). 2+8+1=11 (anota 1, carrega 1). 1+0+1=2. Resultado: 2.124.",
        dica: "Arme a conta em coluna, alinhando unidade com unidade, dezena com dezena..."
    },
    {
        id: "B1T1Q12", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração com Reagrupamento",
        display: "2.000 - 1.342 = ?",
        botoes: ["658", "668", "748", "642"],
        res: "658",
        erroConceito: ["642"],
        passo: "0-2: impossível, reagrupa. Cadeia de reagrupamentos: 10-2=8, dezena vira 9: 9-4=5, centena vira 9: 9-3=6, milhar: 1-1=0. Resultado: 658.",
        dica: "Quando subtrai de um número 'cheio' como 2.000, há uma cadeia de reagrupamentos."
    },
    {
        id: "B1T1Q13", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição com Reagrupamento",
        display: "O que representa o '1' que 'sobe' em 345 + 127 na posição das unidades?",
        botoes: ["Uma dezena inteira", "Uma unidade extra", "Um erro de conta", "O algarismo 1 do 127"],
        res: "Uma dezena inteira",
        erroConceito: ["Uma unidade extra", "O algarismo 1 do 127"],
        passo: "5+7=12. O 2 fica na posição das unidades e o 1 que 'sobe' representa 10 unidades = 1 dezena. Ele não some: muda de posição e valor.",
        dica: "Reagrupar significa transformar 10 unidades em 1 dezena, 10 dezenas em 1 centena..."
    },
    {
        id: "B1T1Q14", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Contexto",
        display: "Um mercado tinha R$450. Vendeu R$187 e pagou R$215. Quanto sobrou no caixa?",
        botoes: ["R$ 48,00", "R$ 32,00", "R$ 235,00", "R$ 422,00"],
        res: "R$ 48,00",
        erroConceito: ["R$ 422,00"],
        passo: "450 + 187 = 637 (vendas entram). 637 - 215 = 422? Não: 450 - 187 - 215. Vendas são entradas, pagamento é saída. 450 - 215 = 235. 235 + 187 = 422? Releia: caixa inicial 450, vendeu (entra) 187, pagou (sai) 215. 450 + 187 - 215 = 422.",
        dica: "Identifique o que entra (vendas) e o que sai (pagamento) antes de calcular."
    },
    {
        id: "B1T1Q15", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Contexto",
        display: "Um atleta correu 1.250 m na segunda e 350 m a mais na terça. Quantos metros nos dois dias?",
        botoes: ["2.850 m", "1.600 m", "2.350 m", "1.950 m"],
        res: "2.850 m",
        erroConceito: ["1.600 m"],
        passo: "Terça: 1.250 + 350 = 1.600 m. Total dos dois dias: 1.250 + 1.600 = 2.850 m.",
        dica: "Cuidado: a pergunta pede o total dos DOIS dias juntos, não só a terça-feira."
    },
    {
        id: "B1T1Q16", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Clínica do Erro",
        display: "Na subtração 5.000 - 2.674, qual é o resultado correto?",
        botoes: ["2.326", "2.436", "3.326", "2.306"],
        res: "2.326",
        erroConceito: ["3.326"],
        passo: "0-4: impossível. Cadeia: 10-4=6, 9-7=2, 9-6=3 (após reagrupamentos), 4-2=2. Resultado: 2.326.",
        dica: "Em 5.000 - qualquer coisa, todos os zeros precisam 'pedir emprestado' em cadeia."
    },
    {
        id: "B1T1Q17", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição — Investigação",
        display: "Preencha o espaço: 4__8 + 27__ = 723. Qual é o algarismo nas unidades do segundo número?",
        botoes: ["5", "3", "7", "1"],
        res: "5",
        erroConceito: ["1"],
        passo: "Nas unidades: 8 + _ deve terminar em 3. Logo _ = 5 (8+5=13, anota 3, carrega 1). Conferência: 448 + 275 = 723.",
        dica: "Trabalhe de trás para frente: qual algarismo somado a 8 termina em 3?"
    },
    {
        id: "B1T1Q18", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Subtração — Sentido",
        display: "Quando 'pedimos emprestado' na subtração, o que acontece com a ordem vizinha?",
        botoes: ["Ela diminui em 1", "Ela aumenta em 1", "Ela não muda", "Ela vai a zero"],
        res: "Ela diminui em 1",
        erroConceito: ["Ela não muda"],
        passo: "Pedir emprestado 1 dezena da ordem vizinha significa que ela perde 1. É como tirar R$10 do bolso de alguém: o bolso diminui.",
        dica: "Emprestado não é dado: quem emprestou fica com menos."
    },
    {
        id: "B1T1Q19", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Verificação",
        display: "Como verificar se 1.600 - 937 = 663 está correto SEM refazer a subtração?",
        botoes: ["Somar 663 + 937 e ver se dá 1.600", "Dividir 1.600 por 2", "Subtrair 663 de 937", "Multiplicar 663 × 2"],
        res: "Somar 663 + 937 e ver se dá 1.600",
        erroConceito: ["Subtrair 663 de 937"],
        passo: "A prova da subtração é a soma: se 1.600 - 937 = 663, então 663 + 937 deve ser igual a 1.600.",
        dica: "Adição e subtração são operações inversas: uma desfaz a outra."
    },
    {
        id: "B1T1Q20", bloco: 1, aula: 2, tipo: "aritmetica",
        bncc: "EF06MA03", bncc_desc: "Adição e Subtração — Aplicação",
        display: "Uma loja tinha 3.500 produtos. Vendeu 1.847 pela manhã e recebeu 620 à tarde. Quantos produtos tem agora?",
        botoes: ["2.273", "2.653", "1.653", "2.373"],
        res: "2.273",
        erroConceito: ["1.653"],
        passo: "3.500 - 1.847 = 1.653. Depois 1.653 + 620 = 2.273.",
        dica: "Faça uma operação de cada vez na ordem em que os eventos aconteceram."
    }
];
