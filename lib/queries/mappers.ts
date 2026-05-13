import type { DevilFruit, FruitUser } from "@/types/fruit"
import type { FruitRow, FruitUserRow } from "@/lib/types/supabase"

export function mapUserRow(u: FruitUserRow): FruitUser {
    return {
        name: u.name,
        nameEn: u.name_en,
        isCurrent: u.is_current,
        isAwakened: u.is_awakened,
        chapter: u.chapter ?? undefined,
    }
}

export function mapFruitRow(f: FruitRow, users: FruitUser[]): DevilFruit {
    return {
        id: f.id,
        names: {
            japanese: f.names_japanese,
            english: f.names_english,
            french: f.names_french,
        },
        type: f.type as DevilFruit["type"],
        zoanSubtype: f.zoan_subtype as DevilFruit["zoanSubtype"],
        element: f.element_fr && f.element_en
            ? { fr: f.element_fr, en: f.element_en }
            : undefined,
        status: f.status as DevilFruit["status"],
        users,
        abilities: {
            fr: f.abilities_fr,
            en: f.abilities_en,
        },
        firstAppearance: {
            chapter: f.first_appearance_chapter,
            arc: f.first_appearance_arc,
        },
        spoiler: f.spoiler,
        aka: f.aka_names_japanese ? {
            names: {
                japanese: f.aka_names_japanese,
                english: f.aka_names_english!,
                french: f.aka_names_french!,
            },
            type: f.aka_type as DevilFruit["type"],
            zoanSubtype: f.aka_zoan_subtype as DevilFruit["zoanSubtype"],
            abilities: {
                fr: f.aka_abilities_fr!,
                en: f.aka_abilities_en!,
            },
            element: f.aka_element_fr && f.aka_element_en
                ? { fr: f.aka_element_fr, en: f.aka_element_en }
                : undefined,
            firstAppearance: {
                chapter: f.aka_first_appearance_chapter!,
                arc: f.aka_first_appearance_arc!,
            },
            revealedChapter: f.aka_revealed_chapter!,
            spoiler: f.aka_spoiler!,
        } : undefined,
    }
}