/**
 * selector.js — v7.0 "The Adaptive Strategist"
 * Seletor Híbrido com Inteligência Diagnóstica (Etapa 8).
 * INTERVENÇÃO: Leitura de Clusters Críticos para intervenção em tempo real.
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
    console.log("[SELECTOR] 🧠 Memória de curto prazo resetada para o novo bloco.");
}

/**
 * MOTOR DE HEURÍSTICA PEDAGÓGICA (ADA Triage)
 * A IA decide se o aluno precisa de intervenção antes de sortear uma questão normal.
 */
function avaliarNecessidadeIntervencao(blocoId) {
    const qDisp = (BANCO[blocoId] || []).filter(q => !respondedInSession.has(q.id));
    if (qDisp.length === 0) return null;

    // 1. EMERGÊNCIA CLÍNICA (Leitura do Diagnostic Engine)
    if (G.diagnostico && G.diagnostico.scores) {
        // Filtra clusters com pontuação de erro crítica (>= 6) e pega o pior
        const alertas = Object.entries(G.diagnostico.scores)
            .filter(([cluster, score]) => score >= 6)
            .sort((a, b) => b[1] - a[1]); // Ordena do pior para o menos pior

        if (alertas.length > 0) {
            const clusterCritico = alertas[0][0];
            console.log(`[SELECTOR] 🚨 ALERTA CRÍTICO: Redirecionando aula para resgate de [${clusterCritico}]`);
            
            // Puxa uma questão de dificuldade baixa específica desse cluster
            const resgate = qDisp.find(q => q.cluster === clusterCritico && q.dificuldade <= 2) 
                         || qDisp.find(q => q.tipoPedagogico === "recomposicao");
            
            if (resgate) {
                // Diminui o score temporariamente para não entrar em loop infinito de resgate
                G.diagnostico.scores[clusterCritico] -= 3; 
                return resgate;
            }
        }
    }

    // 2. RESGATE DE VIDA (Quase morrendo no Game Over)
    if (G.vida > 0 && G.vida < 35) {
        console.log(`[SELECTOR] ⚠️ Energia Baixa: Injetando questão Salva-Vidas.`);
        const salvacao = qDisp.find(q => q.tipoPedagogico === "recomposicao" || q.dificuldade === 1);
        if (salvacao) return salvacao;
    }

    // 3. DESAFIO DE FLOW (Acertando tudo, o aluno está entediado)
    if (G.combo >= 4) {
        console.log(`[SELECTOR] 🔥 Modo Flow Ativado: Puxando desafio avançado.`);
        const desafio = qDisp.find(q => q.tipoPedagogico === "investigacao" || q.dificuldade === 3);
        if (desafio) return desafio;
    }

    return null; // O aluno está estável, segue o roteiro normal.
}

/**
 * SELETOR PRINCIPAL (Híbrido e Blindado)
 */
export function selQ(blocoId) {
    const questoesDoBloco = BANCO[blocoId] || [];

    // Fallback de Segurança
    if (questoesDoBloco.length === 0) {
        return normalizarQuestao({ 
            display: "Gaveta Vazia", 
            passo: "O banco de dados deste bloco não foi localizado." 
        });
    }

    // 1. TENTA INTERVENÇÃO DA IA PRIMEIRO
    const qIA = avaliarNecessidadeIntervencao(blocoId);
    if (qIA) {
        respondedInSession.add(qIA.id);
        return normalizarQuestao(qIA); // Sai blindada
    }

    // 2. FILTRA AS CANDIDATAS NORMAIS
    let candidatas = questoesDoBloco.filter(q => !respondedInSession.has(q.id));

    // Fim de Jogo Suave
    if (candidatas.length === 0) {
        console.warn("[SELECTOR] 🚩 Módulo esgotado.");
        return normalizarQuestao({ 
            id: "END", 
            display: "Módulo Concluído!", 
            res: "OK", 
            alternativas: [{valor: "Fim"}],
            passo: "Você concluiu o módulo com sucesso."
        });
    }

   // 3. SHUFFLE PEDAGÓGICO (Modo Aleatoriedade Alta)
    const aulasDisponiveis = [...new Set(candidatas.map(q => q.aula || 1))].sort((a,b) => a - b);
    const aulasParaSorteio = aulasDisponiveis.slice(0, 5); // Sorteia entre 5 aulas de uma vez!
    const poolDeSorteio = candidatas.filter(q => aulasParaSorteio.includes(q.aula || 1));
    
    const indiceSorteado = Math.floor(Math.random() * poolDeSorteio.length);
    const qSorteada = poolDeSorteio[indiceSorteado];

    respondedInSession.add(qSorteada.id);

    console.log(`[SELECTOR] 🎯 Roteiro Normal: Sorteada ${qSorteada.id} (Aula ${qSorteada.aula || 1})`);

    // ETAPA 3 CONSOLIDADA: Tudo passa pelo Segurança
    return normalizarQuestao(qSorteada);
}
