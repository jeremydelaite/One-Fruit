"use client"

import { useLang } from "@/lib/LangContext"
import styles from "./SearchBar.module.css"
import Image from "next/image"

type Props = {
    value: string
    onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
    const { t } = useLang()

    return (
        <div className={styles.wrapper}>
            <Image
                src="/loupe.png"
                alt="Rechercher"
                width={20}
                height={20}
                className={styles.icon}
            />
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={t("home_search")}
            />
            {value && (
                <button className={styles.clear} onClick={() => onChange("")}>
                    ✕
                </button>
            )}
        </div>
    )
}