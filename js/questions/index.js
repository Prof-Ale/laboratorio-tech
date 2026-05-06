// js/data/questions/index.js
// Pool completo — Bloco 1 (Base Numérica) + Bloco 2 (Números e Operações)

import { trilha1 } from './trilha1.js';
import { trilha2 } from './trilha2.js';
import { trilha3 } from './trilha3.js';
import { trilha4 } from './trilha4.js';

// Bloco 1 — A Base Numérica (Aulas 1 a 10)
import { bloco1_trilha1 } from './bloco1_trilha1.js';
import { bloco1_trilha2 } from './bloco1_trilha2.js';
import { bloco1_trilha3 } from './bloco1_trilha3.js';
import { bloco1_trilha4 } from './bloco1_trilha4.js';

// Bloco 2 — Números e Operações (Aulas 1 a 10)
import { bloco2_trilha1 } from './bloco2_trilha1.js';
import { bloco2_trilha2 } from './bloco2_trilha2.js';
import { bloco2_trilha3 } from './bloco2_trilha3.js';
import { bloco2_trilha4 } from './bloco2_trilha4.js';

export const pool = [

    // ── BLOCO 1 ────────────────────────────────────────────────────────
    ...bloco1_trilha1,  // Aulas 1-2: Valor Posicional e Adição/Subtração
    ...bloco1_trilha2,  // Aulas 3-5: Multiplicação, Divisão e Expressões
    ...bloco1_trilha3,  // Aulas 6-7: Divisibilidade e Primos
    ...bloco1_trilha4,  // Aulas 8-10: MMC, MDC e Potenciação

    // ── BLOCO 2 ────────────────────────────────────────────────────────
    ...bloco2_trilha1,  // Aulas 1-3: Inteiros, Reta Numérica, Adição/Subtração
    ...bloco2_trilha2,  // Aulas 4-5: Multiplicação/Divisão de Inteiros e Frações
    ...bloco2_trilha3,  // Aulas 6-8: Operações com Frações e Racionais/Decimais
    ...bloco2_trilha4,  // Aulas 9-10: Decimais e Proporcionalidade

    // ── TRILHAS LEGADAS (usadas internamente, não expostas como bloco) ──
    // Mantidas para compatibilidade retroativa
    ...trilha1.map(q => ({ ...q, bloco: 99 })),
    ...trilha2.map(q => ({ ...q, bloco: 99 })),
    ...trilha3.map(q => ({ ...q, bloco: 99 })),
    ...trilha4.map(q => ({ ...q, bloco: 99 })),
];
