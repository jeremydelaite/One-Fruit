import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import { LangProvider } from "@/lib/i18n/LangContext"
import { SpoilerProvider } from "@/lib/i18n/SpoilerContext"
import ScrollToTop from "@/components/ui/ScrollToTop"

export const metadata: Metadata = {
  title: "One Fruit",
  description: "Encyclopédie des Fruits du Démon — One Piece",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <SpoilerProvider>
            <Navbar />
            {children}
            <ScrollToTop />
          </SpoilerProvider>
        </LangProvider>
      </body>
    </html>
  )
}