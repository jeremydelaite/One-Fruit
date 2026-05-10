import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import { LangProvider } from "@/lib/LangContext"

export const metadata: Metadata = {
  title: {
    template: "%s | Devil Fruit Encyclopedia",
    default: "Devil Fruit Encyclopedia",
  },
  description: "Encyclopédie interactive des Fruits du Démon de One Piece",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LangProvider>
        <Navbar />
        {children}
        </LangProvider>
        </body>
    </html>
  )
}