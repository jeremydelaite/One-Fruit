"use client"

import { useEffect, useState, } from "react"
import styles from "./ScrollToTop.module.css"

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)
    const [bottomOffset, setBottomOffset] = useState(24);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight)

            const footer = document.querySelector("footer")
            if (!footer) return

            const footerTop = footer.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (footerTop < windowHeight) {
                setBottomOffset(windowHeight - footerTop + 16)
            } else {
                setBottomOffset(24)
            }
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!visible) return null

    return (
        <button
            className={styles.btn}
            style={{ bottom: `${bottomOffset}px` }}
            onClick={scrollToTop}
            aria-label="Retour en haut"
        >
            ↑
        </button>
    )
}