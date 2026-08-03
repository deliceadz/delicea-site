# 🌿 Délicea Landing Page

Landing Page premium inspirée de FlexDZ, spécialement conçue pour la vente d'épices, d'herbes aromatiques et de produits alimentaires **Délicea**.

## ✨ Fonctionnalités

- 🎨 Design premium moderne
- 📱 Responsive (Mobile, Tablette, PC)
- 🛒 Sélection du pack en un clic
- 💰 Prix barrés et remises automatiques
- ⭐ Badge "أفضل عرض"
- 📦 4 packs personnalisables
- 🧮 Calcul automatique du total
- 🚚 Calcul des frais de livraison
- 🇩🇿 Liste complète des 58 wilayas d'Algérie
- 🏘️ Chargement automatique des communes selon la wilaya
- 📲 Envoi automatique de la commande vers WhatsApp
- 💬 Bouton WhatsApp flottant
- 📌 Bouton fixe "اطلب الآن"
- ⚡ Animations fluides
- 🖼️ Images facilement remplaçables
- 🌐 Compatible avec GitHub Pages, Netlify et Vercel

---

# 📂 Structure du projet

```
delicea-landing-page/
│
├── index.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── app.js
│   ├── cart.js
│   ├── delivery.js
│   ├── wilayas.js
│   ├── communes.js
│   ├── whatsapp.js
│   └── animations.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logo/
│   └── fonts/
│
├── README.md
└── LICENSE
```

---

# 🚀 Installation

Clonez le dépôt :

```bash
git clone https://github.com/votre-utilisateur/delicea-landing-page.git
```

Entrez dans le dossier :

```bash
cd delicea-landing-page
```

Ouvrez simplement :

```
index.html
```

ou utilisez un serveur local.

---

# ⚙️ Configuration

## Logo

Remplacez :

```
assets/logo/logo.png
```

---

## Photos des packs

Remplacez :

```
assets/images/pack1.jpg
assets/images/pack2.jpg
assets/images/pack3.jpg
assets/images/pack4.jpg
```

---

## Numéro WhatsApp

Dans :

```
js/whatsapp.js
```

Modifier :

```javascript
const phone = "213770715514";
```

---

## Packs

Modifiez les informations dans :

```javascript
const packs = [
  {
    id:1,
    name:"Pack Découverte",
    price:290,
    oldPrice:350
  },
  ...
]
```

---

## Livraison

Les frais sont définis dans :

```
js/delivery.js
```

Vous pouvez personnaliser chaque wilaya.

---

# 📦 Déploiement

## GitHub Pages

Settings

→ Pages

→ Deploy from Branch

→ main

→ /(root)

---

## Netlify

Glissez simplement le dossier.

---

## Vercel

Importer le dépôt GitHub.

---

# 🛠 Technologies

- HTML5
- CSS3
- JavaScript ES6
- Font Awesome
- Google Fonts

---

# 📱 Compatibilité

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Android
- ✅ iPhone

---

# 📋 Fonctionnement

1. Choisir un pack.
2. Choisir la wilaya.
3. Choisir la commune.
4. Calcul automatique de la livraison.
5. Affichage du total.
6. Cliquer sur **اطلب الآن**.
7. Envoi de la commande sur WhatsApp.

---

# 🔮 Évolutions prévues

- Paiement en ligne
- Tableau d'administration
- Historique des commandes
- Gestion du stock
- Pixel Facebook
- Google Analytics
- Code promo
- Upsell
- Multi-produits
- Avis clients
- Compteur de stock
- Notifications en temps réel

---

# 📄 Licence

MIT License

---

# 👨‍💻 Auteur

Développé pour **Délicea**.

📍 Algérie

🌿 Fabrication et conditionnement d'épices, d'herbes aromatiques et de produits alimentaires.

---

⭐ Si ce projet vous plaît, n'hésitez pas à laisser une étoile sur GitHub.
