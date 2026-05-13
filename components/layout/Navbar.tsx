"use client"

import Link from "next/link"
import Image from "next/image"

import { usePathname } from "next/navigation"
import { useLang } from "@/lib/LangContext"
import LangToggle from "@/components/ui/LangToggle"

import styles from "./Navbar.module.css"
import { useEffect, useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const { t } = useLang()
  const [visible, setVisible] = useState(true)

  // Faire disparaître la navbar lorsqu'on scroll down
  useEffect(() => {
  let lastY = window.scrollY

  const handleScroll = () => {
    const currentY = window.scrollY
    if (currentY < lastY || currentY < 10) {
      setVisible(true)
    } else {
      setVisible(false)
    }
    lastY = currentY
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [])


  const links = [
    { href: "/", label: t("nav_fruits") },
  ]

  return (
    <nav className={`${styles.navbar} ${!visible ? styles.navbarHidden : ""}`}>
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