/**
 * main.js — v13.1 "LabTech Sniper Pace"
 * Prioridade: Fim das Race Conditions + Ritmo Dinâmico (Overlap).
 * Fluxo: Diagnóstico -> HUD -> ADA (Background) + Canvas (Espera Pulo) -> Liberação.
 */
import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, setAnimando, animarArcos } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { updHUD, narrarContexto, toggleVoz, exibirGameOver } from './ui-manager.js';
import { initDebugMode, setDebug } from './engine/debug-mode.js';
import { carregarPerfil, salvarPerfil, registrarEvolucaoLongitudinal, gerarMicroIntervencao, extrairRelatorioProfessor } from './engine/cognitive-profile.js';

const $ = (id) => document.getElementById(id);
const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };

const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

/* ============================================================
   TELEMETRIA E DASHBOARD (PREMIUM EDITION)
   ============================================================ */
function atualizarDashboard() {
    const content = $('dash-content');
    if (!content) return;
    
    if (!G.historico || Object.keys(G.historico).length === 0) {
        content.innerHTML = "<p style='text-align:center; opacity:0.5; padding:20px;'>Aguardando coleta de dados BNCC...</p>";
        return;
    }

    // Cabeçalho com o botão de Exportar
    let html = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom: 1px solid var(--choco-gold); padding-bottom: 10px;">
            <h3 style="color:var(--choco-gold); margin:0; font-family: var(--font-display); font-size: 14px;">RELATÓRIO BNCC</h3>
            <button id="btn-export-csv" style="background:var(--neon-cyan); color:#000; border:none; padding:6px 12px; border-radius:8px; cursor:pointer; font-weight:900; font-family: var(--font-display); font-size:10px; transition: 0.2s;">📥 EXPORTAR CSV</button>
        </div>
        <div style="max-height: 60vh; overflow-y: auto; padding-right: 5px;">
    `;

    Object.entries(G.historico).forEach(([hab, dados]) => {
        const total = (dados.acertos || 0) + (dados.erros_conceito || 0) + (dados.erros_calculo || 0);
        if (total === 0) return;

        const txAcerto = Math.round(((dados.acertos || 0) / total) * 100);

        // O Médico dá o diagnóstico
        let diagnostico = "";
        if (dados.erros_conceito > dados.acertos) {
            diagnostico = `<div style="color: var(--neon-red); margin-top:6px; font-size:11px; font-weight:bold;">⚠️ Bloqueio Conceitual (Exige Revisão de Base)</div>`;
        } else if (dados.erros_calculo > 0) {
            diagnostico = `<div style="color: #ffbb33; margin-top:6px; font-size:11px; font-weight:bold;">📐 Falha Operacional (Erro de Atenção/Cálculo)</div>`;
        } else {
            diagnostico = `<div style="color: var(--neon-green); margin-top:6px; font-size:11px; font-weight:bold;">✅ Domínio Estabilizado</div>`;
        }

        html += `
            <div class="dash-card" style="background:rgba(255,255,255,0.05); border-left:4px solid var(--choco-gold); padding:12px; margin-bottom:12px; border-radius:6px;">
                <div style="display:flex; justify-content:space-between; font-weight:bold;">
                    <span style="color:var(--choco-gold); font-size:13px;">${hab}</span>
                    <span style="color:var(--neon-cyan); font-size:13px;">${txAcerto}% Precisão</span>
                </div>
                <div style="font-size:11px; margin-top:6px; opacity:0.8; display: flex; gap: 10px;">
                    <span style="color: var(--neon-green)">Acertos: ${dados.acertos || 0}</span> | 
                    <span style="color: var(--neon-red)">Erros Conceito: ${dados.erros_conceito || 0}</span> | 
                    <span style="color: #ffbb33">Erros Cálculo: ${dados.erros_calculo || 0}</span>
                </div>
                <div style="width:100%; height:6px; background:#222; border-radius:3px; margin-top:8px; overflow:hidden;">
                    <div style="width:${txAcerto}%; height:100%; background:var(--neon-green);"></div>
                </div>
                ${diagnostico}
            </div>`;
    });

    html += `</div>`; // Fecha a div com scroll
    content.innerHTML = html;

    // Conecta o clique do botão ao gerador de CSV
    const btnCsv = $('btn-export-csv');
    if (btnCsv) {
        btnCsv.onclick = exportarCSV;
    }
}

// O Gerador de CSV (Pode colar logo abaixo do atualizarDashboard)
function exportarCSV() {
    if (!G.historico) return;
    let csv = "Habilidade BNCC;Acertos;Erros de Conceito;Erros de Calculo;Precisao (%)\n";
    
    Object.entries(G.historico).forEach(([hab, dados]) => {
        const total = (dados.acertos || 0) + (dados.erros_conceito || 0) + (dados.erros_calculo || 0);
        if (total === 0) return;
        const txAcerto = Math.round(((dados.acertos || 0) / total) * 100);
        csv += `${hab};${dados.acertos || 0};${dados.erros_conceito || 0};${dados.erros_calculo || 0};${txAcerto}%\n`;
    });

    // Mágica do navegador para forçar download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", `Telemetria_LabTech_${G.nome.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '7ºA';
    if (!G.historico) G.historico = {};

    // --- MAGIA AQUI: O despertar da memória de longo prazo ---
    G.perfilCognitivo = carregarPerfil(G.nome, G.turma);

    AudioCtrl.init();
    AudioCtrl.play();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('block-selector')?.classList.remove('hidden');
    $('ada-command-post')?.classList.remove('active'); 

    // --- A ADA REAGE AO PERFIL DO ALUNO ---
    let mensagemBoasVindas = "";
    
    if (G.perfilCognitivo.novoUsuario) {
        mensagemBoasVindas = `Olá, ${G.nome}. É sua primeira vez no laboratório. Meu nome é ADA. Escolha um módulo e vamos começar sua calibração lógica.`;
    } else {
        mensagemBoasVindas = `Bem-vindo de volta à base, ${G.nome}! Seus registros da turma ${G.turma} foram carregados. Pronto para continuar nossa evolução?`;
    }
    
    narrarContexto(mensagemBoasVindas, true);
}

function iniciarBloco(id) {
    G.currentBlock = id;
    G.vida = 100;
    G.acertos = 0;
    G.combo = 0;
    
    limparHistoricoSessao();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('game-screen')?.classList.remove('hidden');
    $('ada-command-post')?.classList.add('active');
    
    atualizarHudVisual();
    proximaQ();
}

function atualizarHudVisual() {
    const barraVida = $('fv');
    if (barraVida) {
        barraVida.style.width = G.vida + "%";
        barraVida.style.background = G.vida < 30 ? "var(--neon-red)" : "var(--neon-green)";
    }
    if ($('tnv')) $('tnv').textContent = G.combo > 0 ? G.combo : "1";
    updHUD();
}

/* ============================================================
   PIPELINE ASSÍNCRONO DE RESPOSTA (O MAESTRO)
   ============================================================ */
async function processarResposta(alt, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    // --- ETAPA 1: DIAGNÓSTICO E CÁLCULO SILENCIOSO ---
    const getNum = (val) => parseFloat(String(val).replace(/[^\d.-]/g, '')) || 0;
    const pontoA = getNum(q.a || q.inicio || q.valorInicial);
    const pontoB = getNum(alt.valor);
    const deslocamento = pontoB - pontoA;
    
    const analise = analisarAlternativa(alt);
    const feedbackTexto = analise.correto ? q.passo : (q.dica || analise.descricao);

    // --- ETAPA 2: ATUALIZAÇÃO IMEDIATA DA UI E HUD ---
    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis'); // Trava botões imediatamente
        if (String(b.textContent) === String(q.res)) b.classList.add('ok');
        if (String(b.textContent) === String(alt.valor) && !analise.correto) b.classList.add('no');
    });

    const hab = q.bncc || "Geral";
    if (!G.historico[hab]) G.historico[hab] = { acertos: 0, erros_conceito: 0, erros_calculo: 0 };

    if (analise.correto) {
        G.acertos++; G.combo++;
        G.historico[hab].acertos++;
    } else {
        G.combo = 0;
        registrarErro(G, analise, q); // AGORA ELE ENVIA A QUESTÃO 'q'
        const dano = 10 + (analise.peso || 1) * 5;
        G.vida = Math.max(0, G.vida - dano);
    }
   registrarEvolucaoLongitudinal(G, analise, q);
    
    atualizarHudVisual(); // Mostra o dano/vida atualizada

    // --- ETAPA 3: ADA (ÁUDIO E VÍDEO EM BACKGROUND) ---
    // Removido o 'await'. A ADA fala enquanto o resto acontece.
    // Passamos 'analise.correto' para engatilhar a expressão certa.
    narrarContexto(feedbackTexto, analise.correto);

    // --- ETAPA 4: MOTOR GRÁFICO (Canvas) ---
    // Esperamos APENAS a animação do salto da bolinha
    await animarArcos(q, deslocamento);

    // --- ETAPA 5: LIBERAÇÃO (Feedback e Próximo Desafio) ---
    const fbContainer = $('fb');
    if (fbContainer) {
        fbContainer.textContent = feedbackTexto;
        fbContainer.style.display = 'block';
    }

    $('btn-prox')?.classList.remove('hidden');

    if (G.vida <= 0) {
        setTimeout(() => { exibirGameOver(); }, 800);
    }
}
/* ============================================================ */

function proximaQ() {
    G.respondeu = false;
    setAnimando(false);

    const fbContainer = $('fb');
    if (fbContainer) {
        fbContainer.textContent = '';
        fbContainer.style.display = 'none';
    }

    const q = selQ(G.currentBlock);
    if (!q) return;

    // --- MÁGICA AQUI: A Premonição da ADA ---
    const alertaPrevio = gerarMicroIntervencao(q, G.perfilCognitivo);
    if (alertaPrevio) {
        console.log("🔮 [PREDIÇÃO] ADA detectou risco! Disparando Microintervenção.");
        narrarContexto(alertaPrevio, false); // Fala a dica com a expressão de 'atenção'
    }

    renderQ(q);
}

function renderQ(q) {
    if ($('conta-display')) $('conta-display').textContent = q.display;
    const grid = $('grid-botoes');
    if (grid) grid.innerHTML = '';
    $('btn-prox')?.classList.add('hidden');
    
    renderCv(q);

    // --- MÁGICA AQUI: Embaralha as alternativas antes de desenhar os botões ---
    const alternativas = [...(q.alternativas || [])].sort(() => Math.random() - 0.5);

    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = alt.valor;
        b.onclick = (e) => {
            e.preventDefault();
            processarResposta(alt, q);
        };
        grid?.appendChild(b);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initDebugMode();
    on('btn-acessar', mostrarSeletorBlocos);
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    
    on('btn-prox', proximaQ);
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', () => {
        toggleVoz();
        if ($('tvoz')) $('tvoz').textContent = G.voz ? "ON" : "OFF";
    });

    on('btn-perfil', () => {
        if ($('perfil-nome-display')) $('perfil-nome-display').textContent = `${G.nome} | ${G.turma}`;
        if ($('perfil-acertos-display')) $('perfil-acertos-display').textContent = G.acertos;
        if ($('perfil-vida-display')) $('perfil-vida-display').textContent = Math.round(G.vida);
        abrirM('mperfil');
    });
    
    on('btn-dash', () => {
        atualizarDashboard();
        abrirM('mdash');
    });
    
    on('btn-cred', () => abrirM('mcred'));
    // --- NOVO: Botão de Reconectar no Game Over ---
    on('btn-reiniciar', () => {
        fecharM('go'); // Fecha a janela vermelha de alerta
        if (G.currentBlock) {
            console.log(`[SISTEMA] Reiniciando o Módulo ${G.currentBlock}...`);
            iniciarBloco(G.currentBlock); // MÁGICA: Recarrega a fase atual do zero!
        }
    });
    
    document.querySelectorAll('.mx').forEach(btn => {
        btn.onclick = (e) => e.target.closest('.modal').classList.remove('active');
    });

    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            fecharM('mperfil');
            document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
            $('block-selector')?.classList.remove('hidden');
            $('ada-command-post')?.classList.remove('active');
        };
    });
});
