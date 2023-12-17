import Image from 'next/image'
import styles from '../src/app/page.module.css'
import '@/app/globals.css'
import HeadTab from '../components/HeadTab'
import Navbar from '../components/Navbar'
import BannerHeaderImg from '../components/BannerHeaderImg'
import BannerHeader from '../components/BannerHeader'
import Header from '../components/Header'
import ProductItems from '../components/ProductCards'
import ProductDetails from '../components/ProductDetails'
import { Button } from 'reactstrap'
import { CgArrowRightO } from 'react-icons/cg'
import Paper from '../components/Paper'
import { Row } from 'antd'
import SelectOption from '../components/Select'
import Banner from '../components/Banner'
import React from 'react'
import { InferGetStaticPropsType } from 'next'
import type { NextPage } from 'next'
// {
//     description = '',
//     discountPercentage = 0,
//     category = '',
//     images = [],
//     price = 0,
//     title = '',
//   },
export default function Products({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  // let { title }: { title: string } = data
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
          <Header text={data?.title || ''} color="primary" />
        </div>

        <ProductDetails
          description={data?.description || ''}
          discountPercentage={data?.discountPercentage || 0}
          category={data?.category}
          images={data?.images || ''}
          price={data?.price || 0}
          title={data?.title || ''}
        />
      </React.Fragment>
    </HeadTab>
  )
}

export const getStaticProps = async (context: any) => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${context.params.id}`
    )
    const data = await res.json()

    return {
      props: {
        data,
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/`)
    const data = await res.json()

    const paths = data.products?.map((item: any) => ({
      params: { id: item.id.toString() },
    }))

    return {
      paths,
      fallback: true,
    }
  } catch (err) {
    console.log(err)
  }
}
