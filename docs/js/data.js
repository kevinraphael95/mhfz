/*
SOURCES :
https://mogapedia.fandom.com/fr/wiki/Monster_Hunter_Wiki
*/

/*
GÉNÉRATIONS ET JEUX (Ordre Chronologique) :
- Génération 1 (2004 - 2005) : Monster Hunter, MH G, MH Freedom
- Génération 2 (2006 - 2008) : Monster Hunter 2 (dos), MH Freedom 2, MH Freedom Unite
- Génération 3 (2009 - 2011) : Monster Hunter Tri, MH Portable 3rd, MH 3 Ultimate
- Génération 4 (2013 - 2017) : Monster Hunter 4, MH 4 Ultimate, MH Generations, MH Generations Ultimate
- Génération 5 (2018 - 2021) : Monster Hunter: World, MH World: Iceborne, MH Rise, MH Rise: Sunbreak
- Génération 6 (2025)        : Monster Hunter Wilds
*/

/*
CLASSES DE MONSTRES (Mogapedia) :
- Amphibien (Amphibian)
- Bête à crocs (Fanged Beast)
- Carapaceon (Carapaceon)
- Céphalopode (Cephalopod)
- Dragon ancien (Elder Dragon)
- Inclassable / ??? (???)
- Léviathan (Leviathan)
- Néoptéron (Neopteron)
- Temnocéran (Temnoceran)
- Wyverne à crocs (Fanged Wyvern)
- Wyverne aquatique (Piscine Wyvern)
- Wyverne brute (Brute Wyvern)
- Wyverne rapace (Bird Wyvern)
- Wyverne serpent (Snake Wyvern)
- Wyverne volante (Flying Wyvern)
*/

/*
TAILLE
- Petit : <10m
- Moyen : 10m - 18m
- Grand : 18m - 30m
- Géant : 30m - 100m
- Colossal : >100m
*/

/*
STATUTS ET FLÉAUX (Ailments & Blights) :
- Boue / Neige / Toile (Muddy / Snowy / Webbed)
- Étourdissement (Stun)
- Explosion / Poisse (Blast)
- Fléau-Dragon (Dragonblight)
- Fléau-💧 Eau (Waterblight)
- Fléau-🔥 Feu (Fireblight)
- Fléau-⚡ Foudre (Thunderblight)
- Fléau-🧊 Glace (Iceblight)
- Fléau-Poisse (Hellfireblight)
- Goudron / Suintement (Tarred / Oozing)
- Laceration / Saignement (Bleeding)
- Miasme / Effluve (Effluvium)
- Paralysie (Paralysis)
- Poison (Poison)
- Savon (Bubble)
- Sommeil (Sleep)
- Somnolence (Drowsy)
- Vol de défense (Defense Down)
- Virus de Frénésie (Frenzy Virus)
*/

const M=[
// --- GÉNÉRATION 1 ---
  {n:"Basarios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:2,h:"Volcan",d:2}, // ~14.3 m
  {n:"Cephadrome",c:"Wyverne aquatique",g:1,e:"Aucun",s:2,h:"Désert",d:2}, // ~15.4 m
  {n:"Diablos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:4}, // ~20.7 m
  {n:"Diablos noire",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:4}, // ~20.7 m
  {n:"Fatalis",c:"Dragon ancien",g:1,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~41.1 m
  {n:"Fatalis pourpre",c:"Dragon ancien",g:1,e:"🔥 Feu",s:3,h:"Volcan",d:5}, // ~41.1 m
  {n:"Gendrome",c:"Wyverne rapace",g:1,e:"Aucun",s:1,h:"Désert",d:2}, // ~9.2 m
  {n:"Gravios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Volcan",d:3}, // ~22.0 m
  {n:"Gravios onyx",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Volcan",d:4}, // ~22.0 m
  {n:"Gypceros",c:"Wyverne rapace",g:1,e:"Aucun",s:2,h:"Forêt",d:2}, // ~11.1 m
  {n:"Gypceros améthyste",c:"Wyverne rapace",g:1,e:"Aucun",s:2,h:"Marais",d:3}, // ~11.1 m
  {n:"Iodrome",c:"Wyverne rapace",g:1,e:"Poison",s:1,h:"Volcan",d:2}, // ~10.1 m
  {n:"Khezu",c:"Wyverne volante",g:1,e:"⚡ Foudre",s:2,h:"Cave",d:3}, // ~9.4 m
  {n:"Khezu grenat",c:"Wyverne volante",g:1,e:"⚡ Foudre",s:2,h:"Tundra",d:3}, // ~9.4 m
  {n:"Kirin",c:"Dragon ancien",g:1,e:"⚡ Foudre",s:1,h:"Montagne",d:4}, // ~5.4 m
  {n:"Lao-Shan Lung",c:"Dragon ancien",g:1,e:"🔥 Feu",s:4,h:"Montagne",d:5}, // ~69.6 m
  {n:"Lao-Shan Lung cendré",c:"Dragon ancien",g:1,e:"🐉 Dragon",s:4,h:"Montagne",d:5}, // ~69.6 m
  {n:"Monoblos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:3}, // // ~21.2 m
  {n:"Monoblos ivoire",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:4}, // ~21.2 m
  {n:"Plesioth",c:"Wyverne aquatique",g:1,e:"💧 Eau",s:3,h:"Désert",d:3}, // ~25.2 m
  {n:"Plesioth émeraude",c:"Wyverne aquatique",g:1,e:"💧 Eau",s:3,h:"Océan",d:4}, // ~25.2 m
  {n:"Rathalos",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:4}, // ~17.0 m
  {n:"Rathalos azur",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:4}, // ~17.0 m
  {n:"Rathalos d'argent",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Ruines",d:5}, // ~17.0 m
  {n:"Rathian",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:3}, // ~16.3 m
  {n:"Rathian d'or",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Ruines",d:5}, // ~16.3 m
  {n:"Rathian sakura",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:4}, // ~16.3 m
  {n:"Velocidrome",c:"Wyverne rapace",g:1,e:"Aucun",s:1,h:"Forêt",d:1}, // ~8.9 m
  {n:"Yian Garuga balafré",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt",d:4}, // ~12.7 m
  {n:"Yian Garuga",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt",d:4}, // ~12.7 m
  {n:"Yian Kut-Ku",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt",d:2}, // ~9.8 m
  {n:"Yian Kut-Ku bleu",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt",d:3}, // ~9.8 m

// --- GÉNÉRATION 2 ---
  {n:"Akantor",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Volcan",d:5}, // ~30.4 m
  {n:"Blangonga",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Tundra",d:3}, // ~12.1 m
  {n:"Blangonga cuivré",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Désert",d:4}, // ~12.1 m
  {n:"Bulldrome",c:"Bête à crocs",g:2,e:"Aucun",s:1,h:"Forêt",d:1}, // ~6.3 m
  {n:"Ceanataur Shogun",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais",d:3}, // ~11.2 m (hauteur)
  {n:"Ceanataur Shogun terre",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais",d:4}, // ~11.2 m (hauteur)
  {n:"Chameleos",c:"Dragon ancien",g:2,e:"🐉 Dragon / 💧 Eau",s:3,h:"Marais",d:5}, // ~26.4 m
  {n:"Congalala",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Forêt",d:2}, // ~11.4 m
  {n:"Congalala émeraude",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Forêt",d:3}, // ~11.4 m
  {n:"Fatalis ancien",c:"Dragon ancien",g:2,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~41.1 m
  {n:"Giadrome",c:"Wyverne rapace",g:2,e:"Aucun",s:1,h:"Tundra",d:1}, // ~9.1 m
  {n:"Hermitaur Daimyo",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais",d:3}, // ~10.5 m (hauteur)
  {n:"Hermitaur Daimyo prune",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Désert",d:4}, // ~10.5 m (hauteur)
  {n:"Hypnocatrice",c:"Wyverne rapace",g:2,e:"Aucun",s:2,h:"Désert",d:3}, // ~12.9 m
  {n:"Kushala Daora",c:"Dragon ancien",g:2,e:"Aucun",s:3,h:"Montagne",d:5}, // ~20.4 m
  {n:"Kushala Daora rouillé",c:"Dragon ancien",g:2,e:"Aucun",s:3,h:"Montagne",d:5}, // ~20.4 m
  {n:"Lavasioth",c:"Wyverne aquatique",g:2,e:"🔥 Feu",s:3,h:"Volcan",d:3}, // ~19.2 m
  {n:"Lunastra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert",d:5}, // ~24.1 m
  {n:"Nargacuga",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Forêt",d:4}, // ~19.5 m
  {n:"Rajang",c:"Bête à crocs",g:2,e:"⚡ Foudre",s:2,h:"Montagne",d:5}, // ~11.8 m
  {n:"Rajang orage",c:"Bête à crocs",g:2,e:"⚡ Foudre",s:2,h:"Montagne",d:5}, // ~11.8 m
  {n:"Reine Vespoid",c:"Néoptéron",g:2,e:"Aucun",s:1,h:"Forêt",d:2}, // ~6.5 m
  {n:"Roi Shakalaka",c:"Inclassable / ???",g:2,e:"Aucun",s:1,h:"Forêt",d:2}, // ~1.3 m
  {n:"Shen Gaoren",c:"Carapaceon",g:2,e:"Aucun",s:4,h:"Montagne",d:5}, // ~32.0 m (hauteur)
  {n:"Teostra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert",d:5}, // ~24.3 m
  {n:"Tigrex",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Montagne",d:4}, // ~18.9 m
  {n:"Ukanlos",c:"Wyverne volante",g:2,e:"🧊 Glace",s:3,h:"Tundra",d:5}, // ~31.8 m
  {n:"Yama Tsukami",c:"Dragon ancien",g:2,e:"Aucun",s:4,h:"Forêt",d:5}, // ~41.3 m

// --- GÉNÉRATION 3 ---
  {n:"Agnaktor",c:"Léviathan",g:3,e:"🔥 Feu",s:3,h:"Volcan",d:3}, // ~28.6 m
  {n:"Agnaktor glacial",c:"Léviathan",g:3,e:"🧊 Glace",s:3,h:"Tundra",d:4}, // ~28.6 m
  {n:"Alatreon",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:3,h:"Volcan",d:5}, // ~31.0 m
  {n:"Amatsu",c:"Dragon ancien",g:3,e:"💧 Eau",s:3,h:"Montagne",d:5}, // ~31.3 m
  {n:"Arzuros",c:"Bête à crocs",g:3,e:"Aucun",s:1,h:"Forêt",d:1}, // ~6.1 m
  {n:"Barioth",c:"Wyverne volante",g:3,e:"🧊 Glace",s:3,h:"Tundra",d:4}, // ~21.2 m
  {n:"Barioth des sables",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Désert",d:4}, // ~21.2 m
  {n:"Barroth",c:"Wyverne brute",g:3,e:"Aucun",s:2,h:"Désert",d:2}, // ~14.6 m
  {n:"Barroth de jade",c:"Wyverne brute",g:3,e:"🧊 Glace",s:2,h:"Tundra",d:3}, // ~14.6 m
  {n:"Brachydios",c:"Wyverne brute",g:3,e:"Blast",s:2,h:"Volcan",d:4}, // ~15.7 m
  {n:"Ceadeus",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Océan",d:5}, // ~58.3 m
  {n:"Ceadeus barbedor",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Océan",d:5}, // ~58.3 m
  {n:"Deviljho",c:"Wyverne brute",g:3,e:"🐉 Dragon",s:3,h:"Forêt",d:5}, // ~21.5 m
  {n:"Deviljho carnage",c:"Wyverne brute",g:3,e:"🐉 Dragon",s:3,h:"Forêt",d:5}, // ~23.1 m
  {n:"Dire Miralis",c:"Dragon ancien",g:3,e:"🔥 Feu",s:4,h:"Océan",d:5}, // ~62.5 m
  {n:"Duramboros",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Marais",d:3}, // ~22.1 m
  {n:"Duramboros rouillé",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Désert",d:4}, // ~22.1 m
  {n:"Gigginox",c:"Wyverne volante",g:3,e:"Poison",s:2,h:"Cave",d:2}, // ~13.7 m
  {n:"Gigginox foudroyant",c:"Wyverne volante",g:3,e:"⚡ Foudre",s:2,h:"Cave",d:3}, // ~13.7 m
  {n:"Gobul",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Marais",d:2}, // ~16.4 m
  {n:"Grand Baggi",c:"Wyverne rapace",g:3,e:"Aucun",s:2,h:"Tundra",d:2}, // ~11.0 m
  {n:"Grand Jaggi",c:"Wyverne rapace",g:3,e:"Aucun",s:1,h:"Forêt",d:1}, // ~9.4 m
  {n:"Grand Wroggi",c:"Wyverne rapace",g:3,e:"Poison",s:1,h:"Volcan",d:2}, // ~9.6 m
  {n:"Jhen Mohran",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:4,h:"Désert",d:5}, // ~111.6 m
  {n:"Jhen Mohran sacré",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:4,h:"Désert",d:5}, // ~111.6 m
  {n:"Lagiacrus",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Océan",d:4}, // ~26.4 m
  {n:"Lagiacrus abyssal",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Océan",d:5}, // ~33.8 m
  {n:"Lagiacrus ivoire",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Océan",d:4}, // ~26.4 m
  {n:"Lagombi",c:"Bête à crocs",g:3,e:"🧊 Glace",s:1,h:"Tundra",d:2}, // ~5.6 m
  {n:"Ludroth pourpre",c:"Léviathan",g:3,e:"Poison",s:2,h:"Marais",d:3}, // ~15.8 m
  {n:"Ludroth royal",c:"Léviathan",g:3,e:"💧 Eau",s:2,h:"Marais",d:2}, // ~15.8 m
  {n:"Nargacuga sélénite",c:"Wyverne volante",g:3,e:"Poison",s:3,h:"Ruines",d:5}, // ~20.1 m
  {n:"Nargacuga vert",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Forêt",d:4}, // ~19.5 m
  {n:"Nibelsnarf",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Désert",d:2}, // ~16.8 m
  {n:"Qurupeco",c:"Wyverne rapace",g:3,e:"🔥 Feu",s:1,h:"Forêt",d:2}, // ~8.6 m
  {n:"Qurupeco vermillon",c:"Wyverne rapace",g:3,e:"⚡ Foudre",s:1,h:"Désert",d:3}, // ~8.6 m
  {n:"Tigrex berserk",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Volcan",d:4}, // ~18.9 m
  {n:"Uragaan",c:"Wyverne brute",g:3,e:"🔥 Feu",s:3,h:"Volcan",d:3}, // ~20.9 m
  {n:"Uragaan d'acier",c:"Wyverne brute",g:3,e:"🔥 Feu",s:3,h:"Volcan",d:4}, // ~20.9 m
  {n:"Volvidon",c:"Bête à crocs",g:3,e:"Aucun",s:1,h:"Volcan",d:2}, // ~6.6 m
  {n:"Zinogre",c:"Wyverne à crocs",g:3,e:"⚡ Foudre",s:2,h:"Forêt",d:4}, // ~15.3 m
  {n:"Zinogre stygien",c:"Wyverne à crocs",g:3,e:"🐉 Dragon",s:2,h:"Tundra",d:5}, // ~15.3 m

// --- GÉNÉRATION 4 ---
  {n:"Ahtal-Ka",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Ruines",d:5}, // ~8.5 m (Hélicoptère/Robot exclu)
  {n:"Arzuros Crâne-ardent",c:"Bête à crocs",g:4,e:"Aucun",s:2,h:"Forêt",d:4}, // ~8.2 m
  {n:"Astalos",c:"Wyverne volante",g:4,e:"⚡ Foudre",s:2,h:"Forêt",d:4}, // ~16.8 m
  {n:"Astalos Prince-orage",c:"Wyverne volante",g:4,e:"⚡ Foudre",s:3,h:"Forêt",d:5}, // ~18.5 m
  {n:"Basarios rubis",c:"Wyverne volante",g:4,e:"🔥 Feu",s:2,h:"Volcan",d:3}, // ~14.3 m
  {n:"Brachydios tempête",c:"Wyverne brute",g:4,e:"Blast",s:3,h:"Volcan",d:5}, // ~21.2 m
  {n:"Ceanataur Brise-os",c:"Carapaceon",g:4,e:"💧 Eau",s:2,h:"Marais",d:4}, // ~13.5 m
  {n:"Dah'ren Mohran",c:"Dragon ancien",g:4,e:"Aucun",s:4,h:"Désert",d:5}, // ~114.5 m
  {n:"Dalamadur",c:"Dragon ancien",g:4,e:"Aucun",s:4,h:"Montagne",d:5}, // ~440.4 m
  {n:"Dalamadur Shah",c:"Dragon ancien",g:4,e:"🔥 Feu",s:4,h:"Montagne",d:5}, // ~440.4 m
  {n:"Diablos Bain-de-sang",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Désert",d:5}, // ~24.8 m
  {n:"Gammoth",c:"Bête à crocs",g:4,e:"🧊 Glace",s:3,h:"Tundra",d:4}, // ~22.3 m (Massif)
  {n:"Gammoth Givre-ancien",c:"Bête à crocs",g:4,e:"🧊 Glace",s:3,h:"Tundra",d:5}, // ~25.5 m
  {n:"Glavenus",c:"Wyverne brute",g:4,e:"🔥 Feu",s:3,h:"Forêt",d:4}, // ~24.5 m
  {n:"Glavenus Lame-chaos",c:"Wyverne brute",g:4,e:"🔥 Feu / Blast",s:3,h:"Volcan",d:5}, // ~29.2 m
  {n:"Gogmazios",c:"Dragon ancien",g:4,e:"🔥 Feu",s:4,h:"Ruines",d:5}, // ~49.2 m
  {n:"Gore Magala",c:"???",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:4}, // ~18.5 m
  {n:"Gore Magala du chaos",c:"???",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~19.8 m
  {n:"Grand Maccao",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Forêt",d:1}, // ~8.9 m
  {n:"Hermitaur Poing-fer",c:"Carapaceon",g:4,e:"💧 Eau",s:2,h:"Marais",d:4}, // ~12.8 m
  {n:"Kecha Wacha",c:"Bête à crocs",g:4,e:"💧 Eau",s:1,h:"Forêt",d:2}, // ~9.2 m
  {n:"Kecha Wacha blanc",c:"Bête à crocs",g:4,e:"🔥 Feu",s:1,h:"Forêt",d:3}, // ~9.2 m
  {n:"Kirin Oroshi",c:"Dragon ancien",g:4,e:"🧊 Glace",s:1,h:"Tundra",d:4}, // ~5.4 m
  {n:"Lagombi Maître-neige",c:"Bête à crocs",g:4,e:"🧊 Glace",s:1,h:"Tundra",d:4}, // ~7.8 m
  {n:"Malfestio",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Forêt",d:2}, // ~9.5 m
  {n:"Malfestio Lune-noire",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Forêt",d:4}, // ~11.1 m
  {n:"Mizutsune",c:"Léviathan",g:4,e:"💧 Eau",s:3,h:"Marais",d:4}, // ~19.8 m
  {n:"Mizutsune Perce-âme",c:"Léviathan",g:4,e:"💧 Eau / 🔥 Feu",s:3,h:"Marais",d:5}, // ~22.4 m
  {n:"Najarala",c:"Wyverne serpent",g:4,e:"Aucun",s:3,h:"Désert",d:3}, // ~40.2 m (Très long)
  {n:"Najarala du déluge",c:"Wyverne serpent",g:4,e:"💧 Eau",s:3,h:"Marais",d:4}, // ~40.2 m
  {n:"Nakarkos",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:4,h:"Cave",d:5}, // ~42.9 m
  {n:"Nargacuga Vent-acier",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Forêt",d:5}, // ~22.6 m
  {n:"Nerscylla",c:"Temnocéran",g:4,e:"Poison",s:2,h:"Cave",d:3}, // ~11.2 m
  {n:"Nerscylla spectrale",c:"Temnocéran",g:4,e:"Aucun",s:2,h:"Désert",d:4}, // ~11.2 m
  {n:"Rathalos Roi-enfer",c:"Wyverne volante",g:4,e:"🔥 Feu",s:3,h:"Volcan",d:5}, // ~20.1 m
  {n:"Rathian Reine-poison",c:"Wyverne volante",g:4,e:"🔥 Feu / Poison",s:3,h:"Marais",d:5}, // ~19.5 m
  {n:"Reine Seltas",c:"Néoptéron",g:4,e:"Aucun",s:2,h:"Forêt",d:3}, // ~14.9 m
  {n:"Reine Seltas du désert",c:"Néoptéron",g:4,e:"💧 Eau",s:2,h:"Désert",d:4}, // ~14.9 m
  {n:"Seltas",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Forêt",d:1}, // ~6.4 m
  {n:"Seltas du désert",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Désert",d:2}, // ~6.4 m
  {n:"Seregios",c:"Wyverne volante",g:4,e:"Aucun",s:2,h:"Désert",d:4}, // ~15.9 m
  {n:"Shagaru Magala",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~20.2 m
  {n:"Tetsucabra",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Marais",d:2}, // ~10.4 m
  {n:"Tetsucabra Brise-roc",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Marais",d:4}, // ~13.1 m
  {n:"Tetsucabra féroce",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Volcan",d:3}, // ~10.4 m
  {n:"Tigrex Griffe-sombre",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Montagne",d:5}, // ~22.4 m
  {n:"Tigrex magma",c:"Wyverne volante",g:4,e:"Blast",s:3,h:"Volcan",d:5}, // ~24.5 m
  {n:"Uragaan Roi-cristal",c:"Wyverne brute",g:4,e:"🔥 Feu",s:3,h:"Volcan",d:4}, // ~25.2 m
  {n:"Valstrax",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Montagne",d:5}, // ~23.2 m
  {n:"Yian Garuga Œil-mort",c:"Wyverne rapace",g:4,e:"🔥 Feu",s:2,h:"Forêt",d:5}, // ~14.1 m
  {n:"Zamtrios",c:"Amphibien",g:4,e:"🧊 Glace",s:2,h:"Tundra",d:3}, // ~14.7 m
  {n:"Zamtrios tigré",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Désert",d:4}, // ~14.7 m
  {n:"Zinogre Feu-du-ciel",c:"Wyverne à crocs",g:4,e:"⚡ Foudre",s:2,h:"Forêt",d:5}, // ~18.8 m

// --- GÉNÉRATION 5 ---
  {n:"Aknosom",c:"Wyverne rapace",g:5,e:"🔥 Feu",s:1,h:"Forêt",d:2}, // ~8.8 m
  {n:"Almudron",c:"Léviathan",g:5,e:"Aucun",s:3,h:"Marais",d:4}, // ~28.5 m (Très long)
  {n:"Almudron magma",c:"Léviathan",g:5,e:"🔥 Feu",s:3,h:"Volcan",d:4}, // ~28.5 m
  {n:"Anjanath",c:"Wyverne brute",g:5,e:"🔥 Feu",s:2,h:"Forêt",d:3}, // ~16.4 m
  {n:"Anjanath tonnerre",c:"Wyverne brute",g:5,e:"⚡ Foudre",s:2,h:"Tundra",d:4}, // ~16.4 m
  {n:"Banbaro",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Tundra",d:3}, // ~22.3 m
  {n:"Barioth crocgivre",c:"Wyverne volante",g:5,e:"🧊 Glace",s:3,h:"Tundra",d:4}, // ~21.2 m
  {n:"Bazelgeuse",c:"Wyverne volante",g:5,e:"🔥 Feu / Blast",s:3,h:"Forêt",d:5}, // ~19.6 m
  {n:"Bazelgeuse vulcan",c:"Wyverne volante",g:5,e:"🔥 Feu / Blast",s:3,h:"Volcan",d:5}, // ~20.3 m
  {n:"Beotodus",c:"Wyverne aquatique",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:2}, // ~15.8 m
  {n:"Bishaten",c:"Bête à crocs",g:5,e:"Aucun",s:1,h:"Forêt",d:2}, // ~8.7 m
  {n:"Bishaten sanguin",c:"Bête à crocs",g:5,e:"🔥 Feu",s:1,h:"Forêt",d:3}, // ~8.7 m
  {n:"Chameleos éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Marais",d:5}, // ~26.4 m
  {n:"Dodogama",c:"Wyverne à crocs",g:5,e:"Blast",s:2,h:"Volcan",d:2}, // ~11.1 m
  {n:"Gaismagorm",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Cave",d:5}, // ~37.9 m (Massif)
  {n:"Garangolm",c:"Bête à crocs",g:5,e:"🔥 Feu / 💧 Eau",s:2,h:"Forêt",d:4}, // ~14.5 m
  {n:"Glavenus acide",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Cave",d:4}, // ~25.2 m
  {n:"Goss Harag",c:"Bête à crocs",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:4}, // ~14.1 m
  {n:"Grand Girros",c:"Wyverne à crocs",g:5,e:"Aucun",s:1,h:"Cave",d:2}, // ~9.9 m
  {n:"Grand Izuchi",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Forêt",d:1}, // ~8.5 m
  {n:"Grand Jagras",c:"Wyverne à crocs",g:5,e:"Aucun",s:1,h:"Forêt",d:1}, // ~9.7 m
  {n:"Ibushi du vent",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Montagne",d:5}, // ~30.1 m
  {n:"Jyuratodus",c:"Wyverne aquatique",g:5,e:"💧 Eau",s:2,h:"Marais",d:2}, // ~15.1 m
  {n:"Kulu-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Désert",d:1}, // ~9.1 m
  {n:"Kulve Taroth",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Cave",d:5}, // ~47.2 m
  {n:"Kushala Daora éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Montagne",d:5}, // ~20.4 m
  {n:"Legiana",c:"Wyverne volante",g:5,e:"🧊 Glace",s:2,h:"Montagne",d:3}, // ~17.1 m
  {n:"Legiana blizzard",c:"Wyverne volante",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:4}, // ~17.1 m
  {n:"Lunagaron",c:"Wyverne à crocs",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:4}, // ~13.4 m
  {n:"Magnamalo",c:"Wyverne à crocs",g:5,e:"🔥 Feu / Blast",s:2,h:"Ruines",d:4}, // ~16.2 m
  {n:"Malzeno",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~21.1 m
  {n:"Malzeno primordial",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~21.1 m
  {n:"Mizutsune mauve",c:"Léviathan",g:5,e:"🔥 Feu / Blast",s:3,h:"Ruines",d:5}, // ~21.8 m
  {n:"Namielle",c:"Dragon ancien",g:5,e:"💧 Eau / ⚡ Foudre",s:3,h:"Océan",d:5}, // ~20.4 m
  {n:"Narwa du tonnerre",c:"Dragon ancien",g:5,e:"⚡ Foudre",s:3,h:"Montagne",d:5}, // ~33.4 m
  {n:"Narwa la mère de tous",c:"Dragon ancien",g:5,e:"⚡ Foudre / 🐉 Dragon",s:3,h:"Montagne",d:5}, // ~34.6 m
  {n:"Nergigante",c:"Dragon ancien",g:5,e:"Aucun",s:2,h:"Ruines",d:5}, // ~16.2 m
  {n:"Nergigante chaos",c:"Dragon ancien",g:5,e:"Aucun",s:2,h:"Ruines",d:5}, // ~18.1 m
  {n:"Odogaron",c:"Wyverne à crocs",g:5,e:"Aucun",s:2,h:"Cave",d:3}, // ~14.3 m
  {n:"Odogaron désastre",c:"Wyverne à crocs",g:5,e:"🐉 Dragon",s:2,h:"Tundra",d:4}, // ~14.3 m
  {n:"Paolumu",c:"Wyverne volante",g:5,e:"Aucun",s:1,h:"Forêt",d:2}, // ~7.2 m
  {n:"Paolumu belladone",c:"Wyverne volante",g:5,e:"Aucun",s:1,h:"Désert",d:3}, // ~7.2 m
  {n:"Pukei-Pukei",c:"Wyverne rapace",g:5,e:"Poison",s:1,h:"Forêt",d:2}, // ~8.1 m
  {n:"Pukei-Pukei corail",c:"Wyverne rapace",g:5,e:"💧 Eau",s:1,h:"Océan",d:3}, // ~8.1 m
  {n:"Radobaan",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Cave",d:2}, // ~19.4 m
  {n:"Rakna-Kadaki",c:"Temnocéran",g:5,e:"🔥 Feu",s:2,h:"Volcan",d:4}, // ~11.5 m
  {n:"Rakna-Kadaki de feu",c:"Temnocéran",g:5,e:"🔥 Feu / Blast",s:2,h:"Volcan",d:4}, // ~11.5 m
  {n:"Safi'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Cave",d:5}, // ~48.0 m
  {n:"Shara Ishvalda",c:"Dragon ancien",g:5,e:"Aucun",s:3,h:"Ruines",d:5}, // ~29.5 m
  {n:"Somnacanth",c:"Léviathan",g:5,e:"Aucun",s:2,h:"Marais",d:3}, // ~15.6 m
  {n:"Somnacanth aurore",c:"Léviathan",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:4}, // ~15.6 m
  {n:"Teostra éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon / 🔥 Feu",s:3,h:"Désert",d:5}, // ~24.3 m
  {n:"Tetranadon",c:"Amphibien",g:5,e:"💧 Eau",s:2,h:"Marais",d:2}, // ~10.2 m
  {n:"Tobi-Kadachi",c:"Wyverne à crocs",g:5,e:"⚡ Foudre",s:2,h:"Forêt",d:2}, // ~12.9 m
  {n:"Tobi-Kadachi vipère",c:"Wyverne à crocs",g:5,e:"Poison",s:2,h:"Tundra",d:3}, // ~12.9 m
  {n:"Tzitzi-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Océan",d:1}, // ~8.9 m
  {n:"Vaal Hazak",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Cave",d:5}, // ~20.9 m
  {n:"Vaal Hazak fléau",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Forêt",d:5}, // ~20.9 m
  {n:"Valstrax écarlate",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Montagne",d:5}, // ~23.2 m
  {n:"Valstrax écarlate éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Montagne",d:5}, // ~23.2 m
  {n:"Velkhana",c:"Dragon ancien",g:5,e:"🧊 Glace",s:3,h:"Tundra",d:5}, // ~25.8 m
  {n:"Xeno'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Cave",d:5}, // ~45.1 m
  {n:"Zorah Magdaros",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Océan",d:5}, // ~257.9 m

// --- GÉNÉRATION 6 ---
  {n:"Ajarakan",c:"Bête à crocs",g:6,e:"🔥 Feu",s:2,h:"Volcan",d:4}, // ~13.5 m
  {n:"Arkveld",c:"Wyverne volante",g:6,e:"🐉 Dragon",s:3,h:"Ruines",d:5}, // ~21.0 m
  {n:"Balahara",c:"Léviathan",g:6,e:"Aucun",s:2,h:"Désert",d:2}, // ~16.5 m
  {n:"Chatacabra",c:"Amphibien",g:6,e:"Aucun",s:2,h:"Forêt",d:2}, // ~11.2 m
  {n:"Doshaguma",c:"Bête à crocs",g:6,e:"Aucun",s:2,h:"Forêt",d:3}, // ~14.0 m
  {n:"Hirabami",c:"Léviathan",g:6,e:"⚡ Foudre",s:2,h:"Montagne",d:3}, // ~15.8 m
  {n:"Jin Dahaad",c:"Léviathan",g:6,e:"🧊 Glace",s:3,h:"Tundra",d:4}, // ~26.2 m
  {n:"Lala Barina",c:"Temnocéran",g:6,e:"Poison",s:2,h:"Forêt",d:3}, // ~12.5 m
  {n:"Nu Udra",c:"Céphalopode",g:6,e:"🔥 Feu",s:4,h:"Océan",d:5}, // ~55.0 m
  {n:"Oméga Planetikos",c:"Dragon ancien",g:6,e:"🐉 Dragon",s:4,h:"Ruines",d:5}, // ~65.0 m
  {n:"Quematrice",c:"Wyverne brute",g:6,e:"🔥 Feu",s:3,h:"Désert",d:4}, // ~22.4 m
  {n:"Rey Dau",c:"Wyverne volante",g:6,e:"⚡ Foudre",s:3,h:"Désert",d:4}, // ~20.5 m
  {n:"Rompopolo",c:"Wyverne brute",g:6,e:"Aucun",s:2,h:"Marais",d:3}, // ~17.1 m
  {n:"Uth Duna",c:"Léviathan",g:6,e:"💧 Eau",s:3,h:"Océan",d:4}, // ~29.8 m
  {n:"Xu Wu",c:"Céphalopode",g:6,e:"Aucun",s:3,h:"Forêt",d:4}, // ~32.0 m
  {n:"Zoh Shia",c:"Dragon ancien",g:6,e:"Aucun",s:4,h:"Ruines",d:5}, // ~48.5 m
];

const SL = ["","Petit","Médium","Large","Géant"];
const COLS = [
  {key:'c', label:'CLASSE'},
  {key:'g', label:'GÉN.'},
  {key:'e', label:'ÉLÉMENT'},
  {key:'s', label:'TAILLE'},
  {key:'h', label:'HABITAT'},
  {key:'d', label:'DANGER'},
];
const MAX = 8;
