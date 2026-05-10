/**
 * main.js — v11.5 "LabTech Final Stable Engine"
 * Sincronizado com CSS v11.2 | Foco em HUD Real e Zona de Clique.
 */
import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { analisarAlternativa, registrarErro } from './engine/diagnostic-engine.js';
import { renderCv, setAnimando } from './game-engine.js';
import { AudioCtrl } from './engine/audioController.js'; 
import { updHUD, narrarContexto, toggleVoz, exibirGameOver } from './ui-manager.js';

// Helpers de DOM rápidos
const $ = (id) => document.getElementById(id);
const on = (id, fn) => { const el = $(id); if (el) el.onclick = fn; };

// Gerenciamento de Modais
const abrirM = (id) => $(id)?.classList.add('active');
const fecharM = (id) => $(id)?.classList.remove('active');

/* ============================================================
   CONTROLE DO AVATAR ADA (POSTO DE COMANDO)
   ============================================================ */
function animarAda(estado) {
    const assets = { img: $('av-img'), ok: $('vid-ok'), no: $('vid-no') };
    if (!assets.img) return;

    // Reset: Esconde todos os vídeos e imagem
    Object.values(assets).forEach(el => el?.classList.add('avh'));

    if (estado === 'ok' && assets.ok) {
        assets.ok.classList.remove('avh');
        assets.ok.play().catch(() => console.warn("ADA Success Video Interrupted"));
    } else if (estado === 'no' && assets.no) {
        assets.no.classList.remove('avh');
        assets.no.play().catch(() => console.warn("ADA Alert Video Interrupted"));
    } else {
        assets.img.classList.remove('avh');
    }
}

/* ============================================================
   NAVEGAÇÃO E FLUXO DE TELAS
   ============================================================ */
function mostrarSeletorBlocos() {
    G.nome = $('nome-cientista')?.value || 'Cientista';
    
    // Inicialização mandatória de áudio
    AudioCtrl.init();
    AudioCtrl.play();

    // Transição de tela
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
    
    // Ativa a ADA no modo Posto de Comando (250px)
    $('ada-command-post')?.classList.add('active');
    animarAda('idle');
    
    atualizarHudVisual();
    proximaQ();
}

/* ============================================================
   LÓGICA DE JOGO E RESPOSTAS
   ============================================================ */

/**
 * Atualiza as barras de progresso (Integridade) visualmente
 */
function atualizarHudVisual() {
    const barraVida = $('fv');
    if (barraVida) {
        barraVida.style.width = G.vida + "%";
        // Muda a cor se a vida estiver crítica
        barraVida.style.background = G.vida < 30 ? "var(--neon-red)" : "var(--neon-green)";
    }
    if ($('tnv')) $('tnv').textContent = G.combo > 0 ? G.combo : "1";
    updHUD(); // Sincroniza com o ui-manager
}

function processarResposta(alt, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    const analise = analisarAlternativa(alt);
    
    // 1. Bloqueio visual e cores nos botões
    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        // Se for a correta (independente de ser a clicada), fica verde
        if (String(b.textContent) === String(q.res)) b.classList.add('ok');
        // Se o aluno clicou na errada, essa fica vermelha
        if (String(b.textContent) === String(alt.valor) && !analise.correto) b.classList.add('no');
    });

    // 2. Consequências
    if (analise.correto) {
        G.acertos++; G.combo++;
        animarAda('ok');
        narrarContexto(q.passo);
    } else {
        G.combo = 0;
        registrarErro(G, analise);
        const dano = 10 + (analise.peso || 1) * 5;
        G.vida = Math.max(0, G.vida - dano);
        animarAda('no');
        narrarContexto(q.dica || analise.descricao);
    }
    
    // 3. Atualização de Interface
    atualizarHudVisual();
    $('btn-prox')?.classList.remove('hidden');

    if (G.vida <= 0) {
        setTimeout(() => {
            animarAda('no');
            exibirGameOver();
        }, 800);
    }
}

function proximaQ() {
    G.respondeu = false;
    animarAda('idle');
    const q = selQ(G.currentBlock);
    
    if (!q) {
        console.warn("Bloco finalizado ou erro ao carregar questão.");
        return;
    }
    
    renderQ(q);
}

function renderQ(q) {
    if ($('conta-display')) $('conta-display').textContent = q.display;
    const grid = $('grid-botoes');
    if (grid) grid.innerHTML = '';
    
    $('btn-prox')?.classList.add('hidden');
    
    renderCv(q); // Chama o canvas/reta se houver

    // Cria os botões garantindo que o evento de clique esteja limpo
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
   INICIALIZAÇÃO DE EVENTOS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Splash
    on('btn-acessar', mostrarSeletorBlocos);
    
    // 2. Seletor de Blocos
    [1,2,3,4,5,6].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));
    
    // 3. Game Controls
    on('btn-prox', proximaQ);
    on('btn-musica', () => AudioCtrl.toggle('btn-musica', 'tsom'));
    on('btn-voz', toggleVoz);

    // 4. Modais Superiores
    on('btn-perfil', () => {
        if ($('perfil-nome-display')) $('perfil-nome-display').textContent = G.nome;
        if ($('perfil-acertos-display')) $('perfil-acertos-display').textContent = G.acertos;
        if ($('perfil-vida-display')) $('perfil-vida-display').textContent = Math.round(G.vida);
        abrirM('mperfil');
    });
    
    on('btn-dash', () => abrirM('mdash'));
    on('btn-cred', () => abrirM('mcred'));
    
    // 5. Lógica de fechamento de modais universal
    document.querySelectorAll('.mx').forEach(btn => {
        btn.onclick = (e) => {
            const modal = e.target.closest('.modal');
            if (modal) modal.classList.remove('active');
        };
    });

    // 6. Voltar para o Seletor (Ação interna do jogo)
    document.querySelectorAll('[data-action="seletor"]').forEach(el => {
        el.onclick = () => {
            fecharM('go');
            fecharM('mperfil');
            document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
            $('block-selector')?.classList.remove('hidden');
            $('ada-command-post')?.classList.remove('active');
        };
    });

    console.log("LabTech 11.5: Sistema Blindado e Sincronizado.");
});
