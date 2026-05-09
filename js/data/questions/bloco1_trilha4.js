// js/data/questions/bloco1_trilha4.js
// Bloco 1 — A Base Numérica | Trilha 4 Completa
// Aula 8: MMC | Aula 9: MDC | Aula 10: Potenciação
// Clusters: SISTEMA_NUMERICO, MODELAGEM_SITUACIONAL, RACIOCINIO_LOGICO

export const bloco1_trilha4 = [

    // ── AULA 8: MMC (MÍNIMO MÚLTIPLO COMUM) ──────────────────────────────

    {
        id: "B1T4Q01", bloco: 1, aula: 8, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Conceito",
        display: "Qual é o significado correto da afirmação MMC(8, 12) = 24?",
        res: "24 é o menor múltiplo comum de 8 e 12",
        alternativas: [
            { valor: "24 é o menor múltiplo comum de 8 e 12", tipo: "acerto" },
            { valor: "24 é o produto de 8 e 12", tipo: "erro", categoria: "conceito", erro: "mmc_confunde_com_produto", descricao: "Assumiu que o MMC é o resultado da multiplicação direta dos termos.", peso: 3 },
            { valor: "24 é o maior divisor de 8 e 12", tipo: "erro", categoria: "conceito", erro: "mmc_confunde_com_mdc", descricao: "Confundiu a definição de múltiplo comum com a de divisor comum (MDC).", peso: 3 },
            { valor: "24 é a soma dos dois números", tipo: "erro", categoria: "interpretacao", erro: "mmc_operacao_aditiva", descricao: "Interpretou os dados numéricos como uma instrução de soma.", peso: 2 }
        ],
        passo: "O 24 é o primeiro número que aparece tanto na tabuada do 8 quanto na do 12 (excluindo o zero).",
        dica: "MMC é o 'primeiro encontro' das tabuadas dos dois números."
    },
    
    {
        id: "B1T4Q03", bloco: 1, aula: 8, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Aplicação (Ciclos)",
        display: "O Ônibus A sai a cada 12 min e o Ônibus B a cada 8 min. Se saíram juntos agora, em quanto tempo saem juntos novamente?",
        res: "Em 24 minutos",
        alternativas: [
            { valor: "Em 24 minutos", tipo: "acerto" },
            { valor: "Em 96 minutos", tipo: "erro", categoria: "procedimento", erro: "problema_mmc_multiplica_direto", descricao: "Multiplicou os intervalos diretamente em vez de encontrar o mínimo múltiplo comum.", peso: 2 },
            { valor: "Em 20 minutos", tipo: "erro", categoria: "interpretacao", erro: "problema_mmc_soma_intervalos", descricao: "Somou os intervalos de tempo em vez de projetar múltiplos cíclicos.", peso: 2 },
            { valor: "Em 4 minutos", tipo: "erro", categoria: "conceito", erro: "problema_mmc_calcula_mdc", descricao: "Calculou o MDC (maior divisor) em um contexto de eventos futuros repetitivos.", peso: 3 }
        ],
        passo: "Para eventos que se repetem e buscam um reencontro, usamos MMC. MMC(12, 8) = 24.",
        dica: "Dica da ADA: Sempre que o problema falar de 'tempo para se encontrarem de novo', use o MMC!"
    },

    // ── AULA 9: MDC (MÁXIMO DIVISOR COMUM) ───────────────────────────────

    {
        id: "B1T4Q07", bloco: 1, aula: 9, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Conceito",
        display: "O que significa afirmar que o MDC(36, 24) = 12?",
        res: "12 é o maior número que divide 36 e 24 exatamente",
        alternativas: [
            { valor: "12 é o maior número que divide 36 e 24 exatamente", tipo: "acerto" },
            { valor: "12 é o menor múltiplo de 36 e 24", tipo: "erro", categoria: "conceito", erro: "mdc_confunde_com_mmc", descricao: "Inverteu a lógica de divisor comum com a de múltiplo comum.", peso: 3 },
            { valor: "12 é a diferença entre os números", tipo: "erro", categoria: "estrategia", erro: "mdc_generaliza_subtracao", descricao: "Observou a diferença (36-24) e assumiu como regra universal para encontrar o MDC.", peso: 2 },
            { valor: "12 é a soma dividida por dois", tipo: "erro", categoria: "calculo", erro: "mdc_regra_arbitraria", descricao: "Criou um procedimento sem fundamentação teórica para o divisor comum.", peso: 2 }
        ],
        passo: "O MDC é o maior número da tabuada que 'cabe' exatamente dentro do 36 e do 24 ao mesmo tempo.",
        dica: "MDC serve para 'repartir' algo no maior tamanho possível sem sobrar nada."
    },
    {
        id: "B1T4Q08", bloco: 1, aula: 9, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Aplicação (Cortes)",
        display: "Você quer cortar cordas de 36cm e 24cm em pedaços iguais e com o maior tamanho possível. Qual será a medida de cada pedaço?",
        res: "12 cm",
        alternativas: [
            { valor: "12 cm", tipo: "acerto" },
            { valor: "24 cm", tipo: "erro", categoria: "interpretacao", erro: "problema_mdc_assume_fator_menor", descricao: "Escolheu o menor pedaço disponível sem verificar se ele divide exatamente o maior.", peso: 2 },
            { valor: "6 cm", tipo: "erro", categoria: "procedimento", erro: "problema_mdc_divisor_comum_nao_maximo", descricao: "Encontrou um divisor comum, mas não o Máximo Divisor solicitado.", peso: 2 },
            { valor: "4 cm", tipo: "erro", categoria: "procedimento", erro: "problema_mdc_fatoracao_incompleta", descricao: "Interrompeu o processo de fatoração antes de encontrar o MDC real.", peso: 2 }
        ],
        passo: "Buscamos o maior divisor comum. Divisores de 36: {1, 2, 3, 4, 6, 9, 12, 18, 36}. Divisores de 24: {1, 2, 3, 4, 6, 8, 12, 24}. O maior comum é 12.",
        dica: "Sempre que precisar 'cortar em partes iguais' no 'maior tamanho', pense no MDC."
    },
    

    // ── AULA 10: POTENCIAÇÃO ─────────────────────────────────────────────

    {
        id: "B1T4Q13", bloco: 1, aula: 10, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Conceito",
        display: "Qual é o significado real da expressão 3⁴?",
        res: "3 × 3 × 3 × 3",
        alternativas: [
            { valor: "3 × 3 × 3 × 3", tipo: "acerto" },
            { valor: "3 × 4", tipo: "erro", categoria: "conceito", erro: "potenciacao_multiplica_base_expoente", descricao: "Multiplicou a base pelo expoente (erro de linearização).", peso: 3 },
            { valor: "4 × 4 × 4", tipo: "erro", categoria: "atencao", erro: "potenciacao_inverte_base_expoente", descricao: "Inverteu a função da base e do expoente na representação.", peso: 1 },
            { valor: "3 + 3 + 3 + 3", tipo: "erro", categoria: "conceito", erro: "potenciacao_confunde_com_adicao", descricao: "Tratou a potência como uma soma repetida em vez de multiplicação sucessiva.", peso: 3 }
        ],
        passo: "O expoente (número de cima) diz quantas vezes a base (número de baixo) deve se multiplicar por ela mesma. 3 × 3 × 3 × 3 = 81.",
        dica: "Atenção: Potência NÃO é conta de vezes simples. É uma multiplicação em cascata!"
    },
    
    {
        id: "B1T4Q15", bloco: 1, aula: 10, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Expoente Zero",
        display: "Qual é o valor numérico de 9⁰?",
        res: "1",
        alternativas: [
            { valor: "1", tipo: "acerto" },
            { valor: "0", tipo: "erro", categoria: "conceito", erro: "potenciacao_expoente_zero_nulo", descricao: "Assumiu que o expoente zero anula o valor da base.", peso: 3 },
            { valor: "9", tipo: "erro", categoria: "procedimento", erro: "potenciacao_expoente_zero_neutro", descricao: "Tratou o zero como se fosse expoente 1, mantendo a base intacta.", peso: 2 },
            { valor: "Inexistente", tipo: "erro", categoria: "interpretacao", erro: "potenciacao_confunde_com_divisao_zero", descricao: "Confundiu a regra do expoente zero com a impossibilidade da divisão por zero.", peso: 2 }
        ],
        passo: "Regra fundamental: Qualquer número (diferente de zero) elevado a zero é sempre igual a 1.",
        dica: "Lembre-se da escada: 9²=81, 9¹=9, e o degrau final 9⁰ é sempre 1."
    },
    {
        id: "B1T4Q22", bloco: 1, aula: 10, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Propriedades",
        display: "O dobro matemático da potência 2¹⁰ é igual a:",
        res: "2¹¹",
        alternativas: [
            { valor: "2¹¹", tipo: "acerto" },
            { valor: "4¹⁰", tipo: "erro", categoria: "conceito", erro: "potenciacao_multiplica_base_mantem_expoente", descricao: "Multiplicou a base pelo escalar ignorando as leis de potências de mesma base.", peso: 3 },
            { valor: "2²⁰", tipo: "erro", categoria: "procedimento", erro: "potenciacao_multiplica_expoente", descricao: "Multiplicou o expoente por 2 em vez de somar 1 unidade (regra do produto).", peso: 2 },
            { valor: "4²⁰", tipo: "erro", categoria: "conceito", erro: "potenciacao_duplica_tudo", descricao: "Dobrou tanto a base quanto o expoente, violando a estrutura algébrica.", peso: 3 }
        ],
        passo: "Dobro significa 2 × número. Logo: 2¹ × 2¹⁰. Mantemos a base e somamos os expoentes: 1 + 10 = 11.",
        dica: "Quando você multiplica potências de base igual, você apenas 'ganha' mais um no expoente!"
    }
];
