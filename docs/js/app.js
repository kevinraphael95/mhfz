/* ═══════════════════════════════════════════
   MONSTER GUESSR — Logique Applicative
═══════════════════════════════════════════ */

// --- Variables d'état Globales ---
let targetMonster = null;
let currentMode = 'daily'; // 'daily' ou 'survival'
let attempts = [];
let gameOver = false;
let autocompleteIndex = -1;

// Variables pour le mode survie
let survivalScore = 0;
let survivalBest = parseInt(localStorage.getItem('mg_surv_best')) || 0;
let survivalLives = 3;

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupEventListeners();
    switchMode('daily');
    startTimerLoop();
    document.getElementById('surv-best').textContent = survivalBest;
});

// --- Gestion des Thèmes (Clair / Sombre) ---
function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('mg_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('mg_theme', newTheme);
        updateThemeButton(newTheme);
    });
}

function updateThemeButton(theme) {
    const icon = theme === 'dark' ? '☀' : '🌙';
    const label = theme === 'dark' ? ' Lumineux' : ' Sombre';
    document.getElementById('theme-toggle').innerHTML = `<span class="t-icon">${icon}</span><span class="t-label">${label}</span>`;
}

// --- Logique du Mode Quotidien (Basé sur la date actuelle) ---
function getDailyMonster() {
    // Génère un index stable toutes les 24h basé sur le timestamp d'aujourd'hui
    const today = new Date();
    const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let hash = 0;
    for (let i = 0; i < dateString.length; i++) {
        hash = dateString.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % M.length;
    return M[index];
}

// --- Initialisation d'une partie ---
function initGame() {
    attempts = [];
    gameOver = false;
    
    // Nettoyage de l'interface graphique
    document.getElementById('desktop-rows-container').innerHTML = '';
    document.getElementById('mobile-cards-container').innerHTML = '';
    document.getElementById('result-banner').classList.remove('show', 'win', 'lose');
    document.getElementById('game-over-screen').classList.remove('on');
    
    const input = document.getElementById('guess-input');
    input.disabled = false;
    input.value = '';
    document.getElementById('guess-btn').disabled = false;

    if (currentMode === 'daily') {
        targetMonster = getDailyMonster();
        document.body.classList.remove('survival-mode');
        
        // Vérifier si le daily a déjà été joué aujourd'hui
        const lastPlayedDaily = localStorage.getItem('mg_daily_last_date');
        const todayStr = new Date().toDateString();
        if (lastPlayedDaily === todayStr) {
            loadSavedDailyGame();
        }
    } else {
        // Mode Survie
        targetMonster = M[Math.floor(Math.random() * M.length)];
        document.body.classList.add('survival-mode');
        updateSurvivalUI();
        updateAttemptsCounter();
    }
}

// --- Gestion des Modes de Jeu ---
function switchMode(mode) {
    currentMode = mode;
    const dailyBtn = document.getElementById('btn-daily');
    const survBtn = document.getElementById('btn-surv');
    const dailyTimerBar = document.getElementById('daily-timer-bar');
    const survivalStatusBar = document.getElementById('survival-status-bar');

    if (mode === 'daily') {
        dailyBtn.classList.add('active');
        survBtn.classList.remove('active');
        dailyTimerBar.style.display = 'flex';
        survivalStatusBar.classList.remove('on');
    } else {
        survBtn.classList.add('active');
        dailyBtn.classList.remove('active');
        dailyTimerBar.style.display = 'none';
        survivalStatusBar.classList.add('on');
        
        // Reset complet du run survie si on vient de cliquer dessus
        survivalScore = 0;
        survivalLives = 3;
    }
    initGame();
}

// --- Boucle de l'horloge globale (Heure restante avant minuit) ---
function startTimerLoop() {
    setInterval(() => {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        
        const diff = midnight - now;
        const hours = String(Math.floor(diff / 3600000)).padStart(2, '0');
        const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
        const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
        
        const format = `${hours}:${minutes}:${seconds}`;
        document.getElementById('global-timer').textContent = format;
        document.getElementById('res-timer').textContent = format;
    }, 1000);
}

// --- Mise à jour de la barre de vie et scores en Survie ---
function updateSurvivalUI() {
    document.getElementById('surv-score').textContent = survivalScore;
    document.getElementById('surv-best').textContent = survivalBest;
    
    const container = document.getElementById('surv-lives-container');
    container.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = 'sdot';
        if (i < survivalLives) {
            dot.classList.add('win'); // Vie active (verte)
        } else {
            dot.classList.add('used'); // Vie perdue (rouge / dorée délavée)
        }
        container.appendChild(dot);
    }
}

// --- Logique d'Autocomplétion ---
function setupEventListeners() {
    const input = document.getElementById('guess-input');
    const btn = document.getElementById('guess-btn');
    const helpBtn = document.getElementById('help-btn');

    // Changement de mode au clic
    document.getElementById('btn-daily').addEventListener('click', () => switchMode('daily'));
    document.getElementById('btn-surv').addEventListener('click', () => switchMode('survival'));
    document.getElementById('retry-btn').addEventListener('click', () => initGame());

    // Toggle de l'aide
    // Bouton "?" → modal aide
    document.getElementById('btn-help').addEventListener('click', () => {
        document.getElementById('modal-help').classList.add('open');
    });
   
    // Bouton "Bestiaire" → modal bestiaire
    document.getElementById('btn-bestiary').addEventListener('click', () => {
        renderBestiary();
        document.getElementById('modal-bestiary').classList.add('open');
    });
   
    // Fermeture des modals via bouton ✕
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById(btn.dataset.modal).classList.remove('open');
        });
    });
   
    // Fermeture en cliquant sur l'overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) overlay.classList.remove('open');
        });
    });
   
    // Fermeture via Echap
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
        }
    });
   
    // Filtres du bestiaire (live)
    ['bestiary-search', 'bestiary-gen', 'bestiary-class'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', renderBestiary);
    });

    // Écoute clavier sur la boîte de texte
    input.addEventListener('input', () => updateAutocomplete());
    input.addEventListener('keydown', (e) => {
        const items = document.querySelectorAll('.autocomplete-item');
        if (items.length > 0) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                autocompleteIndex = (autocompleteIndex + 1) % items.length;
                setActiveItem(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                autocompleteIndex = (autocompleteIndex - 1 + items.length) % items.length;
                setActiveItem(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (autocompleteIndex > -1) {
                    items[autocompleteIndex].click();
                } else {
                    submitGuess(input.value);
                }
            }
        } else if (e.key === 'Enter') {
            submitGuess(input.value);
        }
    });

    btn.addEventListener('click', () => submitGuess(input.value));

    // Fermer l'autocomplétion si on clique ailleurs
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.autocomplete-wrap')) {
            clearAutocomplete();
        }
    });

    // Bouton de partage
    document.getElementById('share-btn').addEventListener('click', shareResults);
}

function updateAutocomplete() {
    const input = document.getElementById('guess-input');
    const value = input.value.toLowerCase().trim();
    const list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    autocompleteIndex = -1;

    if (!value) return;

    // Filtrer les monstres déjà proposés
    const filtered = M.filter(m => 
        m.n.toLowerCase().includes(value) && 
        !attempts.some(att => att.n.toLowerCase() === m.n.toLowerCase())
    ).slice(0, 5); // Limiter à 5 suggestions maximales

    filtered.forEach(monster => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerHTML = `${monster.n} <span class="gb-tag">${monster.c}</span>`;
        item.addEventListener('click', () => {
            input.value = monster.n;
            clearAutocomplete();
            submitGuess(monster.n);
        });
        list.appendChild(item);
    });
}

function setActiveItem(items) {
    items.forEach((item, index) => {
        if (index === autocompleteIndex) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('selected');
        }
    });
}

function clearAutocomplete() {
    document.getElementById('autocomplete-list').innerHTML = '';
    autocompleteIndex = -1;
}

// --- Traitement de l'essai de l'utilisateur (Main Logic) ---
function submitGuess(name) {
    if (gameOver) return;
    
    const monster = M.find(m => m.n.toLowerCase() === name.toLowerCase().trim());
    if (!monster) {
        showFlash("Monstre inconnu de la guilde !", "ko");
        return;
    }

    if (attempts.some(att => att.n === monster.n)) {
        showFlash("Vous avez déjà analysé ce monstre !", "ko");
        return;
    }

    attempts.push(monster);
    updateAttemptsCounter();
    clearAutocomplete();
    document.getElementById('guess-input').value = '';

    // Génération des feedbacks visuels
    addGuessRow(monster);
    
    // Check des conditions de victoire ou défaite
    if (monster.n === targetMonster.n) {
        handleEndGame(true);
    } else if (attempts.length >= MAX && currentMode === 'daily') {
        handleEndGame(false);
    } else if (currentMode === 'survival' && monster.n !== targetMonster.n) {
        // En mode survie, chaque erreur retire une vie immédiate
        survivalLives--;
        updateSurvivalUI();
        if (survivalLives <= 0) {
            handleEndGame(false);
        } else {
            showFlash(`Ce n'est pas la bonne cible ! Il vous reste ${survivalLives} essai(s).`, "ko");
        }
    }
}

// --- Algorithme de comparaison & création d'éléments HTML ---
function addGuessRow(monster) {
    const desktopContainer = document.getElementById('desktop-rows-container');
    const mobileContainer = document.getElementById('mobile-cards-container');

    // 1. Version Table Ordinateur
    const row = document.createElement('div');
    row.className = 'guess-row';

    // Nom du monstre
    const nameCell = document.createElement('div');
    nameCell.className = `guess-cell ${monster.n === targetMonster.n ? 'correct' : 'wrong'}`;
    nameCell.textContent = monster.n;
    row.appendChild(nameCell);

    // Comparaison des colonnes structurées
    COLS.forEach(col => {
        const cell = document.createElement('div');
        cell.className = 'guess-cell';
        
        const state = checkProperty(col.key, monster[col.key]);
        cell.classList.add(state);
        
        // Texte d'affichage de la cellule
        let displayValue = monster[col.key];
        if (col.key === 's') {
            displayValue = SL[monster.s]; // Traduction de la taille (ex: 3 -> Large)
        } else if (col.key === 'd') {
            // TRANSFORMATION EN ÉTOILES POUR LE DANGER (ex: 4 -> ★★★★☆)
            displayValue = "★".repeat(monster.d) + "☆".repeat(5 - monster.d);
        }
        
        // Ajout d'une flèche indicative si numérique
        const arrow = getArrow(col.key, monster[col.key]);
        cell.innerHTML = `${displayValue} ${arrow}`;
        
        row.appendChild(cell);
    });
    desktopContainer.insertBefore(row, desktopContainer.firstChild);

    // 2. Version Fiche Mobile (Responsive)
    const card = document.createElement('div');
    card.className = 'guess-card';
    
    card.innerHTML = `
        <div class="guess-card-header">
            <span class="card-monster-name ${monster.n === targetMonster.n ? 'correct' : 'wrong'}">${monster.n}</span>
        </div>
        <div class="card-grid">
            ${COLS.map(col => {
                const state = checkProperty(col.key, monster[col.key]);
                
                let val = monster[col.key];
                if (col.key === 's') {
                    val = SL[monster.s];
                } else if (col.key === 'd') {
                    // TRANSFORMATION EN ÉTOILES POUR LE MOBILE AUSSI
                    val = "★".repeat(monster.d) + "☆".repeat(5 - monster.d);
                }
                
                const arrow = getArrow(col.key, monster[col.key]);
                return `
                    <div class="card-cell ${state}">
                        <span class="card-label">${col.label}</span>
                        <span class="card-value">${val} ${arrow ? `<span class="card-arrow">${arrow}</span>` : ''}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    mobileContainer.insertBefore(card, mobileContainer.firstChild);
}

// --- Comparateurs Logiques ---
function checkProperty(key, value) {
    const targetValue = targetMonster[key];
    if (value === targetValue) return 'correct';

    // Logique Proche/Orange (Close)
    if (key === 'g' || key === 's' || key === 'd') {
        // Numériques à 1 d'intervalle près
        if (Math.abs(value - targetValue) === 1) return 'close';
    }
    if (key === 'h') {
        // Si le monstre partagé le même biome (Optionnel : extensible selon votre data)
        if (targetValue.includes(value) || value.includes(targetValue)) return 'close';
    }
    return 'wrong';
}

function getArrow(key, value) {
    if (!['g', 's', 'd'].includes(key)) return '';
    const targetValue = targetMonster[key];
    if (value < targetValue) return '▲';
    if (value > targetValue) return '▼';
    return '';
}

// --- Flash Notifications ---
function showFlash(msg, type) {
    const flash = document.getElementById('flash-msg');
    flash.textContent = msg;
    flash.className = `flash on ${type}`;
    setTimeout(() => {
        flash.classList.remove('on');
    }, 4000);
}

// --- Clôture et traitement des résultats ---
function handleEndGame(isWin) {
    gameOver = true;
    document.getElementById('guess-input').disabled = true;
    document.getElementById('guess-btn').disabled = true;

    if (currentMode === 'daily') {
        // Sauvegarde journalière locale
        localStorage.setItem('mg_daily_last_date', new Date().toDateString());
        localStorage.setItem('mg_daily_state', isWin ? 'win' : 'lose');
        localStorage.setItem('mg_daily_attempts', JSON.stringify(attempts));

        showResultBanner(isWin);
    } else {
        // Fin de jeu Mode Survie
        if (isWin) {
            survivalScore++;
            showFlash(`Cible abattue ! Préparation du prochain monstre...`, "ok");
            if (survivalScore > survivalBest) {
                survivalBest = survivalScore;
                localStorage.setItem('mg_best_survival', survivalBest);
            }
            setTimeout(() => {
                initGame(); // Relance immédiate d'un monstre aléatoire tout en gardant le score
            }, 2000);
        } else {
            // Vrai Game Over Survie
            const goScreen = document.getElementById('game-over-screen');
            document.getElementById('go-title').textContent = "QUEST FAILED !";
            document.getElementById('go-message').textContent = `Vous avez été terrassé par le ${targetMonster.n}.`;
            document.getElementById('stat-streak').textContent = survivalScore;
            document.getElementById('stat-guesses').textContent = attempts.length;
            goScreen.classList.add('on');
        }
    }
}

function showResultBanner(isWin) {
    const banner = document.getElementById('result-banner');
    banner.className = `result-banner show ${isWin ? 'win' : 'lose'}`;
    
    document.getElementById('res-title').textContent = isWin ? "CHASSE EFFECTUÉE !" : "QUEST FAILED !";
    document.getElementById('res-monster').textContent = targetMonster.n;
    document.getElementById('res-desc').textContent = isWin 
        ? `Félicitations. Vous avez localisé la créature en ${attempts.length} essais.` 
        : `Le monstre s'est enfui. C'était un(e) ${targetMonster.n} (Classe: ${targetMonster.c}).`;

    // Dessiner les petits cercles colorés d'essais
    const row = document.getElementById('attempts-dots-row');
    row.innerHTML = '';
    for (let i = 0; i < MAX; i++) {
        const dot = document.createElement('div');
        dot.className = 'attempt-dot';
        if (i < attempts.length) {
            const isCorrect = attempts[i].n === targetMonster.n;
            dot.classList.add(isCorrect ? 'win' : 'lose');
        }
        row.appendChild(dot);
    }
}

// --- Restauration de l'état quotidien si déjà joué ---
function loadSavedDailyGame() {
    const savedState = localStorage.getItem('mg_daily_state');
    const savedAttempts = JSON.parse(localStorage.getItem('mg_daily_attempts')) || [];
    
    targetMonster = getDailyMonster();
    attempts = savedAttempts;
    
    attempts.forEach(monster => addGuessRow(monster));
    handleEndGame(savedState === 'win');
}

// --- Générateur de Partage de Résultats (Emojis) ---
function shareResults() {
    let text = `⚔ Monster Guessr - Quotidien ⚔\n📊 Tentatives: ${attempts.length}/${MAX}\n\n`;
    
    // Génère une grille d'emojis propre selon les essais
    attempts.forEach(att => {
        let rowEmojis = '';
        // Vérification du nom global
        rowEmojis += att.n === targetMonster.n ? '🟩' : '🟥';
        
        COLS.forEach(col => {
            const state = checkProperty(col.key, att[col.key]);
            if (state === 'correct') rowEmojis += '🟩';
            else if (state === 'close') rowEmojis += '🟨';
            else rowEmojis += '⬛';
        });
        text += rowEmojis + '\n';
    });

    text += `\nJouez vous aussi sur Monster Guessr !`;
    
    navigator.clipboard.writeText(text).then(() => {
        showFlash("Rapport copié dans le presse-papier ! 📜", "ok");
    }).catch(() => {
        showFlash("Échec de la copie automatique.", "ko");
    });
}


// --- Compteur de tentatives (mode daily) ---
function updateAttemptsCounter() {
    const el = document.getElementById('attempts-counter');
    if (currentMode !== 'daily') {
        el.classList.add('hidden');
        return;
    }
    el.classList.remove('hidden');
    document.getElementById('attempts-count').textContent = attempts.length;
}

// --- Rendu du Bestiaire ---
function renderBestiary() {
    const grid = document.getElementById('bestiary-grid');
    const search = document.getElementById('bestiary-search').value.toLowerCase().trim();
    const genFilter = document.getElementById('bestiary-gen').value;
    const classFilter = document.getElementById('bestiary-class').value;

    // Peupler les selects une seule fois
    const genSel = document.getElementById('bestiary-gen');
    const classSel = document.getElementById('bestiary-class');
    if (genSel.options.length === 1) {
        [...new Set(M.map(m => m.g))].sort((a, b) => a - b).forEach(g => {
            const o = document.createElement('option');
            o.value = g;
            o.textContent = 'Génération ' + g;
            genSel.appendChild(o);
        });
        [...new Set(M.map(m => m.c))].sort().forEach(c => {
            const o = document.createElement('option');
            o.value = c;
            o.textContent = c;
            classSel.appendChild(o);
        });
    }

    const filtered = M.filter(m =>
        (!search || m.n.toLowerCase().includes(search)) &&
        (!genFilter || m.g == genFilter) &&
        (!classFilter || m.c === classFilter)
    ).sort((a, b) => a.n.localeCompare(b.n));

    document.getElementById('bestiary-count').textContent =
        `— ${filtered.length} / ${M.length} monstres`;

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="besti-empty">Aucun monstre trouvé</div>';
        return;
    }

    grid.innerHTML = filtered.map(m => `
        <div class="besti-card">
            <div class="besti-name">${m.n}</div>
            <div class="besti-info">
                <div>Classe <span>${m.c}</span></div>
                <div>Génération <span>${m.g}</span></div>
                <div>Élément <span>${m.e}</span></div>
                <div>Taille <span>${SL[m.s]}</span></div>
                <div>Habitat <span>${m.h}</span></div>
                <div>Danger <span class="besti-danger">${'★'.repeat(m.d)}${'☆'.repeat(5 - m.d)}</span></div>
            </div>
        </div>
    `).join('');
}
