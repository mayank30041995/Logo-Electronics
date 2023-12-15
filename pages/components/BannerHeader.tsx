import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'

interface checklist {
  text?: string
}

const BannerHeader = ({ text }: checklist): JSX.Element => (
  <div className={styles.bannerHeader}>
    <h1 className={styles.txtHead}>{text}</h1>
  </div>
)

export default BannerHeader
