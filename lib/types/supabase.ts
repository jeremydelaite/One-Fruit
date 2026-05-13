export type FruitRow = {
    id: string
    names_japanese: string
    names_english: string
    names_french: string
    type: string
    zoan_subtype: string | null
    element_fr: string | null
    element_en: string | null
    status: string
    abilities_fr: string
    abilities_en: string
    first_appearance_chapter: number
    first_appearance_arc: string
    first_appearance_episode: number | null
    image_url: string | null
    spoiler: boolean
    aka_names_japanese: string | null
    aka_names_english: string | null
    aka_names_french: string | null
    aka_type: string | null
    aka_zoan_subtype: string | null
    aka_abilities_fr: string | null
    aka_abilities_en: string | null
    aka_element_fr: string | null
    aka_element_en: string | null
    aka_first_appearance_chapter: number | null
    aka_first_appearance_arc: string | null
    aka_first_appearance_episode: number | null
    aka_revealed_chapter: number | null
    aka_spoiler: boolean | null
}

export type FruitUserRow = {
    id: number
    fruit_id: string
    name: string
    name_en: string
    is_current: boolean
    is_awakened: boolean
    chapter: number | null
}