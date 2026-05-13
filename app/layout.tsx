import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import TitleUpdater from "@/components/layout/TItleUpdater"
import { LangProvider } from "@/lib/LangContext"
import { SpoilerProvider } from "@/lib/SpoilerContext"

export const metadata: Metadata = {
  title: "Devil Fruit Encyclopedia",
  description: "Encyclopédie des Fruits du Démon — One Piece",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
          <SpoilerProvider>
            <TitleUpdater />
            <Navbar />
            {children}
          </SpoilerProvider>
        </LangProvider>
      </body>
    </html>
  )
}