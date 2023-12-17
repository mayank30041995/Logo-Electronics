import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'
import Navbar from './Navbar'

function Banner({ children }: { children: ReactElement }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.bannerImg}>
        <Image
          src="/banner.png"
          alt="LOGO"
          className={styles.imgBanner}
          width={0}
          height={420}
          sizes="100vw"
          priority
        />
        {children}
      </div>
    </React.Fragment>
  )
}

export default Banner
