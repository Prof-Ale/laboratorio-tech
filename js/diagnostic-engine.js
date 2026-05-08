/**
 * diagnostic-engine.js
 * v1.0 — Núcleo Diagnóstico Pedagógico do LabTech
 *
 * Responsável por:
 * - interpretação pedagógica das alternativas
 * - classificação de erros
 * - taxonomia diagnóstica
 * - perfil cognitivo
 * - persistência de padrões
 * - sugestões de intervenção
 *
 * IMPORTANTE:
 * NÃO controla UI.
 * NÃO controla HUD.
 * NÃO renderiza nada.
 * NÃO manipula DOM.
 *
 * Esse arquivo deve permanecer puramente pedagógico/lógico.
 */


/* ============================================================
   TAXONOMIA OFICIAL DE ERROS
============================================================ */

export const ERROS = {

    VALOR_POSICIONAL: [
        'nao_reagrupou',
        'mistura_ordens',
        'soma_digito_digito',
        'troca_dezenas_unidades'
    ],

    OPERACIONAL: [
        'desatencao',
        'erro_sinal',
        'tabuada_fragil',
        'erro_subtracao',
        'erro_multiplicacao'
    ],

    PORCENTAGEM: [
        'erro_base_100',
        'percentual_como_valor_absoluto',
        'troca_percentual_fracao',
        'erro_regra_tres'
    ],

    FRACAO: [
        'soma_num_den',
        'erro_equivalencia',
        'erro_simplificacao'
    ],

    ALGEBRA: [
        'isolamento_incorreto',
        'erro_distributiva',
        'troca_incognita'
    ],

    MEDIDAS: [
        'erro_conversao',
        'mistura_unidades',
        'erro_escala'
    ],

    ESTATISTICA: [
        'erro_leitura_grafico',
        'erro_media',
        'erro_interpretacao'
    ]
};


/* ============================================================
   MENSAGENS PEDAGÓGICAS
============================================================ */

export const MENSAGENS_ERRO = {

    conceito:
        'Erro conceitual identificado.',

    calculo:
        'Erro operacional identificado.',

    porcentagem:
        'Erro relacionado ao raciocínio percentual.'
};


/* ============================================================
   INTERPRETAÇÃO DE ALTERNATIVA
============================================================ */

export function analisarAlternativa(alternativa) {

    if (!alternativa) {

        return {
            correto: false,
            categoria: 'calculo',
            erro: 'erro_desconhecido',
            descricao: 'Alternativa inválida.'
        };
    }

    if (alternativa.tipo === 'acerto') {

        return {
            correto: true,
            categoria: null,
            erro: null,
            descricao: null
        };
    }

    return {

        correto: false,

        categoria:
            alternativa.categoria || 'calculo',

        erro:
            alternativa.erro || 'erro_generico',

        descricao:
            alternativa.descricao ||
            MENSAGENS_ERRO[alternativa.categoria] ||
            'Erro identificado.'
    };
}


/* ============================================================
   REGISTRO DIAGNÓSTICO
============================================================ */

export function registrarErro(G, erro) {

    if (!erro) return;

    if (!G.diagnostico) {
        G.diagnostico = {};
    }

    G.diagnostico[erro] =
        (G.diagnostico[erro] || 0) + 1;
}


/* ============================================================
   OBTÉM ERROS MAIS FREQUENTES
============================================================ */

export function obterErrosFrequentes(G, limite = 5) {

    if (!G.diagnostico) return [];

    return Object.entries(G.diagnostico)

        .sort((a, b) => b[1] - a[1])

        .slice(0, limite)

        .map(([erro, quantidade]) => ({
            erro,
            quantidade
        }));
}


/* ============================================================
   PERFIL COGNITIVO
============================================================ */

export function obterPerfilCognitivo(G) {

    const d = G.diagnostico || {};

    return {

        valorPosicional:
            (d.nao_reagrupou || 0) +
            (d.mistura_ordens || 0) +
            (d.soma_digito_digito || 0),

        operacional:
            (d.desatencao || 0) +
            (d.erro_sinal || 0) +
            (d.tabuada_fragil || 0),

        porcentagem:
            (d.erro_base_100 || 0) +
            (d.percentual_como_valor_absoluto || 0),

        fracao:
            (d.soma_num_den || 0) +
            (d.erro_equivalencia || 0),

        algebra:
            (d.erro_distributiva || 0) +
            (d.isolamento_incorreto || 0),

        medidas:
            (d.erro_conversao || 0) +
            (d.mistura_unidades || 0),

        estatistica:
            (d.erro_leitura_grafico || 0) +
            (d.erro_media || 0)
    };
}


/* ============================================================
   DETECÇÃO DE DIFICULDADE DOMINANTE
============================================================ */

export function detectarDificuldadeDominante(G) {

    const perfil = obterPerfilCognitivo(G);

    let maior = 0;

    let categoria = null;

    Object.entries(perfil).forEach(([k, v]) => {

        if (v > maior) {

            maior = v;

            categoria = k;
        }
    });

    return {

        categoria,
        intensidade: maior
    };
}


/* ============================================================
   SUGESTÕES PEDAGÓGICAS
============================================================ */

export function sugerirIntervencao(G) {

    const dominante =
        detectarDificuldadeDominante(G);

    switch (dominante.categoria) {

        case 'valorPosicional':

            return {
                tipo: 'recomposicao_decimal',
                titulo: 'Recomposição Decimal',
                dica:
                    'Retomar dezenas, unidades e reagrupamento com apoio visual.'
            };

        case 'operacional':

            return {
                tipo: 'automatizacao_operacoes',
                titulo: 'Automatização Operacional',
                dica:
                    'Trabalhar cálculo mental, sinais e atenção operacional.'
            };

        case 'porcentagem':

            return {
                tipo: 'porcentagem_visual',
                titulo: 'Porcentagem Visual',
                dica:
                    'Utilizar malhas, barras e representações concretas.'
            };

        case 'fracao':

            return {
                tipo: 'fracao_concreta',
                titulo: 'Frações Concretas',
                dica:
                    'Explorar equivalência e representação visual.'
            };

        case 'algebra':

            return {
                tipo: 'pensamento_algebrico',
                titulo: 'Pensamento Algébrico',
                dica:
                    'Retomar padrões, incógnita e distributiva.'
            };

        case 'medidas':

            return {
                tipo: 'grandezas_medidas',
                titulo: 'Grandezas e Medidas',
                dica:
                    'Explorar conversões e escalas com situações reais.'
            };

        case 'estatistica':

            return {
                tipo: 'interpretacao_dados',
                titulo: 'Leitura de Dados',
                dica:
                    'Trabalhar gráficos, tabelas e interpretação.'
            };

        default:

            return null;
    }
}


/* ============================================================
   RESUMO PEDAGÓGICO
============================================================ */

export function gerarResumoPedagogico(G) {

    const dominante =
        detectarDificuldadeDominante(G);

    const perfil =
        obterPerfilCognitivo(G);

    const erros =
        obterErrosFrequentes(G);

    return {

        dificuldadeDominante:
            dominante.categoria,

        intensidade:
            dominante.intensidade,

        perfil,

        errosFrequentes:
            erros,

        intervencao:
            sugerirIntervencao(G)
    };
}


/* ============================================================
   RESET DIAGNÓSTICO
============================================================ */

export function limparDiagnostico(G) {

    G.diagnostico = {};
}


/* ============================================================
   DEBUG PEDAGÓGICO
============================================================ */

export function exibirDiagnosticoConsole(G) {

    console.group('[LabTech Diagnóstico]');

    console.log(
        'Diagnóstico bruto:',
        G.diagnostico || {}
    );

    console.log(
        'Perfil cognitivo:',
        obterPerfilCognitivo(G)
    );

    console.log(
        'Resumo:',
        gerarResumoPedagogico(G)
    );

    console.groupEnd();
}
