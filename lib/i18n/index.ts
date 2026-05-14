export type Lang = "fr" | "en"

export const translations = {
    fr: {
        // Navbar
        nav_fruits: "Fruits",
        nav_home: "Accueil",

        // Page d'accueil
        card_user: "Utilisateur",
        home_encyclopedia_title: "Encyclopédie des Fruits du Démon",
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
        zoan_antique: "Antique",
        zoan_mythique: "Mythique",
        zoan_artificiel: "Artificiel",

        // Filtres
        filter_paramecia: "Paramecia",
        filter_zoan: "Zoan",
        filter_logia: "Logia",

        // 404 
        not_found_title: "Fruit introuvable",
        not_found_subtitle: "Ce fruit du démon est introuvable... Peut-être un coup du gouvernement ?",
        not_found_quote: "« Les ponéglyphes ne mentent pas... mais cette page, elle, n'existe pas. »",
        not_found_btn: "Retourner à l'encyclopédie",
        empty_search: "Aucun fruit correspondant n'a été trouvé dans nos archives...",

    },
    en: {
        // Navbar
        nav_fruits: "Fruits",
        nav_home: "Home",

        // Page d'accueil
        card_user: "User",
        home_encyclopedia_title: "Devil Fruit Encyclopedia",
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
        zoan_antique: "Ancient",
        zoan_mythique: "Mythical",
        zoan_artificiel: "Artificial",

        // Filtres
        filter_paramecia: "Paramecia",
        filter_zoan: "Zoan",
        filter_logia: "Logia",

        // 404
        not_found_title: "Fruit not found",
        not_found_subtitle: "This Devil Fruit is nowhere to be found... Perhaps the World Government is involved?",
        not_found_quote: "\"The Poneglyphs never lie... but this page, it doesn't exist.\"",
        not_found_btn: "Back to the encyclopedia",
        empty_search: "No matching fruit was found in our archives...",
    },
} as const


export type TranslationKey = keyof typeof translations.fr