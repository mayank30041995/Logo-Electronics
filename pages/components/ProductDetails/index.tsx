import React, { ReactElement } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import { Col, Row } from 'antd'
import { CardHeader, CardText } from 'reactstrap'

interface checklist {
  description: string
  discountPercentage: number
  category: string
  images: string[]
  price: number
  title: string
}

const Index = ({
  description,
  discountPercentage,
  category,
  images,
  price,
  title,
}: checklist): JSX.Element => {
  return (
    <>
      <Row justify="center">
        <Row className={styles.cardSection}>
          <Col>
            {images && (
              <Image
                loader={() => images[0]}
                unoptimized={true}
                src={`${images[0]}`}
                alt="/headphone.png"
                className={styles.cardImage}
                width={50}
                height={200}
                sizes="100vw"
                priority
              />
            )}
          </Col>
          <Col className={styles.cardCnt}>
            <CardHeader className={styles.cardHeading}>{title}</CardHeader>
            <CardText>{description}</CardText>
            <CardHeader className={styles.cardTextDesc}>
              Price: Rs {price}
            </CardHeader>
            <CardHeader className={styles.cardTextDesc}>
              Discount: {discountPercentage}%
            </CardHeader>
          </Col>
        </Row>
      </Row>{' '}
      <Row justify="center">
        {images &&
          images.length > 0 &&
          images.map((image: string, key: number) => (
            <Col key={key}>
              <Image
                loader={() => image}
                unoptimized={true}
                src={image}
                alt="/headphone.png"
                className={styles.cardImage}
                width={50}
                height={220}
                sizes="100vw"
                priority
              />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Index
