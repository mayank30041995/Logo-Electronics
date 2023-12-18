import Image from 'next/image'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

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
            {pathname === '/' ? (
              <p className={styles.navTopLink}>Home</p>
            ) : (
              'Home'
            )}
          </Link>
          <Link
            className={styles.cardTextDesc}
            href={{ pathname: '/products', query: { page: 1 } }}
          >
            {pathname === '/products' ? (
              <p className={styles.navTopLink}>Products</p>
            ) : (
              'Products'
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}
