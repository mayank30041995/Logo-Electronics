import React, { ReactElement } from 'react'
import Carousel from 'react-grid-carousel'
import { CardHeader, CardText } from 'reactstrap'
import styles from '@/app/page.module.css'

const Slider = ({ data }): JSX.Element => {
  return (
    <div style={{ marginTop: '-6em', marginLeft: '26%' }}>
      <Carousel cols={4} rows={1} gap={10} loop style={{ height: '12em' }}>
        {data?.products &&
          data?.products.length > 0 &&
          data?.products.map((product, i) => (
            <Carousel.Item key={i}>
              <div className={styles.slideCard}>
                <img
                  width="160rem"
                  height="100rem"
                  src={
                    product.images.length > 0
                      ? product.images[0]
                      : product.images
                  }
                />
                <CardHeader className={styles.cardHeading}>
                  {product.title}
                </CardHeader>
                <CardText>{product?.description?.slice(0, 15)}</CardText>
                <CardHeader className={styles.cardHeading}>
                  Price: {product.price}
                </CardHeader>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}

export default Slider
