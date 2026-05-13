import type { DevilFruit, FruitType, ZoanSubtype } from "@/types/fruit"
import { getAllFruitsWithAka } from "./fruitUtils"

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