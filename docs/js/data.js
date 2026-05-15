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
  {n:"Basarios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:2,h:"Volcan",d:2},
  {n:"Cephadrome",c:"Wyverne aquatique",g:1,e:"Aucun",s:2,h:"Désert",d:2},
  {n:"Crimson Fatalis",c:"Dragon ancien",g:1,e:"🔥 Feu",s:3,h:"Volcan",d:5},
  {n:"Diablos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:4},
  {n:"Fatalis",c:"Dragon ancien",g:1,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Gravios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Volcan",d:3},
  {n:"Gypceros",c:"Wyverne rapace",g:1,e:"Aucun",s:2,h:"Forêt",d:2},
  {n:"Khezu",c:"Wyverne volante",g:1,e:"⚡ Foudre",s:3,h:"Cave",d:3},
  {n:"Kirin",c:"Dragon ancien",g:1,e:"⚡ Foudre",s:2,h:"Montagne",d:4},
  {n:"Lao-Shan Lung",c:"Dragon ancien",g:1,e:"🔥 Feu",s:4,h:"Montagne",d:5},
  {n:"Monoblos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Désert",d:3},
  {n:"Plesioth",c:"Wyverne aquatique",g:1,e:"💧 Eau",s:3,h:"Désert",d:3},
  {n:"Rathalos",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:4},
  {n:"Rathian",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:3},
  {n:"Yian Garuga",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:3,h:"Forêt",d:4},
  {n:"Yian Kut-Ku",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt",d:2},

  // --- GÉNÉRATION 2 ---
  {n:"Akantor",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Volcan",d:5},
  {n:"Blangonga",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Tundra",d:3},
  {n:"Chameleos",c:"Dragon ancien",g:2,e:"🐉 Dragon / 💧 Eau",s:3,h:"Marais",d:5},
  {n:"Congalala",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Forêt",d:2},
  {n:"Daimyo Hermitaur",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais",d:3},
  {n:"Hypnocatrice",c:"Wyverne rapace",g:2,e:"Aucun",s:2,h:"Désert",d:3},
  {n:"Kushala Daora",c:"Dragon ancien",g:2,e:"Aucun",s:3,h:"Montagne",d:5},
  {n:"Lavasioth",c:"Wyverne aquatique",g:2,e:"🔥 Feu",s:3,h:"Volcan",d:3},
  {n:"Lunastra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert",d:5},
  {n:"Nargacuga",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Forêt",d:4}, 
  {n:"Rajang",c:"Bête à crocs",g:2,e:"⚡ Foudre",s:3,h:"Montagne",d:5},
  {n:"Shogun Ceanataur",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais",d:3},
  {n:"Teostra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert",d:5},
  {n:"Tigrex",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Montagne",d:4},
  {n:"Ukanlos",c:"Wyverne volante",g:2,e:"🧊 Glace",s:3,h:"Tundra",d:5},
  {n:"Yama Tsukami",c:"Dragon ancien",g:2,e:"Aucun",s:4,h:"Forêt",d:5},

  // --- GÉNÉRATION 3 ---
  {n:"Agnaktor",c:"Léviathan",g:3,e:"🔥 Feu",s:3,h:"Volcan",d:3},
  {n:"Alatreon",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:3,h:"Volcan",d:5},
  {n:"Amatsu",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Montagne",d:5},
  {n:"Barioth",c:"Wyverne volante",g:3,e:"🧊 Glace",s:3,h:"Tundra",d:4},
  {n:"Barroth",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Désert",d:2},
  {n:"Brachydios",c:"Wyverne brute",g:3,e:"Blast",s:3,h:"Volcan",d:4},
  {n:"Ceadeus",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Océan",d:5},
  {n:"Deviljho",c:"Wyverne brute",g:3,e:"🐉 Dragon",s:3,h:"Forêt",d:5},
  {n:"Dire Miralis",c:"Dragon ancien",g:3,e:"🔥 Feu",s:4,h:"Océan",d:5},
  {n:"Duramboros",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Marais",d:3},
  {n:"Gigginox",c:"Wyverne volante",g:3,e:"Poison",s:2,h:"Cave",d:2},
  {n:"Gobul",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Marais",d:2},
  {n:"Jhen Mohran",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:4,h:"Désert",d:5},
  {n:"Lagiacrus",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Océan",d:4},
  {n:"Lagombi",c:"Bête à crocs",g:3,e:"🧊 Glace",s:2,h:"Tundra",d:2},
  {n:"Nibelsnarf",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Désert",d:2},
  {n:"Royal Ludroth",c:"Léviathan",g:3,e:"💧 Eau",s:2,h:"Marais",d:2},
  {n:"Uragaan",c:"Wyverne brute",g:3,e:"🔥 Feu",s:3,h:"Volcan",d:3},
  {n:"Volvidon",c:"Bête à crocs",g:3,e:"Aucun",s:2,h:"Volcan",d:2},
  {n:"Zinogre",c:"Wyverne à crocs",g:3,e:"⚡ Foudre",s:3,h:"Forêt",d:4},

  // --- GÉNÉRATION 4 ---
  {n:"Astalos",c:"Wyverne volante",g:4,e:"⚡ Foudre",s:3,h:"Forêt",d:4},
  {n:"Dalamadur",c:"Dragon ancien",g:4,e:"Poison",s:4,h:"Montagne",d:5},
  {n:"Gammoth",c:"Bête à crocs",g:4,e:"🧊 Glace",s:3,h:"Tundra",d:4},
  {n:"Glavenus",c:"Wyverne brute",g:4,e:"🔥 Feu",s:3,h:"Forêt",d:4},
  {n:"Gogmazios",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Gore Magala",c:"???",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Kecha Wacha",c:"Bête à crocs",g:4,e:"💧 Eau",s:2,h:"Forêt",d:3},
  {n:"Malfestio",c:"Wyverne rapace",g:4,e:"Aucun",s:2,h:"Forêt",d:3},
  {n:"Mizutsune",c:"Léviathan",g:4,e:"💧 Eau",s:3,h:"Marais",d:4},
  {n:"Najarala",c:"Wyverne serpent",g:4,e:"Aucun",s:3,h:"Désert",d:3},
  {n:"Nakarkos",c:"Dragon ancien",g:4,e:"Aucun",s:4,h:"Cave",d:5},
  {n:"Nerscylla",c:"Temnocéran",g:4,e:"Poison",s:2,h:"Cave",d:3},
  {n:"Seltas Queen",c:"Néoptéron",g:4,e:"Aucun",s:2,h:"Désert",d:3},
  {n:"Seregios",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Désert",d:4},
  {n:"Shagaru Magala",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Tetsucabra",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Marais",d:2},
  {n:"Valstrax",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Montagne",d:5},
  {n:"Zamtrios",c:"Amphibien",g:4,e:"🧊 Glace",s:2,h:"Tundra",d:3},

  // --- GÉNÉRATION 5 ---
  {n:"Acidic Glavenus",c:"Wyverne brute",g:5,e:"🐉 Dragon",s:3,h:"Forêt",d:4},
  {n:"Anjanath",c:"Wyverne brute",g:5,e:"🔥 Feu",s:3,h:"Forêt",d:3},
  {n:"Banbaro",c:"Wyverne brute",g:5,e:"🧊 Glace",s:3,h:"Tundra",d:3},
  {n:"Bazelgeuse",c:"Wyverne volante",g:5,e:"Blast",s:3,h:"Forêt",d:4},
  {n:"Beotodus",c:"Wyverne aquatique",g:5,e:"🧊 Glace",s:2,h:"Tundra",d:2},
  {n:"Dodogama",c:"Wyverne à crocs",g:5,e:"🔥 Feu",s:2,h:"Volcan",d:2},
  {n:"Espinas",c:"Wyverne volante",g:5,e:"🔥 Feu",s:3,h:"Forêt",d:4},
  {n:"Fulgur Anjanath",c:"Wyverne brute",g:5,e:"⚡ Foudre",s:3,h:"Forêt",d:4},
  {n:"Jyuratodus",c:"Wyverne aquatique",g:5,e:"💧 Eau",s:2,h:"Marais",d:2},
  {n:"Kulu-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:2,h:"Désert",d:1},
  {n:"Kulve Taroth",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Volcan",d:5},
  {n:"Legiana",c:"Wyverne volante",g:5,e:"🧊 Glace",s:3,h:"Montagne",d:3},
  {n:"Namielle",c:"Dragon ancien",g:5,e:"💧 Eau",s:3,h:"Océan",d:5},
  {n:"Nergigante",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Montagne",d:5},
  {n:"Odogaron",c:"Wyverne à crocs",g:5,e:"Aucun",s:2,h:"Ruines",d:4},
  {n:"Paolumu",c:"Wyverne volante",g:5,e:"Aucun",s:2,h:"Montagne",d:2},
  {n:"Pukei-Pukei",c:"Wyverne rapace",g:5,e:"Poison",s:2,h:"Forêt",d:2},
  {n:"Radobaan",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Ruines",d:2},
  {n:"Safi'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Cave",d:5},
  {n:"Shara Ishvalda",c:"Dragon ancien",g:5,e:"Aucun",s:3,h:"Ruines",d:5},
  {n:"Tobi-Kadachi",c:"Wyverne à crocs",g:5,e:"⚡ Foudre",s:2,h:"Forêt",d:2},
  {n:"Tzitzi-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:2,h:"Marais",d:2},
  {n:"Vaal Hazak",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Velkhana",c:"Dragon ancien",g:5,e:"🧊 Glace",s:3,h:"Tundra",d:5},
  {n:"Xeno'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Cave",d:5},

  // --- GÉNÉRATION 6 ---
  {n:"Ajarakan",c:"Bête à crocs",g:6,e:"🔥 Feu",s:3,h:"Volcan",d:4},
  {n:"Aknosom",c:"Wyverne rapace",g:6,e:"🔥 Feu",s:3,h:"Désert",d:3},
  {n:"Almudron",c:"Léviathan",g:6,e:"💧 Eau",s:3,h:"Marais",d:3},
  {n:"Arkveld",c:"Wyverne volante",g:6,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Balahara",c:"Léviathan",g:6,e:"💧 Eau",s:2,h:"Désert",d:2},
  {n:"Bishaten",c:"Bête à crocs",g:6,e:"Aucun",s:2,h:"Forêt",d:3},
  {n:"Chatacabra",c:"Amphibien",g:6,e:"Aucun",s:2,h:"Désert",d:2},
  {n:"Doshaguma",c:"Bête à crocs",g:6,e:"Aucun",s:3,h:"Forêt",d:4},
  {n:"Gaismagorm",c:"Dragon ancien",g:6,e:"Aucun",s:4,h:"Cave",d:5},
  {n:"Garangolm",c:"Bête à crocs",g:6,e:"🔥 Feu / 💧 Eau",s:3,h:"Forêt",d:4},
  {n:"Goss Harag",c:"Bête à crocs",g:6,e:"🧊 Glace",s:3,h:"Tundra",d:4},
  {n:"Hirabami",c:"Léviathan",g:6,e:"⚡ Foudre",s:2,h:"Montagne",d:3},
  {n:"Ibushi",c:"Dragon ancien",g:6,e:"Aucun",s:3,h:"Montagne",d:5},
  {n:"Jin Dahaad",c:"Léviathan",g:6,e:"🧊 Glace",s:3,h:"Montagne",d:4},
  {n:"Lala Barina",c:"Temnocéran",g:6,e:"Poison",s:2,h:"Forêt",d:3},
  {n:"Lunagaron",c:"Wyverne à crocs",g:6,e:"🧊 Glace",s:3,h:"Tundra",d:4},
  {n:"Magnamalo",c:"Wyverne à crocs",g:6,e:"Aucun",s:3,h:"Montagne",d:5},
  {n:"Malzeno",c:"Dragon ancien",g:6,e:"🐉 Dragon",s:3,h:"Ruines",d:5},
  {n:"Narwa",c:"Dragon ancien",g:6,e:"⚡ Foudre",s:3,h:"Montagne",d:5},
  {n:"Nu Udra",c:"Céphalopode",g:6,e:"🔥 Feu",s:4,h:"Océan",d:5},
  {n:"Quematrice",c:"Wyverne brute",g:6,e:"🔥 Feu",s:3,h:"Volcan",d:4},
  {n:"Rakna-Kadaki",c:"Temnocéran",g:6,e:"🔥 Feu",s:3,h:"Volcan",d:4},
  {n:"Rey Dau",c:"Wyverne volante",g:6,e:"⚡ Foudre",s:3,h:"Désert",d:4},
  {n:"Rompopolo",c:"Wyverne brute",g:6,e:"Aucun",s:3,h:"Marais",d:4},
  {n:"Somnacanth",c:"Léviathan",g:6,e:"Aucun",s:3,h:"Océan",d:4},
  {n:"Tetranadon",c:"Amphibien",g:6,e:"💧 Eau",s:2,h:"Marais",d:2},
  {n:"Uth Duna",c:"Léviathan",g:6,e:"💧 Eau",s:3,h:"Océan",d:4},
  {n:"Xu Wu",c:"Céphalopode",g:6,e:"Aucun",s:3,h:"Forêt",d:4},
  {n:"Zoh Shia",c:"Dragon ancien",g:6,e:"Aucun",s:4,h:"Ruines",d:5},
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
