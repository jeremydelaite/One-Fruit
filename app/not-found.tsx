"use client"

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import styles from "./not-found.module.css"

export default function NotFound() {
    const { t } = useLang()

    return (
        <main className={styles.main}>
            <div className={styles.card}>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/404fruit.png"
                        alt="Fruit inconnu"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                </div>

                <h1 className={styles.title}>{t("not_found_title")}</h1>
                <p className={styles.subtitle}>{t("not_found_subtitle")}</p>

                <div className={styles.divider} />

                <blockquote className={styles.quote}>
                    {t("not_found_quote")}
                    <span className={styles.quoteAuthor}>— Nico Robin</span>
                </blockquote>

                <Link href="/" className={styles.btn}>
                    {t("not_found_btn")}
                </Link>

            </div>
        </main>
    )
}