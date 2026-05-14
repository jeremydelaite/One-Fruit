"use client"

import { useLang } from "@/lib/i18n/LangContext"
import styles from "./LangToggle.module.css"

export default function LangToggle() {
    const { lang, setLang } = useLang()

    return (
        <div className={styles.toggle}>
            <button
                className={`${styles.btn} ${lang === "fr" ? styles.active : ""}`}
                onClick={() => setLang("fr")}
            >
                FR
            </button>
            <span className={styles.separator}>|</span>
            <button
                className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
                onClick={() => setLang("en")}
            >
                EN
            </button>
        </div>
    )
}