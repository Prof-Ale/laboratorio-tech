/**
 * js/engine/selector.js — Versão 7.0 "MathLab Adaptativo"
 * Seleciona questões por bloco e aula, com progressão por combo.
 * Compatível com questões que usam campo "aula" ou "trilha".
 */

import { G }    from './gameState.js';
import { pool } from '../data/questions/index.js';

let perguntasFeitas = [];

/**
 * Seleciona uma questão pelo bloco ativo e nível de combo do aluno.
 */
export function selQ(blockId) {
    // 1. Filtra por bloco
    const dispBloco = pool.filter(q => q.bloco === blockId);

    if (dispBloco.length === 0) {
        console.warn(`[LabTech] Nenhuma questão encontrada para o Bloco ${blockId}.`);
        return null;
    }

    // 2. Determina o nível de dificuldade pelo combo
    //    aula 1-4 = nível básico | aula 5-7 = intermediário | aula 8-10 = avançado
    //    Para questões com campo "trilha" usa trilha 1/2/3
    let nivelAlvo = 1;
    if (G.combo >= 5) nivelAlvo = 3;
    else if (G.combo >= 2) nivelAlvo = 2;

    // 3. Filtra por dificuldade (via "aula" ou "trilha") e evita repetição
    let candidatos = dispBloco.filter(q => {
        if (perguntasFeitas.includes(q.id)) return false;
        // questões novas usam campo "aula"
        if (q.aula !== undefined) {
            if (nivelAlvo === 1) return q.aula <= 4;
            if (nivelAlvo === 2) return q.aula >= 4 && q.aula <= 7;
            return q.aula >= 7;
        }
        // questões legadas usam campo "trilha"
        if (q.trilha !== undefined) return q.trilha === nivelAlvo;
        return true; // sem campo de nível: sempre disponível
    });

    // 4. Fallback: qualquer questão não respondida do bloco
    if (candidatos.length === 0) {
        candidatos = dispBloco.filter(q => !perguntasFeitas.includes(q.id));
    }

    // 5. Reinício de ciclo quando todas foram respondidas
    if (candidatos.length === 0) {
        const idsBloco = dispBloco.map(q => q.id);
        perguntasFeitas = perguntasFeitas.filter(id => !idsBloco.includes(id));
        candidatos = dispBloco;
    }

    // 6. Sorteio aleatório
    const q = candidatos[Math.floor(Math.random() * candidatos.length)];
    perguntasFeitas.push(q.id);

    console.log(`[LabTech] ${G.nome} | Bloco ${blockId} | Aula/Trilha: ${q.aula ?? q.trilha} | ${q.id}`);
    return q;
}

export function limparHistoricoSessao() {
    perguntasFeitas = [];
}
