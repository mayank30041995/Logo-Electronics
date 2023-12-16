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
          <BannerHeader text="Products" />
        </Banner>

        {/* All Products */}
        <Row
          style={{
            marginTop: '4em',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <Header text=">> ALL PRODUCTS" color="primary" />
          <SelectOption />
        </Row>
        <ProductItems />
      </React.Fragment>
    </HeadTab>
  )
}
