import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"

export const metadata: Metadata = {
  title: "Devil Fruit Encyclopedia",
  description: "Encyclopédie des Fruits du Démon — One Piece",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}