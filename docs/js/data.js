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
ZONES
Gen 1
- Arène
- Champ de bataille (1G)
- Château Schrade
- Forêt et collines
- Forteresse
- Grande arène
- Vieille jungle
- Vieux désert
- Vieux marais
- Vieux volcan

Gen 2
- Colisée aquatique
- Désert
- Grande forêt
- Jungle
- Marais
- Montagne enneigée
- Pic Mont enneigé
- Tour
- Tour 2
- Tour interdite
- Ville
- Volcan (2G)

Gen 3
- Arène aquatique
- Arène terrestre
- Canyon de lave
- Cime des esprits
- Forêt inondée
- Grand désert
- Île déserte
- Mer impure
- Petite arène
- Pics brumeux
- Plaines de sable
- Ruine sous-marine
- Terre sacrée
- Toundra
- Volcan (3G)
- Zone polaire

Gen 4
- Arène (MH4)
- Bastion perdu
- Bois éternel
- Champ de bataille (4G)
- Cime oubliée
- Cimetière des wyvernes
- Colisée
- Dunes
- Forêt primitive
- Forteresse (4G)
- Fort Schrade
- Frontière jurassique
- Grand océan
- Île d'Ingle
- Mer de glace
- Mont céleste
- Pinacle
- Pointe de lance
- Sanctuaire
- Steppe ancestrale
- Vallon immergé
- Vallon volcanique

Gen 5
- Abysses dévorantes
- Archipel de glace
- Arène (MHRise)
- Arène (MHW)
- Arène spéciale (MHW)
- Berceau oublié
- Cavernes de lave
- Citadelle
- Croisée des destins
- Désert des termites
- Fief glorieux
- Forêt ancienne
- Forteresse rouge
- Fort de Schrade
- Garde-provisions Seliana
- Givre éternel
- Grand ravin
- Jungle (MHRS)
- Palais de coraux
- Plaines de sable (MHRise)
- Plateau de corail
- Rivière éternelle
- Sources infernales
- Temple oublié
- Terre des anciens
- Val putride
- Vallée secrète

Gen 6
- Bassin pétrolier
- Forêt écarlate
- Plaines venteuses

Frontier
- Ancienne forteresse
- Avant-Poste
- Canyon
- Cascades luxuriantes
- Champ de Fleurs
- Corridor céleste
- Cratère volcanique
- Désert blanc
- Fin du Monde
- Forêt de Bambou
- Grand Navire d'Exploration
- Île Isolée
- Île tropicale
- Mer Polaire
- Mirador céleste
- Profondeurs de l'île isolée
- Région Montagneuse
- Sommet de la Grande Forest
- Tanière

Online
- Bois venteux
- Crête enneigée
- Désert lunaire
- Forêt de l'ermite
- Grand lac de la forteresse
- Lac d'Esther
- Marais de Kumbel
- Montagne enneigée d'Yilufa
- Plateaux sablonneux
- Sombre forêt cachée
- Tombeau ancestral
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
  {n:"Basarios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:2,h:"Vieux volcan",d:2}, // ~14.3 m
  {n:"Cephadrome",c:"Wyverne aquatique",g:1,e:"Aucun",s:2,h:"Vieux désert",d:2}, // ~15.4 m
  {n:"Diablos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Vieux désert",d:4}, // ~20.7 m
  {n:"Diablos noire",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Vieux désert",d:4}, // ~20.7 m
  {n:"Fatalis",c:"Dragon ancien",g:1,e:"🐉 Dragon",s:3,h:"Château Schrade",d:5}, // ~41.1 m
  {n:"Fatalis pourpre",c:"Dragon ancien",g:1,e:"🔥 Feu",s:3,h:"Vieux volcan",d:5}, // ~41.1 m
  {n:"Gendrome",c:"Wyverne rapace",g:1,e:"Aucun",s:1,h:"Vieux désert",d:2}, // ~9.2 m
  {n:"Gravios",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Vieux volcan",d:3}, // ~22.0 m
  {n:"Gravios onyx",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Vieux volcan",d:4}, // ~22.0 m
  {n:"Gypceros",c:"Wyverne rapace",g:1,e:"Aucun",s:2,h:"Vieux marais / Forêt et collines",d:2}, // ~11.1 m
  {n:"Gypceros améthyste",c:"Wyverne rapace",g:1,e:"Aucun",s:2,h:"Vieux marais",d:3}, // ~11.1 m
  {n:"Iodrome",c:"Wyverne rapace",g:1,e:"Poison",s:1,h:"Vieux volcan",d:2}, // ~10.1 m
  {n:"Khezu",c:"Wyverne volante",g:1,e:"⚡ Foudre",s:2,h:"Vieux marais",d:3}, // ~9.4 m
  {n:"Khezu grenat",c:"Wyverne volante",g:1,e:"⚡ Foudre",s:2,h:"Vieux marais",d:3}, // ~9.4 m
  {n:"Kirin",c:"Dragon ancien",g:1,e:"⚡ Foudre",s:1,h:"Champ de bataille (1G)",d:4}, // ~5.4 m
  {n:"Lao-Shan Lung",c:"Dragon ancien",g:1,e:"🔥 Feu",s:4,h:"Forteresse",d:5}, // ~69.6 m
  {n:"Lao-Shan Lung cendré",c:"Dragon ancien",g:1,e:"🐉 Dragon",s:4,h:"Forteresse",d:5}, // ~69.6 m
  {n:"Monoblos",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Vieux désert",d:3}, // // ~21.2 m
  {n:"Monoblos ivoire",c:"Wyverne volante",g:1,e:"Aucun",s:3,h:"Vieux désert",d:4}, // ~21.2 m
  {n:"Plesioth",c:"Wyverne aquatique",g:1,e:"💧 Eau",s:3,h:"Vieille jungle / Vieux désert",d:3}, // ~25.2 m
  {n:"Plesioth émeraude",c:"Wyverne aquatique",g:1,e:"💧 Eau",s:3,h:"Vieille jungle / Vieux désert",d:4}, // ~25.2 m
  {n:"Rathalos",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines",d:4}, // ~17.0 m
  {n:"Rathalos azur",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines",d:4}, // ~17.0 m
  {n:"Rathalos d'argent",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines / Tour",d:5}, // ~17.0 m
  {n:"Rathian",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines / Vieille jungle",d:3}, // ~16.3 m
  {n:"Rathian d'or",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines / Tour",d:5}, // ~16.3 m
  {n:"Rathian sakura",c:"Wyverne volante",g:1,e:"🔥 Feu",s:3,h:"Forêt et collines / Vieille jungle",d:4}, // ~16.3 m
  {n:"Velocidrome",c:"Wyverne rapace",g:1,e:"Aucun",s:1,h:"Forêt et collines",d:1}, // ~8.8 m
  {n:"Yian Garuga balafré",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt et collines / Vieille jungle",d:4}, // ~12.7 m
  {n:"Yian Garuga",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt et collines / Vieille jungle",d:4}, // ~12.7 m
  {n:"Yian Kut-Ku",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt et collines / Vieille jungle",d:2}, // ~9.8 m
  {n:"Yian Kut-Ku bleu",c:"Wyverne rapace",g:1,e:"🔥 Feu",s:2,h:"Forêt et collines / Vieille jungle",d:3}, // ~9.8 m

// --- GÉNÉRATION 2 ---
  {n:"Akantor",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Volcan (2G)",d:5}, // ~30.4 m
  {n:"Blangonga",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Montagne enneigée",d:3}, // ~12.1 m
  {n:"Blangonga cuivré",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Désert",d:4}, // ~12.1 m
  {n:"Bulldrome",c:"Bête à crocs",g:2,e:"Aucun",s:1,h:"Montagne enneigée / Jungle",d:1}, // ~6.3 m
  {n:"Ceanataur Shogun",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Marais / Volcan (2G)",d:3}, // ~11.2 m
  {n:"Ceanataur Shogun terre",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Désert / Volcan (2G)",d:4}, // ~11.2 m
  {n:"Chameleos",c:"Dragon ancien",g:2,e:"🐉 Dragon / 💧 Eau",s:3,h:"Marais / Grande forêt",d:5}, // ~26.4 m
  {n:"Congalala",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Jungle / Marais",d:2}, // ~11.4 m
  {n:"Congalala émeraude",c:"Bête à crocs",g:2,e:"Aucun",s:2,h:"Jungle / Marais",d:3}, // ~11.4 m
  {n:"Fatalis ancien",c:"Dragon ancien",g:2,e:"🐉 Dragon",s:3,h:"Tour interdite",d:5}, // ~41.1 m
  {n:"Giadrome",c:"Wyverne rapace",g:2,e:"Aucun",s:1,h:"Montagne enneigée",d:1}, // ~9.1 m
  {n:"Hermitaur Daimyo",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Désert / Jungle",d:3}, // ~10.5 m
  {n:"Hermitaur Daimyo prune",c:"Carapaceon",g:2,e:"💧 Eau",s:2,h:"Désert",d:4}, // ~10.5 m
  {n:"Hypnocatrice",c:"Wyverne rapace",g:2,e:"Aucun",s:2,h:"Grande forêt",d:3}, // ~12.9 m
  {n:"Kushala Daora",c:"Dragon ancien",g:2,e:"Aucun",s:3,h:"Montagne enneigée / Jungle",d:5}, // ~20.4 m
  {n:"Kushala Daora rouillé",c:"Dragon ancien",g:2,e:"Aucun",s:3,h:"Montagne enneigée / Ville",d:5}, // ~20.4 m
  {n:"Lavasioth",c:"Wyverne aquatique",g:2,e:"🔥 Feu",s:3,h:"Volcan (2G)",d:3}, // ~19.2 m
  {n:"Lunastra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert / Tour",d:5}, // ~24.1 m
  {n:"Nargacuga",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Grande forêt / Jungle",d:4}, // ~19.5 m
  {n:"Rajang",c:"Bête à crocs",g:2,e:"⚡ Foudre",s:2,h:"Montagne enneigée / Volcan (2G)",d:5}, // ~11.8 m
  {n:"Rajang orage",c:"Bête à crocs",g:2,e:"⚡ Foudre",s:2,h:"Montagne enneigée / Volcan (2G)",d:5}, // ~11.8 m
  {n:"Reine Vespoid",c:"Néoptéron",g:2,e:"Aucun",s:1,h:"Jungle / Marais",d:2}, // ~6.5 m
  {n:"Roi Shakalaka",c:"Inclassable / ???",g:2,e:"Aucun",s:1,h:"Jungle / Marais / Volcan (2G)",d:2}, // ~1.3 m
  {n:"Shen Gaoren",c:"Carapaceon",g:2,e:"Aucun",s:4,h:"Ville / Forteresse",d:5}, // ~32.0 m
  {n:"Teostra",c:"Dragon ancien",g:2,e:"🔥 Feu",s:3,h:"Désert / Volcan (2G)",d:5}, // ~24.3 m
  {n:"Tigrex",c:"Wyverne volante",g:2,e:"Aucun",s:3,h:"Montagne enneigée / Désert",d:4}, // ~18.9 m
  {n:"Ukanlos",c:"Wyverne volante",g:2,e:"🧊 Glace",s:3,h:"Pic Mont enneigé",d:5}, // ~31.8 m
  {n:"Yama Tsukami",c:"Dragon ancien",g:2,e:"Aucun",s:4,h:"Grande forêt / Tour",d:5}, // ~41.3 m

// --- GÉNÉRATION 3 ---
  {n:"Agnaktor",c:"Léviathan",g:3,e:"🔥 Feu",s:3,h:"Volcan (3G)",d:3}, // ~28.6 m
  {n:"Agnaktor glacial",c:"Léviathan",g:3,e:"🧊 Glace",s:3,h:"Toundra",d:4}, // ~28.6 m
  {n:"Alatreon",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:3,h:"Terre sacrée",d:5}, // ~31.0 m
  {n:"Amatsu",c:"Dragon ancien",g:3,e:"💧 Eau",s:3,h:"Cime des esprits",d:5}, // ~31.3 m
  {n:"Arzuros",c:"Bête à crocs",g:3,e:"Aucun",s:1,h:"Pics brumeux / Île déserte",d:1}, // ~6.1 m
  {n:"Barioth",c:"Wyverne volante",g:3,e:"🧊 Glace",s:3,h:"Toundra",d:4}, // ~21.2 m
  {n:"Barioth des sables",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Plaines de sable",d:4}, // ~21.2 m
  {n:"Barroth",c:"Wyverne brute",g:3,e:"Aucun",s:2,h:"Plaines de sable",d:2}, // ~14.6 m
  {n:"Barroth de jade",c:"Wyverne brute",g:3,e:"🧊 Glace",s:2,h:"Toundra",d:3}, // ~14.6 m
  {n:"Brachydios",c:"Wyverne brute",g:3,e:"Blast",s:2,h:"Volcan (3G) / Toundra",d:4}, // ~15.7 m
  {n:"Ceadeus",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Ruine sous-marine",d:5}, // ~58.3 m
  {n:"Ceadeus barbedor",c:"Dragon ancien",g:3,e:"💧 Eau",s:4,h:"Ruine sous-marine",d:5}, // ~58.3 m
  {n:"Deviljho",c:"Wyverne brute",g:3,e:"🐉 Dragon",s:3,h:"Île déserte / Volcan (3G) / Toundra",d:5}, // ~21.5 m
  {n:"Deviljho carnage",c:"Wyverne brute",g:3,e:"🐉 Dragon",s:3,h:"Île déserte / Toundra",d:5}, // ~23.1 m
  {n:"Dire Miralis",c:"Dragon ancien",g:3,e:"🔥 Feu",s:4,h:"Mer impure",d:5}, // ~62.5 m
  {n:"Duramboros",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Forêt inondée / Pics brumeux",d:3}, // ~22.1 m
  {n:"Duramboros rouillé",c:"Wyverne brute",g:3,e:"Aucun",s:3,h:"Plaines de sable",d:4}, // ~22.1 m
  {n:"Gigginox",c:"Wyverne volante",g:3,e:"Poison",s:2,h:"Toundra",d:2}, // ~13.7 m
  {n:"Gigginox foudroyant",c:"Wyverne volante",g:3,e:"⚡ Foudre",s:2,h:"Toundra",d:3}, // ~13.7 m
  {n:"Gobul",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Forêt inondée",d:2}, // ~16.4 m
  {n:"Grand Baggi",c:"Wyverne rapace",g:3,e:"Aucun",s:2,h:"Toundra",d:2}, // ~11.0 m
  {n:"Grand Jaggi",c:"Wyverne rapace",g:3,e:"Aucun",s:1,h:"Île déserte / Pics brumeux",d:1}, // ~9.4 m
  {n:"Grand Wroggi",c:"Wyverne rapace",g:3,e:"Poison",s:1,h:"Forêt inondée / Volcan (3G)",d:2}, // ~9.6 m
  {n:"Jhen Mohran",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:5,h:"Grand désert",d:5}, // ~111.6 m
  {n:"Jhen Mohran sacré",c:"Dragon ancien",g:3,e:"🐉 Dragon",s:5,h:"Grand désert",d:5}, // ~111.6 m
  {n:"Lagiacrus",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Île déserte / Forêt inondée",d:4}, // ~26.4 m
  {n:"Lagiacrus abyssal",c:"Léviathan",g:3,e:"⚡ Foudre",s:4,h:"Ruine sous-marine",d:5}, // ~33.8 m
  {n:"Lagiacrus ivoire",c:"Léviathan",g:3,e:"⚡ Foudre",s:3,h:"Île déserte",d:4}, // ~26.4 m
  {n:"Lagombi",c:"Bête à crocs",g:3,e:"🧊 Glace",s:1,h:"Toundra",d:2}, // ~5.6 m
  {n:"Ludroth pourpre",c:"Léviathan",g:3,e:"Poison",s:2,h:"Forêt inondée / Île déserte",d:3}, // ~15.8 m
  {n:"Ludroth royal",c:"Léviathan",g:3,e:"💧 Eau",s:2,h:"Forêt inondée / Île déserte",d:2}, // ~15.8 m
  {n:"Nargacuga sélénite",c:"Wyverne volante",g:3,e:"Poison",s:3,h:"Tour",d:5}, // ~20.1 m
  {n:"Nargacuga vert",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Forêt inondée / Pics brumeux",d:4}, // ~19.5 m
  {n:"Nibelsnarf",c:"Léviathan",g:3,e:"Aucun",s:2,h:"Plaines de sable",d:2}, // ~16.8 m
  {n:"Qurupeco",c:"Wyverne rapace",g:3,e:"🔥 Feu",s:1,h:"Île déserte / Pics brumeux",d:2}, // ~8.6 m
  {n:"Qurupeco vermillon",c:"Wyverne rapace",g:3,e:"⚡ Foudre",s:1,h:"Plaines de sable",d:3}, // ~8.6 m
  {n:"Tigrex berserk",c:"Wyverne volante",g:3,e:"Aucun",s:3,h:"Volcan (3G)",d:4}, // ~18.9 m
  {n:"Uragaan",c:"Wyverne brute",g:3,e:"🔥 Feu",s:3,h:"Volcan (3G)",d:3}, // ~20.9 m
  {n:"Uragaan d'acier",c:"Wyverne brute",g:3,e:"🔥 Feu",s:3,h:"Volcan (3G)",d:4}, // ~20.9 m
  {n:"Volvidon",c:"Bête à crocs",g:3,e:"Aucun",s:1,h:"Volcan (3G) / Plaines de sable",d:2}, // ~6.6 m
  {n:"Zinogre",c:"Wyverne à crocs",g:3,e:"⚡ Foudre",s:2,h:"Pics brumeux / Île déserte",d:4}, // ~15.3 m
  {n:"Zinogre stygien",c:"Wyverne à crocs",g:3,e:"🐉 Dragon",s:2,h:"Toundra / Volcan (3G)",d:5}, // ~15.3 m

// --- GÉNÉRATION 4 ---
  {n:"Ahtal-Ka",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Cime oubliée",d:5}, // ~8.5 m
  {n:"Arzuros Crâne-ardent",c:"Bête à crocs",g:4,e:"Aucun",s:2,h:"Cime oubliée / Île déserte",d:4}, // ~8.2 m
  {n:"Astalos",c:"Wyverne volante",g:4,e:"⚡ Foudre",s:2,h:"Frontière jurassique / Forêt et collines",d:4}, // ~16.8 m
  {n:"Astalos Prince-orage",c:"Wyverne volante",g:4,e:"⚡ Foudre",s:3,h:"Frontière jurassique / Forêt et collines",d:5}, // ~18.5 m
  {n:"Basarios rubis",c:"Wyverne volante",g:4,e:"🔥 Feu",s:2,h:"Bois éternel",d:3}, // ~14.3 m
  {n:"Brachydios tempête",c:"Wyverne brute",g:4,e:"Blast",s:3,h:"Vallon volcanique / Île d'Ingle",d:5}, // ~21.2 m
  {n:"Ceanataur Brise-os",c:"Carapaceon",g:4,e:"💧 Eau",s:2,h:"Forêt primitive / Marais",d:4}, // ~13.5 m
  {n:"Dah'ren Mohran",c:"Dragon ancien",g:4,e:"Aucun",s:5,h:"Dunes",d:5}, // ~114.5 m
  {n:"Dalamadur",c:"Dragon ancien",g:4,e:"Aucun",s:5,h:"Pointe de lance / Mont céleste",d:5}, // ~440.4 m
  {n:"Dalamadur Shah",c:"Dragon ancien",g:4,e:"🔥 Feu",s:5,h:"Pointe de lance / Mont céleste",d:5}, // ~440.4 m
  {n:"Diablos Bain-de-sang",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Dunes / Désert",d:5}, // ~24.8 m
  {n:"Gammoth",c:"Bête à crocs",g:4,e:"🧊 Glace",s:3,h:"Frontière jurassique / Mer de glace",d:4}, // ~22.3 m
  {n:"Gammoth Givre-ancien",c:"Bête à crocs",g:4,e:"🧊 Glace",s:3,h:"Mer de glace / Montagne enneigée",d:5}, // ~25.5 m
  {n:"Glavenus",c:"Wyverne brute",g:4,e:"🔥 Feu",s:3,h:"Frontière jurassique / Dunes / Volcan (3G)",d:4}, // ~24.5 m
  {n:"Glavenus Lame-chaos",c:"Wyverne brute",g:4,e:"🔥 Feu / Blast",s:3,h:"Vallon volcanique / Frontière jurassique",d:5}, // ~29.2 m
  {n:"Gogmazios",c:"Dragon ancien",g:4,e:"🔥 Feu",s:4,h:"Forteresse (4G)",d:5}, // ~49.2 m
  {n:"Gore Magala",c:"???",g:4,e:"🐉 Dragon",s:3,h:"Steppe ancestrale / Forêt primitive",d:4}, // ~18.5 m
  {n:"Gore Magala du chaos",c:"???",g:4,e:"🐉 Dragon",s:3,h:"Sanctuaire / Cime oubliée",d:5}, // ~19.8 m
  {n:"Grand Maccao",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Frontière jurassique / Ruines",d:1}, // ~8.9 m
  {n:"Hermitaur Poing-fer",c:"Carapaceon",g:4,e:"💧 Eau",s:2,h:"Dunes / Île déserte",d:4}, // ~12.8 m
  {n:"Kecha Wacha",c:"Bête à crocs",g:4,e:"💧 Eau",s:1,h:"Steppe ancestrale / Forêt primitive",d:2}, // ~9.2 m
  {n:"Kecha Wacha blanc",c:"Bête à crocs",g:4,e:"🔥 Feu",s:1,h:"Mont céleste / Steppe ancestrale",d:3}, // ~9.2 m
  {n:"Kirin Oroshi",c:"Dragon ancien",g:4,e:"🧊 Glace",s:1,h:"Bois éternel",d:4}, // ~5.4 m
  {n:"Lagombi Maître-neige",c:"Bête à crocs",g:4,e:"🧊 Glace",s:1,h:"Mer de glace / Montagne enneigée",d:4}, // ~7.8 m
  {n:"Malfestio",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Frontière jurassique / Forêt et collines",d:2}, // ~9.5 m
  {n:"Malfestio Lune-noire",c:"Wyverne rapace",g:4,e:"Aucun",s:1,h:"Cime oubliée / Île déserte",d:4}, // ~11.1 m
  {n:"Mizutsune",c:"Léviathan",g:4,e:"💧 Eau",s:3,h:"Pics brumeux / Forêt primitive",d:4}, // ~19.8 m
  {n:"Mizutsune Perce-âme",c:"Léviathan",g:4,e:"💧 Eau / 🔥 Feu",s:3,h:"Pics brumeux / Marais",d:5}, // ~22.4 m
  {n:"Najarala",c:"Wyverne serpent",g:4,e:"Aucun",s:4,h:"Steppe ancestrale / Forêt primitive",d:3}, // ~40.2 m
  {n:"Najarala du déluge",c:"Wyverne serpent",g:4,e:"💧 Eau",s:4,h:"Vallon immergé / Forêt primitive",d:4}, // ~40.2 m
  {n:"Nakarkos",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:4,h:"Cimetière des wyvernes",d:5}, // ~42.9 m
  {n:"Nargacuga Vent-acier",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Île déserte / Pics brumeux",d:5}, // ~22.6 m
  {n:"Nerscylla",c:"Temnocéran",g:4,e:"Poison",s:2,h:"Steppe ancestrale / Vallon immergé",d:3}, // ~11.2 m
  {n:"Nerscylla spectrale",c:"Temnocéran",g:4,e:"Aucun",s:2,h:"Dunes",d:4}, // ~11.2 m
  {n:"Rathalos Roi-enfer",c:"Wyverne volante",g:4,e:"🔥 Feu",s:3,h:"Vallon volcanique / Île d'Ingle",d:5}, // ~20.1 m
  {n:"Rathian Reine-poison",c:"Wyverne volante",g:4,e:"🔥 Feu / Poison",s:3,h:"Marais / Forêt primitive",d:5}, // ~19.5 m
  {n:"Reine Seltas",c:"Néoptéron",g:4,e:"Aucun",s:2,h:"Steppe ancestrale / Forêt primitive",d:3}, // ~14.9 m
  {n:"Reine Seltas du désert",c:"Néoptéron",g:4,e:"💧 Eau",s:2,h:"Dunes",d:4}, // ~14.9 m
  {n:"Seltas",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Steppe ancestrale / Forêt primitive",d:1}, // ~6.4 m
  {n:"Seltas du désert",c:"Néoptéron",g:4,e:"Aucun",s:1,h:"Dunes",d:2}, // ~6.4 m
  {n:"Seregios",c:"Wyverne volante",g:4,e:"Aucun",s:2,h:"Dunes / Steppe ancestrale / Mont céleste",d:4}, // ~15.9 m
  {n:"Shagaru Magala",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Sanctuaire",d:5}, // ~20.2 m
  {n:"Tetsucabra",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Steppe ancestrale / Vallon immergé",d:2}, // ~10.4 m
  {n:"Tetsucabra Brise-roc",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Île déserte / Marais",d:4}, // ~13.1 m
  {n:"Tetsucabra féroce",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Vallon volcanique / Steppe ancestrale",d:3}, // ~10.4 m
  {n:"Tigrex Griffe-sombre",c:"Wyverne volante",g:4,e:"Aucun",s:3,h:"Montagne enneigée / Désert",d:5}, // ~22.4 m
  {n:"Tigrex magma",c:"Wyverne volante",g:4,e:"Blast",s:3,h:"Vallon volcanique",d:5}, // ~24.5 m
  {n:"Uragaan Roi-cristal",c:"Wyverne brute",g:4,e:"🔥 Feu",s:3,h:"Volcan (3G)",d:4}, // ~25.2 m
  {n:"Valstrax",c:"Dragon ancien",g:4,e:"🐉 Dragon",s:3,h:"Pinacle / Ruines",d:5}, // ~23.2 m
  {n:"Yian Garuga Œil-mort",c:"Wyverne rapace",g:4,e:"🔥 Feu",s:2,h:"Forêt et collines / Marais",d:5}, // ~14.1 m
  {n:"Zamtrios",c:"Amphibien",g:4,e:"🧊 Glace",s:2,h:"Mer de glace",d:3}, // ~14.7 m
  {n:"Zamtrios tigré",c:"Amphibien",g:4,e:"Aucun",s:2,h:"Dunes",d:4}, // ~14.7 m
  {n:"Zinogre Feu-du-ciel",c:"Wyverne à crocs",g:4,e:"⚡ Foudre",s:2,h:"Pics brumeux / Île déserte",d:5}, // ~18.8 m

// --- GÉNÉRATION 5 ---
  {n:"Aknosom",c:"Wyverne rapace",g:5,e:"🔥 Feu",s:1,h:"Temple oublié / Archipel de glace",d:2}, // ~8.8 m
  {n:"Almudron",c:"Léviathan",g:5,e:"Aucun",s:3,h:"Temple oublié / Plaines de sable (MHRise)",d:4}, // ~28.5 m
  {n:"Almudron magma",c:"Léviathan",g:5,e:"🔥 Feu",s:3,h:"Cavernes de lave",d:4}, // ~28.5 m
  {n:"Anjanath",c:"Wyverne brute",g:5,e:"🔥 Feu",s:2,h:"Forêt ancienne / Désert des termites",d:3}, // ~16.4 m
  {n:"Anjanath tonnerre",c:"Wyverne brute",g:5,e:"⚡ Foudre",s:2,h:"Givre éternel / Terre des anciens",d:4}, // ~16.4 m
  {n:"Banbaro",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Givre éternel / Fief glorieux",d:3}, // ~22.3 m
  {n:"Barioth crocgivre",c:"Wyverne volante",g:5,e:"🧊 Glace",s:3,h:"Givre éternel",d:4}, // ~21.2 m
  {n:"Bazelgeuse",c:"Wyverne volante",g:5,e:"🔥 Feu / Blast",s:3,h:"Forêt ancienne / Terre des anciens",d:5}, // ~19.6 m
  {n:"Bazelgeuse vulcan",c:"Wyverne volante",g:5,e:"🔥 Feu / Blast",s:3,h:"Terre des anciens / Volcan",d:5}, // ~20.3 m
  {n:"Beotodus",c:"Wyverne aquatique",g:5,e:"🧊 Glace",s:2,h:"Givre éternel",d:2}, // ~15.8 m
  {n:"Bishaten",c:"Bête à crocs",g:5,e:"Aucun",s:1,h:"Temple oublié / Citadelle",d:2}, // ~8.7 m
  {n:"Bishaten sanguin",c:"Bête à crocs",g:5,e:"🔥 Feu",s:1,h:"Citadelle / Temple oublié",d:3}, // ~8.7 m
  {n:"Chameleos éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Temple oublié / Citadelle",d:5}, // ~26.4 m
  {n:"Dodogama",c:"Wyverne à crocs",g:5,e:"Blast",s:2,h:"Terre des anciens",d:2}, // ~11.1 m
  {n:"Gaismagorm",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Abysses dévorantes",d:5}, // ~37.9 m
  {n:"Garangolm",c:"Bête à crocs",g:5,e:"🔥 Feu / 💧 Eau",s:2,h:"Citadelle",d:4}, // ~14.5 m
  {n:"Glavenus acide",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Val putride",d:4}, // ~25.2 m
  {n:"Goss Harag",c:"Bête à crocs",g:5,e:"🧊 Glace",s:2,h:"Archipel de glace / Citadelle",d:4}, // ~14.1 m
  {n:"Grand Girros",c:"Wyverne à crocs",g:5,e:"Aucun",s:1,h:"Val putride",d:2}, // ~9.9 m
  {n:"Grand Izuchi",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Temple oublié / Archipel de glace",d:1}, // ~8.5 m
  {n:"Grand Jagras",c:"Wyverne à crocs",g:5,e:"Aucun",s:1,h:"Forêt ancienne",d:1}, // ~9.7 m
  {n:"Ibushi du vent",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Palais de coraux / Sources infernales",d:5}, // ~30.1 m
  {n:"Jyuratodus",c:"Wyverne aquatique",g:5,e:"💧 Eau",s:2,h:"Désert des termites",d:2}, // ~15.1 m
  {n:"Kulu-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Désert des termites / Forêt ancienne",d:1}, // ~9.1 m
  {n:"Kulve Taroth",c:"Dragon ancien",g:5,e:"🔥 Feu",s:4,h:"Vallée secrète",d:5}, // ~47.2 m
  {n:"Kushala Daora éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Cavernes de lave / Citadelle",d:5}, // ~20.4 m
  {n:"Legiana",c:"Wyverne volante",g:5,e:"🧊 Glace",s:2,h:"Plateau de corail / Givre éternel",d:3}, // ~17.1 m
  {n:"Legiana blizzard",c:"Wyverne volante",g:5,e:"🧊 Glace",s:2,h:"Givre éternel",d:4}, // ~17.1 m
  {n:"Lunagaron",c:"Wyverne à crocs",g:5,e:"🧊 Glace",s:2,h:"Citadelle / Archipel de glace",d:4}, // ~13.4 m
  {n:"Magnamalo",c:"Wyverne à crocs",g:5,e:"🔥 Feu / Blast",s:2,h:"Temple oublié / Cavernes de lave",d:4}, // ~16.2 m
  {n:"Malzeno",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Citadelle",d:5}, // ~21.1 m
  {n:"Malzeno primordial",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Citadelle",d:5}, // ~21.1 m
  {n:"Mizutsune mauve",c:"Léviathan",g:5,e:"🔥 Feu / Blast",s:3,h:"Sources infernales / Vallée secrète",d:5}, // ~21.8 m
  {n:"Namielle",c:"Dragon ancien",g:5,e:"💧 Eau / ⚡ Foudre",s:3,h:"Plateau de corail / Fief glorieux",d:5}, // ~20.4 m
  {n:"Narwa du tonnerre",c:"Dragon ancien",g:5,e:"⚡ Foudre",s:3,h:"Palais de coraux",d:5}, // ~33.4 m
  {n:"Narwa la mère de tous",c:"Dragon ancien",g:5,e:"⚡ Foudre / 🐉 Dragon",s:3,h:"Palais de coraux",d:5}, // ~34.6 m
  {n:"Nergigante",c:"Dragon ancien",g:5,e:"Aucun",s:2,h:"Terre des anciens",d:5}, // ~16.2 m
  {n:"Nergigante chaos",c:"Dragon ancien",g:5,e:"Aucun",s:2,h:"Berceau oublié / Terre des anciens",d:5}, // ~18.1 m
  {n:"Odogaron",c:"Wyverne à crocs",g:5,e:"Aucun",s:2,h:"Val putride / Plateau de corail",d:3}, // ~14.3 m
  {n:"Odogaron désastre",c:"Wyverne à crocs",g:5,e:"🐉 Dragon",s:2,h:"Givre éternel / Terre des anciens",d:4}, // ~14.3 m
  {n:"Paolumu",c:"Wyverne volante",g:5,e:"Aucun",s:1,h:"Plateau de corail",d:2}, // ~7.2 m
  {n:"Paolumu belladone",c:"Wyverne volante",g:5,e:"Aucun",s:1,h:"Désert des termites",d:3}, // ~7.2 m
  {n:"Pukei-Pukei",c:"Wyverne rapace",g:5,e:"Poison",s:1,h:"Forêt ancienne / Désert des termites",d:2}, // ~8.1 m
  {n:"Pukei-Pukei corail",c:"Wyverne rapace",g:5,e:"💧 Eau",s:1,h:"Plateau de corail",d:3}, // ~8.1 m
  {n:"Radobaan",c:"Wyverne brute",g:5,e:"Aucun",s:3,h:"Val putride",d:2}, // ~19.4 m
  {n:"Rakna-Kadaki",c:"Temnocéran",g:5,e:"🔥 Feu",s:2,h:"Cavernes de lave / Plaines de sable (MHRise)",d:4}, // ~11.5 m
  {n:"Rakna-Kadaki de feu",c:"Temnocéran",g:5,e:"🔥 Feu / Blast",s:2,h:"Cavernes de lave / Citadelle",d:4}, // ~11.5 m
  {n:"Safi'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Vallée secrète",d:5}, // ~48.0 m
  {n:"Shara Ishvalda",c:"Dragon ancien",g:5,e:"Aucun",s:3,h:"Croisée des destins",d:5}, // ~29.5 m
  {n:"Somnacanth",c:"Léviathan",g:5,e:"Aucun",s:2,h:"Temple oublié / Archipel de glace",d:3}, // ~15.6 m
  {n:"Somnacanth aurore",c:"Léviathan",g:5,e:"🧊 Glace",s:2,h:"Archipel de glace / Citadelle",d:4}, // ~15.6 m
  {n:"Teostra éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon / 🔥 Feu",s:3,h:"Désert des termites / Cavernes de lave",d:5}, // ~24.3 m
  {n:"Tetranadon",c:"Amphibien",g:5,e:"💧 Eau",s:2,h:"Temple oublié / Archipel de glace",d:2}, // ~10.2 m
  {n:"Tobi-Kadachi",c:"Wyverne à crocs",g:5,e:"⚡ Foudre",s:2,h:"Forêt ancienne. / Fief glorieux",d:2}, // ~12.9 m
  {n:"Tobi-Kadachi vipère",c:"Wyverne à crocs",g:5,e:"Poison",s:2,h:"Givre éternel",d:3}, // ~12.9 m
  {n:"Tzitzi-Ya-Ku",c:"Wyverne rapace",g:5,e:"Aucun",s:1,h:"Plateau de corail",d:1}, // ~8.9 m
  {n:"Vaal Hazak",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Val putride",d:5}, // ~20.9 m
  {n:"Vaal Hazak fléau",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Forêt ancienne / Fief glorieux",d:5}, // ~20.9 m
  {n:"Valstrax écarlate",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Temple oublié / Cavernes de lave",d:5}, // ~23.2 m
  {n:"Valstrax écarlate éveillé",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:3,h:"Sources infernales",d:5}, // ~23.2 m
  {n:"Velkhana",c:"Dragon ancien",g:5,e:"🧊 Glace",s:3,h:"Givre éternel / Terre des anciens",d:5}, // ~25.8 m
  {n:"Xeno'jiiva",c:"Dragon ancien",g:5,e:"🐉 Dragon",s:4,h:"Terre des anciens",d:5}, // ~45.1 m
  {n:"Zorah Magdaros",c:"Dragon ancien",g:5,e:"🔥 Feu",s:5,h:"Rivière éternelle",d:5}, // ~257.9 m

// --- GÉNÉRATION 6 ---
  {n:"Ajarakan",c:"Bête à crocs",g:6,e:"🔥 Feu",s:2,h:"Bassin de l'huile",d:4}, // ~13.5 m
  {n:"Arkveld",c:"Wyverne volante",g:6,e:"🐉 Dragon",s:3,h:"Plaines de la foudre",d:5}, // ~21.0 m
  {n:"Balahara",c:"Léviathan",g:6,e:"Aucun",s:2,h:"Plaines de la foudre",d:2}, // ~16.5 m
  {n:"Chatacabra",c:"Amphibien",g:6,e:"Aucun",s:2,h:"Plaines de la foudre",d:2}, // ~11.2 m
  {n:"Doshaguma",c:"Bête à crocs",g:6,e:"Aucun",s:2,h:"Plaines de la foudre",d:3}, // ~14.0 m
  {n:"Hirabami",c:"Léviathan",g:6,e:"⚡ Foudre",s:2,h:"Plaines de la foudre",d:3}, // ~15.8 m
  {n:"Jin Dahaad",c:"Léviathan",g:6,e:"🧊 Glace",s:3,h:"Forêt écarlate",d:4}, // ~26.2 m
  {n:"Lala Barina",c:"Temnocéran",g:6,e:"Poison",s:2,h:"Forêt écarlate",d:3}, // ~12.5 m
  {n:"Nu Udra",c:"Céphalopode",g:6,e:"🔥 Feu",s:4,h:"Forêt écarlate",d:5}, // ~55.0 m
  {n:"Oméga Planetikos",c:"Dragon ancien",g:6,e:"🐉 Dragon",s:4,h:"Plaines de la foudre",d:5}, // ~65.0 m
  {n:"Quematrice",c:"Wyverne brute",g:6,e:"🔥 Feu",s:3,h:"Bassin de l'huile",d:4}, // ~22.4 m
  {n:"Rey Dau",c:"Wyverne volante",g:6,e:"⚡ Foudre",s:3,h:"Plaines de la foudre",d:4}, // ~20.5 m
  {n:"Rompopolo",c:"Wyverne brute",g:6,e:"Aucun",s:2,h:"Bassin de l'huile",d:3}, // ~17.1 m
  {n:"Uth Duna",c:"Léviathan",g:6,e:"💧 Eau",s:3,h:"Forêt écarlate",d:4}, // ~29.8 m
  {n:"Xu Wu",c:"Céphalopode",g:6,e:"Aucun",s:3,h:"Forêt écarlate",d:4}, // ~32.0 m
  {n:"Zoh Shia",c:"Dragon ancien",g:6,e:"Aucun",s:4,h:"Plaines de la foudre",d:5}, // ~48.5 m
];

const SL = ["","Petit","Moyen","Grand","Géant", "Colossal"];
const COLS = [
  {key:'c', label:'CLASSE'},
  {key:'g', label:'GÉN.'},
  {key:'e', label:'ÉLÉMENT'},
  {key:'s', label:'TAILLE'},
  {key:'h', label:'HABITAT'},
  {key:'d', label:'DANGER'},
];
const MAX = 8;
