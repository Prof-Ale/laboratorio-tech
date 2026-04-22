// js/engine/selector.js
import { G } from './gameState.js';
import { pool } from '../data/questions/index.js';

// Memória do sistema: guarda os IDs das perguntas já feitas nesta sessão
let perguntasFeitas = [];

export function selQ() {
    let disponiveis = pool.filter(q => q.t === G.trilha);

    // Se não achar na trilha atual, tenta a Trilha 1
    if (disponiveis.length === 0) {
        disponiveis = pool.filter(q => q.t === 1);
    }

    // Trava de Segurança
    if (disponiveis.length === 0) {
        return {
            id: "TEMP", t: G.trilha, tipo: "aritmetica", 
            display: "Banco de Questões em Construção! 🚧", 
            botoes: ["1", "2", "3", "4"], res: "1", 
            passo: "O Professor Alê está a gerar o banco de dados...", 
            dica: "Aguarde a IA carregar as 120 questões!"
        };
    }

    // Filtra para mostrar APENAS as perguntas que ainda não saíram
    let naoFeitas = disponiveis.filter(q => !perguntasFeitas.includes(q.id));

    // Se o aluno já fez todas as 30 perguntas da trilha... Parabéns! O ciclo recomeça.
    if (naoFeitas.length === 0) {
        console.log("Ciclo completo! A embaralhar as perguntas novamente.");
        const idsDestaTrilha = disponiveis.map(q => q.id);
        // Limpa a memória apenas desta trilha
        perguntasFeitas = perguntasFeitas.filter(id => !idsDestaTrilha.includes(id));
        naoFeitas = disponiveis; 
    }

    // Sorteia uma pergunta nova das que restam
    const qSorteada = naoFeitas[Math.floor(Math.random() * naoFeitas.length)];
    
    // Regista na memória que esta já saiu
    perguntasFeitas.push(qSorteada.id);

    return qSorteada;
}
