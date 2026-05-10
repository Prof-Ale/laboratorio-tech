/**
 * selector.js — Versão 5.4 "ADA Heuristics AI (Full Unified)"
 * Seletor Híbrido: Espinha Dorsal Curricular + Desvio Adaptativo Pedagógico
 * * ATUALIZAÇÃO: Arquitetura 100% consolidada para Blocos 1 a 6.
 */

import { G } from './gameState.js';

// === 1. IMPORTAÇÃO DOS BANCOS DE QUESTÕES (Fiação Unificada) ===
import { bloco1 } from '../data/questions/bloco1.js'; 
import { bloco2 } from '../data/questions/bloco2.js'; 
import { bloco3 } from '../data/questions/bloco3.js'; 
import { bloco4 } from '../data/questions/bloco4.js'; 
import { bloco5 } from '../data/questions/bloco5.js'; 
import { bloco6 } from '../data/questions/bloco6.js'; 

// === 2. CONSOLIDAÇÃO DO BANCO GERAL (As Gavetas) ===
const BANCO = {
    1: [...bloco1],
    2: [...bloco2],
    3: [...bloco3],
    4: [...bloco4],
    5: [...bloco5],
    6: [...bloco6]
};

// Histórico de IDs já mostrados na sessão atual (evita repetição)
let respondedInSession = new Set();

export function limparHistoricoSessao() {
    respondedInSession.clear();
    console.log("🧠 [LabTech AI] Memória de curto prazo da ADA resetada.");
}

/**
 * MOTOR DE HEURÍSTICA PEDAGÓGICA (O cérebro da ADA)
 * Decide se o aluno precisa de um desafio (Investigação) ou de um resgate (Recomposição).
 */
function avaliarNecessidadeIntervencao(blocoId) {
    const qDisp = BANCO[blocoId] || [];
    if (qDisp.length === 0) return null;

    // 1. ANÁLISE DE EXCELÊNCIA (Tédio Cognitivo)
    // Se o combo estiver alto, a ADA lança um desafio de Investigação.
    if (G.combo >= 4) {
        const desafio = qDisp.find(q => 
            !respondedInSession.has(q.id) && 
            (q.tipoPedagogico === "investigacao" || q.dificuldade === 3)
        );
        if (desafio) {
            console.log("🌟 [ADA Triage] Aluno em estado de Flow. Aplicando Investigação.");
            return desafio;
        }
    }

    // 2. ANÁLISE DE QUEDA CRÍTICA (Intervenção de Emergência)
    // Se a vida baixar de 35%, a ADA foca em salvar a base com Recomposição.
    if (G.vida > 0 && G.vida < 35) {
        const salvacao = qDisp.find(q => 
            !respondedInSession.has(q.id) && 
            (q.tipoPedagogico === "recomposicao" || q.dificuldade === 1)
        );
        if (salvacao) {
            console.log("🚑 [ADA Triage] Risco de Game Over. Aplicando Recomposição.");
            return salvacao;
        }
    }

    // 3. ANÁLISE DE BLOQUEIO POR HABILIDADE (BNCC Tracker)
    if (G.historico) {
        for (const [bncc, hist] of Object.entries(G.historico)) {
            const totalErros = hist.erros_conceito + hist.erros_calculo;
            if (totalErros >= 2 && hist.erros_conceito > hist.acertos) {
                const reforco = qDisp.find(q => 
                    !respondedInSession.has(q.id) && 
                    q.bncc === bncc && 
                    (q.tipoPedagogico === "recomposicao" || q.dificuldade === 1)
                );
                if (reforco) {
                    console.log(`⚠️ [ADA Triage] Bloqueio em ${bncc}. Desviando para base.`);
                    return reforco;
                }
            }
        }
    }

    return null; 
}

/**
 * SELETOR PRINCIPAL (Híbrido)
 * Escolhe a próxima questão baseada na Aula atual ou na necessidade da IA.
 */
export function selQ(blocoId) {
    const questoesDoBloco = BANCO[blocoId] || [];

    if (questoesDoBloco.length === 0) {
        return { 
            display: "Banco de Dados Vazio", 
            res: "0", 
            passo: "A gaveta deste bloco está vazia no selector.js." 
        };
    }

    // Primeiro, verifica se a IA quer intervir
    const intervencao = avaliarNecessidadeIntervencao(blocoId);
    
    if (intervencao) {
        respondedInSession.add(intervencao.id);
        return intervencao;
    }

    // Se não houver intervenção, segue a Trilha Principal (Aulas 1, 2, 3...)
    let trilhaPrincipal = questoesDoBloco.filter(q => 
        !respondedInSession.has(q.id) && 
        q.tipoPedagogico !== "recomposicao"
    );

    // Se a trilha principal acabar, tenta qualquer uma não respondida (incluindo recomposição)
    if (trilhaPrincipal.length === 0) {
        trilhaPrincipal = questoesDoBloco.filter(q => !respondedInSession.has(q.id));
    }

    // Fim de jogo para este bloco
    if (trilhaPrincipal.length === 0) {
        console.warn("[SELETOR] Módulo esgotado.");
        G.vida = 0; 
        return { 
            id: "END", 
            display: "Módulo Concluído!", 
            res: "OK", 
            alternativas: [{valor: "Sair"}], 
            passo: "Você percorreu todos os desafios deste bloco." 
        };
    }

    // Ordenação por Aula (sempre foca na aula mais baixa disponível)
    const aulasDisponiveis = [...new Set(trilhaPrincipal.map(q => q.aula || 1))].sort((a,b) => a - b);
    const aulaAtual = aulasDisponiveis[0];
    const questoesDaAula = trilhaPrincipal.filter(q => (q.aula || 1) === aulaAtual);
    
    const indiceSorteado = Math.floor(Math.random() * questoesDaAula.length);
    const qSorteada = questoesDaAula[indiceSorteado];

    respondedInSession.add(qSorteada.id);

    console.log(`[ADA] Bloco ${blocoId} | Aula ${aulaAtual} | Questão: ${qSorteada.id}`);

    return qSorteada;
}
