"use client"

import { useLang } from "@/lib/i18n/LangContext"
import { useAka } from "./AkaContext"
import type { DevilFruit } from "@/types/fruit"
import styles from "./AkaToggle.module.css"

type Props = {
    aka: NonNullable<DevilFruit["aka"]>
}

export default function AkaToggle({ aka }: Props) {
    const { revealed, setRevealed } = useAka()
    const { t } = useLang()

    return (
        <div className={styles.wrapper}>
            <button
                className={`${styles.toggle} ${revealed ? styles.toggleRevealed : ""}`}
                onClick={() => setRevealed(!revealed)}
            >
                {revealed ? t("aka_hide") : `${t("aka_reveal")} ${aka.revealedChapter}`}
            </button>
        </div>
    )
}