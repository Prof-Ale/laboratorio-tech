// js/data/questions/bloco2_trilha2.js
// Bloco 2 — Números e Operações | Trilha 2
// Aula 4: Multiplicação e Divisão de Inteiros | Aula 5: Frações e Representação
// Clusters: SISTEMA_NUMERICO, RACIOCINIO_FRACIONARIO, MODELAGEM_SITUACIONAL

export const bloco2_trilha2 = [

    // ── AULA 4: MULTIPLICAÇÃO E DIVISÃO DE INTEIROS (SISTEMA_NUMERICO) ──

    {
        id: "B2T2Q01", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "Qual o resultado da operação: (+6) × (-4)?",
        res: "-24",
        alternativas: [
            { valor: "-24", tipo: "acerto" },
            { valor: "+24", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_positiva_errada", descricao: "Atribuiu sinal positivo ao produto de fatores com sinais opostos.", peso: 3 },
            { valor: "-10", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_confunde_com_adicao", descricao: "Realizou a soma de dívidas (-6-4) em vez de multiplicar os módulos.", peso: 2 },
            { valor: "+10", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_confunde_adicao_sinal_oposto", descricao: "Somou os módulos absolutos e inverteu o sinal arbitrariamente.", peso: 2 }
        ],
        passo: "Sinais diferentes na multiplicação sempre resultam em negativo. 6 × 4 = 24. Logo, -24.",
        dica: "Dica da ADA: Na multiplicação e divisão, sinais diferentes são inimigos... o resultado é sempre negativo!"
    },
    
    {
        id: "B2T2Q02", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Multiplicação de Inteiros — Regra dos Sinais",
        display: "Calcule o produto: (-3) × (-9) = ?",
        res: "+27",
        alternativas: [
            { valor: "+27", tipo: "acerto" },
            { valor: "-27", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_mantem_negativo", descricao: "Assumiu que a multiplicação de dois negativos preserva a negatividade (como na soma).", peso: 3 },
            { valor: "-12", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_confunde_com_adicao_negativa", descricao: "Somou as dívidas em vez de multiplicar os fatores.", peso: 2 },
            { valor: "+12", tipo: "atencao", erro: "multiplicacao_soma_inverte_sinal", descricao: "Somou os numerais e forçou a positividade por reconhecer o par de sinais.", peso: 1 }
        ],
        passo: "Sinais iguais na multiplicação resultam em positivo. É como 'negar uma dívida': vira um ganho! 3 × 9 = 27.",
        dica: "Menos com Menos na multiplicação vira MAIS. Pense que os dois tracinhos se cruzam e formam uma cruz de positivo!"
    },
    {
        id: "B2T2Q05", bloco: 2, aula: 4, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Produto com Três Fatores — Sinal",
        display: "Qual o valor de (-2) × (-3) × (-4)?",
        res: "-24",
        alternativas: [
            { valor: "-24", tipo: "acerto" },
            { valor: "+24", tipo: "erro", categoria: "conceito", erro: "multiplicacao_sinais_generaliza_positivo", descricao: "Assumiu que qualquer cadeia de sinais negativos resulta em positivo.", peso: 3 },
            { valor: "-9", tipo: "erro", categoria: "procedimento", erro: "multiplicacao_soma_cadeia", descricao: "Somou as bases como se fossem parcelas de uma dívida.", peso: 2 },
            { valor: "+9", tipo: "erro", categoria: "estrategia", erro: "multiplicacao_soma_inverte_cadeia", descricao: "Somou os valores e aplicou positividade indevida.", peso: 1 }
        ],
        passo: "Fazemos por partes: (-2) × (-3) = +6. Depois: (+6) × (-4) = -24.",
        dica: "Conte os sinais de menos: se for um número ímpar de sinais (como 3), o resultado final será negativo."
    },

    // ── AULA 5: FRAÇÕES E REPRESENTAÇÃO (RACIOCINIO_FRACIONARIO) ───────

    {
        id: "B2T2Q10", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações — Conceito",
        display: "Uma pizza foi cortada em 8 fatias iguais. Pedro comeu 3. Que fração representa o que ele comeu?",
        res: "3/8",
        alternativas: [
            { valor: "3/8", tipo: "acerto" },
            { valor: "8/3", tipo: "erro", categoria: "conceito", erro: "fracao_inverte_numerador_denominador", descricao: "Inverteu a posição da parte (numerador) com o todo (denominador).", peso: 3 },
            { valor: "3/5", tipo: "erro", categoria: "procedimento", erro: "fracao_usa_sobra_como_denominador", descricao: "Usou a quantidade de fatias restantes como base da fração.", peso: 2 },
            { valor: "5/8", tipo: "erro", categoria: "interpretacao", erro: "fracao_calcula_sobra", descricao: "Identificou a fração do que sobrou, não do que foi comido.", peso: 2 }
        ],
        passo: "O número de baixo (denominador) indica o total de fatias (8). O de cima (numerador) o que foi pego (3).",
        dica: "O denominador 'denomina' em quantas partes o todo foi dividido. Imagine ele no fundo da caixa!"
    },
    
    {
        id: "B2T2Q11", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Frações Equivalentes",
        display: "Qual fração abaixo vale o mesmo que (é equivalente a) 1/2?",
        res: "4/8",
        alternativas: [
            { valor: "4/8", tipo: "acerto" },
            { valor: "1/4", tipo: "erro", categoria: "conceito", erro: "fracao_aumenta_apenas_denominador", descricao: "Aumentou o denominador mantendo o numerador, o que diminui o valor da fração.", peso: 3 },
            { valor: "2/8", tipo: "erro", categoria: "procedimento", erro: "fracao_multiplicacao_assimetrica", descricao: "Multiplicou numerador e denominador por números diferentes.", peso: 2 },
            { valor: "3/8", tipo: "erro", categoria: "atencao", erro: "fracao_estimativa_visual_falha", descricao: "Escolheu um valor por semelhança visual sem testar a proporção.", peso: 1 }
        ],
        passo: "Para ser equivalente, multiplique em cima e em baixo pelo mesmo número. 1×4=4 e 2×4=8. Logo, 4/8.",
        dica: "Frações equivalentes são formas diferentes de dizer a mesma quantidade. 1 de 2 é o mesmo que 4 de 8!"
    },
    {
        id: "B2T2Q12", bloco: 2, aula: 5, tipo: "aritmetica",
        bncc: "EF07MA04", bncc_desc: "Simplificação de Frações",
        display: "Qual é a forma mais simples (irredutível) da fração 12/18?",
        res: "2/3",
        alternativas: [
            { valor: "2/3", tipo: "acerto" },
            { valor: "4/6", tipo: "erro", categoria: "procedimento", erro: "fracao_simplificacao_incompleta", descricao: "Simplificou uma vez, mas não chegou até a forma final irredutível.", peso: 2 },
            { valor: "6/9", tipo: "erro", categoria: "procedimento", erro: "fracao_simplificacao_parcial", descricao: "Iniciou a simplificação mas parou no primeiro divisor encontrado.", peso: 2 },
            { valor: "1/3", tipo: "erro", categoria: "calculo", erro: "fracao_erro_divisao_tabuada", descricao: "Errou a divisão básica durante o processo de simplificação.", peso: 1 }
        ],
        passo: "Dividimos ambos por 6 (MDC): 12÷6=2 e 18÷6=3. Resultado: 2/3.",
        dica: "Simplificar é 'enxugar' a fração. Continue dividindo até que não exista mais nenhum número que divida os dois ao mesmo tempo."
    }
];
