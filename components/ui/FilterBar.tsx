"use client"

import { useLang } from "@/lib/i18n/LangContext"
import type { FruitType, ZoanSubtype } from "@/types/fruit"
import type { TranslationKey } from "@/lib/i18n"

import SpoilerToggle from "./SpoilerToggle"

import styles from "./FilterBar.module.css"

type Props = {
    selectedType: FruitType | "all"
    selectedZoanSubtype: ZoanSubtype | "all"
    onTypeChange: (type: FruitType | "all") => void
    onZoanSubtypeChange: (subtype: ZoanSubtype | "all") => void
}

const types: { value: FruitType | "all"; labelKey: TranslationKey }[] = [
    { value: "all", labelKey: "home_filter_all" },
    { value: "Paramecia", labelKey: "filter_paramecia" },
    { value: "Zoan", labelKey: "filter_zoan" },
    { value: "Logia", labelKey: "filter_logia" },
]

const zoanSubtypes: { value: ZoanSubtype | "all"; labelKey: TranslationKey }[] = [
    { value: "all", labelKey: "home_filter_all" },
    { value: "Classique", labelKey: "zoan_classique" },
    { value: "Antique", labelKey: "zoan_antique" },
    { value: "Mythique", labelKey: "zoan_mythique" },
]

export default function FilterBar({
    selectedType,
    selectedZoanSubtype,
    onTypeChange,
    onZoanSubtypeChange,
}: Props) {
    const { t } = useLang()

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                {types.map(({ value, labelKey }) => (
                    <button
                        key={value}
                        className={`${styles.btn} ${selectedType === value ? styles.active : ""} ${value !== "all" ? styles[value.toLowerCase()] : ""}`}
                        onClick={() => {
                            onTypeChange(value)
                            if (value !== "Zoan") onZoanSubtypeChange("all")
                        }}
                    >
                        {t(labelKey)}
                    </button>
                ))}
                <SpoilerToggle />
            </div>

            {selectedType === "Zoan" && (
                <div className={`${styles.row} ${styles.subRow}`}>
                    {zoanSubtypes.map(({ value, labelKey }) => (
                        <button
                            key={String(value)}
                            className={`${styles.btn} ${styles.subBtn} ${selectedZoanSubtype === value ? styles.subActive : ""}`}
                            onClick={() => onZoanSubtypeChange(value)}
                        >
                            {t(labelKey)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}