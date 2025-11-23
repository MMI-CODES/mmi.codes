# mmi.codes (Frontend)

Interface utilisateur pour le portail étudiant MMI. Ce projet est développé avec **Vue.js 3** et **Vite**.

## 🚀 Installation

1.  Clonez le dépôt.
2.  Installez les dépendances :

```bash
npm install
```

## ⚙️ Configuration

Créez un fichier `.env` à la racine du projet pour configurer l'URL de l'API :

```env
VITE_API_URL=http://localhost:3000
```

## 🛠️ Démarrage

Pour lancer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

## 📦 Fonctionnalités

-   **Liste des outils** : Affichage des outils officiels, étudiants et ressources.
-   **Administration** : Interface `/admin` pour ajouter/supprimer des outils (protégée par mot de passe).
-   **Tuiles cliquables** : Accès direct aux outils via les cartes.
