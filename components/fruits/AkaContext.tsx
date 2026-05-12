"use client"

import { createContext, useContext, useState } from "react"

type AkaContextType = {
    revealed: boolean
    setRevealed: (v: boolean) => void
}

const AkaContext = createContext<AkaContextType>({
    revealed: false,
    setRevealed: () => {},
}) 

export function AkaProvider({ children }: { children: React.ReactNode }) {
    const [revealed, setRevealed] = useState(false)

    return (
        <AkaContext.Provider value={{ revealed, setRevealed}}>
            {children}
        </AkaContext.Provider>
    )
}

export function useAka() {
    return useContext(AkaContext)
}