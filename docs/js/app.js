/* ═══════════════════════════════════════════
   MONSTER GUESSR — app.js
═══════════════════════════════════════════ */

// ── Constantes UI ──────────────────────────
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };

// ── État global ────────────────────────────
const state = {
    mode: 'daily',
    target: null,
    attempts: [],
    over: false,
    survScore: 0,
    survBest: parseInt(localStorage.getItem('mg_surv_best')) || 0,
    survLives: 3,
    acIndex: -1,
};

// ── Init ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupEvents();
    switchMode('daily');
    startClock();
    $('surv-best').textContent = state.survBest;
});

// ── Thème ──────────────────────────────────
function initTheme() {
    const saved = localStorage.getItem('mg_theme') || 'dark';
    setTheme(saved);
    $('theme-toggle').addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('mg_theme', next);
    });
}

function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    $('theme-toggle').innerHTML = t === 'dark'
        ? '<span class="t-icon">☀</span><span class="t-label"> Lumineux</span>'
        : '<span class="t-icon">🌙</span><span class="t-label"> Sombre</span>';
}

// ── Horloge countdown ──────────────────────
function startClock() {
    const tick = () => {
        const now = new Date();
        const diff = new Date().setHours(24,0,0,0) - now;
        const fmt = [diff/3600000, (diff%3600000)/60000, (diff%60000)/1000]
            .map(v => String(Math.floor(v)).padStart(2,'0')).join(':');
        $('res-timer').textContent = fmt;
    };
    tick();
    setInterval(tick, 1000);
}

// ── Daily monster (hash stable sur la date) ─
function getDailyMonster() {
    const d = new Date();
    const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    let h = 0;
    for (const c of key) h = c.charCodeAt(0) + ((h << 5) - h);
    return M[Math.abs(h) % M.length];
}

// ── Initialisation d'une partie ────────────
function initGame() {
    state.attempts = [];
    state.over = false;

    $('desktop-rows-container').innerHTML = '';
    $('mobile-cards-container').innerHTML = '';
    $('result-banner').className = 'result-banner';
    $('game-over-screen').classList.remove('on');

    const input = $('guess-input');
    input.disabled = false;
    input.value = '';
    $('guess-btn').disabled = false;

    if (state.mode === 'daily') {
        state.target = getDailyMonster();
        document.body.classList.remove('survival-mode');
        const todayStr = new Date().toDateString();
        if (localStorage.getItem('mg_daily_date') === todayStr) {
            restoreDaily();
            return;
        }
    } else {
        state.target = M[Math.floor(Math.random() * M.length)];
        document.body.classList.add('survival-mode');
        updateSurvUI();
    }
    updateLiveDots();
}

// ── Modes ──────────────────────────────────
function switchMode(mode) {
    state.mode = mode;
    $('btn-daily').classList.toggle('active', mode === 'daily');
    $('btn-surv').classList.toggle('active', mode === 'survival');

    const isDaily = mode === 'daily';
    $('survival-status-bar').classList.toggle('on', !isDaily);
    $('daily-dots-bar').classList.toggle('hidden', !isDaily);

    if (!isDaily) { state.survScore = 0; state.survLives = 3; }
    initGame();
}

// ── Survie UI ──────────────────────────────
function updateSurvUI() {
    $('surv-score').textContent = state.survScore;
    $('surv-best').textContent = state.survBest;
    const c = $('surv-lives-container');
    c.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const d = el('div', 'sdot');
        d.classList.add(i < state.survLives ? 'win' : 'used');
        c.appendChild(d);
    }
}

// ── Boules daily en cours ──────────────────
function updateLiveDots() {
    if (state.mode !== 'daily') return;
    const wrap = $('daily-dots-live');
    wrap.innerHTML = '';
    for (let i = 0; i < MAX; i++) {
        const d = el('div', 'ddot');
        if (i < state.attempts.length) {
            d.classList.add(state.attempts[i].n === state.target.n ? 'win' : 'lose');
        }
        wrap.appendChild(d);
    }
}

// ── Autocomplétion ─────────────────────────
function setupEvents() {
    const input = $('guess-input');

    // Modes
    $('btn-daily').addEventListener('click', () => switchMode('daily'));
    $('btn-surv').addEventListener('click', () => switchMode('survival'));
    $('retry-btn').addEventListener('click', initGame);

    // Modals
    $('btn-help').addEventListener('click', () => openModal('modal-help'));
    $('btn-bestiary').addEventListener('click', () => { renderBestiary(); openModal('modal-bestiary'); });
    document.querySelectorAll('.modal-close').forEach(b => b.addEventListener('click', () => closeModal(b.dataset.modal)));
    document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id)); });

    // Filtres bestiaire
    ['bestiary-search','bestiary-gen','bestiary-class'].forEach(id => $(id)?.addEventListener('input', renderBestiary));

    // Input
    input.addEventListener('input', updateAC);
    input.addEventListener('keydown', onInputKey);
    $('guess-btn').addEventListener('click', () => submit(input.value));
    document.addEventListener('click', e => { if (!e.target.closest('.autocomplete-wrap')) clearAC(); });

    // Partage
    $('share-btn').addEventListener('click', shareResults);
}

function openModal(id)  { $(id).classList.add('open'); }
function closeModal(id) { $(id).classList.remove('open'); }

function updateAC() {
    const val = $('guess-input').value.toLowerCase().trim();
    const list = $('autocomplete-list');
    list.innerHTML = '';
    state.acIndex = -1;
    if (!val) return;

    M.filter(m => m.n.toLowerCase().includes(val) && !state.attempts.some(a => a.n === m.n))
     .slice(0, 5)
     .forEach(m => {
        const item = el('div', 'autocomplete-item', `${m.n} <span class="gb-tag">${m.c}</span>`);
        item.addEventListener('click', () => { $('guess-input').value = m.n; clearAC(); submit(m.n); });
        list.appendChild(item);
     });
}

function onInputKey(e) {
    const items = document.querySelectorAll('.autocomplete-item');
    if (items.length) {
        if (e.key === 'ArrowDown') { e.preventDefault(); state.acIndex = (state.acIndex + 1) % items.length; highlightAC(items); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); state.acIndex = (state.acIndex - 1 + items.length) % items.length; highlightAC(items); }
        else if (e.key === 'Enter') { e.preventDefault(); state.acIndex > -1 ? items[state.acIndex].click() : submit($('guess-input').value); }
    } else if (e.key === 'Enter') submit($('guess-input').value);
}

function highlightAC(items) {
    items.forEach((item, i) => item.classList.toggle('selected', i === state.acIndex));
    if (state.acIndex > -1) items[state.acIndex].scrollIntoView({ block: 'nearest' });
}

function clearAC() { $('autocomplete-list').innerHTML = ''; state.acIndex = -1; }

// ── Soumettre un essai ─────────────────────
function submit(name) {
    if (state.over) return;
    const monster = M.find(m => m.n.toLowerCase() === name.toLowerCase().trim());
    if (!monster) { flash("Monstre inconnu de la guilde !", "ko"); return; }
    if (state.attempts.some(a => a.n === monster.n)) { flash("Vous avez déjà analysé ce monstre !", "ko"); return; }

    state.attempts.push(monster);
    clearAC();
    $('guess-input').value = '';
    addRow(monster);
    updateLiveDots();

    // Sauvegarde en cours de partie (daily)
    if (state.mode === 'daily') {
        localStorage.setItem('mg_daily_date', new Date().toDateString());
        localStorage.setItem('mg_daily_attempts', JSON.stringify(state.attempts));
    }

    if (monster.n === state.target.n) {
        endGame(true);
    } else if (state.mode === 'daily' && state.attempts.length >= MAX) {
        endGame(false);
    } else if (state.mode === 'survival') {
        state.survLives--;
        updateSurvUI();
        if (state.survLives <= 0) endGame(false);
        else flash(`Ce n'est pas la bonne cible ! Il vous reste ${state.survLives} essai(s).`, "ko");
    }
}

// ── Comparaison ────────────────────────────
function compare(key, val) {
    const t = state.target[key];
    if (val === t) return 'correct';
    if (['g','s','d'].includes(key) && Math.abs(val - t) === 1) return 'close';
    if (key === 'h' && (t.includes(val) || val.includes(t))) return 'close';
    return 'wrong';
}

function arrow(key, val) {
    if (!['g','s','d'].includes(key)) return '';
    return val < state.target[key] ? '▲' : val > state.target[key] ? '▼' : '';
}

function cellVal(key, monster) {
    if (key === 's') return SL[monster.s];
    if (key === 'd') return '★'.repeat(monster.d) + '☆'.repeat(5 - monster.d);
    return monster[key];
}

// ── Rendu d'un essai ───────────────────────
function addRow(monster) {
    const isWin = monster.n === state.target.n;
    const nameCls = isWin ? 'correct' : 'wrong';

    // Desktop
    const row = el('div', 'guess-row');
    const nameCell = el('div', `guess-cell ${nameCls}`, monster.n);
    nameCell.style.textAlign = 'left';
    nameCell.style.justifyContent = 'flex-start';
    nameCell.style.paddingLeft = '10px';
    row.appendChild(nameCell);

    COLS.forEach(col => {
        const state2 = compare(col.key, monster[col.key]);
        const a = arrow(col.key, monster[col.key]);
        const cell = el('div', `guess-cell ${state2}`, `${cellVal(col.key, monster)} ${a}`);
        row.appendChild(cell);
    });
    $('desktop-rows-container').insertBefore(row, $('desktop-rows-container').firstChild);

    // Mobile
    const card = el('div', 'guess-card');
    card.innerHTML = `
        <div class="guess-card-header">
            <span class="card-monster-name ${nameCls}">${monster.n}</span>
        </div>
        <div class="card-grid">
            ${COLS.map(col => {
                const s = compare(col.key, monster[col.key]);
                const a = arrow(col.key, monster[col.key]);
                return `<div class="card-cell ${s}">
                    <span class="card-label">${col.label}</span>
                    <span class="card-value">${cellVal(col.key, monster)}${a ? ` <span class="card-arrow">${a}</span>` : ''}</span>
                </div>`;
            }).join('')}
        </div>`;
    $('mobile-cards-container').insertBefore(card, $('mobile-cards-container').firstChild);
}

// ── Fin de partie ──────────────────────────
function endGame(win) {
    state.over = true;
    $('guess-input').disabled = true;
    $('guess-btn').disabled = true;

    if (state.mode === 'daily') {
        const todayStr = new Date().toDateString();
        localStorage.setItem('mg_daily_date', todayStr);
        localStorage.setItem('mg_daily_state', win ? 'win' : 'lose');
        localStorage.setItem('mg_daily_attempts', JSON.stringify(state.attempts));
        showBanner(win);
    } else {
        if (win) {
            state.survScore++;
            if (state.survScore > state.survBest) {
                state.survBest = state.survScore;
                localStorage.setItem('mg_surv_best', state.survBest);
            }
            flash(`Cible abattue ! Prochain monstre...`, "ok");
            setTimeout(initGame, 2000);
        } else {
            $('go-title').textContent = "QUEST FAILED !";
            $('go-message').textContent = `Vous avez été terrassé par le ${state.target.n}.`;
            $('stat-streak').textContent = state.survScore;
            $('stat-guesses').textContent = state.attempts.length;
            $('game-over-screen').classList.add('on');
        }
    }
}

// ── Bannière de fin daily ──────────────────
function showBanner(win) {
    const banner = $('result-banner');
    banner.className = `result-banner show ${win ? 'win' : 'lose'}`;
    $('res-title').textContent = win ? "CHASSE EFFECTUÉE !" : "QUEST FAILED !";
    $('res-monster').textContent = state.target.n;
    $('res-desc').textContent = win
        ? `Félicitations. Vous avez localisé la créature en ${state.attempts.length} essais.`
        : `Le monstre s'est enfui. C'était un(e) ${state.target.n} (Classe : ${state.target.c}).`;

    const row = $('attempts-dots-row');
    row.innerHTML = '';
    for (let i = 0; i < MAX; i++) {
        const d = el('div', 'attempt-dot');
        if (i < state.attempts.length) d.classList.add(state.attempts[i].n === state.target.n ? 'win' : 'lose');
        row.appendChild(d);
    }
}

// ── Restauration daily ─────────────────────
function restoreDaily() {
    const savedState = localStorage.getItem('mg_daily_state');
    const savedAttempts = JSON.parse(localStorage.getItem('mg_daily_attempts')) || [];
    state.attempts = savedAttempts;
    savedAttempts.forEach(m => addRow(m));
    updateLiveDots();
    // Partie terminée → afficher le résultat ; sinon juste remettre les lignes
    if (savedState) endGame(savedState === 'win');
}

// ── Flash ──────────────────────────────────
function flash(msg, type) {
    const f = $('flash-msg');
    f.textContent = msg;
    f.className = `flash on ${type}`;
    clearTimeout(f._t);
    f._t = setTimeout(() => f.classList.remove('on'), 4000);
}

// ── Partage ────────────────────────────────
function shareResults() {
    const emojiMap = { correct: '🟩', close: '🟨', wrong: '🟥' };
    let text = `⚔️ Monster Guessr — Quotidien\n📊 ${state.attempts.length}/${MAX}\n\n`;
    state.attempts.forEach(a => {
        let row = a.n === state.target.n ? '🟩' : '🟥';
        COLS.forEach(col => { row += emojiMap[compare(col.key, a[col.key])]; });
        text += row + '\n';
    });
    text += `\n🎮 Jouez sur https://kevinraphael95.github.io/mhfz/`;
    navigator.clipboard.writeText(text)
        .then(() => flash("Rapport copié ! 📜", "ok"))
        .catch(() => flash("Échec de la copie.", "ko"));
}

// ── Bestiaire ──────────────────────────────
function renderBestiary() {
    const search = $('bestiary-search').value.toLowerCase().trim();
    const genF = $('bestiary-gen').value;
    const clsF = $('bestiary-class').value;
    const genSel = $('bestiary-gen');
    const clsSel = $('bestiary-class');

    if (genSel.options.length === 1) {
        [...new Set(M.map(m => m.g))].sort((a,b) => a-b).forEach(g => {
            const o = el('option'); o.value = g; o.textContent = 'Génération ' + g; genSel.appendChild(o);
        });
        [...new Set(M.map(m => m.c))].sort().forEach(c => {
            const o = el('option'); o.value = c; o.textContent = c; clsSel.appendChild(o);
        });
    }

    const list = M.filter(m =>
        (!search || m.n.toLowerCase().includes(search)) &&
        (!genF || m.g == genF) &&
        (!clsF || m.c === clsF)
    ).sort((a,b) => a.n.localeCompare(b.n));

    $('bestiary-count').textContent = `— ${list.length} / ${M.length} monstres`;

    const grid = $('bestiary-grid');
    if (!list.length) { grid.innerHTML = '<div class="besti-empty">Aucun monstre trouvé</div>'; return; }

    const stars = n => '★'.repeat(n) + '☆'.repeat(5-n);
    grid.innerHTML = list.map(m => `
        <div class="besti-card">
            <div class="besti-name">${m.n}</div>
            <div class="besti-info">
                <div>Classe <span>${m.c}</span></div>
                <div>Génération <span>${m.g}</span></div>
                <div>Élément <span>${m.e}</span></div>
                <div>Taille <span>${SL[m.s]}</span></div>
                <div>Habitat <span>${m.h}</span></div>
                <div>Danger <span class="besti-danger">${stars(m.d)}</span></div>
            </div>
        </div>`).join('');
}


// ── KONAMI CODE ───────────────────────────────────────────────
(function () {
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight'];
  let buf = [];

  document.addEventListener('keydown', function (e) {
    if (e.target === $('guess-input')) return;
    buf.push(e.key); if (buf.length > KONAMI.length) buf.shift();
    if (buf.join(',') === KONAMI.join(',')) { buf = []; triggerKonami(); }
  });

  function triggerKonami() {
    if (document.getElementById('konami-modal')) return;
    const overlay = document.createElement('div');
    overlay.id = 'konami-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center;';
    overlay.innerHTML = `
      <div style="background:var(--panel,#1a1a2e);border:1px solid var(--border,#444);padding:2rem 2.5rem;text-align:center;max-width:320px;font-family:'DM Sans',sans-serif;">
        <p style="font-size:1.1rem;color:var(--white,#fff);margin:0 0 1.5rem;font-weight:600;letter-spacing:.05em;">PAS DE EASTER EGG À VOIR ICI</p>
        <button id="konami-close" style="background:none;border:1px solid var(--border,#444);color:var(--muted,#aaa);padding:.45rem 1.2rem;cursor:pointer;font-size:.85rem;font-family:'DM Sans',sans-serif;">ok ok</button>
      </div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    document.getElementById('konami-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  }
})();
