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
- [ ] Fiche détaillée par fruit (nom JP / EN / FR, utilisateurs, pouvoirs, faiblesses)
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

---

## Ressources
 
- [One Piece Wiki — Devil Fruits](https://onepiece.fandom.com/wiki/Devil_Fruit)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)