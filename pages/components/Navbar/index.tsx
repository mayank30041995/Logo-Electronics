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
          <Link href="/">Home</Link> <Link href="/products">Products</Link>
        </div>
      </div>
    </nav>
  )
}
