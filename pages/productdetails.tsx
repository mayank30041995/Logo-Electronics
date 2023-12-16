import Image from 'next/image'
import styles from '../src/app/page.module.css'
import '@/app/globals.css'
import HeadTab from './components/HeadTab'
import Navbar from './components/Navbar'
import BannerHeaderImg from './components/BannerHeaderImg'
import BannerHeader from './components/BannerHeader'
import Header from './components/Header'
import ProductItems from './components/Products'
import ProductDetails from './components/ProductDetails'
import { Button } from 'reactstrap'
import { CgArrowRightO } from 'react-icons/cg'
import Paper from './components/Paper'
import { Row } from 'antd'
import SelectOption from './components/Select'
import Banner from './components/Banner'
import React from 'react'

export default function Products(): JSX.Element {
  return (
    <HeadTab>
      <React.Fragment>
        <Banner>
          <div>
            <BannerHeader text="Products" />
            <Paper text="Product Details" />
          </div>
        </Banner>

        {/* Product Details  */}
        <div style={{ marginTop: '4em' }}>
          <Header text="HEADPHONE - 128H" color="primary" />
        </div>

        <ProductDetails text="Price-125" />
      </React.Fragment>
    </HeadTab>
  )
}
