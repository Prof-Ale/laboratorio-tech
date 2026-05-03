// js/data/questions/bloco1_trilha4.js
// Bloco 1 — A Base Numérica | Trilha 4
// Aula 8: MMC — Mínimo Múltiplo Comum (EF06MA05)
// Aula 9: MDC — Máximo Divisor Comum (EF06MA05)
// Aula 10: Potenciação (EF06MA06)

export const bloco1_trilha4 = [

    // ── AULA 8: MMC ─────────────────────────────────────────────────────

    {
        id: "B1T4Q01", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Conceito",
        display: "O que significa MMC(8, 12) = 24?",
        botoes: ["24 é o menor múltiplo comum de 8 e 12", "24 é o produto de 8 e 12", "24 é o maior divisor de 8 e 12", "24 é a soma de 8 e 12"],
        res: "24 é o menor múltiplo comum de 8 e 12",
        erroConceito: ["24 é o produto de 8 e 12"],
        passo: "MMC = Mínimo Múltiplo Comum. 24 é o menor número que é múltiplo de 8 (8×3=24) e de 12 (12×2=24) ao mesmo tempo.",
        dica: "MMC não é o produto dos números (8×12=96). É o MENOR encontro dos seus múltiplos."
    },
    {
        id: "B1T4Q02", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Cálculo",
        display: "MMC(4, 6) = ?",
        botoes: ["12", "24", "2", "6"],
        res: "12",
        erroConceito: ["24"],
        passo: "Múltiplos de 4: 4,8,12... Múltiplos de 6: 6,12... Primeiro comum: 12. MMC(4,6)=12.",
        dica: "O MMC é MENOR que o produto (4×6=24) quando os números têm fatores em comum."
    },
    {
        id: "B1T4Q03", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Aplicação (Ônibus)",
        display: "Dois ônibus saem juntos: um a cada 12 min, outro a cada 8 min. Quando saem juntos novamente?",
        botoes: ["Em 24 minutos", "Em 96 minutos", "Em 20 minutos", "Em 4 minutos"],
        res: "Em 24 minutos",
        erroConceito: ["Em 96 minutos"],
        passo: "MMC(12,8): 12=2²×3, 8=2³. MMC=2³×3=24 minutos. Bem menor que o produto 12×8=96.",
        dica: "Ciclos que precisam coincidir → use MMC. O resultado é menor que o produto quando há fatores em comum."
    },
    {
        id: "B1T4Q04", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Aplicação (Semáforo)",
        display: "Um semáforo fica verde a cada 30s e outro a cada 45s. Ficaram verdes juntos agora. Quando de novo?",
        botoes: ["Em 90 segundos", "Em 75 segundos", "Em 1.350 segundos", "Em 15 segundos"],
        res: "Em 90 segundos",
        erroConceito: ["Em 1.350 segundos"],
        passo: "MMC(30,45): 30=2×3×5, 45=3²×5. MMC=2×3²×5=90 segundos.",
        dica: "Fatore cada número em primos. MMC usa cada fator primo com o MAIOR expoente."
    },
    {
        id: "B1T4Q05", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Três Números",
        display: "Três amigos se encontram na academia a cada 2, 3 e 4 dias. Daqui a quantos dias se encontram juntos?",
        botoes: ["12 dias", "24 dias", "9 dias", "6 dias"],
        res: "12 dias",
        erroConceito: ["24 dias"],
        passo: "MMC(2,3,4): 4=2², 3=3, 2=2. MMC=2²×3=12 dias. Verificação: 12÷2=6✓, 12÷3=4✓, 12÷4=3✓.",
        dica: "MMC de três números: use a fatoração simultânea ou liste os múltiplos."
    },
    {
        id: "B1T4Q06", bloco: 1, aula: 8, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MMC — Números Primos entre Si",
        display: "Se dois números não têm nenhum fator em comum (MDC=1), o MMC deles é:",
        botoes: ["O produto dos dois", "A soma dos dois", "O maior deles", "A diferença dos dois"],
        res: "O produto dos dois",
        erroConceito: ["O maior deles"],
        passo: "Quando MDC(a,b)=1 (primos entre si), MMC(a,b)=a×b. Ex: MMC(4,9)=36=4×9, pois MDC(4,9)=1.",
        dica: "Sem fatores em comum, não há como 'economizar': o MMC é o produto completo."
    },

    // ── AULA 9: MDC ─────────────────────────────────────────────────────

    {
        id: "B1T4Q07", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Conceito",
        display: "O que significa MDC(36, 24) = 12?",
        botoes: ["12 é o maior número que divide 36 e 24 exatamente", "12 é o menor múltiplo de 36 e 24", "12 é a soma de 36 e 24 dividida por 4", "12 é a diferença entre 36 e 24"],
        res: "12 é o maior número que divide 36 e 24 exatamente",
        erroConceito: ["12 é o menor múltiplo de 36 e 24"],
        passo: "MDC = Máximo Divisor Comum. 12 divide 36 (36÷12=3) e divide 24 (24÷12=2), e não existe divisor maior que faça os dois.",
        dica: "MDC olha para DENTRO dos números (divisores). MMC olha para FORA (múltiplos)."
    },
    {
        id: "B1T4Q08", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Aplicação (Cordas)",
        display: "Um cozinheiro quer cortar cordas de 36 cm e 24 cm em pedaços iguais sem desperdício. Maior tamanho possível?",
        botoes: ["12 cm", "6 cm", "4 cm", "24 cm"],
        res: "12 cm",
        erroConceito: ["24 cm"],
        passo: "MDC(36,24)=12 cm. Corda de 36: 36÷12=3 pedaços. Corda de 24: 24÷12=2 pedaços. Nenhum desperdício.",
        dica: "Cortar em partes iguais sem sobra = MDC. É o maior encaixe possível nos dois."
    },
    {
        id: "B1T4Q09", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC vs MMC",
        display: "Um problema pede 'distribuir igualmente em kits'. Qual operação usar?",
        botoes: ["MDC", "MMC", "Adição", "Potenciação"],
        res: "MDC",
        erroConceito: ["MMC"],
        passo: "Distribuição em partes iguais sem sobra = MDC (maior encaixe). Ciclos e encontros periódicos = MMC.",
        dica: "MDC = distribuição, kit, corte. MMC = ciclo, encontro, coincidência."
    },
    {
        id: "B1T4Q10", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Cálculo",
        display: "MDC(20, 30) = ?",
        botoes: ["10", "5", "60", "2"],
        res: "10",
        erroConceito: ["60"],
        passo: "20=2²×5, 30=2×3×5. Fatores comuns com menor expoente: 2¹×5¹=10. MDC(20,30)=10.",
        dica: "MDC usa fatores presentes em TODOS os números, com o MENOR expoente."
    },
    {
        id: "B1T4Q11", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Relação com MMC",
        display: "MMC(a,b) × MDC(a,b) = a × b. Para a=12 e b=8, MDC=4. Qual é o MMC?",
        botoes: ["24", "48", "96", "4"],
        res: "24",
        erroConceito: ["96"],
        passo: "MMC × MDC = a × b. MMC × 4 = 12 × 8 = 96. Logo MMC = 96 ÷ 4 = 24.",
        dica: "Use a fórmula: MMC = (a × b) ÷ MDC."
    },
    {
        id: "B1T4Q12", bloco: 1, aula: 9, tipo: "aritmetica",
        bncc: "EF06MA05", bncc_desc: "MDC — Dois Primos",
        display: "Qual é o MDC de dois números primos diferentes, como 5 e 7?",
        botoes: ["1", "5", "7", "35"],
        res: "1",
        erroConceito: ["35"],
        passo: "Divisores de 5: {1,5}. Divisores de 7: {1,7}. Único divisor comum: 1. MDC(5,7)=1.",
        dica: "Dois primos diferentes só compartilham o divisor 1. Por isso seu MDC é sempre 1."
    },

    // ── AULA 10: POTENCIAÇÃO ─────────────────────────────────────────────

    {
        id: "B1T4Q13", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Conceito",
        display: "O que significa 3⁴?",
        botoes: ["3 × 3 × 3 × 3", "3 × 4", "4 × 4 × 4", "3 + 3 + 3 + 3"],
        res: "3 × 3 × 3 × 3",
        erroConceito: ["3 × 4"],
        passo: "3⁴ = 3 × 3 × 3 × 3 = 81. O expoente (4) indica quantas vezes a base (3) aparece na multiplicação.",
        dica: "Expoente = quantidade de vezes que a base se multiplica. Não é a base × expoente!"
    },
    {
        id: "B1T4Q14", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Cálculo",
        display: "2⁵ = ?",
        botoes: ["32", "10", "25", "64"],
        res: "32",
        erroConceito: ["10"],
        passo: "2⁵ = 2×2×2×2×2 = 4×2×2×2 = 8×2×2 = 16×2 = 32.",
        dica: "Calcule passo a passo: 2×2=4, 4×2=8, 8×2=16, 16×2=32."
    },
    {
        id: "B1T4Q15", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Expoente Zero",
        display: "Quanto é 9⁰?",
        botoes: ["1", "0", "9", "Indefinido"],
        res: "1",
        erroConceito: ["0"],
        passo: "Qualquer número (≠0) elevado a 0 é 1. Progressão: 9²=81, 9¹=9, 9⁰=9÷9=1.",
        dica: "A cada passo que o expoente diminui 1, dividimos por 9. De 9¹=9 para 9⁰: 9÷9=1."
    },
    {
        id: "B1T4Q16", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Contexto Geométrico",
        display: "Um quadrado tem lado de 12 cm. Qual é sua área?",
        botoes: ["144 cm²", "48 cm²", "24 cm²", "1.728 cm²"],
        res: "144 cm²",
        erroConceito: ["48 cm²"],
        passo: "Área do quadrado = lado² = 12² = 12 × 12 = 144 cm². O termo 'quadrado' vem exatamente dessa operação.",
        dica: "Área = lado ao quadrado. Quadrado perfeito, literalmente!"
    },
    {
        id: "B1T4Q17", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Crescimento Exponencial",
        display: "Um vírus: 1 infectado no dia 1, cada um infecta 3 por dia. No dia 5, quantos infectados?",
        botoes: ["81", "15", "243", "27"],
        res: "81",
        erroConceito: ["15"],
        passo: "Dia 1=3⁰=1, Dia 2=3¹=3, Dia 3=3²=9, Dia 4=3³=27, Dia 5=3⁴=81.",
        dica: "No dia n, o total é 3^(n-1). Dia 5: 3^(5-1) = 3⁴ = 81."
    },
    {
        id: "B1T4Q18", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Ordenação",
        display: "Qual é o MAIOR valor entre: 2⁸, 3⁵, 4⁴, 5³, 10²?",
        botoes: ["2⁸ = 256", "3⁵ = 243", "4⁴ = 256", "10² = 100"],
        res: "2⁸ = 256",
        erroConceito: ["10² = 100"],
        passo: "2⁸=256, 3⁵=243, 4⁴=256, 5³=125, 10²=100. Maior: 256 (tanto 2⁸ quanto 4⁴ valem 256).",
        dica: "Calcule cada potência antes de comparar. Surpresa: base maior não garante resultado maior!"
    },
    {
        id: "B1T4Q19", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Padrão",
        display: "O último algarismo das potências de 2 segue o ciclo: 2, 4, 8, 6, 2, 4, 8, 6... Qual é o último algarismo de 2¹⁰⁰?",
        botoes: ["6", "2", "4", "8"],
        res: "6",
        erroConceito: ["2"],
        passo: "Ciclo de período 4: 2¹→2, 2²→4, 2³→8, 2⁴→6, 2⁵→2... 100÷4=25 (resto 0). Resto 0 corresponde ao 4º elemento do ciclo: 6.",
        dica: "Divida o expoente por 4 e olhe o resto. Resto 0 → último algarismo é 6."
    },
    {
        id: "B1T4Q20", bloco: 1, aula: 10, tipo: "aritmetica",
        bncc: "EF06MA06", bncc_desc: "Potenciação — Conexão com Sistema Decimal",
        display: "O valor posicional da centena é equivalente a qual potência de 10?",
        botoes: ["10²", "10³", "10¹", "10⁴"],
        res: "10²",
        erroConceito: ["10³"],
        passo: "Centena = 100 = 10 × 10 = 10². O sistema decimal inteiro é construído sobre potências de 10: unidade=10⁰=1, dezena=10¹=10, centena=10²=100...",
        dica: "Lembre da Aula 1: cada posição vale 10 vezes a anterior. Isso é uma potência de 10!"
    }
];
