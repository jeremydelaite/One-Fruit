"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLang } from "@/lib/LangContext"
import LangToggle from "@/components/ui/LangToggle"
import styles from "./Navbar.module.css"


export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLang()

  const links = [
    { href: "/", label: t("nav_fruits") },
  ]

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/icon.png"
          alt="Devil Fruit Encyclopedia"
          width={64}
          height={64}
          className={styles.logoImage}
        />
        <span className={styles.logoText}>
          One Fruit
        </span>
      </Link>

      <div className={styles.nav}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <LangToggle />
      </div>
    </nav>
  )
}