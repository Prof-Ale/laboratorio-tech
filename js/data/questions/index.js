// js/data/questions/index.js
// Pool unificado — Bloco 1 completo + trilhas originais dos demais blocos

import { trilha1 } from './trilha1.js';
import { trilha2 } from './trilha2.js';
import { trilha3 } from './trilha3.js';
import { trilha4 } from './trilha4.js';

import { bloco1_trilha1 } from './bloco1_trilha1.js';
import { bloco1_trilha2 } from './bloco1_trilha2.js';
import { bloco1_trilha3 } from './bloco1_trilha3.js';
import { bloco1_trilha4 } from './bloco1_trilha4.js';

// As trilhas originais (trilha1-4) cobriam o Bloco 1 antigo (inteiros/reta).
// Elas passam a ser usadas como banco auxiliar do Bloco 2 enquanto
// as questões específicas do Bloco 2 não são criadas.
export const pool = [
    // Bloco 1 — A Base Numérica (questões novas, alinhadas ao caderno)
    ...bloco1_trilha1,
    ...bloco1_trilha2,
    ...bloco1_trilha3,
    ...bloco1_trilha4,

    // Trilhas legadas — reutilizadas como Bloco 2 provisório
    // (inteiros, reta numérica, sinais)
    ...trilha1.map(q => ({ ...q, bloco: 2 })),
    ...trilha2.map(q => ({ ...q, bloco: 2 })),
    ...trilha3.map(q => ({ ...q, bloco: 2 })),
    ...trilha4.map(q => ({ ...q, bloco: 2 })),
];
