import '@/app/globals.css'
import HeadTab from './components/HeadTab'
import BannerHeader from './components/BannerHeader'
import Header from './components/Header'
import { Row } from 'antd'
import SelectOption from './components/Select'
import Banner from './components/Banner'
import React, { useEffect, useState } from 'react'
import ProductCards from './components/ProductCards'
import styles from '../src/app/page.module.css'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

let { API_URL } = process.env

type DataState = {
  data: object[]
}

export default function Products({
  page,
  categories,
}: {
  page: number
  categories: string[]
}): JSX.Element {
  const [products, setProducts] = useState<DataState[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  let skip = Number(page) !== 1 ? Number(page - 1) * 10 : 0

  const fetchProducts = async (search: string) => {
    setLoading(true)
    try {
      let url = 'https://dummyjson.com/products'

      if (search !== '') {
        url = url.concat(`/category/${search}`)
      } else {
        url = url.concat(`?skip=${skip}&limit=10`)
      }

      const res = await fetch(`${url}`)
      const data = await res.json()
      setLoading(false)
      setProducts(data)
    } catch (err: any) {
      setLoading(false)
      setProducts([])
      setError(err.message)
    }
  }

  useEffect(() => {
    fetchProducts('')
  }, [])

  return (
    <HeadTab>
      <React.Fragment>
        <Banner>
          <BannerHeader text="Products" />
        </Banner>

        {/* All Products */}
        <Row className={styles.midRow}>
          <Header text=">> ALL PRODUCTS" color="primary" />
          <SelectOption options={categories} filterBy={fetchProducts} />
        </Row>
        <ProductCards data={products} loading={loading} />
        <Pagination page={page} />
        <Footer />
      </React.Fragment>
    </HeadTab>
  )
}

export async function getServerSideProps({ query }: { query: any }) {
  let { page } = query
  page = page || 0
  try {
    const res = await fetch(`https://dummyjson.com/products/categories`)
    const categories = await res.json()
    return {
      props: { page, categories } as { page: any; categories: string[] },
    }
  } catch (err) {
    console.log(err)
  }
}
