import { fruits } from "@/data/fruits"
import type { DevilFruit, FruitType, ZoanSubtype } from "@/types/fruit"
import { getAllFruitsWithAka } from "./fruitUtils"

export function getAllFruits(): DevilFruit[] {
  return fruits
}

export function getFruitById(id: string): DevilFruit | undefined {
  return fruits.find((f) => f.id === id)
}

export function getFruitsWithoutSpoilers(): DevilFruit[] {
  return fruits.filter((f) => !f.spoiler)
}

export function filterFruits({
  query = "",
  type = "all",
  zoanSubtype = "all",
  showSpoilers = false,
}: {
  query?: string
  type?: FruitType | "all"
  zoanSubtype?: ZoanSubtype | "all"
  showSpoilers?: boolean
}): DevilFruit[] {
  const q = query.toLowerCase().trim()
  const source = getAllFruitsWithAka(showSpoilers)

  return source.filter((f) => {
    // Filtre par type
    if (type !== "all" && f.type !== type) return false

    // Filtre par sous-type Zoan
    if (type === "Zoan" && zoanSubtype !== "all" && f.zoanSubtype !== zoanSubtype) return false

    // Filtre par recherche
    if (q) {
      const matchesName = 
      f.names.japanese.toLowerCase().includes(q) ||
      f.names.english.toLowerCase().includes(q) ||
      f.names.french.toLowerCase().includes(q) 

      const matchesUser = f.users.some(
        (u) => 
          u.name.toLowerCase().includes(q) ||
          u.nameEn.toLowerCase().includes(q)
      )

      if (!matchesName && !matchesUser) return false
    }

    return true
  })
}
