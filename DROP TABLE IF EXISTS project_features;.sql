DROP TABLE IF EXISTS project_features;
DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  badge VARCHAR(255),
  description TEXT,
  status VARCHAR(50),
  image VARCHAR(255),
  theme VARCHAR(20),
  architecture VARCHAR(255),
  backend VARCHAR(255),
  frontend VARCHAR(255),
  database_tech VARCHAR(255),
  action_url VARCHAR(255),
  action_type VARCHAR(50)
);

CREATE TABLE project_features (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

INSERT INTO projects (title, slug, badge, description, status, image, theme, architecture, backend, frontend, database_tech, action_url, action_type) 
VALUES 
(
  'LA_CULTURE_DU_MOUVEMENT', 
  'la-culture-du-mouvement', 
  'ALERTE_00', 
  'Identité numérique complète pour Alizé Warion. Site vitrine haute performance avec architecture sur-mesure, calendrier dynamique et blog, optimisé pour l''autonomie client.', 
  'TERMINER', 
  '/images/projet_bap.png', 
  'cyan',
  'WordPress From Scratch / Proxy',
  'PHP (Thème & Proxy)',
  'HTML5 / CSS (Responsive) / JS',
  'MySQL',
  'https://github.com/LucasAudoubert/La-Culture-du-Mouvement',
  'site'
),
(
  'WHO_THE_MOST_VALUABLE', 
  'who-the-most-valuable', 
  'ALERTE_01', 
  'Application de comparaison de performance pour Overwatch. Analyse side-by-side des statistiques réelles avec un algorithme de scoring équilibré pour mesurer l''impact réel des joueurs.', 
  'TERMINER', 
  '/images/projet_overwatch.png', 
  'pink',
  'Serverless / API REST',
  'Next.js (API Routes)',
  'React / Bootstrap',
  'N/A',
  'https://github.com/AnisseElBezazi/Who_The_Most_Valuable_Overwatch',
  'github'
),
(
  'SOFTMOVE_BLENDER', 
  'softmove-blender', 
  'ALERTE_02', 
  'Addon d''accessibilité pour Blender conçu pour aider les artistes souffrant de handicaps moteurs à modéliser en 3D avec précision grâce à un curseur anti-tremblement intelligent.', 
  'TERMINER', 
  '/images/projet_softmove.png', 
  'cyan',
  'Addon Python / API Blender',
  'Python (bmesh, gpu)',
  'Interface N-Panel Blender',
  'N/A',
  'https://github.com/SLOWIXX/Add_on_blender',
  'github'
),
(
  'FLIXTHREAD', 
  'flixthread', 
  'ALERTE_03', 
  'Réseau social combinant l''UX de Twitter et l''UI de Netflix. Salons dédiés aux films avec un fort accent sur la sécurité (CSRF, XSS, gestion sécurisée des uploads).', 
  'TERMINER', 
  '/images/projet_flixthread.png', 
  'pink',
  'MVC / Custom Framework',
  'PHP Natif',
  'HTML5 / CSS / JS',
  'MySQL',
  'https://github.com/AnisseElBezazi/Twitter-remake',
  'github'
),
(
  'DESIGN_ETAM', 
  'design-etam', 
  'ALERTE_04', 
  'Chef de projet d''une équipe de 4 personnes. Création d''une maquette Figma pour la refonte du site en y intégrant de l''UI Zéro et de l''IA.', 
  'TERMINER', 
  '/images/projet_etam.png', 
  'cyan',
  'Figma / Photoshop',
  'N/A',
  'N/A',
  'N/A',
  'https://www.figma.com/design/QPgoCmAYgS2dle6xq7x8Pe/Etam_maquette?node-id=0-1&t=0l0WKDA5nroWxOxz-1',
  'maquette'
),
(
  'MVP_PIXELTRADER', 
  'mvp-pixeltrader', 
  'ALERTE_05', 
  'MVP de gestion de stock de jeux vidéo rétro. Plateforme permettant de gérer les exemplaires et de suivre les KPI de rentabilité.', 
  'TERMINER', 
  '/images/projet_pixeltrader.png', 
  'pink',
  'MVC / API REST',
  'PHP / Symfony',
  'HTML5 / CSS / JS',
  'MySQL',
  'https://github.com/Bootcamp-PixelTrader-2025-2026/PixelTrader_groupe_anisse_quentin',
  'github'
),
(
  'EVENY', 
  'eveny', 
  'ALERTE_06', 
  'Application de gestion de projet avec automatisation des différentes vues (Kanban, Liste, Calendrier, Gantt) et collaboration en temps réel.', 
  'EN COURS', 
  '/images/projet_eveny.png', 
  'cyan',
  'Hub Mercure / API REST',
  'PHP / Symfony',
  'React',
  'MySQL',
  'https://www.figma.com/design/8wNsqAURKvkcOfCmD99sMq/Eveny?t=Uohky5Uz6P0aOdFE-1',
  'maquette'
),
(
  'CREATIVE_DEV', 
  'creative-dev', 
  'ALERTE_07', 
  'Projet de Creative Dev. Animations web interactives (CSS, Canvas, Keyframes) illustrant le dépassement de soi à travers 3 émotions. Réalisé en une semaine.', 
  'TERMINER', 
  '/images/projet_creaivedev.png', 
  'pink',
  'Vite / Vanilla JS',
  'N/A',
  'HTML5 / CSS3 / JS',
  'N/A',
  'https://github.com/SLOWIXX/Creative_dev',
  'github'
),
(
  'Mon_premier_site', 
  'premier-projet-pokemon', 
  'INIT_00', 
  'Mon tout premier site web. Application de collection de 1400 cartes Pokémon jouable en ligne avec ouverture de boosters et système d''échange.', 
  'ARCHIVE', 
  '/images/projet_pokemon.png', 
  'cyan',
  'Procédural / API REST',
  'PHP Natif',
  'HTML / CSS / JS',
  'MySQL',
  'https://github.com/AnisseElBezazi/Site_Pokemon',
  'github'
);

-- Features pour La Culture du Mouvement (ID = 1)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(1, 'Landing Page & Responsive', 'Design et intégration d''une interface adaptative haute performance (Validé par jury : "Chapeau").'),
(1, 'Développement Thème PHP', 'Architecture WordPress sur-mesure avec ACF pour une autonomie client totale.'),
(1, 'Proxy Calendrier ICS', 'Passerelle PHP sécurisée pour synchronisation d''agenda sans bug CORS.'),
(1, 'Optimisation Stratégique', 'Audit des solutions SaaS permettant une économie de 130€/mois et mise en conformité RGPD.');

-- Features pour Who The Most Valuable (ID = 2)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(2, 'Extraction API Overfast', 'Récupération et traitement des données officielles de Blizzard en temps réel.'),
(2, 'Algorithme de Scoring', 'Calcul d''un score de performance équitable entre les différents styles de jeu.'),
(2, 'Gestion Multi-plateforme', 'Comparaison indépendante entre joueurs PC et Console.'),
(2, 'Détection de Confidentialité', 'Système d''alerte pour aider les utilisateurs à passer leur profil en public.');

-- Features pour SoftMove (ID = 3)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(3, 'Algorithme anti-tremblement', 'Moyenne glissante pour filtrer les mouvements parasites.'),
(3, 'Aim Assist 3D', 'Système de magnétisme ciblant le vertex le plus proche.'),
(3, 'Séparation d''intention', 'Création d''un système à 3 zones pour interpréter les mouvements complexes.'),
(3, 'Pré-sélection visuelle', 'Mise en surbrillance via le module GPU de Blender.');

-- Features pour Flixthread (ID = 4)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(4, 'Architecture Sécurisée', 'PHP pur avec protection XSS, injections SQL et sécurisation des uploads.'),
(4, 'Système de Tokens CSRF', 'Jetons de sécurité uniques pour valider l''intégrité des requêtes.'),
(4, 'Salons thématiques', 'Fils de discussion isolés et dédiés à des œuvres cinématographiques.'),
(4, 'Gestion de profils', 'Système d''authentification et d''édition de profil complet.');

-- Features pour Etam (ID = 5)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(5, 'Gestion de projet', 'Management et coordination de 2 créatifs et 2 marketeurs.'),
(5, 'Conception UI Zéro', 'Recherche et implémentation de concepts d''interfaces invisibles.'),
(5, 'Intégration IA', 'Modélisation de fonctionnalités d''intelligence artificielle sur Figma.');

-- Features pour PixelTrader (ID = 6)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(6, 'Conception UX/UI', 'Création des maquettes et définition du parcours utilisateur.'),
(6, 'Développement API REST', 'Architecture backend avec Symfony pour traiter l''ajout des jeux.'),
(6, 'Intégration des KPI', 'Calcul entre le prix d''achat et l''estimation de revente.');

-- Features pour Eveny (ID = 7)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(7, 'Temps réel', 'Mise en place du Hub Mercure pour la synchronisation en direct.'),
(7, 'Vues automatisées', 'Interfaces dynamiques React pour Kanban, Calendrier et Gantt.'),
(7, 'Architecture backend', 'Conception de l''API sous Symfony pour gérer la logique complexe.');

-- Features pour Dépassement de soi (ID = 8)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(8, 'Parallax & Photobashing', 'Effet parallax simulant l''ascension d''une montagne sur Photoshop.'),
(8, 'Animation Graphique', 'Graphique dynamique JS/CSS illustrant la résilience.'),
(8, 'Lumière Interactive', 'Effet de lampe torche pour révéler des éléments cachés dans le DOM.');

-- Features pour Pokémon (ID = 9)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(9, 'Intégration PokeAPI', 'Récupération et stockage des données de plus de 1400 cartes.'),
(9, 'Système de compte', 'Authentification SQL et logique d''ajout aux favoris.'),
(9, 'Mécaniques de jeu', 'Ouverture de boosters et système d''échange entre joueurs.');