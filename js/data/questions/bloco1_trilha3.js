// js/data/questions/bloco1_trilha3.js
// Bloco 1 — A Base Numérica | Trilha 3 Completa
// Aula 6: Critérios de Divisibilidade | Aula 7: Divisores e Números Primos
// Clusters: SISTEMA_NUMERICO, MODELAGEM_SITUACIONAL, LITERACIA_DADOS

export const bloco1_trilha3 = [

    // ── AULA 6: DIVISIBILIDADE (SISTEMA_NUMERICO) ───────────────────────────

    {
        id: "B1T3Q01", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 2",
        display: "Qual destes números NÃO é divisível por 2?",
        res: "77",
        alternativas: [
            { valor: "77", tipo: "acerto" },
            { valor: "990", tipo: "erro", categoria: "conceito", erro: "divisibilidade_desconhece_regra_paridade", descricao: "Selecionou um número par terminado em 0, desconhecendo que 0 é critério de paridade.", peso: 3 },
            { valor: "342", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_foco_ordem_errada", descricao: "Analisou o algarismo inicial (centena) em vez da unidade final.", peso: 2 },
            { valor: "128", tipo: "erro", categoria: "interpretacao", erro: "divisibilidade_inverte_comando", descricao: "Procurou um número divisível em vez de um NÃO divisível.", peso: 2 }
        ],
        passo: "Para ser divisível por 2, o número deve terminar em 0, 2, 4, 6 ou 8. O 77 termina em 7 (ímpar).",
        dica: "Dica de Ouro: Olhe apenas para o último algarismo da direita. Ele é quem manda na regra do 2!"
    },
    
    {
        id: "B1T3Q02", bloco: 1, aula: 6, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Critério de Divisibilidade por 3",
        display: "O número 471 é divisível por 3?",
        res: "Sim (4+7+1=12)",
        alternativas: [
            { valor: "Sim (4+7+1=12)", tipo: "acerto" },
            { valor: "Não (termina em 1)", tipo: "erro", categoria: "conceito", erro: "divisibilidade_aplica_regra_dois_no_tres", descricao: "Tentou aplicar a regra do 2 (olhar final) no critério do 3.", peso: 3 },
            { valor: "Não (soma é 12)", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_falha_analise_soma", descricao: "Somou corretamente, mas não reconheceu o 12 como múltiplo de 3.", peso: 2 },
            { valor: "Sim (termina em 1)", tipo: "erro", categoria: "estrategia", erro: "divisibilidade_justificativa_incoerente", descricao: "Acertou a resposta por intuição, mas usou uma regra falsa.", peso: 2 }
        ],
        passo: "Soma: 4 + 7 + 1 = 12. Como 12 está na tabuada do 3 (3 × 4), o número 471 também está!",
        dica: "A regra do 3 é diferente: você precisa 'quebrar' o número e somar todos os seus pedaços."
    },
    

    // ── AULA 7: DIVISORES E NÚMEROS PRIMOS (SISTEMA_NUMERICO) ──────────────

    {
        id: "B1T3Q09", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisores de um Número",
        display: "Quais são todos os divisores naturais do número 12?",
        res: "{1, 2, 3, 4, 6, 12}",
        alternativas: [
            { valor: "{1, 2, 3, 4, 6, 12}", tipo: "acerto" },
            { valor: "{2, 3, 4, 6}", tipo: "erro", categoria: "conceito", erro: "divisores_omite_extremos_triviais", descricao: "Esqueceu que o 1 e o próprio número (12) são sempre divisores.", peso: 3 },
            { valor: "{1, 2, 4, 12}", tipo: "erro", categoria: "procedimento", erro: "divisores_omite_fator_central", descricao: "Pulou os fatores centrais (3x4), demonstrando falha na varredura da tabuada.", peso: 2 },
            { valor: "{1, 3, 4, 12}", tipo: "erro", categoria: "atencao", erro: "divisores_omite_base_par", descricao: "Esqueceu dos divisores pares óbvios (2 e 6).", peso: 1 }
        ],
        passo: "Pense nos pares que multiplicados dão 12: 1x12, 2x6, 3x4. Juntando todos: {1, 2, 3, 4, 6, 12}.",
        dica: "Dica da ADA: Divisores sempre vêm em pares! Se você achou o 2, o 6 (12 ÷ 2) também tem de estar lá."
    },
    {
        id: "B1T3Q10", bloco: 1, aula: 7, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Número Primo",
        display: "Qual destes números é um número PRIMO?",
        res: "11",
        alternativas: [
            { valor: "11", tipo: "acerto" },
            { valor: "9", tipo: "erro", categoria: "conceito", erro: "primo_confunde_com_impar", descricao: "Classificou um número composto (3x3) como primo apenas por ser ímpar.", peso: 3 },
            { valor: "15", tipo: "erro", categoria: "procedimento", erro: "primo_ignora_fator_cinco", descricao: "Não testou a divisibilidade por 5 em um número terminado em 5.", peso: 2 },
            { valor: "21", tipo: "erro", categoria: "calculo", erro: "primo_falha_revisao_tabuada", descricao: "Esqueceu que 21 está na tabuada do 3 e do 7.", peso: 2 }
        ],
        passo: "O 11 só divide por 1 e por ele mesmo. Já o 9 divide por 3, o 15 por 5 e o 21 por 7.",
        dica: "Ser primo é ser 'exclusivo': só aceita ser dividido pelo 1 e por si mesmo. Se aparecer em qualquer outra tabuada, já não é primo!"
    },
    

    // ── QUESTÕES ENRIQUECIDAS (MODELAGEM_SITUACIONAL) ───────────────────

    {
        id: "B1T3Q16", bloco: 1, aula: 6, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Divisibilidade — Algarismo Oculto",
        display: "No número 5.4_2, qual algarismo completa o espaço para que ele seja múltiplo de 3?",
        res: "1",
        alternativas: [
            { valor: "1", tipo: "acerto" },
            { valor: "2", tipo: "erro", categoria: "conceito", erro: "divisibilidade_aplica_regra_paridade", descricao: "Tentou usar um número par para satisfazer a regra do 3.", peso: 3 },
            { valor: "3", tipo: "erro", categoria: "estrategia", erro: "divisibilidade_literalidade_algarismo", descricao: "Acreditou que colocar o algarismo 3 torna o número múltiplo de 3 automaticamente.", peso: 2 },
            { valor: "5", tipo: "erro", categoria: "procedimento", erro: "divisibilidade_soma_insuficiente", descricao: "Escolheu um valor cuja soma final (16) não é múltipla de 3.", peso: 2 }
        ],
        passo: "Somamos os que já temos: 5 + 4 + 2 = 11. Para chegar no próximo múltiplo de 3 (que é 12), precisamos de +1.",
        dica: "A soma total deve resultar em um número da tabuada do 3 (3, 6, 9, 12, 15, 18...)."
    },
    {
        id: "B1T3Q20", bloco: 1, aula: 7, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "Primos Gêmeos",
        display: "Primos gêmeos são primos com diferença de 2 (ex: 3 e 5). Qual par é de gêmeos autênticos?",
        res: "17 e 19",
        alternativas: [
            { valor: "17 e 19", tipo: "acerto" },
            { valor: "13 e 15", tipo: "erro", categoria: "procedimento", erro: "primos_gemeos_inclui_multiplo_tres", descricao: "Identificou a distância 2, mas não percebeu que 15 é composto.", peso: 3 },
            { valor: "7 e 9", tipo: "erro", categoria: "calculo", erro: "primos_gemeos_inclui_composto_impar", descricao: "Validou o 9 como primo, falhando na base da teoria.", peso: 2 },
            { valor: "19 e 21", tipo: "erro", categoria: "atencao", erro: "primos_gemeos_inclui_multiplo_sete", descricao: "Ignorou que 21 divide por 3 e 7.", peso: 1 }
        ],
        passo: "17 e 19 são ambos primos. Nos outros pares, o 15, o 9 e o 21 são números 'disfarçados' que têm outros divisores.",
        dica: "Não basta ter distância 2; os DOIS números precisam ser primos de verdade!"
    }
];
