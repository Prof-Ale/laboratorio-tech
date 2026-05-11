/**
 * selector.js — v6.0 "The Shielded Navigator"
 * Seletor Híbrido + Question Normalizer Integrado.
 * INTERVENÇÃO: Implementação da Etapa 3 do Plano de Estabilização.
 */

import { G } from './gameState.js';
import { normalizarQuestao } from './question-normalizer.js'; // O Segurança

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
    console.log("[SELECTOR] 🧠 Memória de curto prazo resetada.");
}

/**
 * MOTOR DE HEURÍSTICA PEDAGÓGICA (ADA Triage)
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
 * SELETOR PRINCIPAL (Híbrido e Blindado)
 */
export function selQ(blocoId) {
    const questoesDoBloco = BANCO[blocoId] || [];

    // Fallback para Bloco Vazio (Normalizado)
    if (questoesDoBloco.length === 0) {
        return normalizarQuestao({ 
            display: "Gaveta Vazia", 
            passo: "O banco de dados deste bloco não foi localizado." 
        });
    }

    // 1. Tenta Intervenção da IA
    const qIA = avaliarNecessidadeIntervencao(blocoId);
    if (qIA) {
        respondedInSession.add(qIA.id);
        console.log(`[SELECTOR] 🤖 ADA interveio com: ${qIA.id}`);
        return normalizarQuestao(qIA); // NORMALIZAÇÃO NA SAÍDA
    }

    // 2. Filtra candidatas
    let candidatas = questoesDoBloco.filter(q => !respondedInSession.has(q.id));

    // Fallback para Módulo Esgotado (Normalizado)
    if (candidatas.length === 0) {
        console.warn("[SELECTOR] 🚩 Módulo esgotado.");
        return normalizarQuestao({ 
            id: "END", 
            display: "Módulo Concluído!", 
            res: "OK", 
            alternativas: [{valor: "Fim"}],
            passo: "Você percorreu todos os desafios deste bloco."
        });
    }

    // 3. Shuffle Pedagógico (Aula X e X+1)
    const aulasDisponiveis = [...new Set(candidatas.map(q => q.aula || 1))].sort((a,b) => a - b);
    const aulasParaSorteio = aulasDisponiveis.slice(0, 2); 
    const poolDeSorteio = candidatas.filter(q => aulasParaSorteio.includes(q.aula || 1));
    
    const indiceSorteado = Math.floor(Math.random() * poolDeSorteio.length);
    const qSorteada = poolDeSorteio[indiceSorteado];

    respondedInSession.add(qSorteada.id);

    console.log(`[SELECTOR] 🎯 Questão selecionada: ${qSorteada.id} (Aula ${qSorteada.aula || 1})`);

    // ETAPA 3: O ponto de unificação. Nada sai daqui sem ser normalizado.
    return normalizarQuestao(qSorteada);
}
