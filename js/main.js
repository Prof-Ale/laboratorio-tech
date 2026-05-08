/**
 * main.js — v10.0 "MathLab Diagnóstico"
 * Usa addEventListener em vez de onclick para compatibilidade com type="module".
 * Sistema híbrido de diagnóstico pedagógico.
 */

import { G } from './engine/gameState.js';
import { selQ, limparHistoricoSessao } from './engine/selector.js';
import { renderCv, animarArcos, setAnimando } from './game-engine.js';
import { updHUD, narrarContexto, toggleMusica, toggleVoz, tocarAv, exibirGameOver } from './ui-manager.js';

let qAtual = null;

/* ============================================================
   DIAGNÓSTICO PEDAGÓGICO
============================================================ */

if (!G.diagnostico) G.diagnostico = {};

function registrarErroDiagnostico(chave) {
    if (!chave) return;
    G.diagnostico[chave] = (G.diagnostico[chave] || 0) + 1;
}

/**
 * Compatibilidade híbrida:
 * - Questões novas: alternativas[] (Com taxonomia e peso)
 * - Questões antigas: botoes[]
 */
function obterAlternativas(q) {
    // NOVO FORMATO
    if (Array.isArray(q.alternativas)) {
        return q.alternativas;
    }

    // FORMATO LEGADO (Adaptado para ter um peso padrão)
    return (q.botoes || []).map(valor => {
        const correta = Array.isArray(q.res)
            ? q.res.map(String).includes(String(valor))
            : String(valor) === String(q.res);

        if (correta) {
            return {
                valor,
                tipo: 'acerto'
            };
        }

        const ehConceito = q.erroConceito?.map(String).includes(String(valor));

        return {
            valor,
            tipo: 'erro',
            categoria: ehConceito ? 'conceito' : 'calculo',
            erro: ehConceito
                ? 'erro_conceitual_generico'
                : 'erro_operacional_generico',
            descricao: ehConceito
                ? 'Erro conceitual identificado'
                : 'Erro operacional identificado',
            peso: ehConceito ? 3 : 2 // Adicionado peso para o formato legado
        };
    });
}

function analisarResposta(q, alternativaEscolhida) {
    if (alternativaEscolhida.tipo === 'acerto') {
        return {
            correto: true,
            categoria: null,
            erro: null,
            descricao: null,
            peso: 0
        };
    }

    return {
        correto: false,
        categoria: alternativaEscolhida.categoria || 'calculo',
        erro: alternativaEscolhida.erro || 'erro_generico',
        descricao: alternativaEscolhida.descricao || 'Erro operacional identificado',
        peso: alternativaEscolhida.peso || 2
    };
}

/* ============================================================
   UTILITÁRIOS
============================================================ */
function $(id) { return document.getElementById(id); }

function on(id, fn) {
    const el = $(id);
    if (el) el.addEventListener('click', fn);
}

function ocultarTodas() {
    ['splash-screen','block-selector','game-screen'].forEach(id => {
        const el = $(id);
        if (el) el.classList.add('hidden');
    });
}

/* ============================================================
   PERSISTÊNCIA
============================================================ */
function carregarDados() {
    const raw = localStorage.getItem('laboratorio_tech_data');
    if (!raw) return;
    try {
        const d = JSON.parse(raw);
        G.historico = d.historico || {};
        G.nome      = d.nome      || "";
        G.turma     = d.turma     || "";
        if (d.diagnostico) G.diagnostico = d.diagnostico;
    } catch(e) { console.warn("Erro ao carregar dados:", e); }
}

function salvarProgresso() {
    localStorage.setItem('laboratorio_tech_data', JSON.stringify({
        historico: G.historico,
        nome:      G.nome,
        turma:     G.turma,
        diagnostico: G.diagnostico
    }));
}

carregarDados();

/* ============================================================
   NAVEGAÇÃO
============================================================ */
function mostrarSeletorBlocos() {
    G.nome  = $('nome-cientista')?.value.trim()  || 'Cientista';
    G.turma = $('turma-cientista')?.value.trim() || '';
    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
    narrarContexto(G.turma
        ? `Olá ${G.nome} da turma ${G.turma}, escolha o setor.`
        : `Olá ${G.nome}, escolha o setor do laboratório.`
    );
}

function voltarAoSplash() {
    ocultarTodas();
    $('splash-screen')?.classList.remove('hidden');
}

function iniciarBloco(id) {
    const nomes = { 1:"Base Numérica", 2:"Números e Operações",
                    3:"Grandezas e Medidas", 4:"Álgebra e Padrão", 5:"Estatística e Dados" };
    G.currentBlock = id;
    G.vida = 100; G.energia = 60; G.combo = 0; G.nivel = 1;
    G.acertos = 0; G.erros = 0;
    limparHistoricoSessao();

    ocultarTodas();
    $('game-screen')?.classList.remove('hidden');

    const nb = $('nome-bloco-display');
    if (nb) nb.textContent = nomes[id] || `Bloco ${id}`;

    const bgm = $('bgm');
    if (bgm && G.musica) { bgm.volume = 0.07; bgm.play().catch(()=>{}); }

    updHUD();
    narrarContexto(`Bloco ${id}: ${nomes[id]}. Sistema ativado.`);
    proximaQ();
}

function irParaSeletor() {
    setAnimando(false);
    const go = $('go');
    if (go) { go.classList.remove('show'); go.classList.remove('active'); }
    ocultarTodas();
    $('block-selector')?.classList.remove('hidden');
}

function abrirModal(id) {
    const m = $(id);
    if (m) { m.style.display = 'flex'; }
    if (id === 'mdash') preencherDashboard();
}

function fecharModal(id) {
    const m = $(id);
    if (m) m.style.display = 'none';
}

/* ============================================================
   QUESTÕES
============================================================ */
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length-1; i > 0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
}

function liberarProximo() {
    const btn = $('btn-prox');
    if (btn) btn.classList.remove('hidden');
}

function renderQ(q) {
    if (!q) {
        console.warn("Nenhuma questão disponível.");
        return;
    }

    const display = $('conta-display');
    const regra   = $('regra-box');
    const fb      = $('fb');
    const btnP    = $('btn-prox');

    if (display) display.innerHTML = '<span>' + q.display + '</span>';
    if (regra)   regra.innerHTML   = q.dica || '';

    // Limpa o feedback anterior
    if (fb) {
        fb.innerHTML = '';
        fb.className = ''; // Remove as classes fb-box erro/acerto
        fb.style.color = '';
    }

    if (btnP) btnP.classList.add('hidden');

    G.respondeu = false;
    setAnimando(false);
    renderCv(q);

    const grid = $('grid-botoes');
    if (!grid) return;
    grid.innerHTML = '';

    const alternativas = shuffle(obterAlternativas(q));

    grid.style.gridTemplateColumns =
        alternativas.length <= 3
            ? `repeat(${alternativas.length},1fr)`
            : '1fr 1fr';

    alternativas.forEach(alt => {
        const b = document.createElement('button');
        b.className = 'ba';
        b.textContent = String(alt.valor);
        b.addEventListener('click', () => {
            if (!G.respondeu) {
                // Passa o objeto completo 'alt' em vez de apenas o valor
                responder(alt, q);
            }
        });
        grid.appendChild(b);
    });
}

function responder(alternativa, q) {
    if (G.respondeu) return;
    G.respondeu = true;

    // Diagnóstico agora extrai os dados completos da alternativa clicada
    const diagnostico = analisarResposta(q, alternativa);
    const ok = diagnostico.correto;
    const opStr = String(alternativa.valor);

    if (q.bncc && !G.historico[q.bncc]) {
        G.historico[q.bncc] = {
            desc: q.bncc_desc || 'Habilidade BNCC',
            acertos: 0,
            erros_conceito: 0,
            erros_calculo: 0,
            bloco: G.currentBlock
        };
    }

    document.querySelectorAll('.ba').forEach(b => {
        b.classList.add('dis');
        const isCorreta = Array.isArray(q.res)
                ? q.res.map(String).includes(b.textContent)
                : b.textContent === String(q.res);

        if (isCorreta) b.classList.add('ok');
        if (b.textContent === opStr && !ok) {
            b.classList.add('no');
        }
    });

    const fb = $('fb');
    if (ok) {
        processarAcerto(q, fb);
    } else {
        processarErro(alternativa, diagnostico, q, fb);
    }

    salvarProgresso();
    updHUD();

    if (q.tipo === 'reta' || q.tipo === 'sinais') {
        animarArcos(q);
    }

    if (G.vida <= 0) {
        setTimeout(exibirGameOver, 1400);
    }
}

function processarAcerto(q, fbEl) {
    G.acertos++;
    G.combo++;
    G.consec_erros = 0;
    G.energia = Math.min(100, G.energia + 10);
    if (G.combo % 5 === 0) G.nivel++;
    if (q.bncc) G.historico[q.bncc].acertos++;

    const elogios = ['Feitiço Conjurado!', 'Magia Perfeita!', 'Dano Crítico na Sombra!', 'Sincronia Exata!'];
    const msg = elogios[Math.floor(Math.random() * elogios.length)];

    if (fbEl) {
        fbEl.className = 'fb-box acerto';
        fbEl.innerHTML = `
            <div class="fb-header text-green">
                <h3>✨ ${msg} (+10 Energia)</h3>
            </div>
            <div class="fb-guardiao mt-2">
                <p class="fb-passo">${q.passo}</p>
            </div>
        `;
    }
    
    tocarAv('ok');
    narrarContexto(msg + ' ' + q.passo);
    liberarProximo();
}

function processarErro(alternativa, diagnostico, q, fbEl) {
    G.erros++;
    G.combo = 0;
    G.consec_erros++;

    // Cálculo do Dano baseado no peso do erro (Risco Cognitivo)
    const pesoReal = diagnostico.peso || 2; 
    const damage = 5 + (pesoReal * 5); 
    G.vida = Math.max(0, G.vida - damage);

    const categoria = diagnostico.categoria || 'calculo';
    const erro = diagnostico.erro || 'erro_generico';

    registrarErroDiagnostico(erro);

    if (q.bncc) {
        if (categoria === 'conceito') {
            G.historico[q.bncc].erros_conceito++;
        } else {
            G.historico[q.bncc].erros_calculo++;
        }
    }

    const res = Array.isArray(q.res) ? q.res[0] : q.res;

    if (fbEl) {
        fbEl.className = 'fb-box erro'; 
        fbEl.innerHTML = `
            <div class="fb-header text-red">
                <h3>💥 Sombra contra-atacou! (-${damage} HP)</h3>
                <p class="fb-motivo">${diagnostico.descricao}</p>
            </div>
            <div class="fb-guardiao mt-2">
                <p class="fb-tutor">🐾 <strong>Guardião Oreo diz:</strong></p>
                <p class="fb-passo">${q.passo}</p>
                <p class="fb-dica">💡 <em>Dica: ${q.dica || 'Revise com calma e tente usar uma tabela posicional.'}</em></p>
            </div>
        `;
    }

    tocarAv('no');
    narrarContexto(diagnostico.descricao + ' Dica: ' + (q.dica || q.passo));

    console.log('[TELEMETRIA CÓDEX]', {
        habilidade: q.bncc,
        categoria,
        erro_mapeado: erro,
        peso_cognitivo: pesoReal,
        resposta_aluno: alternativa.valor,
        dano_recebido: damage
    });

    liberarProximo();
}

function proximaQ() {
    setAnimando(false);
    qAtual = selQ(G.currentBlock);
    renderQ(qAtual);
}

/* ============================================================
   DASHBOARD
============================================================ */
function preencherDashboard() {
    const cont = $('dash-content');
    if (!cont) return;

    const hs = Object.entries(G.historico).filter(([,h]) => h.bloco === G.currentBlock);
    if (hs.length === 0) {
        cont.innerHTML = '<p style="color:var(--text-muted);font-size:14px;">Nenhum dado ainda. Responda questões para ver o diagnóstico.</p>';
        return;
    }

    cont.innerHTML = hs.map(([cod, h]) => {
        const total = h.acertos + h.erros_conceito + h.erros_calculo;
        const pct   = total ? Math.round(h.acertos/total*100) : 0;
        const alerta = h.erros_conceito > 0
            ? `<div class="alerta-sinal">⚠️ ${h.erros_conceito} erro(s) de conceito</div>`
            : '';
        const alertaC = h.erros_calculo > 0
            ? `<div class="alerta-calc">📐 ${h.erros_calculo} erro(s) de cálculo</div>`
            : '';
        return `
<div class="dash-card">
  <h3>${cod}</h3>
  <p>${h.desc}</p>
  <div class="dash-bar"><div class="dash-fill-ok" style="width:${pct}%"></div></div>
  <p style="font-size:11px;color:var(--text-muted)">${pct}% de aproveitamento (${h.acertos}/${total})</p>
  ${alerta}${alertaC}
</div>`;
    }).join('');
}

/* ============================================================
   RELATÓRIO CSV
============================================================ */
function exportarRelatorioCSV() {
    const data = new Date().toLocaleDateString('pt-BR');
    let csv = 'Aluno;Turma;Data;Bloco;Código BNCC;Descrição;Acertos;Erros Conceito;Erros Cálculo;Total Erros;Aproveitamento\n';
    for (const cod in G.historico) {
        const h     = G.historico[cod];
        const erros = (h.erros_conceito||0) + (h.erros_calculo||0);
        const total = h.acertos + erros;
        const pct   = total ? Math.round(h.acertos/total*100)+'%' : '0%';
        csv += `${G.nome};${G.turma||''};${data};${h.bloco||'?'};${cod};${(h.desc||'').replace(/;/g,',')};${h.acertos};${h.erros_conceito||0};${h.erros_calculo||0};${erros};${pct}\n`;
    }
    const link = document.createElement('a');
    link.href     = URL.createObjectURL(new Blob(['\ufeff'+csv], {type:'text/csv;charset=utf-8;'}));
    link.download = `Relatorio_${G.nome.replace(/\s/g,'_')}_${G.turma||'semTurma'}.csv`;
    link.click();
}

function reiniciar() {
    G.vida = 100; G.energia = 60; G.combo = 0;
    const go = $('go');
    if (go) { go.classList.remove('show'); go.classList.remove('active'); }
    updHUD();
    proximaQ();
}

function verPerfilAluno() {
    const patente = G.nivel > 5 ? 'Cientista Master' : 'Explorador';
    narrarContexto(`${G.nome}, patente: ${patente}.`);
    alert(`Cientista: ${G.nome}${G.turma ? '\nTurma: '+G.turma : ''}\nPatente: ${patente}\nAcertos: ${G.acertos} | Erros: ${G.erros}`);
}

/* ============================================================
   BIND DE EVENTOS
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    on('btn-acessar', mostrarSeletorBlocos);
    $('nome-cientista')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') mostrarSeletorBlocos();
    });

    on('btn-voltar-splash', voltarAoSplash);

    [1,2,3,4,5].forEach(i => on(`btn-bloco-${i}`, () => iniciarBloco(i)));

    document.querySelectorAll('[data-action="seletor"]').forEach(el =>
        el.addEventListener('click', irParaSeletor)
    );

    on('btn-musica',  () => { toggleMusica(); });
    on('btn-voz',      () => { toggleVoz();    });
    on('btn-perfil',  verPerfilAluno);
    on('btn-dash',    () => abrirModal('mdash'));
    on('btn-cred',    () => abrirModal('mcred'));
    on('btn-fecha-dash', () => fecharModal('mdash'));
    on('btn-fecha-cred', () => fecharModal('mcred'));
    on('btn-csv',     exportarRelatorioCSV);
    on('btn-reiniciar', reiniciar);
    on('btn-prox', proximaQ);

    document.addEventListener('keydown', e => {
        if ((e.key==='Enter'||e.key===' ') && document.activeElement?.classList.contains('ba')) {
            document.activeElement.click();
            e.preventDefault();
        }
    });

    console.log('[LabTech Códex] Sistema Batalha Matemática ativo com Motor de Risco Cognitivo.');
});
