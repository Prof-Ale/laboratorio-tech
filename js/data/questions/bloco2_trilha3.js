// js/data/questions/bloco2_trilha3.js
// Bloco 2 — Números e Operações | Trilha 3
// Aula 6: Adição/Subtração de Frações | Aula 7: Mult/Div de Frações | Aula 8: Racionais e Decimais
// Clusters: RACIOCINIO_FRACIONARIO, OPERACOES_DECIMAIS, MODELAGEM_SITUACIONAL

export const bloco2_trilha3 = [

    // ── AULA 6: ADIÇÃO E SUBTRAÇÃO DE FRAÇÕES (RACIOCINIO_FRACIONARIO) ──

    {
        id: "B2T3Q01", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Mesmo Denominador",
        display: "Calcule a soma: 3/8 + 2/8 = ?",
        res: "5/8",
        alternativas: [
            { valor: "5/8", tipo: "acerto" },
            { valor: "5/16", tipo: "erro", categoria: "conceito", erro: "fracao_soma_denominadores", descricao: "Somou os denominadores indevidamente em vez de conservá-los.", peso: 3 },
            { valor: "6/16", tipo: "erro", categoria: "procedimento", erro: "fracao_multiplica_numerador_soma_denominador", descricao: "Misturou regras: multiplicou no numerador e somou no denominador.", peso: 2 },
            { valor: "1/8", tipo: "erro", categoria: "atencao", erro: "fracao_subtrai_em_vez_de_somar", descricao: "Executou subtração ignorando o operador de adição.", peso: 1 }
        ],
        passo: "Bases iguais? Repetimos o denominador (8) e somamos apenas o topo: 3 + 2 = 5. Resultado: 5/8.",
        dica: "Pense em fatias: 3 fatias de uma pizza de 8 pedaços mais 2 fatias da mesma pizza continuam sendo fatias de oitavos!"
    },
    
    {
        id: "B2T3Q03", bloco: 2, aula: 6, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Adição de Frações — Denominadores Diferentes",
        display: "Qual o resultado de 1/2 + 1/3?",
        res: "5/6",
        alternativas: [
            { valor: "5/6", tipo: "acerto" },
            { valor: "2/5", tipo: "erro", categoria: "conceito", erro: "fracao_soma_direta_bases_diferentes", descricao: "Somou numeradores e denominadores linearmente, ignorando a necessidade de base comum (MMC).", peso: 3 },
            { valor: "2/6", tipo: "erro", categoria: "procedimento", erro: "fracao_aplica_mmc_esquece_numerador", descricao: "Encontrou o MMC (6), mas não realizou a conversão proporcional dos numeradores.", peso: 2 },
            { valor: "4/6", tipo: "erro", categoria: "calculo", erro: "fracao_erro_proporcao_numerador", descricao: "Falhou na multiplicação escalar ao converter a fração para a nova base.", peso: 2 }
        ],
        passo: "MMC(2,3) = 6. Convertendo: 1/2 vira 3/6 e 1/3 vira 2/6. Agora somamos: 3/6 + 2/6 = 5/6.",
        dica: "Você não pode somar 'bananas com maçãs'. Use o MMC para deixar os números de baixo iguais antes de somar!"
    },
    

    // ── AULA 7: MULTIPLICAÇÃO E DIVISÃO DE FRAÇÕES (RACIOCINIO_FRACIONARIO) ──

    {
        id: "B2T3Q08", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações",
        display: "Resolva: 2/3 × 3/4 = ?",
        res: "1/2",
        alternativas: [
            { valor: "1/2", tipo: "acerto" },
            { valor: "6/12", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_omite_simplificacao", descricao: "Efetuou a multiplicação correta, mas não reduziu a fração à forma irredutível.", peso: 1 },
            { valor: "5/7", tipo: "erro", categoria: "conceito", erro: "multiplicacao_confunde_com_adicao_direta", descricao: "Somou os termos em vez de multiplicá-los.", peso: 3 },
            { valor: "2/4", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_simplificacao_parcial", descricao: "Simplificou um fator, mas não concluiu a redução final.", peso: 1 }
        ],
        passo: "Multiplicação é direta: 2×3 = 6 (topo) e 3×4 = 12 (baixo). 6/12 simplificado por 6 dá 1/2.",
        dica: "Dica da ADA: Na multiplicação é 'frente com frente'! O de cima vezes o de cima, o de baixo vezes o de baixo."
    },
    {
        id: "B2T3Q09", bloco: 2, aula: 7, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Divisão de Frações",
        display: "Calcule: 3/4 ÷ 1/2 = ?",
        res: "3/2",
        alternativas: [
            { valor: "3/2", tipo: "acerto" },
            { valor: "3/8", tipo: "erro", categoria: "conceito", erro: "divisao_multiplica_direto_sem_inverter", descricao: "Tratou como multiplicação direta, esquecendo de inverter o segundo termo.", peso: 3 },
            { valor: "6/4", tipo: "erro", categoria: "procedimento", erro: "divisao_omite_simplificacao_resultado", descricao: "Aplicou a inversão corretamente, mas não simplificou a fração resultante.", peso: 1 },
            { valor: "1/2", tipo: "erro", categoria: "estrategia", erro: "divisao_inversao_caotica", descricao: "Tentou inverter termos mas perdeu a lógica do algoritmo de divisão.", peso: 2 }
        ],
        passo: "Repete a primeira (3/4) e multiplica pelo inverso da segunda (2/1). Fica 6/4, que simplificado é 3/2.",
        dica: "Regra da Ginástica: A segunda fração 'planta uma bananeira' (inverte) e a conta vira de vezes!"
    },

    // ── AULA 8: RACIONAIS E DECIMAIS (OPERACOES_DECIMAIS) ────────────────

    {
        id: "B2T3Q15", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Fração para Decimal",
        display: "Como escrevemos a fração 1/4 na forma decimal?",
        res: "0,25",
        alternativas: [
            { valor: "0,25", tipo: "acerto" },
            { valor: "0,14", tipo: "erro", categoria: "conceito", erro: "conversao_justapoe_numeros_virgula", descricao: "Uniu graficamente o numerador e denominador após a vírgula, sem dividir.", peso: 3 },
            { valor: "0,4", tipo: "erro", categoria: "procedimento", erro: "conversao_usa_denominador_como_decimal", descricao: "Usou apenas o denominador como casa decimal.", peso: 2 },
            { valor: "1,4", tipo: "erro", categoria: "atencao", erro: "conversao_justapoe_inteiro_decimal", descricao: "Montou um número misto gráfico sem fundamentação matemática.", peso: 2 }
        ],
        passo: "Fração é divisão: 1 ÷ 4 = 0,25. Pense em 1 Real dividido para 4 pessoas: cada uma ganha 0,25.",
        dica: "Divida o número de cima pelo de baixo no rascunho para achar o decimal."
    },
    
    {
        id: "B2T3Q16", bloco: 2, aula: 8, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Decimal para Fração",
        display: "O número 0,35 na forma de fração simplificada é:",
        res: "7/20",
        alternativas: [
            { valor: "7/20", tipo: "acerto" },
            { valor: "35/100", tipo: "erro", categoria: "procedimento", erro: "conversao_omite_simplificacao_decimal", descricao: "Converteu corretamente para base 100, mas não simplificou.", peso: 1 },
            { valor: "35/10", tipo: "erro", categoria: "conceito", erro: "conversao_erro_ordem_grandeza_decimos", descricao: "Usou base 10 para um número com duas casas decimais (centésimos).", peso: 3 },
            { valor: "7/10", tipo: "erro", categoria: "calculo", erro: "conversao_simplifica_base_errada", descricao: "Simplificou o numerador por 5, mas errou a base de origem.", peso: 2 }
        ],
        passo: "0,35 tem duas casas → 35/100. Simplificando por 5 (MDC): 35÷5=7 e 100÷5=20. Resultado: 7/20.",
        dica: "Duas casas depois da vírgula? Coloque sobre o 100 e depois simplifique na tabuada do 5."
    },

    // ── INVESTIGAÇÃO (MODELAGEM_SITUACIONAL) ───────────────────────────

    {
        id: "B2T3Q14", bloco: 2, aula: 7, tipo: "investigacao",
        bncc: "EF07MA04", bncc_desc: "Multiplicação de Frações Próprias",
        display: "Investigação: Se multiplicarmos uma fração menor que 1 (ex: 1/2) por outra menor que 1, o resultado será:",
        res: "Menor que as frações originais",
        alternativas: [
            { valor: "Menor que as frações originais", tipo: "acerto" },
            { valor: "Maior que as frações originais", tipo: "erro", categoria: "conceito", erro: "multiplicacao_pressupoe_aumento_absoluto", descricao: "Presumiu que 'vezes' sempre aumenta o valor, ignorando o comportamento das frações próprias.", peso: 3 },
            { valor: "Igual a uma das frações", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_elemento_neutro", descricao: "Acreditou que a operação não alteraria a magnitude.", peso: 1 },
            { valor: "Sempre um número inteiro", tipo: "erro", categoria: "atencao", erro: "multiplicacao_expectativa_inteira", descricao: "Esperou que o produto de frações gerasse um número sem vírgula.", peso: 2 }
        ],
        passo: "Exemplo: 1/2 × 1/2 = 1/4. Note que 1/4 é menor que 1/2. Multiplicar por algo menor que 1 'encolhe' o número.",
        dica: "Pense: você quer a 'metade da metade'. Isso vai ser um pedaço maior ou menor do que você já tinha?"
    }
];
