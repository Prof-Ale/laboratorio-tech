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

const $ = (id) => document.getElementById(id);
const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };

const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

function atualizarDashboard() {
    const content = $('dash-content');
    if (!content) return;
    
    let html = "";
    if (!G.historico || Object.keys(G.historico).length === 0) {
        html = "<p style='text-align:center; opacity:0.5; padding:20px;'>Aguardando coleta de dados BNCC...</p>";
    } else {
        Object.entries(G.historico).forEach(([hab, dados]) => {
            const acertos = dados.acertos || 0;
            const erros = (dados.erros_conceito || 0) + (dados.erros_calculo || 0);
            
            html += `<div class="dash-card">
                <div style="color:var(--choco-gold); font-weight:bold; font-size:12px; margin-bottom:4px;">${hab}</div>
                <div style="font-size:11px; color:var(--neon-cyan);">
                    Sucesso: ${acertos} | Falhas: ${erros}
                </div>
            </div>`;
        });
    }
    content.innerHTML = html;
}

function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '7ºA';
    if (!G.historico) G.historico = {};

    AudioCtrl.init();
    AudioCtrl.play();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('block-selector')?.classList.remove('hidden');
    $('ada-command-post')?.classList.remove('active'); 
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
        registrarErro(G, analise); 
        const dano = 10 + (analise.peso || 1) * 5;
        G.vida = Math.max(0, G.vida - dano);
    }
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
    renderQ(q);
}

function renderQ(q) {
    if ($('conta-display')) $('conta-display').textContent = q.display;
    const grid = $('grid-botoes');
    if (grid) grid.innerHTML = '';
    $('btn-prox')?.classList.add('hidden');
    
    renderCv(q);

    const alternativas = [...(q.alternativas || [])];
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
