import Image from 'next/image'
import styles from '@/app/page.module.css'

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
          <a href="/">Home</a> <a href="/products">Products</a>
        </div>
      </div>
    </nav>
  )
}
