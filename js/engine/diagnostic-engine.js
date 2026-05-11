/**
 * diagnostic-engine.js v3.0 — "LabTech Biopsy Edition"
 * Núcleo de Inteligência Pedagógica e Taxonomia de Erros.
 * INTERVENÇÃO: Unificação de telemetria para o Dashboard e suporte ao Normalizador.
 */

/* ============================================================
   CLUSTERS DE DESVIO (Para o Selector-Engine decidir a rota)
============================================================ */
export const CLUSTERS = {
    "NUMEROCENTRISMO": ["valorposicional_ignora_ordem", "decomposicao_confunde_dezena_unidade", "inteiros_confunde_sinal_adicao"],
    "FRACIONARIO_DECIMAL": ["fracao_soma_denominadores", "fracao_soma_direta_bases_diferentes", "decimal_soma_desalinha_virgula"],
    "MODELAGEM_E_ALGEBRA": ["problema_ignora_condicao_inteira", "modelagem_interpreta_dobro_como_soma", "equacao_mantem_sinal_transposicao"],
    "ESTRUTURA_ESPACIAL": ["geometry_confunde_perimetro_area", "poligono_generaliza_triangulo"],
    "LITERACIA_ESTATISTICA": ["media_apenas_soma", "grafico_leitura_passiva"]
};

/**
 * Categorias de Erro (Para o Dashboard e ADA)
 * conceito: Erro de base, exige RECOMPOSIÇÃO.
 * procedimento: Erro de método, exige REFORÇO.
 * calculo: Erro de atenção, exige PRÁTICA.
 */
export const INTERVENCOES = {
    conceito: "Precisamos voltar à base. O conceito por trás dessa operação ainda não está claro.",
    procedimento: "Você entendeu a ideia, mas o 'passo a passo' falhou. Vamos revisar o método?",
    calculo: "Atenção aos detalhes! Foi apenas um pequeno deslize na conta final.",
    interpretacao: "O desafio aqui é traduzir o problema para a matemática. Vamos ler de novo?"
};

/* ============================================================
   MECANISMO DE ANÁLISE
============================================================ */

export function analisarAlternativa(alternativa) {
    if (!alternativa) return { correto: false, categoria: 'calculo', descricao: 'Erro não catalogado.' };

    // Se a alternativa já diz que é acerto, o médico dá alta
    if (alternativa.tipo === 'acerto' || alternativa.correto === true) {
        return { correto: true };
    }

    // Se for erro, extrai a "biopsia" da alternativa
    return {
        correto: false,
        categoria: alternativa.categoria || 'calculo', // conceito, procedimento, calculo
        erroId: alternativa.erro || 'erro_generico',   // ID para o Cluster
        descricao: alternativa.descricao || 'Análise técnica em andamento.',
        peso: alternativa.peso || 1 
    };
}

/* ============================================================
   REGISTRO DE TELEMETRIA (Dashboard & IA)
============================================================ */

export function registrarErro(G, analise) {
    // 1. Garante estruturas de dados
    if (!G.historico) G.historico = {};
    if (!G.diagnostico) G.diagnostico = { logs: [], scores: {} };

    // Pegamos a habilidade atual do estado global (setada pelo Selector)
    const hab = G.lastBncc || "Geral";

    // 2. ALIMENTA O DASHBOARD (Estrutura ui-manager.js)
    if (!G.historico[hab]) {
        G.historico[hab] = { acertos: 0, erros_conceito: 0, erros_calculo: 0, desc: "Habilidade BNCC" };
    }

    if (analise.categoria === 'conceito') {
        G.historico[hab].erros_conceito++;
    } else {
        // Procedimento e cálculo entram como 'falha operacional' no dashboard simples
        G.historico[hab].erros_calculo++;
    }

    // 3. ALIMENTA A IA (Para o Selector-Engine futuro)
    G.diagnostico.logs.push({
        bncc: hab,
        erro: analise.erroId,
        categoria: analise.categoria,
        timestamp: Date.now()
    });

    // Atualiza os Clusters para detecção de alertas críticos
    for (const [cluster, listaErros] of Object.entries(CLUSTERS)) {
        if (listaErros.includes(analise.erroId)) {
            G.diagnostico.scores[cluster] = (G.diagnostico.scores[cluster] || 0) + analise.peso;
        }
    }
    
    console.log(`[MEDICO] Erro registrado em ${hab}. Categoria: ${analise.categoria}`);
}
