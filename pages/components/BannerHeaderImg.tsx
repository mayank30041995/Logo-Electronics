import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'
import { Button } from 'reactstrap'
import { CgArrowRightO } from 'react-icons/cg'

interface checklist {
  src: string
  width: number
  height: number
  sizes: string
  style?: object
}

const BannerHeader = ({
  src,
  width,
  height,
  sizes = '100vw',
  style,
}: checklist): JSX.Element => (
  <div className={styles.bannerHeader} style={{ ...style }}>
    <Image src={src} width={width} height={height} alt="head" sizes={sizes} />
    <Button color="primary" className={styles.arrowBtn}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <p>VIEW ALL PRODUCTS </p>
        <CgArrowRightO
          size="34"
          className={styles.iconClr}
        />
      </div>
    </Button>
  </div>
)

export default BannerHeader
