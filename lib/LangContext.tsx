"use client"

import { createContext, useContext, useState, useSyncExternalStore } from "react"
import type { Lang } from "./i18n"
import { translations, type TranslationKey } from "./i18n"

type LangContextType = {
    lang: Lang
    setLang: (lang: Lang) => void
    t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextType>({
    lang: "fr",
    setLang: () => { },
    t: (key) => key,
})

function subscribe(callback: () => void) {
    window.addEventListener("langchange", callback)
    return () => window.removeEventListener("langchange", callback)
}

function getLang(): Lang {
    if (typeof window === "undefined") return "fr"
    const saved = localStorage.getItem("lang")
    return saved === "en" ? "en" : "fr"
}

export function LangProvider({ children }: { children: React.ReactNode }) {
    const lang = useSyncExternalStore<Lang>(
        subscribe,
        getLang,
        (): Lang => "fr"
    )

    const setLang = (newLang: Lang) => {
        localStorage.setItem("lang", newLang)
        window.dispatchEvent(new Event("langchange"))
    }

    const t = (key: TranslationKey): string => translations[lang as Lang][key]

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang() {
    return useContext(LangContext)
}