/**
 * main.js — v12.0 "LabTech Quantum Logic"
 * Intervenções: Ativação de saltos dinâmicos e restauração do shuffle de questões.
 */
import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { updHUD, narrarContexto, toggleVoz, exibirGameOver } from './ui-manager.js';

// Helpers de DOM
const $ = (id) => document.getElementById(id);
const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };

// Gerenciamento de Modais
const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

/* ============================================================
   CONTROLE DO AVATAR ADA
   ============================================================ */
function animarAda(estado) {
    const assets = { img: $('av-img'), ok: $('vid-ok'), no: $('vid-no') };
    if (!assets.img) return;

    Object.values(assets).forEach(el => el?.classList.add('avh'));

    if (estado === 'ok' && assets.ok) {
        assets.ok.classList.remove('avh');
        assets.ok.play().catch(() => {});
    } else if (estado === 'no' && assets.no) {
        assets.no.classList.remove('avh');
        assets.no.play().catch(() => {});
    } else {
        assets.img.classList.remove('avh');
    }
}

/* ============================================================
   TELEMETRIA E DADOS
   ============================================================ */
function atualizarDashboard() {
    const content = $('dash-content');
    if (!content) return;
    
    let html = "";
    if (Object.keys(G.historico).length === 0) {
        html = "<p style='text-align:center; opacity:0.5;'>Nenhum dado coletado nesta sessão.</p>";
    } else {
        Object.entries(G.historico).forEach(([hab, dados]) => {
            html += `<div class="dash-card">
                <div style="color:var(--choco-gold); font-weight:bold; font-size:12px;">${hab}</div>
                <div style="font-size:11px; color:var(--neon-cyan); margin-top:4px;">
                    Acertos: ${dados.acertos} | Erros: ${dados.erros_conceito + dados.erros_calculo}
                </div>
            </div>`;
        });
    }
    content.innerHTML = html;
}

/* ============================================================
   NAVEGAÇÃO E FLUXO
   ============================================================ */
function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value.trim() || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '7ºA';
    
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
    G.erros = 0; // Reset de erros adicionado para v12
    G.combo = 0;
    
    // INTERVENÇÃO: Força o reset do seletor para garantir novo shuffle
    limparHistoricoSessao();

    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    $('game-screen')?.classList.remove('hidden');
    $('ada-command-post')?.classList.add('active');
    animarAda('idle');
    
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
   LÓGICA DE JOGO
   ============================================================ */
function processarResposta(alt, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    // INTERVENÇÃO CIRÚRGICA: Dispara o motor de animação com o valor do salto
    setAnimando(true);
    renderCv(q, alt.valor); 

    const analise = analisarAlternativa(alt);
    const feedbackTexto = analise.correto ? q.passo : (q.dica || analise.descricao);
    
    const fbContainer = $('fb');
    if (fbContainer) {
        fbContainer.textContent = feedbackTexto;
        fbContainer.style.display = 'block';
    }

    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        if (String(b.textContent) === String(q.res)) b.classList.add('ok');
        if (String(b.textContent) === String(alt.valor) && !analise.correto) b.classList.add('no');
    });

    if (analise.correto) {
        G.acertos++; G.combo++;
        animarAda('ok');
        narrarContexto(feedbackTexto);
    } else {
        G.combo = 0;
        G.erros++;
        registrarErro(G, analise);
        const dano = 10 + (analise.peso || 1) * 5;
        G.vida = Math.max(0, G.vida - dano);
        animarAda('no');
        narrarContexto(feedbackTexto);
    }
    
    atualizarHudVisual();
    $('btn-prox')?.classList.remove('hidden');

    if (G.vida <= 0) {
        setTimeout(() => { animarAda('no'); exibirGameOver(); }, 800);
    }
}

function proximaQ() {
    G.respondeu = false;
    animarAda('idle');
    
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
    
    // Renderiza a base (reta numérica) sem saltos ainda
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

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */
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

    console.log("LabTech 12.0: Quantum Logic Online.");
});
