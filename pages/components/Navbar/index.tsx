import Image from 'next/image'
import styles from '@/app/page.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Image
          src="/LOGO.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={100}
          height={34}
          priority
        />
        <div className={styles.description}>
          <Link href="/" className={styles.cardTextDesc}>
            <p className={styles.navTopLink}>Home</p>
          </Link>
          <Link
            className={styles.cardTextDesc}
            href={{ pathname: '/products', query: { page: 1 } }}
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  )
}
