import { getFruitById, getAllFruits } from "@/lib/fruits"
import { notFound } from "next/navigation"
import AkaToggle from "@/components/fruits/AkaToggle"
import styles from "./page.module.css"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const fruits = getAllFruits()
  return fruits.map((f) => ({ id: f.id }))
}

export default async function FruitPage({ params }: Props) {
  const { id } = await params
  const fruit = getFruitById(id)

  if (!fruit) notFound()

  const badgeColors = {
    Logia: styles.badgeLogia,
    Zoan: styles.badgeZoan,
    Paramecia: styles.badgeParamecia,
  }

  return (
    <main className={styles.main}>

      {/* Header */}
      <div className={styles.header}>
        <span className={`${styles.badge} ${badgeColors[fruit.type]}`}>
          {fruit.type}
          {fruit.zoanSubtype ? ` — ${fruit.zoanSubtype}` : ""}
        </span>
        <h1 className={styles.title}>{fruit.names.japanese}</h1>
        <p className={styles.subtitle}>{fruit.names.french}</p>
        <p className={styles.subtitleEn}>{fruit.names.english}</p>

        {/* SPOILER */}
        {fruit.aka && <AkaToggle aka={fruit.aka} />}
      </div>

      {/* Contenu */}
      <div className={styles.grid}>

        {/* Capacités */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>⚡ Capacités</h2>
          <p className={styles.cardText}>{fruit.abilities.fr}</p>
        </div>

        {/* Infos */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>📜 Informations</h2>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Statut</span>
            <span className={styles.infoValue}>{fruit.status}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>1ère apparition</span>
            <span className={styles.infoValue}>Chapitre {fruit.firstAppearance.chapter}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Arc</span>
            <span className={styles.infoValue}>{fruit.firstAppearance.arc}</span>
          </div>
          {fruit.element && (
            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>Élément</span>
              <span className={styles.infoValue}>{fruit.element}</span>
            </div>
          )}
        </div>

        {/* Utilisateurs */}
        <div className={`${styles.card} ${styles.cardFull}`}>
          <h2 className={styles.cardTitle}>👤 Utilisateurs connus</h2>
          <div className={styles.usersList}>
            {fruit.users.map((user) => (
              <div
                key={user.name}
                className={`${styles.userChip} ${user.isCurrent ? styles.userChipCurrent : ""}`}
              >
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{user.name}</span>
                  {user.chapter && (
                    <span className={styles.userChapter}>Ch. {user.chapter}</span>
                  )}
                </div>
                <div className={styles.userBadges}>
                  {user.isCurrent && (
                    <span className={styles.userCurrentBadge}>Actuel</span>
                  )}
                  {user.isAwakened && (
                    <span className={styles.userAwakenedBadge}>⚡ Éveillé</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}