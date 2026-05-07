import { getAllFruits } from "@/lib/fruits"
import FruitCard from "@/components/FruitCard"
import styles from "./page.module.css"

export default function Home() {
  const fruits = getAllFruits()

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Devil Fruit Encyclopedia</h1>
      <p className={styles.subtitle}>{fruits.length} fruits répertoriés</p>
      <div className={styles.grid}>
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </main>
  )
}