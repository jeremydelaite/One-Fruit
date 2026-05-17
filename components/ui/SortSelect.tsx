"use client"

import { useLang } from "@/lib/i18n/LangContext"
import styles from "./SortSelect.module.css"

export type SortOption = "default" | "alpha" | "chapter_asc" | "chapter_desc"

type Props = {
    value: SortOption
    onChange: (value: SortOption) => void
}

export default function SortSelect({ value, onChange }: Props) {
    const { t } = useLang()

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{t("sort_label")}</label>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
            >
                <option value="default">{t("sort_default")}</option>
                <option value="alpha">{t("sort_alpha")}</option>
                <option value="chapter_asc">{t("sort_chapter_asc")}</option>
                <option value="chapter_desc">{t("sort_chapter_desc")}</option>
            </select>
        </div>
    )
}