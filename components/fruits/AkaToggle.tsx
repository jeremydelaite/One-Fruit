"use client"

import { useState } from "react"
import { useLang } from "@/lib/LangContext"
import type { DevilFruit } from "@/types/fruit"
import styles from "./AkaToggle.module.css"

type Props = {
    aka: NonNullable<DevilFruit["aka"]>
}

export default function AkaToggle({ aka }: Props) {
    const [revealed, setRevealed] = useState(false)
    const { t, lang } = useLang()

    const primaryName = lang === "fr" ? aka.names.french : aka.names.english
    const secondaryName = lang === "fr" ? aka.names.english : aka.names.french

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.toggle}
                onClick={() => setRevealed((r) => !r)}
            >
                {revealed ? t("aka_hide") : `${t("aka_reveal")} ${aka.revealedChapter}`}
            </button>

            {revealed && (
                <div className={styles.reveal}>
                    <p className={styles.revealJp}>{aka.names.japanese}</p>
                    <p className={styles.revealPrimary}>{primaryName}</p>
                    <p className={styles.revealSecondary}>{secondaryName}</p>
                    <p className={styles.revealChapter}>
                        {t("aka_revealed_at")} {aka.revealedChapter}                   
                    </p>
                </div>
            )}
        </div>
    )
}