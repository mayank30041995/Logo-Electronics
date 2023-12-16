import BannerHeader from '../../pages/components/BannerHeader'
import Header from '../../pages/components/Header'
import Products from '../../pages/components/Products'
import BannerHeaderImg from '../../pages/components/BannerHeaderImg'
import Banner from '../../pages/components/Banner'

export default function Home() {
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
      <div style={{ marginTop: '20em' }}>
        <Header text="Products" color="secondary" />
      </div>
      <Products />
    </>
  )
}
