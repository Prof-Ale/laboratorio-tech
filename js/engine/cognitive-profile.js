/**
 * cognitive-profile.js — v1.0 "LabTech Hippocampus"
 * Motor de Memória Longitudinal. Salva e recupera o perfil cognitivo do aluno.
 * INTERVENÇÃO: Início da Adaptação Preditiva (Memória de Longo Prazo).
 */

const PREFIX = 'labtech_profile_';

// 1. CARREGA OU CRIA O PERFIL DO ALUNO
export function carregarPerfil(nomeAluno, turmaAluno) {
    if (!nomeAluno) return null;
    
    // Cria uma chave única no navegador (ex: labtech_profile_joao_7a)
    const keyId = `${nomeAluno}_${turmaAluno}`.toLowerCase().replace(/\s+/g, '_');
    const key = PREFIX + keyId;
    
    const salvo = localStorage.getItem(key);

    if (salvo) {
        console.log(`[HIPOCAMPO] 🧠 Memória recuperada para o aluno: ${nomeAluno}`);
        const perfil = JSON.parse(salvo);
        perfil.novoUsuario = false;
        return perfil;
    }

    console.log(`[HIPOCAMPO] 🆕 Criando nova rede neural (perfil) para: ${nomeAluno}`);
    const novoPerfil = criarPerfilBase(nomeAluno, turmaAluno, key);
    novoPerfil.novoUsuario = true;
    salvarPerfil(novoPerfil);
    return novoPerfil;
}

// 2. SALVA OS DADOS NO NAVEGADOR
export function salvarPerfil(perfil) {
    if (!perfil || !perfil.key) return;
    perfil.ultimaSessao = Date.now();
    localStorage.setItem(perfil.key, JSON.stringify(perfil));
}

// 3. ESTRUTURA BASE DA MEMÓRIA
function criarPerfilBase(nome, turma, key) {
    return {
        key: key,
        nome: nome,
        turma: turma,
        sessoesConcluidas: 0,
        questoesResolvidas: 0,
        // Onde ele trava mais ao longo da vida?
        errosHistoricos: {
            conceito: 0,
            procedimento: 0,
            calculo: 0
        },
        // Quais habilidades ele tem mais dificuldade?
        clustersProblema: {},
        // Preferência de aprendizado (Visual vs Abstrato) - Será alimentado no futuro
        afinidadeVisual: 0, 
        dataCriacao: Date.now(),
        ultimaSessao: Date.now()
    };
}

// 4. ATUALIZA A MEMÓRIA COM BASE NO ERRO (Chamado a cada clique do aluno)
export function registrarEvolucaoLongitudinal(G, analise, q) {
    if (!G.perfilCognitivo || !q) return; 
    
    const p = G.perfilCognitivo;
    const hab = q.bncc || "Geral";

    if (analise && !analise.correto) {
        // Se errou, aumenta a "febre" dessa habilidade no longo prazo
        p.errosHistoricos[analise.categoria] = (p.errosHistoricos[analise.categoria] || 0) + 1;
        p.clustersProblema[hab] = (p.clustersProblema[hab] || 0) + 1;
    } else if (analise && analise.correto) {
        // Se acertou, a ADA entende que ele está curando a defasagem
        if (p.clustersProblema[hab] > 0) p.clustersProblema[hab] -= 0.5; 
        p.questoesResolvidas = (p.questoesResolvidas || 0) + 1;
    }

    salvarPerfil(p); 
}

// 5. MOTOR DE PREVISÃO (Microintervenção Pré-Questão)
export function gerarMicroIntervencao(q, perfil) {
    if (!perfil || !q) return null;
    
    const hab = q.bncc || "Geral";
    const risco = perfil.clustersProblema[hab] || 0;

    // Se o aluno já errou muito essa mesma habilidade no passado (risco alto)
    if (risco >= 3) { 
        return `Atenção, ${perfil.nome}. Nossos registros apontam que este desafio exige cuidado. ${q.dica || 'Analise a reta com calma antes de agir.'}`;
    }
    
    return null; // Se não tem risco, a ADA fica quieta e deixa ele jogar.
}
