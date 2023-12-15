import React, { ReactElement } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'

interface checklist {
  text?: string
}

const Paper = ({ text }: checklist): JSX.Element => (
  <div className={styles.paper}>
    <div className={styles.header}>
      <h1 className={styles.txtHead}>{text}</h1>
    </div>
  </div>
)

export default Paper
