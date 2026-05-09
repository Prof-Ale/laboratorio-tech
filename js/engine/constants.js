// js/engine/constants.js

export const CATEGORIAS = {
    CONCEITO: 'conceito',
    PROCEDIMENTO: 'procedimento',
    CALCULO: 'calculo',
    INTERPRETACAO: 'interpretacao',
    ESTRATEGIA: 'estrategia',
    ATENCAO: 'atencao'
};

export const PESOS = {
    LEVE: 1,  // Erros de atenção
    MEDIO: 2, // Erros de procedimento/estratégia
    GRAVE: 3  // Erros de conceito base
};

export const CLUSTERS = {
    NUMEROCENTRISMO: 'NUMEROCENTRISMO',
    FRACIONARIO_DECIMAL: 'FRACIONARIO_DECIMAL',
    MODELAGEM_ALGEBRA: 'MODELAGEM_ALGEBRA',
    ESTRUTURA_ESPACIAL: 'ESTRUTURA_ESPACIAL',
    LITERACIA_DADOS: 'LITERACIA_DADOS'
};
