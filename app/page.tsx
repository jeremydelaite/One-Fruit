"use client"

import { getAllFruits } from "@/lib/fruits"
import FruitCard from "@/components/fruits/FruitCard"
import { useLang } from "@/lib/LangContext"
import styles from "./page.module.css"

export default function Home() {
  const fruits = getAllFruits()
  const { t } = useLang()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t("home_title")}</h1>
      <p className={styles.subtitle}>{fruits.length} {t("home_subtitle")}</p>
      <div className={styles.grid}>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </main>
  )
}