"use client"

import { createContext, useContext, useState } from "react"
import { useSearchParams } from "next/navigation"

type AkaContextType = {
    revealed: boolean
    setRevealed: (v: boolean) => void
}

const AkaContext = createContext<AkaContextType>({
    revealed: false,
    setRevealed: () => { },
})

export function AkaProvider({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams()
    const [revealed, setRevealed] = useState(
        searchParams.get("revealed") === "true"
    )
    

    return (
        <AkaContext.Provider value={{ revealed, setRevealed }}>
            {children}
        </AkaContext.Provider>
    )
}

export function useAka() {
    return useContext(AkaContext)
}