'use client'
import BannerHeader from '../../pages/components/BannerHeader'
import Header from '../../pages/components/Header'
import ProductCards from '../../pages/components/ProductCards'
import BannerHeaderImg from '../../pages/components/BannerHeaderImg'
import Banner from '../../pages/components/Banner'
import { useEffect, useState } from 'react'
import Footer from '../../pages/components/Footer'
import Slider from '../../pages/components/Slider'

type DataState = {
  data: object
}
export default function Home(): JSX.Element {
  const [products, setProducts] = useState<DataState[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/products?skip=0&limit=15')
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
    fetchProducts()
  }, [])

  return (
    <>
      <Banner>
        <div>
          <BannerHeader text="Logo Electronics" />
          <BannerHeaderImg
            src="/headArrow.png"
            width={550}
            height={15}
            sizes="100vw"
            style={{ top: '48%', objectFit: 'cover' }}
          />
        </div>
      </Banner>
      <Slider data={products} />
      <div style={{ marginTop: '10em' }}>
        <Header text="Products" color="secondary" />
      </div>
      <ProductCards data={products} loading={loading} />
      <Footer />
    </>
  )
}
