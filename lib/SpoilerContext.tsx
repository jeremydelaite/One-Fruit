"use client"

import { createContext, useContext, useState, useSyncExternalStore } from "react"

type SpoilerContextType = {
    showSpoilers: boolean
    setShowSpoilers: (value: boolean) => void
}

const SpoilerContext = createContext<SpoilerContextType>({
    showSpoilers: false,
    setShowSpoilers: () => { },
})

function subscribe(callback: () => void) {
    window.addEventListener("spoilerchange", callback)
    return () => window.removeEventListener("spoilerchange", callback)
}

function getSpoilers(): boolean {
    return localStorage.getItem("showSpoilers") === "true"
}

export function SpoilerProvider({ children }: { children: React.ReactNode }) {
    const showSpoilers = useSyncExternalStore(
        subscribe,
        getSpoilers,
        () => false
    )

    const setShowSpoilers = (value: boolean) => {
        localStorage.setItem("showSpoilers", String(value))
        window.dispatchEvent(new Event("spoilerchange"))
    }

    return (
        <SpoilerContext.Provider value={{ showSpoilers, setShowSpoilers }}>
            {children}
        </SpoilerContext.Provider>
    )
}

export function useSpoiler() {
    return useContext(SpoilerContext)
}