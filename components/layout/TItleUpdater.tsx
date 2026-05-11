"use client"

import { useEffect } from "react"
import { useLang } from "@/lib/LangContext"

export default function TitleUpdater() {
    const { t } = useLang()

    useEffect(() => {
        document.title = t("home_title")
    }, [t])
    return null
}
