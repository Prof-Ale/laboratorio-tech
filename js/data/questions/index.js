// js/data/questions/index.js — v9.0
// Pool completo: Blocos 1 a 5

import { bloco1_trilha1 } from './bloco1_trilha1.js';
import { bloco1_trilha2 } from './bloco1_trilha2.js';
import { bloco1_trilha3 } from './bloco1_trilha3.js';
import { bloco1_trilha4 } from './bloco1_trilha4.js';

import { bloco2_trilha1 } from './bloco2_trilha1.js';
import { bloco2_trilha2 } from './bloco2_trilha2.js';
import { bloco2_trilha3 } from './bloco2_trilha3.js';
import { bloco2_trilha4 } from './bloco2_trilha4.js';

import { bloco3 } from './bloco3.js';
import { bloco4 } from './bloco4.js';
import { bloco5 } from './bloco5.js';

export const pool = [
    // Bloco 1 — A Base Numérica
    ...bloco1_trilha1,
    ...bloco1_trilha2,
    ...bloco1_trilha3,
    ...bloco1_trilha4,

    // Bloco 2 — Números e Operações
    ...bloco2_trilha1,
    ...bloco2_trilha2,
    ...bloco2_trilha3,
    ...bloco2_trilha4,

    // Bloco 3 — Grandezas e Medidas
    ...bloco3,

    // Bloco 4 — Álgebra e Padrão
    ...bloco4,

    // Bloco 5 — Estatística e Dados
    ...bloco5,
];
