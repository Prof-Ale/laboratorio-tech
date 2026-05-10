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

    return {
        correto: false,
        categoria: alternativa.categoria || 'calculo',
        erro: alternativa.erro || 'erro_generico',
        descricao: alternativa.descricao || 'Erro identificado.',
        peso: alternativa.peso || 1 
    };
}

/* ============================================================
   REGISTRO E CÁLCULO (Estado do Jogo G)
============================================================ */

export function registrarErro(G, analise) {
    // 1. Blindagem profunda: Garante que TODA a estrutura exista, 
    // mesmo se vier de um save antigo corrompido.
    if (!G.diagnostico) G.diagnostico = {};
    if (!G.diagnostico.logs) G.diagnostico.logs = [];
    if (!G.diagnostico.scores) G.diagnostico.scores = {};

    // 2. Agora o push funciona sempre!
    G.diagnostico.logs.push({
        erro: analise.erro,
        categoria: analise.categoria,
        peso: analise.peso,
        timestamp: Date.now()
    });

    // 3. Atualiza os Clusters (usando o try/catch para segurança extra)
    try {
        for (const [cluster, erros] of Object.entries(CLUSTERS)) {
            // Verifica se o cluster no constants é objeto (novo padrão QA) ou array (padrão antigo)
            const listaErros = Array.isArray(erros) ? erros : (erros.lista || []);
            
            if (listaErros.includes(analise.erro)) {
                G.diagnostico.scores[cluster] = (G.diagnostico.scores[cluster] || 0) + analise.peso;
            }
        }
    } catch(e) {
        console.warn("[Diagnóstico] Falha ao processar cluster, mas o jogo segue.", e);
    };
}
