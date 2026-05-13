import { fruits } from "@/data/fruits"
import type { DevilFruit } from "@/types/fruit"

export function getAllFruitsWithAka(showSpoilers: boolean): DevilFruit[] {
    const base = fruits.filter((f) => showSpoilers || !f.spoiler)

    if (!showSpoilers) return base

    const akaFruits: DevilFruit[] = fruits
        .filter((f) => f.aka && f.aka.spoiler)
        .map((f) => ({
            id: `${f.id}?revealed=true`,
            names: f.aka!.names,
            type: f.aka!.type,
            zoanSubtype: f.aka!.zoanSubtype,
            element: f.aka!.element,
            status: f.status,
            users: f.users,
            abilities: f.aka!.abilities,
            firstAppearance: f.aka!.firstAppearance,
            spoiler: true,
            aka: undefined,
        }))

    return [...base, ...akaFruits]
}