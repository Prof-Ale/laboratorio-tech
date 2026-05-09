/**
 * js/engine/selector.js — Versão 7.1 "MathLab Adaptativo"
 * Núcleo de Distribuição de Carga Cognitiva
 * Seleciona questões por bloco e aula, com progressão inteligente.
 */

import { G }    from './gameState.js';
import { pool } from '../data/questions/index.js';

// Armazena as questões já respondidas para evitar repetição na sessão
let perguntasFeitas = [];

/**
 * Seleciona uma questão adequada ao perfil atual do estudante.
 * @param {number} blockId - O bloco ativo (1 a 6)
 */
export function selQ(blockId) {
    // 1. Filtragem Inicial: Apenas questões do bloco solicitado
    const dispBloco = pool.filter(q => q.bloco === blockId);

    if (dispBloco.length === 0) {
        console.error(`[LabTech] Erro Crítico: Bloco ${blockId} sem questões no pool.`);
        return null;
    }

    // 2. Determinação da Trilha de Dificuldade via Combo (Fluxo de Csikszentmihalyi)
    // O sistema tenta manter o aluno no "Estado de Fluxo" aumentando o desafio conforme o acerto
    let nivelAlvo = 1; // 1: Reconhecimento | 2: Aplicação | 3: Investigação/Desafio
    if (G.combo >= 6) {
        nivelAlvo = 3;
    } else if (G.combo >= 3) {
        nivelAlvo = 2;
    }

    // Atualiza o estado global para que a ADA saiba o nível atual
    G.trilha = nivelAlvo;

    // 3. Seleção de Candidatos (Filtro de Dificuldade e Repetição)
    let candidatos = dispBloco.filter(q => {
        // Evita repetir questões já respondidas nesta sessão
        if (perguntasFeitas.includes(q.id)) return false;

        // Lógica para questões novas (Baseadas em Aula 1-10)
        if (q.aula !== undefined) {
            if (nivelAlvo === 1) return q.aula <= 4;             // Básico
            if (nivelAlvo === 2) return q.aula > 4 && q.aula <= 7; // Intermediário
            return q.aula > 7;                                   // Avançado/Integração
        }

        // Lógica para questões com campo Trilha (Legado ou Específicas)
        if (q.trilha !== undefined) {
            return q.trilha === nivelAlvo;
        }

        return true; // Questões curingas (sem marcação) sempre disponíveis
    });

    // 4. Fallback: Se não houver questões no nível alvo (aluno esgotou o nível)
    // Buscamos qualquer questão não respondida do bloco, independente da aula
    if (candidatos.length === 0) {
        candidatos = dispBloco.filter(q => !perguntasFeitas.includes(q.id));
    }

    // 5. Reinício de Ciclo: Se TODAS as questões do bloco foram respondidas
    if (candidatos.length === 0) {
        console.log(`[LabTech] Ciclo de questões do Bloco ${blockId} concluído. Reiniciando...`);
        const idsDoBloco = dispBloco.map(item => item.id);
        perguntasFeitas = perguntasFeitas.filter(id => !idsDoBloco.includes(id));
        candidatos = dispBloco;
    }

    // 6. Sorteio e Registro
    const questaoSelecionada = candidatos[Math.floor(Math.random() * candidatos.length)];
    
    // Registra no histórico da sessão
    perguntasFeitas.push(questaoSelecionada.id);

    // LOG de Depuração para o Dashboard do Professor (Console)
    console.log(`
        [SELETOR ADAPTATIVO]
        Estudante: ${G.nome}
        Dificuldade Atual: Trilha ${nivelAlvo}
        Questão: ${questaoSelecionada.id} (Aula: ${questaoSelecionada.aula ?? 'N/A'})
        Progresso no Bloco: ${perguntasFeitas.filter(id => dispBloco.find(q => q.id === id)).length}/${dispBloco.length}
    `);

    return questaoSelecionada;
}

/**
 * Limpa o histórico de questões feitas (útil para troca de turno ou aluno)
 */
export function limparHistoricoSessao() {
    perguntasFeitas = [];
    console.log("[LabTech] Histórico de questões limpo.");
}
