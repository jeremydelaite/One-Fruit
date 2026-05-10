"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import styles from "./Navbar.module.css"

const links = [
  { href: "/", label: "Fruits" },
]

export default function Navbar() {
  const pathname = usePathname()

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
          Devil Fruit{" "}
          <span className={styles.logoTextAccent}>Encyclopedia</span>
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
      </div>
    </nav>
  )
}