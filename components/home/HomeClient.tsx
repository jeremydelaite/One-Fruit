"use client"

import { useState } from "react"
import { filterFruits } from "@/lib/utils/filterFruits"
import FruitCard from "@/components/fruits/FruitCard"
import SearchBar from "@/components/ui/SearchBar"
import FilterBar from "@/components/ui/FilterBar"

import SortSelect, { SortOption } from "../ui/SortSelect"
import { sortFruits } from "@/lib/utils/filterFruits"

import { useLang } from "@/lib/i18n/LangContext"
import { useSpoiler } from "@/lib/i18n/SpoilerContext"

import type { DevilFruit, FruitType, ZoanSubtype } from "@/types/fruit"

import styles from "./HomeClient.module.css"

type Props = {
  initialFruits: DevilFruit[]
}

export default function HomeClient({ initialFruits }: Props) {
  const { t, lang } = useLang()
  const { showSpoilers } = useSpoiler()
  const [query, setQuery] = useState("")
  const [selectedType, setSelectedType] = useState<FruitType | "all">("all")
  const [selectedZoanSubtype, setSelectedZoanSubtype] = useState<ZoanSubtype | "all">("all")
  const [sort, setSort] = useState<SortOption>("default")

  const filtered = filterFruits({ query, type: selectedType, zoanSubtype: selectedZoanSubtype, showSpoilers, initialFruits })
  const fruits = sortFruits(filtered, sort, lang)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t("home_encyclopedia_title")}</h1>
      <p className={styles.subtitle}>{fruits.length} {t("home_subtitle")}</p>

      <div className={styles.controls}>
        <SearchBar value={query} onChange={setQuery} />
        <div className={styles.filtersRow}>
          <FilterBar
            selectedType={selectedType}
            selectedZoanSubtype={selectedZoanSubtype}
            onTypeChange={setSelectedType}
            onZoanSubtypeChange={setSelectedZoanSubtype}
          />
        <div>
          <SortSelect value={sort} onChange={setSort} />
        </div>
        </div>
      </div>

      <div className={styles.grid}>
        {fruits.map((fruit, index) => (
          <FruitCard key={`${fruit.id}-${index}`} fruit={fruit} />
        ))}
      </div>

      {fruits.length === 0 && (
        <p className={styles.empty}>
          {t("empty_search")}
        </p>
      )}
    </main>
  )
}