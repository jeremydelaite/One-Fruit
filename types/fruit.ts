export type FruitType = "Paramecia" | "Zoan" | "Logia"

export type ZoanSubtype = "Classique" | "Artificiel" | "Antique" | "Mythique" | null

export type FruitUser = {
  name: string
  nameEn: string
  isCurrent: boolean
  isAwakened: boolean
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
  aka?: {
    names: FruitNames
    type: FruitType
    zoanSubtype: ZoanSubtype
    abilities: {
      fr: string
      en: string
    }
    element?: {
      fr: string
      en: string
    },
    firstAppearance: FruitAppearance,
    revealedChapter: number
    spoiler: boolean
  }
  type: FruitType
  zoanSubtype: ZoanSubtype
  element?: {
    fr: string
    en: string
  }
  status: "Possédé" | "Non-possédé"
  users: FruitUser[]
  abilities: {
    fr: string
    en: string
  }
  firstAppearance: FruitAppearance
  spoiler: boolean
}