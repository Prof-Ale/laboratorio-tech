/**
 * question-normalizer.js — v1.0 "LabTech Gatekeeper"
 * Responsabilidade: Garantir que qualquer formato de questão (antigo ou novo)
 * seja convertido para uma estrutura estrita, segura e previsível.
 * Fim das variáveis undefined quebrando o Canvas ou o Dashboard.
 */

export function normalizarQuestao(qRaw) {
    if (!qRaw) {
        console.error("🚨 [Normalizador] Tentativa de normalizar questão nula.");
        return null;
    }

    // 1. Identificação Básica
    // Se a questão não tiver ID, geramos um fallback para não quebrar a sessão
    const id = qRaw.id || `gen_${Math.random().toString(36).substring(2, 9)}`;
    const tipo = qRaw.tipo || "padrao";
    const display = qRaw.display || "Desafio não formulado.";

    // 2. Normalização Matemática (Crucial para o game-engine.js)
    // Resolve a bagunça histórica: 'a', 'inicio', 'valorInicial' viram sempre 'a'
    const aCru = qRaw.a !== undefined ? qRaw.a : (qRaw.inicio !== undefined ? qRaw.inicio : (qRaw.valorInicial !== undefined ? qRaw.valorInicial : 0));
    
    // Resolve: 'b', 'salto', 'valor' viram sempre 'b'
    const bCru = qRaw.b !== undefined ? qRaw.b : (qRaw.salto !== undefined ? qRaw.salto : (qRaw.valor !== undefined ? qRaw.valor : 0));

    // Força a tipagem numérica (Evita que "-3" como string quebre a matemática)
    const a = parseFloat(String(aCru).replace(/[^\d.-]/g, '')) || 0;
    const b = parseFloat(String(bCru).replace(/[^\d.-]/g, '')) || 0;

    // 3. Resolução e Alternativas
    const res = qRaw.res !== undefined ? String(qRaw.res) : "0";
    const alternativas = Array.isArray(qRaw.alternativas) ? qRaw.alternativas : [];

    // 4. Telemetria e Diagnóstico (Crucial para o Dashboard)
    const bncc = qRaw.bncc || "EF00MA00"; // Fallback para não quebrar objeto do Dashboard
    const cluster = qRaw.cluster || "geral";
    const tipoPedagogico = qRaw.tipoPedagogico || qRaw.categoria || "recomposicao";
    const dificuldade = Number(qRaw.dificuldade) || 1;
    const peso = Number(qRaw.peso) || 1;

    // 5. ADA e Feedback Escrito
    const passo = qRaw.passo || "Análise correta. Você dominou este conceito.";
    const dica = qRaw.dica || qRaw.descricao || "Atenção à regra de sinais e à posição na reta.";

    // Retorna o objeto blindado. O resto do sistema SÓ VAI LER ISSO.
    return {
        id,
        tipo,
        display,
        a,
        b,
        res,
        alternativas,
        bncc,
        cluster,
        tipoPedagogico,
        dificuldade,
        peso,
        passo,
        dica,
        // Mantemos o original encapsulado para debug futuro, se precisar
        _raw: qRaw 
    };
}
