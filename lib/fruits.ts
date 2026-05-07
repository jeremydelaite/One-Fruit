import { fruits } from "@/data/fruits"
import type { DevilFruit, FruitType } from "@/types/fruit"

export function getAllFruits(): DevilFruit[] {
  return fruits
}

export function getFruitById(id: string): DevilFruit | undefined {
  return fruits.find((f) => f.id === id)
}

export function getFruitsByType(type: FruitType): DevilFruit[] {
  return fruits.filter((f) => f.type === type)
}

export function searchFruits(query: string): DevilFruit[] {
  const q = query.toLowerCase()
  return fruits.filter(
    (f) =>
      f.names.japanese.toLowerCase().includes(q) ||
      f.names.english.toLowerCase().includes(q) ||
      f.names.french.toLowerCase().includes(q) ||
      f.users.some((u) => u.name.toLowerCase().includes(q))
  )
}

export function getFruitsWithoutSpoilers(): DevilFruit[] {
  return fruits.filter((f) => !f.spoiler)
}