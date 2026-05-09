// js/data/questions/bloco1_trilha4.js
// Bloco 1 — A Base Numérica | Trilha 4 Completa
// Aula 8: MMC | Aula 9: MDC | Aula 10: Potenciação
// Padrão de Erros: DOMINIO_ACAO_FALHA (snake_case)
// Categorias: conceito, procedimento, calculo, atencao, estrategia, interpretacao

export const bloco1_trilha4 = [

    // ── AULA 8: MMC (MÍNIMO MÚLTIPLO COMUM) ──────────────────────────────

    {
        id: "B1T4Q01", bloco: 1, aula: 8, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Conceito",
        display: "O que significa MMC(8, 12) = 24?",
        res: "24 é o menor múltiplo comum de 8 e 12",
        alternativas: [
            { valor: "24 é o menor múltiplo comum de 8 e 12", tipo: "acerto" },
            { valor: "24 é o produto de 8 e 12", tipo: "erro", categoria: "conceito", erro: "mmc_confunde_com_produto", descricao: "Assumiu que MMC é o resultado da multiplicação direta dos fatores.", peso: 3 },
            { valor: "24 é o maior divisor de 8 e 12", tipo: "erro", categoria: "conceito", erro: "mmc_confunde_com_mdc", descricao: "Confundiu a definição de múltiplo comum com a definição de divisor comum.", peso: 3 },
            { valor: "24 é a soma", tipo: "erro", categoria: "interpretacao", erro: "mmc_associa_operacao_aditiva", descricao: "Interpretou a sigla MMC ou os dados numéricos como uma instrução de soma.", peso: 2 }
        ],
        passo: "MMC significa Mínimo Múltiplo Comum. O 24 é o menor número (excluindo o zero) que aparece na tabuada do 8 e do 12 ao mesmo tempo.",
        dica: "MMC não é a multiplicação direta (8×12=96). É o primeiro encontro das tabuadas."
    },
    {
        id: "B1T4Q03", bloco: 1, aula: 8, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Aplicação (Ciclos)",
        display: "Ônibus A sai a cada 12 min, Ônibus B a cada 8 min. Se saíram juntos agora, em quanto tempo saem juntos novamente?",
        res: "Em 24 minutos",
        alternativas: [
            { valor: "Em 24 minutos", tipo: "acerto" },
            { valor: "Em 96 minutos", tipo: "erro", categoria: "procedimento", erro: "problema_mmc_multiplica_fatores", descricao: "Multiplicou os valores diretamente em vez de encontrar o mínimo múltiplo comum.", peso: 2 },
            { valor: "Em 20 minutos", tipo: "erro", categoria: "interpretacao", erro: "problema_mmc_soma_intervalos", descricao: "Somou os intervalos de tempo em vez de projetar os múltiplos ciclicamente.", peso: 2 },
            { valor: "Em 4 minutos", tipo: "erro", categoria: "conceito", erro: "problema_mmc_calcula_mdc", descricao: "Calculou o Máximo Divisor Comum (MDC) em um contexto de progressão de tempo contínuo.", peso: 3 }
        ],
        passo: "Buscamos o primeiro encontro no tempo: M(12): 12, 24... M(8): 8, 16, 24... O MMC é 24.",
        dica: "Problemas de ciclos ou eventos que se repetem e se encontram no futuro indicam uso de MMC."
    },
    {
        id: "B1T4Q06", bloco: 1, aula: 8, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Números Primos entre Si",
        display: "Se dois números não têm fatores em comum além do 1, como calculamos o MMC deles de forma rápida?",
        res: "Multiplicamos um pelo outro",
        alternativas: [
            { valor: "Multiplicamos um pelo outro", tipo: "acerto" },
            { valor: "Pegamos o maior", tipo: "erro", categoria: "conceito", erro: "mmc_primos_seleciona_maior", descricao: "Assumiu que o maior número absorve o menor sem possuir relação de múltiplo.", peso: 3 },
            { valor: "Somamos os dois", tipo: "erro", categoria: "estrategia", erro: "mmc_primos_soma_valores", descricao: "Sugeriu operação aditiva para tentar gerar um número comum.", peso: 2 },
            { valor: "Diferença dos dois", tipo: "erro", categoria: "interpretacao", erro: "mmc_primos_subtrai_valores", descricao: "Sugeriu subtração, operação incompatível com a expansão escalar de múltiplos.", peso: 2 }
        ],
        passo: "Sem divisores comuns para 'simplificar' as fatorações, o primeiro ponto de encontro será o produto deles. Ex: MMC(4,9) = 4×9 = 36.",
        dica: "Quando não há divisores comuns (ex: 5 e 7), o MMC é sempre a multiplicação de um pelo outro."
    },

    // ── AULA 9: MDC (MÁXIMO DIVISOR COMUM) ───────────────────────────────

    {
        id: "B1T4Q07", bloco: 1, aula: 9, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Conceito",
        display: "O que significa MDC(36, 24) = 12?",
        res: "12 é o maior número que divide 36 e 24 exatamente",
        alternativas: [
            { valor: "12 é o maior número que divide 36 e 24 exatamente", tipo: "acerto" },
            { valor: "12 é o menor múltiplo de 36 e 24", tipo: "erro", categoria: "conceito", erro: "mdc_confunde_com_mmc", descricao: "Confundiu a definição de divisor comum com a de múltiplo comum.", peso: 3 },
            { valor: "Soma dividida por 4", tipo: "erro", categoria: "estrategia", erro: "mdc_cria_regra_aleatoria", descricao: "Selecionou um procedimento de fragmentação sem correlação com MDC.", peso: 2 },
            { valor: "Diferença", tipo: "erro", categoria: "estrategia", erro: "mdc_generaliza_diferenca", descricao: "Observou que a subtração 36-24=12 e generalizou como regra universal de MDC.", peso: 2 }
        ],
        passo: "MDC = Máximo Divisor Comum. É a maior 'régua' que mede os dois números sem sobrar nada.",
        dica: "MDC foca nos divisores (quem divide o número e deixa resto zero)."
    },
    {
        id: "B1T4Q08", bloco: 1, aula: 9, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Aplicação (Cortes)",
        display: "Você quer cortar cordas de 36cm e 24cm em pedaços do mesmo tamanho, sendo o maior tamanho possível. Qual será a medida?",
        res: "12 cm",
        alternativas: [
            { valor: "12 cm", tipo: "acerto" },
            { valor: "24 cm", tipo: "erro", categoria: "interpretacao", erro: "problema_mdc_assume_menor_fator", descricao: "Elegeu a menor corda como base, sem calcular se ela divide exatamente a maior corda (36 não divide por 24).", peso: 2 },
            { valor: "6 cm", tipo: "erro", categoria: "procedimento", erro: "problema_mdc_divisor_comum_nao_maximo", descricao: "Encontrou um divisor comum correto, mas encerrou o processo antes de atingir o máximo divisor.", peso: 2 },
            { valor: "4 cm", tipo: "erro", categoria: "procedimento", erro: "problema_mdc_divisor_incompleto", descricao: "Encontrou um divisor comum inferior por fatoração incompleta.", peso: 2 }
        ],
        passo: "MDC(36,24) = 12. Cortar partes exatas, sem sobra e no maior tamanho possível = calcular o Máximo Divisor Comum.",
        dica: "Quando o problema pede para 'repartir', 'cortar em partes iguais' ou 'dividir o máximo', use MDC."
    },

    // ── AULA 10: POTENCIAÇÃO ─────────────────────────────────────────────

    {
        id: "B1T4Q13", bloco: 1, aula: 10, trilha: 1, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Conceito",
        display: "Qual o significado da expressão 3⁴?",
        res: "3 × 3 × 3 × 3",
        alternativas: [
            { valor: "3 × 3 × 3 × 3", tipo: "acerto" },
            { valor: "3 × 4", tipo: "erro", categoria: "conceito", erro: "potenciacao_multiplica_base_expoente", descricao: "Multiplicou diretamente a base pelo expoente em vez de usar o expoente como índice de repetição.", peso: 3 },
            { valor: "4 × 4 × 4", tipo: "erro", categoria: "atencao", erro: "potenciacao_inverte_base_expoente", descricao: "Inverteu os papéis da base e do expoente na montagem dos fatores.", peso: 1 },
            { valor: "3 + 3 + 3 + 3", tipo: "erro", categoria: "conceito", erro: "potenciacao_confunde_com_adicao", descricao: "Estruturou a operação como soma repetida em vez de multiplicação sucessiva.", peso: 3 }
        ],
        passo: "O expoente (4) informa quantas vezes a base (3) é multiplicada por ela mesma. 3⁴ = 81, e não 12.",
        dica: "O número pequeno em cima (expoente) manda a base se multiplicar."
    },
    {
        id: "B1T4Q15", bloco: 1, aula: 10, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Expoente Zero",
        display: "Qual o valor numérico de 9⁰?",
        res: "1",
        alternativas: [
            { valor: "1", tipo: "acerto" },
            { valor: "0", tipo: "erro", categoria: "conceito", erro: "potenciacao_expoente_zero_nulo", descricao: "Aplicou a lógica de anulação, assumindo que ter o zero na conta resulta sempre em zero.", peso: 3 },
            { valor: "9", tipo: "erro", categoria: "procedimento", erro: "potenciacao_expoente_zero_neutro", descricao: "Tratou o expoente zero como se ele fosse o expoente 1 (mantendo a base inalterada).", peso: 2 },
            { valor: "Indefinido", tipo: "erro", categoria: "interpretacao", erro: "potenciacao_confunde_indeterminacao", descricao: "Aplicou ao expoente zero as restrições referentes à divisão por zero.", peso: 2 }
        ],
        passo: "A regra matemática das potências define que qualquer base não-nula elevada ao expoente zero é sempre igual a 1.",
        dica: "Pense na regressão dividindo pela base: 9²=81, 9¹=9, 9⁰=1."
    },
    {
        id: "B1T4Q16", bloco: 1, aula: 10, trilha: 2, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Área",
        display: "Um quadrado perfeito possui lado de 12 cm. Qual é a sua área?",
        res: "144 cm²",
        alternativas: [
            { valor: "144 cm²", tipo: "acerto" },
            { valor: "48 cm²", tipo: "erro", categoria: "conceito", erro: "geometria_confunde_area_perimetro", descricao: "Calculou o perímetro (12 × 4) em vez de aplicar a potência bidimensional de área (12²).", peso: 3 },
            { valor: "24 cm²", tipo: "erro", categoria: "calculo", erro: "potenciacao_duplica_base", descricao: "Multiplicou a base por 2 (12 × 2) em vez de multiplicá-la por ela mesma (12 × 12).", peso: 2 },
            { valor: "1.728 cm²", tipo: "erro", categoria: "procedimento", erro: "geometria_calcula_volume", descricao: "Elevou a medida ao cubo (12³), resultando no cálculo de volume em vez de área plana.", peso: 2 }
        ],
        passo: "Área de um quadrado = Lado². 12² = 12 × 12 = 144 cm². É por isso que chamamos o expoente 2 de 'elevado ao quadrado'.",
        dica: "Para achar a área plana, eleve o valor do lado à potência 2."
    },
    {
        id: "B1T4Q19", bloco: 1, aula: 10, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Padrões",
        display: "Último algarismo das potências de 2: 2, 4, 8, 6... Qual será o último algarismo da potência 2¹⁰⁰?",
        res: "6",
        alternativas: [
            { valor: "6", tipo: "acerto" },
            { valor: "2", tipo: "erro", categoria: "procedimento", erro: "padrao_ciclo_resto_zero_inicio", descricao: "Dividiu corretamente, mas designou o resto nulo (0) como indicativo do primeiro elemento do ciclo em vez do último.", peso: 2 },
            { valor: "4", tipo: "erro", categoria: "calculo", erro: "padrao_falha_divisao_modular", descricao: "Errou a contagem do ciclo ou a divisão para encontrar a posição residual.", peso: 1 },
            { valor: "8", tipo: "erro", categoria: "estrategia", erro: "padrao_chute_posicional", descricao: "Selecionou um componente do padrão sem executar as etapas algorítmicas modulares.", peso: 2 }
        ],
        passo: "O ciclo de repetição tem 4 elementos. 100 dividido por 4 resulta em divisão exata (resto 0). O resto 0 equivale à última posição do ciclo (6).",
        dica: "Divida o expoente solicitado pelo tamanho do ciclo. O 'resto' da divisão aponta a posição correta."
    },

    // ── QUESTÕES ENRIQUECIDAS (INVESTIGAÇÃO) ──────────────────────────

    {
        id: "B1T4Q21", bloco: 1, aula: 8, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Investigação",
        display: "Se MMC(N, 10) = 20. Qual é o menor valor natural possível para a variável N?",
        res: "4",
        alternativas: [
            { valor: "4", tipo: "acerto" },
            { valor: "20", tipo: "erro", categoria: "procedimento", erro: "mmc_investigacao_escolhe_maximo", descricao: "Encontrou uma resposta válida para a equação (20), mas desconsiderou a restrição textual de buscar 'o menor valor possível'.", peso: 2 },
            { valor: "2", tipo: "erro", categoria: "conceito", erro: "mmc_investigacao_confunde_divisor", descricao: "Assinalou um divisor comum entre os números, sem processar a regra de encontro dos múltiplos (o MMC de 2 e 10 é 10).", peso: 3 },
            { valor: "10", tipo: "erro", categoria: "interpretacao", erro: "mmc_investigacao_replicacao_fator", descricao: "Manteve o fator estático conhecido ignorando as regras de formação do múltiplo resultante.", peso: 2 }
        ],
        passo: "Múltiplos de 4: 4, 8, 12, 16, 20... Múltiplos de 10: 10, 20... O primeiro encontro é o 20. Logo, 4 é o menor número que valida a sentença.",
        dica: "Teste os números listados e veja se eles possuem o 20 como seu múltiplo."
    },
    {
        id: "B1T4Q22", bloco: 1, aula: 10, trilha: 3, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Desafio",
        display: "O dobro matemático de 2¹⁰ é perfeitamente igual a:",
        res: "2¹¹",
        alternativas: [
            { valor: "2¹¹", tipo: "acerto" },
            { valor: "4¹⁰", tipo: "erro", categoria: "conceito", erro: "potenciacao_multiplica_base_mantem_expoente", descricao: "Aplicou a fatoração externa diretamente na base numérica, ignorando a estrutura conservativa da potenciação.", peso: 3 },
            { valor: "2²⁰", tipo: "erro", categoria: "procedimento", erro: "potenciacao_multiplica_expoente", descricao: "Ao invés de aplicar a regra (somar expoentes), realizou uma multiplicação do expoente pelo escalar de dobro.", peso: 2 },
            { valor: "4²⁰", tipo: "erro", categoria: "conceito", erro: "potenciacao_duplica_base_e_expoente", descricao: "Aplicou a duplicação tanto na base quanto no expoente, violando todas as leis operacionais das potências.", peso: 3 }
        ],
        passo: "O dobro é (2 × número). Portanto, 2¹ × 2¹⁰ = conservamos a base (2) e somamos os expoentes (1 + 10 = 11). Resultado: 2¹¹.",
        dica: "Multiplicação de potências com a mesma base: mantenha a base e some os expoentes."
    }
];
