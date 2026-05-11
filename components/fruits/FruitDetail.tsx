"use client"

import { useLang } from "@/lib/LangContext"
import type { DevilFruit } from "@/types/fruit"
import styles from "./FruitDetail.module.css"
import AkaToggle from "./AkaToggle"

type Props = {
    fruit: DevilFruit
}

const badgeStyles: Record<string, string> = {
    Logia: styles.badgeLogia,
    Zoan: styles.badgeZoan,
    Paramecia: styles.badgeParamecia,
}

export default function FruitDetail({ fruit }: Props) {
    const { t, lang } = useLang()

    const statusLabel = {
        "Possédé": t("status_possede"),
        "Non-possédé": t("status_non_possede"),
    }[fruit.status]

    return (
        <main className={styles.main}>

            {/* Header */}
            <div className={styles.header}>
                <span className={`${styles.badge} ${badgeStyles[fruit.type]}`}>
                    {fruit.type}
                    {fruit.zoanSubtype ? ` — ${fruit.zoanSubtype}` : ""}
                </span>
                <h1 className={styles.title}>{fruit.names.japanese}</h1>
                <p className={styles.subtitle}>
                    {lang === "fr" ? fruit.names.french : fruit.names.english}
                </p>
                <p className={styles.subtitleEn}>
                    {lang === "fr" ? fruit.names.english : fruit.names.japanese}
                </p>

                {fruit.aka && <AkaToggle aka={fruit.aka} />}
            </div>

            {/* Contenu */}
            <div className={styles.grid}>

                {/* Capacités */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>{t("detail_abilities")}</h2>
                    <p className={styles.cardText}>
                        {lang === "fr" ? fruit.abilities.fr : fruit.abilities.en}
                    </p>
                </div>

                {/* Infos */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>{t("detail_info")}</h2>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_status")}</span>
                        <span className={styles.infoValue}>{statusLabel}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_chapter")}</span>
                        <span className={styles.infoValue}>Ch. {fruit.firstAppearance.chapter}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_arc")}</span>
                        <span className={styles.infoValue}>{fruit.firstAppearance.arc}</span>
                    </div>
                    {fruit.element && (
                        <div className={styles.infoRow}>
                            <span className={styles.infoLabel}>{t("detail_element")}</span>
                            <span className={styles.infoValue}>
                                {lang === "fr" ? fruit.element.fr : fruit.element.en}
                            </span>
                        </div>
                    )}
                </div>

                {/* Utilisateurs */}
                <div className={`${styles.card} ${styles.cardFull}`}>
                    <h2 className={styles.cardTitle}>{t("detail_users")}</h2>
                    <div className={styles.usersList}>
                        {fruit.users.length === 0 && (
                            <p className={styles.cardText}>{t("detail_no_user")}</p>
                        )}
                        {fruit.users.map((user) => (
                            <div
                                key={user.name}
                                className={`${styles.userChip} ${user.isCurrent ? styles.userChipCurrent : ""}`}
                            >
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>
                                        {lang === "fr" ? user.name : user.nameEn}
                                    </span>
                                    {user.chapter && (
                                        <span className={styles.userChapter}>Ch. {user.chapter}</span>
                                    )}
                                </div>
                                <div className={styles.userBadges}>
                                    {user.isCurrent && (
                                        <span className={styles.userCurrentBadge}>{t("detail_current")}</span>
                                    )}
                                    {user.isAwakened && (
                                        <span className={styles.userAwakenedBadge}>{t("detail_awakened")}</span>
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