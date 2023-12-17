'use client'
import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'
import { Button } from 'reactstrap'
import { CgArrowRightO } from 'react-icons/cg'
import Link from 'next/link'

interface checklist {
  src: string
  width: number
  height: number
  sizes: string
  style?: object
}

const BannerHeaderImg = ({
  src,
  width,
  height,
  sizes = '100vw',
  style,
}: checklist): JSX.Element => (
  <div className={styles.bannerHeader} style={{ ...style }}>
    <Image src={src} width={width} height={height} alt="head" sizes={sizes} />
    <Button color="primary" className={styles.arrowBtn}>
      <Link href={{ pathname: '/products', query: { page: 1 } }}>
        <div className={styles.bannerHeadImg} style={{}}>
          <p>VIEW ALL PRODUCTS </p>
          <CgArrowRightO size="34" className={styles.iconClr} />
        </div>
      </Link>
    </Button>
  </div>
)

export default BannerHeaderImg
