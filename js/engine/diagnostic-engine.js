/**
 * diagnostic-engine.js v2.0 — "ADA & Gemini Edition"
 * Núcleo de Inteligência Pedagógica do LabTech
 */

/* ============================================================
   CLUSTERS OFICIAIS (A Inteligência do Bloco 1 ao 6)
============================================================ */
export const CLUSTERS = {
    "NUMEROCENTRISMO": [
        "valorposicional_ignora_ordem",
        "decomposicao_confunde_dezena_unidade",
        "inteiros_confunde_sinal_adicao"
    ],
    "FRACIONARIO_DECIMAL": [
        "fracao_soma_denominadores",
        "fracao_soma_direta_bases_diferentes",
        "decimal_soma_desalinha_virgula",
        "decimal_multiplicacao_ignora_casas_totais"
    ],
    "MODELAGEM_E_ALGEBRA": [
        "problema_ignora_condicao_inteira",
        "modelagem_interpreta_dobro_como_soma",
        "equacao_mantem_sinal_transposicao",
        "algebra_distribuitiva_incompleta"
    ],
    "ESTRUTURA_ESPACIAL": [
        "geometry_confunde_perimetro_area",
        "poligono_generaliza_triangulo",
        "pitagoras_omite_raiz_final"
    ],
    "LITERACIA_ESTATISTICA": [
        "media_apenas_soma",
        "critica_ignora_outlier_na_media",
        "grafico_leitura_passiva"
    ]
};

/* ============================================================
   MENSAGENS DE INTERVENÇÃO (ADA Falando com o Aluno)
============================================================ */
export const INTERVENCOES = {
    conceito: "Precisamos voltar à base. O conceito por trás dessa operação ainda não está claro.",
    procedimento: "Você entendeu a ideia, mas o 'passo a passo' falhou. Vamos revisar o método?",
    calculo: "Atenção aos detalhes! Foi apenas um pequeno deslize na conta final.",
    interpretacao: "O desafio aqui é traduzir o problema para a matemática. Vamos ler de novo?"
};

/* ============================================================
   MECANISMO DE ANÁLISE (O Coração da ADA)
============================================================ */

export function analisarAlternativa(alternativa) {
    if (!alternativa) return { correto: false, erro: 'invalido' };

    if (alternativa.tipo === 'acerto') {
        return { correto: true };
    }

    // Retorna o DNA completo do erro
    return {
        correto: false,
        categoria: alternativa.categoria || 'calculo',
        erro: alternativa.erro || 'erro_generico',
        descricao: alternativa.descricao || 'Erro identificado.',
        peso: alternativa.peso || 1 // O peso (1 a 3) define a gravidade
    };
}

/* ============================================================
   REGISTRO E CÁLCULO DE PERFIL (Analytics do Prof. Alê)
============================================================ */

export function registrarErro(G, analise) {
    if (!G.diagnostico) G.diagnostico = { logs: [], scores: {} };

    // Registra o log detalhado
    G.diagnostico.logs.push({
        erro: analise.erro,
        categoria: analise.categoria,
        peso: analise.peso,
        timestamp: Date.now()
    });

    // Atualiza o score acumulado por cluster
    for (const [cluster, erros] of Object.entries(CLUSTERS)) {
        if (erros.includes(analise.erro)) {
            G.diagnostico.scores[cluster] = (G.diagnostico.scores[cluster] || 0) + analise.peso;
        }
    }
}

/**
 * Detecta a "Dificuldade Persistente Estrutural"
 * Se um cluster acumula score > 6 (ex: 2 erros de conceito peso 3), ADA dispara alerta.
 */
export function detectarAlertaCritico(G) {
    if (!G.diagnostico) return null;

    const alertas = Object.entries(G.diagnostico.scores)
        .filter(([cluster, score]) => score >= 6)
        .map(([cluster]) => cluster);

    return alertas.length > 0 ? alertas : null;
}

export function gerarResumoGeral(G) {
    const scores = G.diagnostico?.scores || {};
    const dominante = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];

    return {
        perfil: scores,
        clusterDominante: dominante ? dominante[0] : "Estável",
        nivelDificuldade: dominante ? (dominante[1] > 10 ? "Crítico" : "Em evolução") : "Iniciante",
        alertas: detectarAlertaCritico(G)
    };
}
