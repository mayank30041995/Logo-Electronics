import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'
import BannerHeader from './BannerHeader'
import BannerHeaderImg from './BannerHeaderImg'
import Navbar from './Navbar'

function Banner({ children }: { children: ReactElement }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.bannerImg}>
        <Image
          src="/banner.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={0}
          height={420}
          sizes="100vw"
          style={{ width: '100%', objectFit: 'cover' }}
          priority
        />
        {children}
      </div>
    </React.Fragment>
  )
}

export default Banner
