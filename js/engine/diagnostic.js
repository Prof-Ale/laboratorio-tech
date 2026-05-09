// js/engine/diagnostic.js

export const CLUSTERS = {
    "SISTEMA_BASE_10": [
        "valorposicional_ignora_ordem",
        "decomposicao_confunde_dezena_unidade",
        // ...
    ],
    "ALGORITMO_MULTIPLICACAO": [
        "multiplicacao_ignora_posicao_dezena",
        "multiplicacao_esquece_unidade",
        // ...
    ],
    "MODELAGEM_SITUACIONAL": [
        "problema_ignora_condicao_inteira",
        "problema_subtrai_fator_errado",
        // ...
    ]
};

// Aqui nascerá a função que mede a "Profundidade do Erro"
export function calcularPerfilCognitivo(historicoErros) {
    // Lógica para cruzar: Categoria + Peso + Recorrência
    // Se o aluno erra "conceito" (Peso 3) três vezes no mesmo Cluster, 
    // a I.A. dispara um alerta de "Dificuldade Persistente Estrutural".
}
