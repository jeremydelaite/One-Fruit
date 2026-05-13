"use client"

import { useState } from "react"
import { filterFruits } from "@/lib/fruits"

import FruitCard from "@/components/fruits/FruitCard"
import SearchBar from "@/components/ui/SearchBar"
import FilterBar from "@/components/ui/FilterBar"

import { useLang } from "@/lib/LangContext"
import { useSpoiler } from "@/lib/SpoilerContext"

import type { FruitType, ZoanSubtype } from "@/types/fruit"

import styles from "./page.module.css"

export default function Home() {
  const { t } = useLang()
  const [query, setQuery] = useState("")
  const [selectedType, setSelectedType] = useState<FruitType | "all">("all")
  const [selectedZoanSubtype, setSelectedZoanSubtype] = useState<ZoanSubtype | "all">("all")
  const { showSpoilers } = useSpoiler()

  const fruits = filterFruits({
    query,
    type: selectedType,
    zoanSubtype: selectedZoanSubtype,
    showSpoilers,
  })

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