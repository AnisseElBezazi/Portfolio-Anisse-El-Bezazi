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
  'WHO_THE_MOST_VALUABLE', 
  'who-the-most-valuable', 
  'ALERTE_00', 
  'Application de comparaison de performance pour Overwatch. Analyse side-by-side des statistiques réelles avec un algorithme de scoring équilibré pour mesurer l''impact réel des joueurs.', 
  'TERMINER', 
  '/images/projet_overwatch.png', 
  'pink',
  'Serverless / API REST',
  'Next.js (API Routes)',
  'React / Bootstrap',
  'N/A',
  'https://who-the-most-valuable-overwatch-nwd.vercel.app/',
  'github'
),
(
  'SOFTMOVE_BLENDER', 
  'softmove-blender', 
  'ALERTE_01', 
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
  'ALERTE_02', 
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
  'ALERTE_03', 
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
  'ALERTE_04', 
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
  'ALERTE_05', 
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
  'ALERTE_06', 
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

-- Tâches pour Who The Most Valuable (ID = 1)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(1, 'Extraction API Overfast', 'Récupération et traitement des données officielles de Blizzard (éliminations, dégâts, soins) en temps réel.'),
(1, 'Algorithme de Scoring', 'Calcul d''un score de performance équitable entre les différents styles de jeu (ex: Zenyatta vs Ana).'),
(1, 'Gestion Multi-plateforme', 'Comparaison indépendante entre joueurs PC et Console avec détection automatique du rang.'),
(1, 'Détection de Confidentialité', 'Système d''alerte et guide intégré pour aider les utilisateurs à passer leur profil en public.');

-- Tâches pour SoftMove (ID = 2)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(2, 'Algorithme anti-tremblement', 'Implémentation d''une moyenne glissante pour filtrer les mouvements parasites sur plusieurs frames.'),
(2, 'Aim Assist 3D', 'Développement d''un système de magnétisme ralentissant le curseur et ciblant le vertex le plus proche.'),
(2, 'Séparation d''intention', 'Création d''un système à 3 zones (tolérance, sélection, curseur réel) pour interpréter les mouvements complexes.'),
(2, 'Pré-sélection visuelle', 'Mise en surbrillance des Vertices/Edges/Faces via le module GPU de Blender pour sécuriser l''action de l''utilisateur.');

-- Tâches pour Flixthread (ID = 3)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(3, 'Architecture Sécurisée', 'Développement en PHP pur avec protection contre les failles XSS, injections SQL et sécurisation des uploads.'),
(3, 'Système de Tokens CSRF', 'Mise en place de jetons de sécurité uniques pour valider l''intégrité des requêtes utilisateurs.'),
(3, 'Salons thématiques', 'Création de fils de discussion isolés et dédiés à des œuvres cinématographiques spécifiques.'),
(3, 'Gestion de profils', 'Système d''authentification et d''édition de profil utilisateur complet.');

-- Tâches pour Etam (ID = 4)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(4, 'Gestion de projet', 'Management et coordination de 2 créatifs et 2 marketeurs.'),
(4, 'Conception UI Zéro', 'Recherche et implémentation de concepts d''interfaces invisibles.'),
(4, 'Intégration IA', 'Modélisation de fonctionnalités d''intelligence artificielle dans le parcours utilisateur sur Figma.');

-- Tâches pour PixelTrader (ID = 5)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(5, 'Conception UX/UI', 'Création des maquettes et définition du parcours utilisateur pour la gestion des stocks.'),
(5, 'Développement API REST', 'Création de l''architecture backend avec Symfony pour traiter l''ajout des jeux.'),
(5, 'Intégration des KPI', 'Développement du système de calcul entre le prix d''achat et l''estimation de revente.');

-- Tâches pour Eveny (ID = 6)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(6, 'Temps réel', 'Mise en place du Hub Mercure pour la synchronisation et la collaboration en direct.'),
(6, 'Vues automatisées', 'Développement des interfaces dynamiques en React pour les vues Kanban, Calendrier et Gantt.'),
(6, 'Architecture backend', 'Conception de l''API sous Symfony pour gérer la logique de projet complexe.');

-- Tâches pour Dépassement de soi (ID = 7)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(7, 'Parallax & Photobashing', 'Création visuelle sur Photoshop et intégration d''un effet parallax simulant l''ascension d''une montagne (Détermination).'),
(7, 'Animation Graphique', 'Développement JS/CSS d''un graphique dynamique qui se brise et se reconstruit pour illustrer la résilience.'),
(7, 'Lumière Interactive', 'Mise en place d''un effet de lampe torche pour révéler des éléments cachés dans le DOM (Espoir).');

-- Tâches pour Pokémon (ID = 8)
INSERT INTO project_features (project_id, title, description) 
VALUES 
(8, 'Intégration PokeAPI', 'Connexion à l''API externe pour récupérer et stocker les données de plus de 1400 cartes Pokémon.'),
(8, 'Système de compte et favoris', 'Développement d''une authentification SQL et d''une logique d''ajout aux favoris par utilisateur.'),
(8, 'Mécaniques de jeu', 'Ouverture de boosters aléatoires et système d''échange de cartes entre joueurs.');