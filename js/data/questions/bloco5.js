// js/data/questions/bloco5.js
// Bloco 5 — Estatística e Dados
// EF08MA22, EF09MA20 — Gráficos, Média, Mediana, Moda, Probabilidade

export const bloco5 = [

    // ── MÉDIA ARITMÉTICA ─────────────────────────────────────────────────
    {
        id:"B5Q01", bloco:5, aula:1, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Média Aritmética",
        display:"Notas: 6, 8, 7, 9, 5. Qual é a média?",
        botoes:["7","8","6,5","7,5"],
        res:"7", erroConceito:["7,5"],
        passo:"Soma: 6+8+7+9+5 = 35. Média: 35 ÷ 5 = 7.",
        dica:"Média = soma de todos os valores ÷ quantidade de valores."
    },
    {
        id:"B5Q02", bloco:5, aula:1, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Média — Valor Desconhecido",
        display:"Três provas: 7 e 8 já foram feitas. Precisa de média 8. Que nota na terceira?",
        botoes:["9","8","10","7"],
        res:"9", erroConceito:["8"],
        passo:"Soma necessária = 8 × 3 = 24. Já tem 7+8=15. Terceira nota: 24-15 = 9.",
        dica:"Multiplique a média desejada pelo número de provas para encontrar a soma total necessária."
    },
    {
        id:"B5Q03", bloco:5, aula:1, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Média Ponderada",
        display:"Prova: 7,0 (peso 3). Trabalho: 9,0 (peso 1). Qual é a média ponderada?",
        botoes:["7,5","8,0","7,0","8,5"],
        res:"7,5", erroConceito:["8,0"],
        passo:"MP = (7×3 + 9×1) ÷ (3+1) = (21+9) ÷ 4 = 30 ÷ 4 = 7,5.",
        dica:"Média ponderada: (nota × peso + nota × peso) ÷ (soma dos pesos)."
    },

    // ── MEDIANA ─────────────────────────────────────────────────────────
    {
        id:"B5Q04", bloco:5, aula:2, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Mediana",
        display:"Dados: 3, 7, 2, 9, 5, 8, 4. Qual é a mediana?",
        botoes:["5","5,4","7","4"],
        res:"5", erroConceito:["5,4"],
        passo:"Em ordem: 2, 3, 4, 5, 7, 8, 9. 7 elementos → elemento central é o 4° = 5.",
        dica:"Ordene os dados e encontre o valor do meio. Com 7 dados, o meio é o 4° valor."
    },
    {
        id:"B5Q05", bloco:5, aula:2, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Mediana — Quantidade Par",
        display:"Dados: 4, 8, 3, 7, 6, 5. Qual é a mediana?",
        botoes:["5,5","6","5","7"],
        res:"5,5", erroConceito:["6"],
        passo:"Em ordem: 3, 4, 5, 6, 7, 8. Com 6 dados (par), mediana = média dos dois centrais: (5+6)÷2 = 5,5.",
        dica:"Quantidade par de dados: mediana = média dos dois valores centrais."
    },

    // ── MODA ────────────────────────────────────────────────────────────
    {
        id:"B5Q06", bloco:5, aula:2, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Moda",
        display:"Dados: 2, 5, 3, 5, 7, 2, 5, 8. Qual é a moda?",
        botoes:["5","2","7","4,6"],
        res:"5", erroConceito:["2"],
        passo:"5 aparece 3 vezes, 2 aparece 2 vezes. Moda = 5 (maior frequência).",
        dica:"Moda é o valor que aparece com mais frequência."
    },
    {
        id:"B5Q07", bloco:5, aula:2, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Média, Mediana e Moda — Diferenças",
        display:"Salários: R$1.000; R$1.000; R$1.200; R$1.500; R$10.000. Qual medida é mais representativa?",
        botoes:["Mediana (R$1.200)","Média (R$2.940)","Moda (R$1.000)","Todas são iguais"],
        res:"Mediana (R$1.200)", erroConceito:["Média (R$2.940)"],
        passo:"Média (R$2.940) é distorcida pelo salário de R$10.000. Mediana (R$1.200) representa melhor o grupo.",
        dica:"Com valores extremos (outliers), a mediana representa melhor a realidade do que a média."
    },

    // ── LEITURA DE GRÁFICOS ─────────────────────────────────────────────
    {
        id:"B5Q08", bloco:5, aula:3, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Leitura de Gráfico de Barras",
        display:"Gráfico de barras: Futebol=45%, Natação=25%, Vôlei=20%, Tênis=10%. Qual esporte é preferido por 1/4 dos alunos?",
        botoes:["Natação","Futebol","Vôlei","Tênis"],
        res:"Natação", erroConceito:["Futebol"],
        passo:"1/4 = 25%. Natação tem 25% das preferências.",
        dica:"1/4 = 25%. Procure o esporte com essa porcentagem no gráfico."
    },
    {
        id:"B5Q09", bloco:5, aula:3, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Interpretação de Gráfico",
        display:"Turma de 40 alunos. Gráfico: 45% preferem futebol. Quantos alunos preferem futebol?",
        botoes:["18 alunos","45 alunos","22 alunos","9 alunos"],
        res:"18 alunos", erroConceito:["45 alunos"],
        passo:"45% de 40 = 0,45 × 40 = 18 alunos.",
        dica:"Porcentagem de uma quantidade: converta % para decimal e multiplique."
    },
    {
        id:"B5Q10", bloco:5, aula:3, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Gráfico de Linha — Tendência",
        display:"Vendas (mil): Jan=10, Fev=12, Mar=15, Abr=13, Mai=17. Qual é a tendência geral?",
        botoes:["Crescimento com pequena queda em abril","Queda constante","Estável","Crescimento sem nenhuma queda"],
        res:"Crescimento com pequena queda em abril", erroConceito:["Crescimento sem nenhuma queda"],
        passo:"A série cresce (10→12→15→17) mas houve queda de 15 para 13 em abril.",
        dica:"Analise o comportamento geral e identifique exceções na tendência."
    },

    // ── PROBABILIDADE ────────────────────────────────────────────────────
    {
        id:"B5Q11", bloco:5, aula:4, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Probabilidade Clássica",
        display:"Dado de 6 faces lançado uma vez. Probabilidade de sair número par?",
        botoes:["1/2","1/3","2/3","1/6"],
        res:"1/2", erroConceito:["1/3"],
        passo:"Pares: 2, 4, 6 (3 resultados). Total: 6. P = 3/6 = 1/2.",
        dica:"P(evento) = casos favoráveis ÷ casos possíveis. Pares em um dado: 2, 4, 6."
    },
    {
        id:"B5Q12", bloco:5, aula:4, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Probabilidade — Complementar",
        display:"Urna: 3 bolas vermelhas e 7 azuis. Probabilidade de NÃO tirar vermelha?",
        botoes:["7/10","3/10","1/2","7/3"],
        res:"7/10", erroConceito:["3/10"],
        passo:"P(não vermelha) = 1 - P(vermelha) = 1 - 3/10 = 7/10.",
        dica:"Evento complementar: P(não A) = 1 - P(A). Ou calcule diretamente: 7 azuis ÷ 10 total."
    },
    {
        id:"B5Q13", bloco:5, aula:4, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Probabilidade — Interpretação",
        display:"Probabilidade de chuva: 0,8. Qual afirmação é correta?",
        botoes:["80% de chance de chuva","20% de chance de chuva","Certamente vai chover","Raramente chove"],
        res:"80% de chance de chuva", erroConceito:["20% de chance de chuva"],
        passo:"Probabilidade 0,8 = 80%. A chance de NÃO chover é 1 - 0,8 = 0,2 = 20%.",
        dica:"Probabilidade como decimal: 0,8 = 80%. Complementar: 1 - 0,8 = 20%."
    },

    // ── ANÁLISE ESTATÍSTICA INTEGRADA ───────────────────────────────────
    {
        id:"B5Q14", bloco:5, aula:5, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Comparação de Medidas",
        display:"Dados A: 5,5,5,5,5 | Dados B: 1,3,5,7,9. Qual afirmação é verdadeira?",
        botoes:["Média igual (5), mas dispersão diferente","Média e mediana diferentes","Dados B têm maior média","São conjuntos idênticos"],
        res:"Média igual (5), mas dispersão diferente", erroConceito:["São conjuntos idênticos"],
        passo:"Ambos têm média 5. Mas A tem todos os valores iguais (sem dispersão), B tem grande variação.",
        dica:"Média igual não significa dados iguais. A dispersão mostra o quanto os dados variam."
    },
    {
        id:"B5Q15", bloco:5, aula:5, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Interpretação Crítica de Dados",
        display:"Empresa diz: 'Nosso produto tem 90% de aprovação!' Com base em 10 respostas. Isso é confiável?",
        botoes:["Não — amostra muito pequena","Sim — 90% é alto","Depende do produto","Sim, sempre"],
        res:"Não — amostra muito pequena", erroConceito:["Sim — 90% é alto"],
        passo:"10 respostas é uma amostra pequena demais para representar uma população grande. O resultado pode não ser confiável.",
        dica:"Em estatística, o tamanho e a representatividade da amostra determinam a confiabilidade dos resultados."
    },
    {
        id:"B5Q16", bloco:5, aula:6, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Coleta e Organização de Dados",
        display:"Pesquisa com 5 alunos: alturas 1,65m; 1,72m; 1,58m; 1,80m; 1,65m. Qual a moda?",
        botoes:["1,65 m","1,70 m","1,68 m","Não tem moda"],
        res:"1,65 m", erroConceito:["Não tem moda"],
        passo:"1,65 m aparece 2 vezes, as demais 1 vez. Moda = 1,65 m.",
        dica:"Moda = valor mais frequente. 1,65 aparece duas vezes."
    },
    {
        id:"B5Q17", bloco:5, aula:6, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Porcentagem em Gráfico",
        display:"Gráfico pizza: Gastos = Aluguel 40%, Alimentação 30%, Transporte 20%, Lazer 10%. Salário R$3.000. Quanto vai para alimentação?",
        botoes:["R$ 900","R$ 300","R$ 1.200","R$ 600"],
        res:"R$ 900", erroConceito:["R$ 300"],
        passo:"30% de R$3.000 = 0,30 × 3.000 = R$900.",
        dica:"Calcule a porcentagem: 30% × R$3.000 = 0,30 × 3.000 = R$900."
    },
    {
        id:"B5Q18", bloco:5, aula:7, tipo:"aritmetica",
        bncc:"EF08MA22", bncc_desc:"Amplitude",
        display:"Temperaturas da semana: 18, 22, 25, 19, 28, 21, 24. Qual é a amplitude?",
        botoes:["10°C","23°C","7°C","22°C"],
        res:"10°C", erroConceito:["7°C"],
        passo:"Amplitude = maior - menor = 28 - 18 = 10°C.",
        dica:"Amplitude = maior valor - menor valor. Mede a variação total dos dados."
    },
    {
        id:"B5Q19", bloco:5, aula:8, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Probabilidade — Experimento",
        display:"Moeda lançada 100 vezes: 48 caras e 52 coroas. Probabilidade experimental de cara?",
        botoes:["48/100 = 0,48","50/100 = 0,50","52/100 = 0,52","1/2"],
        res:"48/100 = 0,48", erroConceito:["50/100 = 0,50"],
        passo:"Probabilidade experimental = frequência relativa = 48/100 = 0,48. É diferente da probabilidade teórica (0,5).",
        dica:"Probabilidade experimental usa resultados reais do experimento, não o valor teórico."
    },
    {
        id:"B5Q20", bloco:5, aula:9, tipo:"aritmetica",
        bncc:"EF09MA20", bncc_desc:"Análise Crítica — Gráfico Enganoso",
        display:"Gráfico com eixo y começando em 98 mostra barras que parecem muito diferentes. O que pode estar acontecendo?",
        botoes:["O gráfico amplifica visualmente pequenas diferenças","Os dados são mentira","O eixo x está errado","Nada, é um gráfico normal"],
        res:"O gráfico amplifica visualmente pequenas diferenças", erroConceito:["Nada, é um gráfico normal"],
        passo:"Quando o eixo começa diferente de zero, diferenças pequenas parecem enormes visualmente. É uma forma de manipular a percepção.",
        dica:"Sempre verifique onde o eixo começa. Eixo y truncado pode criar impressões falsas."
    }
];
