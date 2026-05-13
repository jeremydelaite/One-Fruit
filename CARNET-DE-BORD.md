# Carnet de bord - Devil fruits OP
> Encyclopédie interactive des Fruits du Démon de One Piece, bilingue FR/EN, construite avec Next.js.

--- 
## Stack technique
 
| Technologie | Version | Rôle |
|---|---|---|
| Next.js | 16.x | Framework React (App Router, SSG) |
| React | 19.x | UI |
| TypeScript | 5.x | Typage statique |
| Tailwind CSS | 4.x | Styles |
| pnpm | 10.x | Gestionnaire de paquets |

--- 

## Fonctionnalités prévues
 
- [ ] Liste complète des Fruits du Démon avec filtres (Paramecia / Zoan / Logia)
- [ ] Fiche détaillée par fruit (nom JP / EN / FR, utilisateurs, pouvoirs)
- [ ] Recherche en temps réel
- [ ] Bilingue FR / EN
- [ ] Mode sans spoiler
- [ ] Responsive mobile + desktop

--- 

### 07/05/2026 — Initialisation du projet

- Idée du projet : créer une encyclopédie de référence des Fruits du Démon, inexistante en version propre et bilingue sur le web
- Mise en place de l'environnement de développement (Node.js, pnpm, WSL + PowerShell)
- Initialisation du projet Next.js 16 avec App Router
- Configuration : TypeScript, Tailwind CSS v4, ESLint, Turbopack
- Création de la structure de dossiers (`app/`, `components/`, `data/`, `lib/`, `types/`)
- Création du repo GitHub et premier commit

## Types, données et première interface

- Définition des types TypeScript dans `types/fruit.ts` (`DevilFruit`, `FruitType`, `FruitUser`...)
- Création des données dans `data/fruits.ts` avec 5 premiers fruits (Gomu Gomu, Mera Mera, Hito Hito Nika, Yami Yami, Ope Ope)
- Choix du statut `"en_circulation" | "acquis" | "inconnu"` pour représenter l'état d'un fruit dans l'univers
- Création des fonctions utilitaires dans `lib/fruits.ts` (`getAllFruits`, `getFruitById`, `searchFruits`, `getFruitsWithoutSpoilers`...)
- Création du composant `FruitCard` avec CSS Modules
- Mise en place de la page d'accueil avec grille responsive
- Choix d'architecture : CSS Modules plutôt que Tailwind inline pour la lisibilité

### 10/05/2026 Direction artistique & interface

- Recherche de DA pour le site
- Définition de la palette complète et des variables CSS dans `globals.css` (couleurs, typographie, scrollbar)
- Refonte de `FruitCard` avec la nouvelle DA
- Création de la `Navbar` sticky avec logo, icône personnalisée et liens de navigation
- - Réorganisation des `components/` en sous-dossiers (`layout/`, `fruits/`, `ui/`)
- Création de la page de fiche détaillée `app/fruit/[id]/page.tsx` avec :
  - Header centré (nom JP / FR / EN + badge type)
  - Carte capacités
  - Carte informations (statut, arc, chapitre, élément)
  - Carte utilisateurs avec badges "Actuel" et "⚡ Éveillé"
- Création du composant `AkaToggle` (client component) : toggle spoiler affichant le vrai nom d'un fruit à partir d'un chapitre donné — utilisé pour le Gomu Gomu
- Création du favicon `icon.png` avec fond transparent
- Génération statique des pages fruits avec `generateStaticParams`

## Système de traduction FR/EN

- Création de `lib/i18n.ts` : toutes les traductions FR/EN centralisées (navbar, page d'accueil, fiche détaillée, statuts, AkaToggle)
- Création de `lib/LangContext.tsx` : Context React avec `useSyncExternalStore` + `localStorage` pour persister le choix de langue
- Création du composant `LangToggle` dans `components/ui/` : bouton FR/EN dans la navbar
- Branchement de `t()` sur la navbar (titre + liens)
- Branchement de `t()` sur la page d'accueil

### 11/05/2026 

- Création du composant `FruitDetail` (client component) pour permettre l'usage de `useLang()` sur la fiche détaillée (Problème rencontré : les Server Components ne peuvent pas utiliser les hooks)
- Branchement de `t()` sur tous les textes de la fiche détaillée (capacités, infos, utilisateurs)
- Affichage du nom du fruit dans la bonne langue selon le contexte (FR/EN)
- Création de `TitleUpdater` : met à jour `document.title` dynamiquement selon la langue active
- Ajout du fruit de Chopper : Hito Hito no Mi
- Correction casse `Logia` dans `badgeStyles` (bug d'affichage badge)

- Traduction des sous-types Zoan dans `i18n.ts`
- Branchement de la traduction des sous-types dans `FruitCard` et `FruitDetail`
- Correction des noms FR des fruits dans `data/fruits.ts`
- Renommage de `.subtitleEn` en `.subtitleSecondary` dans `FruitDetail` (nommage plus logique)
- Nettoyage du prop `lang` devenu inutile dans `FruitCard` (géré en interne via `useLang`)

## Filtres & recherche

- Ajout de 5 nouveaux fruits dans `data/fruits.tsx` (pour ensuite tester correctement la recherche et les filtres)
- Refonte de `lib/fruits.ts` : remplacement de `searchFruits` et `getFruitsByType` par `filterFruits` (query + type + zoanSubtype combinables)
- Création du composant `SearchBar` : recherche en temps réel sur nom JP/FR/EN et utilisateurs FR/EN
- Création du composant `FilterBar` : filtres par type (Paramecia/Zoan/Logia) avec sous-filtres Zoan (Classique/Antique/Mythique/Artificiel) qui apparaissent dynamiquement
- Compteur de résultats mis à jour en temps réel
- Tout le système bilingue FR/EN

### 12/05/2026 — Transformation fiche Nika

- Ajout de `type`, `zoanSubtype`, `abilities`, `element` et `firstAppearance` dans le type `aka`
- Création de `AkaContext` pour partager l'état `revealed` entre `AkaToggle` et `FruitDetail`
- Quand le spoiler est révélé sur la fiche Gomu Gomu :
  - Badge passe de `Paramecia` à `Zoan — Mythique`
  - Titre japonais, noms FR/EN se transforment vers le Nika
  - Capacités et informations (chapitre, arc, élément) se mettent à jour
  - Animations rebond sur badge, titre, carte capacités et carte informations
- Suppression de la mini-card de révélation dans `AkaToggle` — le bouton seul suffit

### 404

- Création de `app/not-found.tsx` : page 404
- Fruit du démon inconnu généré par IA (Gemini) avec fond transparent (`404fruit.png`)
- Animation de flottement sur l'image
- Bouton retour vers l'encyclopédie

### 13/05/2026 — Système spoiler & améliorations

- Création de `lib/SpoilerContext.tsx` : context global pour le mode spoiler persisté en localStorage
- Création de `lib/fruitUtils.ts` : extraction dynamique des fruits `aka` pour la page d'accueil
- Toggle Spoilers : affiche/masque la carte Nika sur la page d'accueil sans doublon dans les données
- Clic sur la carte Nika redirige vers la fiche Gomu Gomu avec `?revealed=true` — page déjà en mode révélé
- `AkaContext` lit le query param `?revealed=true` au montage via `useSearchParams`
- `SpoilerToggle` intégré dans `FilterBar` pour rester fixe quelque soit le filtre actif
- Message "aucun fruit trouvé" sur la page d'accueil quand la recherche n'aboutit pas

- Traduction de la page 404 et du message de recherche vide via `t()` (`not_found_title`, `not_found_subtitle`, `not_found_quote`, `not_found_btn`, `empty_search`)
- `not-found.tsx` passé en `"use client"` pour pouvoir utiliser `useLang()`

- Renommage du projet en **One Fruit**
- Titre dynamique dans l'onglet : `Mera Mera no Mi | One Fruit` via `generateMetadata`
- Suppression de `TitleUpdater` — titre géré statiquement côté serveur
- Page d'accueil : titre principal devient le nom de l'encyclopédie FR/EN, "One Fruit" réservé à la navbar et au title

- Navbar masquée au scroll vers le bas, réapparaît au scroll vers le haut
- Fix navbar mobile : "One Fruit" reste sur une ligne

## à faire en priorité ! 

- Ajout de fruits, définir la méthode d'ajout (création d'une API ???) 

## Prochaines étapes 

- Page utilisateurs de fruit du démon ? 

---

## Ressources
 
- [One Piece Wiki — Devil Fruits](https://onepiece.fandom.com/wiki/Devil_Fruit)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)