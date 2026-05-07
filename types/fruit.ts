export type FruitType = "Paramecia" | "Zoan" | "Logia"

export type ZoanSubtype = "Naturel" | "Artificiel" | "Antique" | "Mythique" | null

export type FruitUser = {
  name: string
  nameEn: string
  isCurrent: boolean
  chapter?: number
}

export type FruitNames = {
  japanese: string
  english: string
  french: string
}

export type FruitAppearance = {
  chapter: number
  arc: string
}

export type DevilFruit = {
  id: string
  names: FruitNames
  type: FruitType
  zoanSubtype: ZoanSubtype
  element?: string
  status: "en_circulation" | "acquis" | "inconnu"
  users: FruitUser[]
  abilities: {
    fr: string
    en: string
  }
  firstAppearance: FruitAppearance
  isAwakened: boolean
  spoiler: boolean
}