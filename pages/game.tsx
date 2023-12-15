import Image from 'next/image'
import styles from '../src/app/page.module.css'
import '@/app/globals.css'
import HeadTab from './components/HeadTab'
import BannerHeaderImg from './components/BannerHeaderImg'
import BannerHeader from './components/BannerHeader'
import Header from './components/Header'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import { Button } from 'reactstrap'
import { CgArrowRightO } from 'react-icons/cg'
import Paper from './components/Paper'
import { Row } from 'antd'
import SelectOption from './components/Select'

export default function Game(): JSX.Element {
  return (
    <HeadTab>
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
        </nav>
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

          <BannerHeader text="Logo Electronics" />
          {/* <BannerHeaderImg
            src="/headArrow.png"
            width={550}
            height={15}
            sizes="100vw"
            style={{ top: '48%', objectFit: 'cover' }}
          /> */}
        </div>
        {/* <div style={{ marginTop: '20em' }}>
          <Header text="Products" color="secondary" />
        </div> */}
        {/* All Product */}
        <Row
          style={{
            marginTop: '4em',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Header text=">> ALL PRODUCTS" color="primary" />
          <SelectOption />
        </Row>
        <Products />
        {/* Product Details  */}
        {/* <div style={{ marginTop: '4em' }}>
          <Header text="HEADPHONE - 128H" color="primary" />
        </div> */}
        {/* <Paper text="Product Details" />
        <ProductDetails text="Price-125" /> */}
      </>
    </HeadTab>
  )
}
