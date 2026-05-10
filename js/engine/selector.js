/**
 * selector.js — v5.5 "ADA Quantum Shuffle"
 * Seletor Híbrido: Estabilidade Curricular + Sorteio Aleatório Dinâmico.
 * INTERVENÇÃO: Correção de sequência viciada e garantia de dados para animação.
 */

import { G } from './gameState.js';

// === 1. IMPORTAÇÃO DOS BANCOS DE QUESTÕES ===
import { bloco1 } from '../data/questions/bloco1.js'; 
import { bloco2 } from '../data/questions/bloco2.js'; 
import { bloco3 } from '../data/questions/bloco3.js'; 
import { bloco4 } from '../data/questions/bloco4.js'; 
import { bloco5 } from '../data/questions/bloco5.js'; 
import { bloco6 } from '../data/questions/bloco6.js'; 

const BANCO = {
    1: bloco1,
    2: bloco2,
    3: bloco3,
    4: bloco4,
    5: bloco5,
    6: bloco6
};

let respondedInSession = new Set();

export function limparHistoricoSessao() {
    respondedInSession.clear();
    console.log("🧠 [LabTech AI] Memória de curto prazo resetada. Embaralhando desafios...");
}

/**
 * MOTOR DE HEURÍSTICA PEDAGÓGICA
 */
function avaliarNecessidadeIntervencao(blocoId) {
    const qDisp = (BANCO[blocoId] || []).filter(q => !respondedInSession.has(q.id));
    if (qDisp.length === 0) return null;

    // 1. DESAFIO (Flow)
    if (G.combo >= 4) {
        const desafio = qDisp.find(q => q.tipoPedagogico === "investigacao" || q.dificuldade === 3);
        if (desafio) return desafio;
    }

    // 2. RESGATE (Risco de Vida)
    if (G.vida > 0 && G.vida < 35) {
        const salvacao = qDisp.find(q => q.tipoPedagogico === "recomposicao" || q.dificuldade === 1);
        if (salvacao) return salvacao;
    }

    // 3. REFORÇO (Habilidade BNCC)
    if (G.historico) {
        for (const [bncc, hist] of Object.entries(G.historico)) {
            if ((hist.erros_conceito + hist.erros_calculo) >= 2) {
                const reforco = qDisp.find(q => q.bncc === bncc && q.dificuldade <= 2);
                if (reforco) return reforco;
            }
        }
    }
    return null; 
}

/**
 * SELETOR PRINCIPAL
 * INTERVENÇÃO: Quebra de linearidade para evitar "a mesma sequência".
 */
export function selQ(blocoId) {
    const questoesDoBloco = BANCO[blocoId] || [];

    if (questoesDoBloco.length === 0) {
        return { display: "Bloco Vazio", res: "0", passo: "Erro no carregamento do banco." };
    }

    // 1. Tenta Intervenção da IA
    const intervencao = avaliarNecessidadeIntervencao(blocoId);
    if (intervencao) {
        respondedInSession.add(intervencao.id);
        return { ...intervencao }; // Retorna cópia para proteger o banco original
    }

    // 2. Filtra questões não respondidas
    let candidatas = questoesDoBloco.filter(q => !respondedInSession.has(q.id));

    if (candidatas.length === 0) {
        console.warn("[SELETOR] Módulo esgotado.");
        return { 
            id: "END", 
            display: "Módulo Concluído!", 
            res: "OK", 
            alternativas: [{valor: "Fim"}], 
            passo: "Você percorreu todos os desafios deste bloco." 
        };
    }

    /**
     * INTERVENÇÃO DE ALTA PRECISÃO:
     * Em vez de pegar apenas a aula mais baixa, pegamos as duas primeiras aulas
     * disponíveis para dar mais variedade ao sorteio (Shuffle Pedagógico).
     */
    const aulasDisponiveis = [...new Set(candidatas.map(q => q.aula || 1))].sort((a,b) => a - b);
    const aulasParaSorteio = aulasDisponiveis.slice(0, 2); // Pega Aula X e Aula X+1
    
    const poolDeSorteio = candidatas.filter(q => aulasParaSorteio.includes(q.aula || 1));
    
    // Sorteio com proteção de semente temporal
    const indiceSorteado = Math.floor(Math.random() * poolDeSorteio.length);
    const qSorteada = poolDeSorteio[indiceSorteado];

    respondedInSession.add(qSorteada.id);

    // Garante que o objeto retornado tenha todas as propriedades para o Motor Gráfico
    return { ...qSorteada };
}
