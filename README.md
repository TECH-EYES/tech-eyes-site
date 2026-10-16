# TECH-EYES — site de formation

Site vitrine responsive en français, réalisé sans framework ni dépendance à installer. Il est conçu pour être publié gratuitement avec GitHub Pages.

## Personnaliser le contenu

Ouvrez `content.js` dans un éditeur de texte.

- Remplacez `contact@tech-eyes.example` par votre vraie adresse e-mail.
- Remplacez `youtubeChannel` par l'adresse de votre chaîne YouTube.
- Renseignez `whatsapp` avec le numéro international sans signe `+` ni espaces (facultatif).
- Ajoutez, retirez ou modifiez les objets du tableau `courses` pour les formations.
- Ajoutez, retirez ou modifiez les objets du tableau `articles` pour les articles.
- Pour associer une vidéo mise en avant, ajoutez un objet au tableau `videos`, par exemple :

```js
videos: [
  { title: "Configurer une caméra sur son téléphone", url: "https://www.youtube.com/watch?v=VOTRE_ID_VIDEO" }
]
```

Les liens de cours et les cartes d'articles sont déjà prêts pour l'ajout de contenus. Les vidéos se lancent sur YouTube. Le formulaire de contact prépare un e-mail dans l'application de messagerie du visiteur ; il ne collecte ni ne stocke ses informations en ligne.

## Publier gratuitement avec GitHub Pages

1. Créez un compte sur [GitHub](https://github.com/) si vous n'en avez pas.
2. Créez un dépôt public nommé `tech-eyes-site`.
3. Importez le contenu de ce dossier à la racine du dépôt (y compris le dossier caché `.github`).
4. Ouvrez **Settings → Pages** dans le dépôt et choisissez **GitHub Actions** comme source si GitHub le demande.
5. À chaque envoi sur la branche `main`, le workflow de ce dossier publiera le site. L'adresse s'affichera dans **Settings → Pages** ; elle ressemble à `https://VOTRE-NOM.github.io/tech-eyes-site/`.

Le premier déploiement peut prendre quelques minutes. Les mises à jour du site se font ensuite en modifiant les fichiers puis en les envoyant sur `main`.

## Voir le site sur votre ordinateur

Ouvrez `index.html` dans un navigateur. Une connexion internet est nécessaire pour télécharger les polices web. Le site reste lisible avec les polices de remplacement si elles ne sont pas disponibles.

## Fichiers principaux

- `index.html` : sections et structure de la page.
- `content.js` : cours, articles, liens vidéo et coordonnées.
- `assets/styles.css` : identité visuelle et adaptation mobile.
- `assets/app.js` : affichage du contenu, navigation mobile et contact.
- `.github/workflows/pages.yml` : publication automatique gratuite.

## À compléter avant le partage

Les coordonnées et les liens YouTube de démonstration sont volontairement signalés dans `content.js` : remplacez-les par les vôtres. Les intitulés de formations et d'articles sont des exemples de départ que vous pouvez adapter à votre expertise et à vos propres vidéos.
