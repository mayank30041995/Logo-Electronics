import '@/app/globals.css'
import HeadTab from './components/HeadTab'
import BannerHeader from './components/BannerHeader'
import Header from './components/Header'
import { Row } from 'antd'
import SelectOption from './components/Select'
import Banner from './components/Banner'
import React from 'react'
import ProductCards from './components/ProductCards'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

export default function Products({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
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
        <ProductCards data={products} />
      </React.Fragment>
    </HeadTab>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://dummyjson.com/products?skip=0&limit=30')
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}
