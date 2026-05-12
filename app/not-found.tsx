import Link from "next/link";
import Image from "next/image";
import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <main className={styles.main}>
            <div className={styles.card}>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/404fruit.png"
                        alt="Fruit inconnu"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                </div>

                <h1 className={styles.title}>Fruit introuvable</h1>
                <p className={styles.subtitle}>
                    Ce fruit du démon est introuvable...<br />
                    Peut-être un coup du gouvernement&nbsp;?
                </p>

                <div className={styles.divider} />

                <blockquote className={styles.quote}>
                    &ldquo;Les ponéglyphes ne mentent pas... mais cette page, elle, n&apos;existe pas.&rdquo;
                    <span className={styles.quoteAuthor}>— Nico Robin</span>
                </blockquote>

                <Link href="/" className={styles.btn}>
                    Retourner à l&apos;encyclopédie
                </Link>

            </div>
        </main>
    )
}