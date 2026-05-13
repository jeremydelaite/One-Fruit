"use client"

import Link from "next/link"
import type { DevilFruit } from "@/types/fruit"
import type { TranslationKey } from "@/lib/i18n"
import { useLang } from "@/lib/LangContext"
import styles from "./FruitCard.module.css"

type Props = {
  fruit: DevilFruit
  lang?: never
}

const badgeStyles = {
  Logia: styles.badgeLogia,
  Zoan: styles.badgeZoan,
  Paramecia: styles.badgeParamecia,
}

export default function FruitCard({ fruit }: Props) {
  const { lang, t } = useLang()
  const currentUser = fruit.users.find((u) => u.isCurrent) ?? fruit.users[0]

  const primaryName = lang === "fr" ? fruit.names.french : fruit.names.english
  const secondaryName = lang === "fr" ? fruit.names.english : fruit.names.french

  const [fruitId, query] = fruit.id.split("?")
  const href = query ? `/fruit/${fruitId}?${query}` : `/fruit/${fruitId}`

  return (
    <Link href={href}>
      <div className={styles.card}>
        <span className={`${styles.badge} ${badgeStyles[fruit.type]}`}>
          {fruit.type}
          {fruit.zoanSubtype
            ? ` — ${t(`zoan_${fruit.zoanSubtype.toLowerCase()}` as TranslationKey)}`
            : ""}
        </span>

        <p className={styles.nameJp}>{fruit.names.japanese}</p>
        <p className={styles.nameFr}>{primaryName}</p>
        <p className={styles.nameEn}>{secondaryName}</p>

        <div className={styles.divider} />

        <p className={styles.userLabel}>{t("card_user")}</p>
        <p className={styles.user}>
          {currentUser
            ? lang === "fr" ? currentUser.name : currentUser.nameEn
            : t("detail_no_user")}
        </p>
      </div>
    </Link>
  )
}