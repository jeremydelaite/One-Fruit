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


---

## Ressources
 
- [One Piece Wiki — Devil Fruits](https://onepiece.fandom.com/wiki/Devil_Fruit)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)