import Link from "next/link"
import type { DevilFruit } from "@/types/fruit"
import styles from "./FruitCard.module.css"

type Props = {
  fruit: DevilFruit
}

const badgeStyles = {
  Logia: styles.badgeLogia,
  Zoan: styles.badgeZoan,
  Paramecia: styles.badgeParamecia,
}

export default function FruitCard({ fruit }: Props) {
  const currentUser = fruit.users.find((u) => u.isCurrent) ?? fruit.users[0]

  return (
    <Link href={`/fruit/${fruit.id}`}>
      <div className={styles.card}>
        <span className={`${styles.badge} ${badgeStyles[fruit.type]}`}>
          {fruit.type}
          {fruit.zoanSubtype ? ` — ${fruit.zoanSubtype}` : ""}
        </span>

        <p className={styles.nameJp}>{fruit.names.japanese}</p>
        <p className={styles.nameFr}>{fruit.names.french}</p>
        <p className={styles.nameEn}>{fruit.names.english}</p>

        <div className={styles.divider} />

        <p className={styles.userLabel}>Utilisateur</p>
        <p className={styles.user}>
          {currentUser ? currentUser.name : "Aucun utilisateur connu"}
        </p>
      </div>
    </Link>
  )
}