import Link from "next/link"
import type { DevilFruit } from "@/types/fruit"
import styles from "./FruitCard.module.css"

type Props = {
  fruit: DevilFruit
}

export default function FruitCard({ fruit }: Props) {
  const badgeClass = {
    Paramecia: styles["badge-paramecia"],
    Zoan: styles["badge-zoan"],
    Logia: styles["badge-logia"],
  }[fruit.type]

  const currentUser = fruit.users.find((u) => u.isCurrent) ?? fruit.users[0]

  return (
    <Link href={`/fruit/${fruit.id}`}>
      <div className={styles.card}>
        <span className={`${styles.badge} ${badgeClass}`}>
          {fruit.type}
          {fruit.zoanSubtype ? ` — ${fruit.zoanSubtype}` : ""}
        </span>

        <p className={styles["name-jp"]}>{fruit.names.japanese}</p>
        <p className={styles["name-fr"]}>{fruit.names.french}</p>
        <p className={styles["name-en"]}>{fruit.names.english}</p>

        <div className={styles.footer}>
          {currentUser ? currentUser.name : "Aucun utilisateur connu"}
        </div>
      </div>
    </Link>
  )
}