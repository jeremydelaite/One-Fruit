"use client"

import Link from "next/link"
import { useLang } from "@/lib/i18n/LangContext"
import styles from "./Footer.module.css"

export default function Footer() {
    const { t } = useLang()

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <span className={styles.brand}>One Fruit</span>
                    <span className={styles.separator}>·</span>
                    <span className={styles.desc}>{t("footer_desc")}</span>
                </div>
                <Link href="/contact" className={styles.link}>
                    {t("footer_contact")}
                </Link>
                <p className={styles.copy}>{t("footer_copy")}</p>
            </div>
        </footer>
    )
}