/**
 * selector.js — Versão 5.1 "ADA Heuristics AI (Multi-Block Ready)"
 * Seletor Híbrido: Espinha Dorsal Curricular + Desvio Adaptativo Pedagógico
 */

import { G } from './gameState.js';

// === IMPORTAÇÃO DOS BANCOS ===
import { bloco2_trilha1 } from '../data/questions/bloco2_trilha1.js';
import { bloco2_trilha2 } from '../data/questions/bloco2_trilha2.js';
import { bloco2_trilha3 } from '../data/questions/bloco2_trilha3.js';
import { bloco2_trilha4 } from '../data/questions/bloco2_trilha4.js';
import { bloco3 } from '../data/questions/bloco3.js'; // Ligando o Bloco 3!

// === CONSOLIDAÇÃO DO BANCO GERAL ===
const BANCO = {
    1: [], // Vazio por enquanto
    2: [
        ...bloco2_trilha1,
        ...bloco2_trilha2,
        ...bloco2_trilha3,
        ...bloco2_trilha4
    ],
    3: [
        ...bloco3
    ],
    4: [], // Vazio por enquanto
    5: [], // Vazio por enquanto
    6: []  // Vazio por enquanto
};

// Histórico de IDs já mostrados na sessão atual
let respondedInSession = new Set();

export function limparHistoricoSessao() {
    respondedInSession.clear();
    console.log("[LabTech AI] Memória de questões da sessão reiniciada.");
}

/**
 * MOTOR DE HEURÍSTICA PEDAGÓGICA (O cérebro da ADA)
 * Avalia persistência, combo, vida e clusters para decidir a próxima questão.
 */
function avaliarNecessidadeIntervencao(blocoId) {
    const qDisp = BANCO[blocoId] || [];
    if (qDisp.length === 0) return null;

    // 1. ANÁLISE DE EXCELÊNCIA (Tédio Cognitivo)
    if (G.combo >= 4) {
        console.log("🌟 [ADA Triage] Combo alto detectado. Procurando desafio de Investigação.");
        const desafio = qDisp.find(q => 
            !respondedInSession.has(q.id) && 
            (q.tipo === "investigacao" || q.tipoPedagogico === "investigacao" || q.dificuldade === 3)
        );
        if (desafio) return desafio;
    }

    // 2. ANÁLISE DE QUEDA CRÍTICA (Intervenção de Emergência)
    if (G.vida > 0 && G.vida < 35) {
        console.log("🚑 [ADA Triage] Vida crítica! Buscando questão de Recomposição.");
        const salvação = qDisp.find(q => 
            !respondedInSession.has(q.id) && 
            (q.tipoPedagogico === "recomposicao" || q.dificuldade === 1)
        );
        if (salvação) return salvação;
    }

    // 3. ANÁLISE DE BLOQUEIO DE HABILIDADE (BNCC Tracker)
    if (G.historico) {
        for (const [bncc, hist] of Object.entries(G.historico)) {
            const totalErros = hist.erros_conceito + hist.erros_calculo;
            if (totalErros >= 2 && hist.erros_conceito > hist.acertos) {
                console.log(`⚠️ [ADA Triage] Bloqueio estrutural em ${bncc}. Desviando para base visual/conceitual.`);
                const reforco = qDisp.find(q => 
                    !respondedInSession.has(q.id) && 
                    q.bncc === bncc && 
                    (q.tipoPedagogico === "recomposicao" || q.dificuldade === 1)
                );
                if (reforco) return reforco;
            }
        }
    }

    return null; 
}

/**
 * SELETOR PRINCIPAL (Híbrido)
 */
export function selQ(blocoId) {
    const questoesDoBloco = BANCO[blocoId] || [];

    if (questoesDoBloco.length === 0) {
        return { display: "Banco de Dados Vazio", res: "0", passo: "Contate a Engenharia para injetar as questões deste módulo." };
    }

    const intervencao = avaliarNecessidadeIntervencao(blocoId);
    
    if (intervencao) {
        respondedInSession.add(intervencao.id);
        console.log(`[SELETOR ADAPTATIVO ADA] -> INTERVENÇÃO APLICADA: ${intervencao.id}`);
        return intervencao;
    }

    let trilhaPrincipal = questoesDoBloco.filter(q => 
        !respondedInSession.has(q.id) && 
        q.tipoPedagogico !== "recomposicao"
    );

    if (trilhaPrincipal.length === 0) {
        trilhaPrincipal = questoesDoBloco.filter(q => !respondedInSession.has(q.id));
    }

    if (trilhaPrincipal.length === 0) {
        console.warn("[SELETOR] Banco Esgotado. Finalizando.");
        G.vida = 0; 
        return { id: "END", tipo: "conceito", display: "Processamento Concluído", res: "OK", alternativas: [{valor: "OK"}], passo: "Módulo finalizado." };
    }

    const aulasDisponiveis = [...new Set(trilhaPrincipal.map(q => q.aula))].sort((a,b) => a - b);
    const aulaAtual = aulasDisponiveis[0];
    const questoesDaAula = trilhaPrincipal.filter(q => q.aula === aulaAtual);
    
    const indiceSorteado = Math.floor(Math.random() * questoesDaAula.length);
    const qSorteada = questoesDaAula[indiceSorteado];

    respondedInSession.add(qSorteada.id);

    console.log(`
        [SELETOR TRILHA PRINCIPAL]
        Estudante: ${G.nome || "Anônimo"}
        Aula Foco: ${aulaAtual}
        Questão Sorteada: ${qSorteada.id}
        Progresso no Bloco: ${respondedInSession.size}/${questoesDoBloco.length}
    `);

    return qSorteada;
}
// === FIM DO ARQUIVO ===
