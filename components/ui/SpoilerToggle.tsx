"use client"

import { useSpoiler } from "@/lib/SpoilerContext"
import styles from "./SpoilerToggle.module.css"

export default function SpoilerToggle() {
    const { showSpoilers, setShowSpoilers } = useSpoiler()

    return (
        <div className={styles.wrapper} onClick={() => setShowSpoilers(!showSpoilers)}>
            <span className={styles.label}>Spoilers</span>
            <div className={`${styles.track} ${showSpoilers ? styles.trackOn : ""}`}>
                <div className={`${styles.thumb} ${showSpoilers ? styles.thumbOn : ""}`} />
            </div>
        </div>
    )
}