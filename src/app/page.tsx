import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
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
            <a>Home</a> <a>Products</a>
          </div>
        </div>
      </nav>{' '}
      <Image
        src="/banner.png"
        alt="LOGO"
        className={styles.vercelLogo}
        width={0}
        height={420}
        sizes="100vw"
        style={{ width: '100%' }}
        objectFit="contain"
        priority
      />
    </>
   
  )
}


