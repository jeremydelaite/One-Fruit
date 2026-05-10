"use client"

import { useState } from "react"
import type { DevilFruit } from "@/types/fruit"
import styles from "./AkaToggle.module.css"

type Props = {
    aka: NonNullable<DevilFruit["aka"]>
}

export default function AkaToggle({ aka }: Props) {
    const [revealed, setRevealed] = useState(false)

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.toggle}
                onClick={() => setRevealed((r) => !r)}
            >
                {revealed ? "🔒 Masquer" : `⚡ Spoiler — Chapitre ${aka.revealedChapter}`}
            </button>

            {revealed && (
                <div className={styles.reveal}>
                    <p className={styles.revealJp}>{aka.names.japanese}</p>
                    <p className={styles.revealFr}>{aka.names.french}</p>
                    <p className={styles.revealEn}>{aka.names.english}</p>
                    <p className={styles.revealChapter}>
                        Révélé au chapitre {aka.revealedChapter}
                    </p>
                </div>
            )}
        </div>
    )
}