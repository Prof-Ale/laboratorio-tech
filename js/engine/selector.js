// js/engine/selector.js
import { G } from './gameState.js';
import { pool } from '../data/questions/index.js';

export function selQ() {
    let disponiveis = pool.filter(q => q.t === G.trilha);

    // Se não achar na trilha atual, tenta a Trilha 1
    if (disponiveis.length === 0) {
        disponiveis = pool.filter(q => q.t === 1);
    }

    // Trava de Segurança: Se não houver NENHUMA questão (porque ainda vamos gerar), não deixa o jogo quebrar
    if (disponiveis.length === 0) {
        return {
            id: "TEMP", t: G.trilha, tipo: "aritmetica", 
            display: "Banco de Questões em Construção! 🚧", 
            botoes: ["1", "2", "3", "4"], res: "1", 
            passo: "O Professor Alê está a gerar o banco de dados...", 
            dica: "Aguarde a IA carregar as 120 questões!"
        };
    }

    return disponiveis[Math.floor(Math.random() * disponiveis.length)];
}
