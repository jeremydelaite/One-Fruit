"use client"

import { useState } from "react"
import { useLang } from "@/lib/i18n/LangContext"
import { supabase } from "@/lib/supabase"
import xss from "xss"

import styles from "./page.module.css"
import Link from "next/link"

const SUBJECTS_FR = [
    "Correction d'une erreur",
    "Fruit manquant",
    "Suggestion d'amélioration",
    "Bug technique",
    "Autre",
]

const SUBJECTS_EN = [
    "Error correction",
    "Missing fruit",
    "Improvement suggestion",
    "Technical bug",
    "Other",
]

export default function ContactPage() {
    const { t, lang } = useLang()
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const subjects = lang === "fr" ? SUBJECTS_FR : SUBJECTS_EN
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = 
        emailRegex.test(email) && 
        !!subject && 
        message.length >= 20 && 
        message.length <= 1000

    const handleSubmit = async () => {
        if (!isValid) return
        setStatus("loading")

        const cleanEmail = xss(email.trim())
        const cleanSubject = xss(subject.trim())
        const cleanMessage = xss(message.trim())

        const { error } = await supabase
            .from("contact")
            .insert({ 
                email: cleanEmail, 
                subject: cleanSubject, 
                message: cleanMessage 
            })

        if (error) {
            setStatus("error")
        } else {
            setStatus("success")
            setEmail("")
            setSubject("")
            setMessage("")
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <Link href="/" className={styles.back}>← {t("nav_fruits")}</Link>
                <h1 className={styles.title}>{t("contact_title")}</h1>
                <p className={styles.subtitle}>{t("contact_subtitle")}</p>

                {status === "success" ? (
                    <div className={styles.success}>
                        <p>{t("contact_success")}</p>
                    </div>
                ) : (
                    <div className={styles.form}>

                        <div className={styles.field}>
                            <label className={styles.label}>{t("contact_email")}</label>
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemple@email.com"
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t("contact_subject")}</label>
                            <select
                                className={styles.input}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            >
                                <option value="">{t("contact_subject_placeholder")}</option>
                                {subjects.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.field}>
                            <div className={styles.labelRow}>
                                <label className={styles.label}>{t("contact_message")}</label>
                                <span className={styles.limit}>20 — 1000 {t("contact_chars")}</span>
                            </div>
                            <textarea
                                className={`${styles.input} ${styles.textarea}`}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t("contact_message_placeholder")}
                                rows={5}
                            />
                            <p className={styles.counter}>{message.length}/1000</p>
                        </div>

                        {status === "error" && (
                            <p className={styles.error}>{t("contact_error")}</p>
                        )}

                        <button
                            className={styles.btn}
                            onClick={handleSubmit}
                            disabled={status === "loading" || !isValid}
                        >
                            {status === "loading" ? "..." : t("contact_submit")}
                        </button>

                    </div>
                )}
            </div>
        </main>
    )
}