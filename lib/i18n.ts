export type Lang = "fr" | "en"

export const translations = {
    fr: {
        // Navbar
        nav_fruits: "Fruits",
        nav_home: "Accueil",

        // Page d'accueil
        card_user: "Utilisateur",
        home_title: "Encyclopédie des Fruits du Démon",
        home_subtitle: "fruits répertoriés",
        home_search: "Rechercher un fruit, un utilisateur...",
        home_filter_all: "Tous",

        // Fiche détaillée 
        detail_abilities: "⚡ Capacités",
        detail_info: "📜 Informations",
        detail_users: "👤 Utilisateur(s)",
        detail_status: "Statut",
        detail_chapter: "1ère apparition",
        detail_arc: "Arc",
        detail_element: "Élément",
        detail_current: "Actuel",
        detail_awakened: "⚡ Éveillé",
        detail_no_user: "Aucun utilisateur connu",

        // Statuts
        status_possede: "Possédé",
        status_non_possede: "Non possédé",

        // AkaToggle
        aka_reveal: "Spoiler — Chapitre",
        aka_hide: "🔒 Masquer",
        aka_revealed_at: "Révélé au chapitre",

        // Sous type - Zoan
        zoan_classique: "Classique",
        zoan_ancien: "Ancien",
        zoan_mythique: "Mythique",
        zoan_artificiel: "Artificiel",
    },
    en: {
        // Navbar
        nav_fruits: "Fruits",
        nav_home: "Home",

        // Page d'accueil
        card_user: "User",
        home_title: "Devil Fruit Encyclopedia",
        home_subtitle: "fruits listed",
        home_search: "Search a fruit, a user...",
        home_filter_all: "All",

        // Fiche détaillée
        detail_abilities: "⚡ Abilities",
        detail_info: "📜 Information",
        detail_users: "👤 User(s)",
        detail_status: "Status",
        detail_chapter: "First appearance",
        detail_arc: "Arc",
        detail_element: "Element",
        detail_current: "Current",
        detail_awakened: "⚡ Awakened",
        detail_no_user: "No known user",

        // Statuts
        status_possede: "Owned",
        status_non_possede: "Not owned",

        // AkaToggle
        aka_reveal: "Spoiler — Chapter",
        aka_hide: "🔒 Hide",
        aka_revealed_at: "Revealed at chapter",

        // Sous type - Zoan
        zoan_classique: "Classic",
        zoan_ancien: "Ancient",
        zoan_mythique: "Mythical",
        zoan_artificiel: "Artificial",
    },
} as const


export type TranslationKey = keyof typeof translations.fr