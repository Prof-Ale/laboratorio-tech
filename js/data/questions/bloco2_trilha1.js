// js/data/questions/bloco2_trilha1.js
// Bloco 2 — Números e Operações | Trilha 1
// Aula 1: Inteiros e Reta Numérica | Aula 2: Adição | Aula 3: Subtração
// Clusters: SISTEMA_NUMERICO, MODELAGEM_SITUACIONAL

export const bloco2_trilha1 = [

    // ── AULA 1: INTEIROS E RETA NUMÉRICA (SISTEMA_NUMERICO) ──────────────

    {
        id: "B2T1Q01", bloco: 2, aula: 1, tipo: "reta",
        bncc: "EF07MA02", bncc_desc: "Números Inteiros — Reta Numérica",
        display: "Na reta numérica, qual destes números está posicionado MAIS À ESQUERDA?",
        res: "-8",
        alternativas: [
            { valor: "-8", tipo: "acerto" },
            { valor: "+2", tipo: "erro", categoria: "conceito", erro: "reta_ignora_orientacao_negativa", descricao: "Inverteu a lógica de ordenação, selecionando o maior valor positivo em vez do menor negativo.", peso: 3 },
            { valor: "0", tipo: "erro", categoria: "conceito", erro: "reta_assume_zero_limite", descricao: "Acreditou que o zero é o limite final à esquerda, ignorando a existência dos negativos.", peso: 3 },
            { valor: "-3", tipo: "erro", categoria: "procedimento", erro: "reta_inverte_modulo_negativo", descricao: "Comparou negativos usando a lógica dos naturais (achando que 3 é menor que 8).", peso: 2 }
        ],
        passo: "Na reta numérica, quanto mais à esquerda, menor o valor. O -8 é o menor de todos nesta lista.",
        dica: "Imagine um termômetro deitado: os números mais frios (negativos maiores) ficam bem longe à esquerda!"
    },
    
    {
        id: "B2T1Q03", bloco: 2, aula: 1, tipo: "aritmetica",
        bncc: "EF07MA02", bncc_desc: "Valor Absoluto",
        display: "Qual é o valor numérico exato de |-7| (módulo de menos sete)?",
        res: "7",
        alternativas: [
            { valor: "7", tipo: "acerto" },
            { valor: "-7", tipo: "erro", categoria: "conceito", erro: "modulo_mantem_sinal_negativo", descricao: "Manteve o sinal negativo, não compreendendo que módulo representa distância absoluta.", peso: 3 },
            { valor: "0", tipo: "erro", categoria: "estrategia", erro: "modulo_associa_anulacao", descricao: "Interpretou as barras de módulo como uma instrução para zerar o valor.", peso: 2 },
            { valor: "+7", tipo: "erro", categoria: "atencao", erro: "modulo_formaliza_sinal", descricao: "Acertou o valor, mas demonstrou dependência de sinal para representar magnitude.", peso: 1 }
        ],
        passo: "O módulo (||) mede a distância até o zero. Não existe distância negativa! Por isso, |-7| = 7.",
        dica: "O módulo funciona como uma 'limpadora de sinais': ele extrai apenas o tamanho do número, sempre positivo."
    },

    // ── AULA 2: ADIÇÃO DE INTEIROS (SISTEMA_NUMERICO) ───────────────────────

    {
        id: "B2T1Q08", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Iguais",
        display: "Resolva a operação: (-6) + (-4) = ?",
        res: "-10",
        alternativas: [
            { valor: "-10", tipo: "acerto" },
            { valor: "+10", tipo: "erro", categoria: "conceito", erro: "adicao_sinais_aplica_regra_multiplicacao", descricao: "Aplicou 'menos com menos dá mais', que só vale para multiplicação/divisão.", peso: 3 },
            { valor: "-2", tipo: "erro", categoria: "procedimento", erro: "adicao_sinais_subtrai_modulos", descricao: "Subtraiu os valores em vez de somar as dívidas acumuladas.", peso: 2 },
            { valor: "+2", tipo: "erro", categoria: "estrategia", erro: "adicao_sinais_erro_total", descricao: "Subtraiu os módulos e ainda inverteu o sinal de forma arbitrária.", peso: 2 }
        ],
        passo: "Sinais iguais? Somamos os valores e mantemos o sinal. Dívida de 6 + Dívida de 4 = Dívida de 10.",
        dica: "Pense em dinheiro: se você deve 6 e pede mais 4 emprestado, sua dívida aumenta para 10!"
    },
    {
        id: "B2T1Q09", bloco: 2, aula: 2, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Adição de Inteiros — Sinais Diferentes",
        display: "Qual o resultado de: (+10) + (-3) = ?",
        res: "+7",
        alternativas: [
            { valor: "+7", tipo: "acerto" },
            { valor: "-7", tipo: "erro", categoria: "procedimento", erro: "adicao_sinais_sinal_do_menor", descricao: "Subtraiu corretamente, mas deu o sinal do número de menor módulo.", peso: 2 },
            { valor: "+13", tipo: "erro", categoria: "conceito", erro: "adicao_sinais_soma_modulos", descricao: "Ignorou os sinais e somou os valores absolutos como se fossem naturais.", peso: 3 },
            { valor: "-13", tipo: "erro", categoria: "estrategia", erro: "adicao_sinais_regra_mista_falha", descricao: "Somou os valores e aplicou a regra 'mais com menos dá menos' da multiplicação.", peso: 3 }
        ],
        passo: "Sinais diferentes? Subtraímos (10 - 3 = 7) e mantemos o sinal do maior 'peso' (o +10).",
        dica: "Você tem 10 reais e gasta 3. O que sobra no seu bolso?"
    },

    // ── AULA 3: SUBTRAÇÃO DE INTEIROS (MODELAGEM_SITUACIONAL) ───────────────

    {
        id: "B2T1Q14", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Subtração — Truque do Oposto",
        display: "Calcule o resultado de: (+6) - (-2) = ?",
        res: "+8",
        alternativas: [
            { valor: "+8", tipo: "acerto" },
            { valor: "+4", tipo: "erro", categoria: "conceito", erro: "subtracao_ignora_inversao", descricao: "Subtraiu os números diretamente, ignorando que o sinal de 'menos' inverte o próximo número.", peso: 3 },
            { valor: "-8", tipo: "erro", categoria: "procedimento", erro: "subtracao_inverte_sinal_final", descricao: "Fez a inversão correta para soma, mas errou o sinal do resultado final.", peso: 2 },
            { valor: "-4", tipo: "erro", categoria: "estrategia", erro: "subtracao_falha_total", descricao: "Subtraiu os módulos e negativou o resultado sem critério lógico.", peso: 2 }
        ],
        passo: "Subtrair um negativo é o mesmo que somar um positivo! (+6) - (-2) vira 6 + 2 = 8.",
        dica: "Dica da ADA: Quando ver dois sinais de menos colados (- -), eles se transformam num sinal de MAIS (+)."
    },
    
    {
        id: "B2T1Q18", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Diferença e Amplitude",
        display: "Moscou registrou -12°C e São Paulo +28°C. Qual a DIFERENÇA exata de temperatura entre elas?",
        res: "40°C",
        alternativas: [
            { valor: "40°C", tipo: "acerto" },
            { valor: "16°C", tipo: "erro", categoria: "conceito", erro: "distancia_subtrai_modulos", descricao: "Subtraiu os valores absolutos (28-12), ignorando que uma cidade está abaixo de zero.", peso: 3 },
            { valor: "-40°C", tipo: "erro", categoria: "procedimento", erro: "distancia_sinal_indevido", descricao: "Calculou a amplitude correta, mas aplicou sinal negativo a uma medida de distância térmica.", peso: 2 },
            { valor: "-16°C", tipo: "erro", categoria: "estrategia", erro: "distancia_erro_misto", descricao: "Errou a amplitude e ainda negativou o resultado.", peso: 3 }
        ],
        passo: "Diferença é a distância na reta. Do -12 até o 0 são 12 graus. Do 0 até o 28 são mais 28 graus. Total: 12 + 28 = 40.",
        dica: "Imagine subir um prédio: você sai do subsolo (-12) e vai até o 28º andar. Quantos andares você subiu no total?"
    },
    {
        id: "B2T1Q20", bloco: 2, aula: 3, tipo: "sinais",
        bncc: "EF07MA02", bncc_desc: "Investigação Lógica",
        display: "É possível que a subtração de dois números NEGATIVOS resulte em um número POSITIVO?",
        res: "Sim. Ex: (-3) - (-8) = +5",
        alternativas: [
            { valor: "Sim. Ex: (-3) - (-8) = +5", tipo: "acerto" },
            { valor: "Não, o resultado é sempre negativo", tipo: "erro", categoria: "conceito", erro: "subtracao_dogma_sinal", descricao: "Acredita que operações com negativos nunca podem cruzar a barreira do zero.", peso: 3 },
            { valor: "Não, o resultado é sempre zero", tipo: "erro", categoria: "procedimento", erro: "subtracao_anulacao_arbitraria", descricao: "Generalizou a ideia de anulação de opostos para qualquer subtração de negativos.", peso: 2 },
            { valor: "Sim, mas só se os números forem iguais", tipo: "erro", categoria: "interpretacao", erro: "subtracao_condicao_restritiva", descricao: "Confundiu o resultado positivo com o resultado nulo de elementos idênticos.", peso: 2 }
        ],
        passo: "Sim! Se você 'retirar' uma dívida grande de uma dívida pequena, você fica no lucro. (-3) + 8 = +5.",
        dica: "Lembre-se: subtrair um negativo grande é como receber um grande presente!"
    }
];
