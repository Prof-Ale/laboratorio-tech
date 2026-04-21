/**
 * questions.js - Banco de Dados do Laboratório
 * Versão com Múltiplas Respostas e Descrições BNCC (Para CSV)
 */

export const G = {
    vida: 100,
    energia: 60,
    combo: 0,
    nivel: 1,
    acertos: 0,
    erros: 0,
    consec_erros: 0,
    trilha: 1,
    musica: true,
    voz: true,        // ← linha nova
    respondeu: false,
    historico: {},
    nome: "Cientista"
};

// Banco de Questões
const pool = [
    // --- TRILHA 1: INICIANTE (Reta Numérica e Noções Básicas) ---
    {
        t: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração de Inteiros",
        display: "-2 + 5 = ?", 
        botoes: ["3", "-3", "7", "-7"], 
        res: "3", 
        passo: "Partindo do -2, andamos 5 casas para a direita, chegando ao 3 positivo.", 
        dica: "Soma de positivo move para a <b>direita</b> na reta.",
        a: -2, b: 5 // Parâmetros para a animação da reta
    },
    {
        t: 1, tipo: "reta", bncc: "EF07MA03", bncc_desc: "Soma e Subtração de Inteiros",
        display: "1 - 4 = ?", 
        botoes: ["-3", "3", "5", "-5"], 
        res: "-3", 
        passo: "Partindo do 1, andamos 4 casas para a esquerda, passando pelo zero até o -3.", 
        dica: "Subtração move para a <b>esquerda</b> na reta.",
        a: 1, b: -4
    },

    // --- TRILHA 2: BÁSICO (Múltiplos, Divisores e Frações) - COM MÚLTIPLAS RESPOSTAS ---
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Selecione um número que seja Múltiplo de 5:", 
        botoes: ["3", "10", "7", "15"], 
        res: ["10", "15"], // <-- AQUI! O JOGO ACEITA TANTO O 10 QUANTO O 15!
        passo: "Os múltiplos de 5 termi// --- TRILHA 2: BÁSICO (Múltiplos, Divisores e Frações) ---
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Selecione um número que seja Múltiplo de 5:", 
        botoes: ["3", "10", "7", "15"], 
        res: ["10", "15"], // Aceita o 10 ou o 15
        passo: "Os múltiplos de 5 terminam sempre em 0 ou 5.", 
        dica: "Pense na tabuada do 5. Há mais do que uma opção correta!"
    },
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Qual destes números é Divisor de 12?", 
        botoes: ["5", "3", "7", "4"], 
        res: ["3", "4"], // Aceita o 3 ou o 4
        passo: "12 pode ser dividido de forma exata por 1, 2, 3, 4, 6 e 12.", 
        dica: "Que número vezes outro resulta em 12?"
    },
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Qual destes é Múltiplo de 3?", 
        botoes: ["14", "9", "21", "16"], 
        res: ["9", "21"], // Aceita o 9 ou o 21
        passo: "A soma dos algarismos de um múltiplo de 3 está na tabuada do 3.", 
        dica: "Lembre-se da regra prática de divisibilidade por 3!"
    },
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Múltiplos e Divisores",
        display: "Selecione um Divisor de 20:", 
        botoes: ["3", "4", "5", "6"], 
        res: ["4", "5"], // Aceita o 4 ou o 5
        passo: "20 é divisível por 1, 2, 4, 5, 10 e 20.", 
        dica: "Quais números multiplicados dão 20?"
    },
    {
        t: 2, tipo: "aritmetica", bncc: "EF07MA01", bncc_desc: "Números Primos",
        display: "Qual destes é um Número Primo?", 
        botoes: ["9", "11", "15", "13"], 
        res: ["11", "13"], // Aceita o 11 ou o 13
        passo: "Números primos só são divisíveis por 1 e por eles mesmos.", 
        dica: "Cuidado com os números ímpares que têm mais divisores!"
    },

    // --- TRILHA 3: INTERMEDIÁRIO (Regra de Sinais - Multiplicação) ---
    {
        t: 3, tipo: "sinais", bncc: "EF07MA04", bncc_desc: "Multiplicação/Divisão de Inteiros",
        display: "(-3) × (-4) = ?", 
        botoes: ["-12", "12", "-7", "7"], 
        res: "12", 
        passo: "Sinais iguais na multiplicação resultam em um número positivo.", 
        dica: "O inimigo (-) do meu inimigo (-) é meu amigo (+)!"
    },
    {
        t: 3, tipo: "sinais", bncc: "EF07MA04", bncc_desc: "Multiplicação/Divisão de Inteiros",
        display: "20 ÷ (-5) = ?", 
        botoes: ["4", "-4", "15", "-15"], 
        res: "-4", 
        passo: "Sinais diferentes na divisão resultam em um número negativo.", 
        dica: "O amigo (+) do meu inimigo (-) é meu inimigo (-)!"
    },

    // --- TRILHA 4: AVANÇADO (Transição Algébrica) ---
    {
        t: 4, tipo: "equacao", bncc: "EF07MA18", bncc_desc: "Equações de 1º Grau",
        display: "Qual o valor de X em:<br> 2x = -10", 
        botoes: ["-5", "5", "-20", "20"], 
        res: "-5", 
        passo: "Dividimos ambos os lados por 2. Sinais diferentes resultam em negativo.", 
        dica: "Isole a incógnita (x) fazendo a operação inversa."
    },
    {
        t: 4, tipo: "equacao", bncc: "EF07MA18", bncc_desc: "Equações de 1º Grau",
        display: "Qual o valor de X em:<br> x + 7 = 3", 
        botoes: ["4", "-4", "10", "-10"], 
        res: "-4", 
        passo: "Subtraímos 7 de ambos os lados: 3 - 7 = -4.", 
        dica: "Se você tem 3 e deve 7, como fica o seu saldo?"
    }
];

// Motor de Seleção Adaptativa (DUA)
export function selQ() {
    // Filtra perguntas de acordo com a trilha atual escolhida pelo utilizador
    let disponiveis = pool.filter(p => p.t === G.trilha);
    
    // Se não houver perguntas na trilha, puxa da Trilha 1 por segurança
    if (disponiveis.length === 0) disponiveis = pool.filter(p => p.t === 1);
    
    // Escolhe uma pergunta aleatória das disponíveis
    return disponiveis[Math.floor(Math.random() * disponiveis.length)];
}
