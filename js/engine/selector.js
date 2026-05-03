/**
 * js/engine/selector.js
 * Motor de Seleção Inteligente - Versão 6.1 "MathLab Adaptativo"
 * Responsável por alinhar a complexidade da questão ao desempenho do aluno.
 */

import { G } from './gameState.js';
import { pool } from '../data/questions/index.js';

let perguntasFeitas = [];

/**
 * Seleciona uma questão baseada no bloco ativo e no desempenho (G.nivel/G.combo)
 * @param {number} blockId - O ID do bloco (1 a 5)
 * @returns {object} - Questão sorteada
 */
export function selQ(blockId) {
    // 1. Filtra inicialmente por Bloco
    let disponiveis = pool.filter(q => q.bloco === blockId);

    // 2. Determina a Trilha (Nível de Dificuldade) baseada no estado global G
    // G.trilha pode ser 1 (Reconhecimento), 2 (Aplicação) ou 3 (Investigação)
    // Ajuste dinâmico: Se combo > 3, tenta subir a trilha
    let trilhaAlvo = G.trilha;
    if (G.combo >= 3 && trilhaAlvo < 3) trilhaAlvo++;
    
    // 3. Filtra por Trilha e evita repetição
    let candidatos = disponiveis.filter(q => 
        q.trilha === trilhaAlvo && 
        !perguntasFeitas.includes(q.id)
    );

    // 4. Fallback Pedagógico: Se não houver perguntas na trilha alvo (esgotadas),
    // busca na trilha anterior para evitar interrupção.
    if (candidatos.length === 0) {
        candidatos = disponiveis.filter(q => !perguntasFeitas.includes(q.id));
    }

    // 5. Reinício de Ciclo (Lógica de Recomposição)
    if (candidatos.length === 0) {
        const idsDesteBloco = disponiveis.map(q => q.id);
        perguntasFeitas = perguntasFeitas.filter(id => !idsDesteBloco.includes(id));
        candidatos = disponiveis;
    }

    // 6. Sorteio Aleatório
    const indice = Math.floor(Math.random() * candidatos.length);
    const qSorteada = candidatos[indice];

    // 7. Atualiza estado e histórico
    perguntasFeitas.push(qSorteada.id);
    
    // Log de Diagnóstico para o Professor (Console)
    console.log(`[LabTech] Aluno: ${G.nome} | Bloco: ${blockId} | Trilha: ${qSorteada.trilha} | ID: ${qSorteada.id}`);

    return qSorteada;
}

export function limparHistoricoSessao() {
    perguntasFeitas = [];
    console.log("Histórico de questões zerado para novo diagnóstico.");
}
