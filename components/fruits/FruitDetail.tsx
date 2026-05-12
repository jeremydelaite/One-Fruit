"use client"

import { useLang } from "@/lib/LangContext"
import type { DevilFruit } from "@/types/fruit"
import type { TranslationKey } from "@/lib/i18n"
import styles from "./FruitDetail.module.css"
import AkaToggle from "./AkaToggle"
import { AkaProvider, useAka } from "./AkaContext"

type Props = {
    fruit: DevilFruit
}

const badgeStyles: Record<string, string> = {
    Logia: styles.badgeLogia,
    Zoan: styles.badgeZoan,
    Paramecia: styles.badgeParamecia,
}

function FruitDetailContent({ fruit }: Props) {
    const { t, lang } = useLang()
    const { revealed } = useAka()

    const activeType = revealed && fruit.aka ? fruit.aka.type : fruit.type
    const activeZoanSubtype = revealed && fruit.aka ? fruit.aka.zoanSubtype : fruit.zoanSubtype
    const activeAbilities = revealed && fruit.aka ? fruit.aka.abilities : fruit.abilities
    const badgeClass = badgeStyles[activeType] ?? ""

    const statusLabel = {
        "Possédé": t("status_possede"),
        "Non-possédé": t("status_non_possede"),
    }[fruit.status]

    return (
        <main className={styles.main}>
            <div className={styles.header}>

                {/* Badge - change en fonction du revealed */}
                <span
                    className={`${styles.badge} ${badgeClass} ${revealed ? styles.badgeBounce : ""}`}
                    key={revealed ? "aka" : "base"}
                >
                    {activeType}
                    {activeZoanSubtype
                        ? ` — ${t(`zoan_${activeZoanSubtype.toLowerCase()}` as TranslationKey)}`
                        : ""}
                </span>

                {/* Nom japonais - change en fonction du revealed */}
                <h1 className={`${styles.title} ${revealed ? styles.textBounce : ""}`}>
                    {revealed && fruit.aka ? fruit.aka.names.japanese : fruit.names.japanese}
                </h1>

                {/* Nom FR/EN - change en fonction du revealed */}
                <p
                    className={`${styles.subtitle} ${revealed ? styles.textBounce : ""}`}
                    key={`sub-${revealed}`}
                >
                    {revealed && fruit.aka
                        ? lang === "fr" ? fruit.aka.names.french : fruit.aka.names.english
                        : lang === "fr" ? fruit.names.french : fruit.names.english}
                </p>
                <p className={styles.subtitleSecondary}>
                    {revealed && fruit.aka
                        ? lang === "fr" ? fruit.aka.names.english : fruit.aka.names.french
                        : lang === "fr" ? fruit.names.english : fruit.names.french}
                </p>

                {fruit.aka && <AkaToggle aka={fruit.aka} />}
            </div>

            <div className={styles.grid}>

                {/* Capacités - change en fonction du revealed */}
                <div className={`${styles.card} ${revealed ? styles.cardBounce : ""}`}>
                    <h2 className={styles.cardTitle}>{t("detail_abilities")}</h2>
                    <p className={styles.cardText}>
                        {lang === "fr" ? activeAbilities.fr : activeAbilities.en}
                    </p>
                </div>

                {/* Infos - change en fonction du revealed */}
                <div className={`${styles.card} ${revealed ? styles.cardBounce : ""}`}>
                    <h2 className={styles.cardTitle}>{t("detail_info")}</h2>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_status")}</span>
                        <span className={styles.infoValue}>{statusLabel}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_chapter")}</span>
                        <span className={styles.infoValue}>
                            Ch. {revealed && fruit.aka ? fruit.aka.firstAppearance.chapter : fruit.firstAppearance.chapter}
                        </span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>{t("detail_arc")}</span>
                        <span className={styles.infoValue}>
                            {revealed && fruit.aka ? fruit.aka.firstAppearance.arc : fruit.firstAppearance.arc}
                        </span>
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

export default function FruitDetail({ fruit }: Props) {
    return (
        <AkaProvider>
            <FruitDetailContent fruit={fruit} />
        </AkaProvider>
    )
}