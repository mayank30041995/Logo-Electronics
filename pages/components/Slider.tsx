import React, { ReactElement } from 'react'
import Carousel from 'react-grid-carousel'

const Slider = ({ data }): JSX.Element => {
  return (
    <div style={{ marginTop: '-6em', marginLeft: '26%' }}>
      <Carousel cols={4} rows={1} gap={10} loop style={{ height: '12em' }}>
        {data?.products &&
          data?.products.length > 0 &&
          data?.products.map((product, i) => (
            <Carousel.Item key={i}>
              <img
                width="70%"
                height="90%"
                src={
                  product.images.length > 0 ? product.images[0] : product.images
                }
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}

export default Slider
