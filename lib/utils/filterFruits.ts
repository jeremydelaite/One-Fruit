import type { DevilFruit, FruitType, ZoanSubtype } from "@/types/fruit"
import type { SortOption } from "@/components/ui/SortSelect"

import { getAllFruitsWithAka } from "@/lib/utils/fruitUtils"


export function filterFruits({
  query = "",
  type = "all",
  zoanSubtype = "all",
  showSpoilers = false,
  initialFruits,
}: {
  query?: string
  type?: FruitType | "all"
  zoanSubtype?: ZoanSubtype | "all"
  showSpoilers?: boolean
  initialFruits: DevilFruit[]
}): DevilFruit[] {
  const q = query.toLowerCase().trim()
  const source = getAllFruitsWithAka(showSpoilers, initialFruits)

  return source.filter((f) => {
    if (type !== "all" && f.type !== type) return false
    if (type === "Zoan" && zoanSubtype !== "all" && f.zoanSubtype !== zoanSubtype) return false

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

export function sortFruits(fruits: DevilFruit[], sort: SortOption, lang: string): DevilFruit[] {
  const sorted = [...fruits]

  switch (sort) {
    case "alpha":
      return sorted.sort((a, b) => 
        lang === "fr"
          ? a.names.french.localeCompare(b.names.french)
          : a.names.english.localeCompare(b.names.english)
        )
    case "chapter_asc":
      return sorted.sort((a, b) => a.firstAppearance.chapter - b.firstAppearance.chapter)
    case "chapter_desc":
      return sorted.sort((a, b) => b.firstAppearance.chapter - a.firstAppearance.chapter)
    default:
      return sorted
  }
}