# To-Do Liste Backend

API backend Express / MongoDB pour la gestion d'une application de tâches, utilisateurs, fonctionnalités, groupes, projets et sociétés.

## Description

Ce projet fournit une API RESTful construite avec Node.js, Express et Mongoose. Il sert de backend à une application de type « to-do list » avec des modules de gestion de tâches, d'utilisateurs, de fonctionnalités, de groupes, de projets et de sociétés.

## Caractéristiques

- API RESTful avec Express
- Connexion MongoDB via Mongoose
- Gestion des données par modules (tasks, users, features, groups, project, company)
- Chargement des variables d'environnement via dotenv
- Serveur de développement avec nodemon
- Support Docker et docker-compose

## Structure du projet

- `index.js` : point d'entrée principal, démarre le serveur et initialise la connexion MongoDB
- `src/app.js` : configuration Express, middlewares, routes et gestion des ressources statiques
- `src/config/db.config.js` : connexion à MongoDB
- `src/config/env.config.js` : lecture des variables d'environnement
- `src/modules/` : modules métier avec contrôleurs, routes et schémas Mongoose
- `src/migrations/` : scripts de migration initiale
- `Dockerfile` : image de conteneur Node.js
- `docker-compose.yml` : configuration Docker Compose pour le service et MongoDB

## Prérequis

- Node.js 20+ recommandé
- npm
- MongoDB (local ou conteneurisé)

## Installation

1. Cloner le projet

```bash
git clone https://github.com/yazidi-abdelwaheb/to-do-lliste-back
```

2. Installer les dépendances :

```bash
cd to-do-lliste-back
```

```bash
npm install
```

3. Copier et configurer les variables d'environnement :

```bash
cp .env.example .env.local
```

```bash
cp .env.example .env.dev
```

4. Modifier `.env.local` ou `.env.dev` selon l'environnement.

## Variables d'environnement

Le projet utilise les variables suivantes :

- `ENV` : environnement (`LOCAL`, `DEV`, etc.)
- `PRIVATE_KEY` : clé privée utilisée par l'application
- `PORT` : port d'écoute du serveur
- `VERSION` : version de l'API
- `MONGO_USERNAME` : utilisateur MongoDB
- `MONGO_PASSWORD` : mot de passe MongoDB
- `MONGO_PORT` : port MongoDB
- `MONGO_HOST` : hôte MongoDB
- `MONGO_DB_NAME` : nom de la base de données
- `URL_FRONT` : domaine du frontend autorisé
- `PROTOCOL_FRONT` : protocole du frontend autorisé (`http` ou `https`)
- `EMAIL_HOST` : hôte SMTP (optionnel)
- `EMAIL_PORT` : port SMTP (optionnel)
- `EMAIL_USER` : utilisateur SMTP (optionnel)
- `EMAIL_PASS` : mot de passe SMTP (optionnel)

## Scripts npm

- `npm run start:dev` : démarre le serveur en développement avec `nodemon` et charge `.env.dev`
- `npm run start:local` : démarre le serveur local avec `.env.local`
- `npm run start` : lance `nodemon` avec la configuration par défaut
- `npm run lint` : analyse ESLint
- `npm run lint:fix` : corrige automatiquement les problèmes détectés par ESLint
- `npm run migration` : exécute les migrations avec `.env.dev`

## Lancer le projet

### Sans Docker

```bash
npm run start:dev
```

### Avec Docker Compose

```bash
docker compose up --build
```

Le backend sera alors accessible sur `http://localhost:8400` si les ports du `docker-compose.yml` sont conservés.

## API REST

### Endpoint de version

- `GET /api/version`
  - Retourne la version et la description de l'API.


## Architecture et bonnes pratiques

- Les modules sont séparés en dossiers `modules/<nom>`.
- Chaque module contient un contrôleur, un routeur et un schéma Mongoose.
- `src/config/env.config.js` charge la configuration depuis `.env`.
- `src/config/db.config.js` initialise la connexion MongoDB.

## Notes importantes

- Le routeur `src/modules/projects/projects.router.js` référence actuellement `users.controller.js` pour `ProjectController`. Cette importation doit être corrigée si elle n'est pas intentionnelle.
- Le dossier `public` et `private` est exposé via `/api/public` et `/api/private` pour servir des ressources statiques.

## Améliorations possibles

- Ajouter l’authentification JWT
- Ajouter des tests unitaires et d’intégration
- Documenter précisément les schémas de données et les champs attendus
- Ajouter des validations et des erreurs standardisées

---

### Ressources

- `Dockerfile` pour construire l’image Node.js
- `docker-compose.yml` pour lancer `todo-node` et `mongo-todo-node`
- `src/migrations/` pour les scripts de migration initiale
