'use client'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Spinner,
} from 'reactstrap'
import { CiHeart } from 'react-icons/ci'
import { CgArrowRightO } from 'react-icons/cg'
import styles from '@/app/page.module.css'
import { Col, Row } from 'antd'
import Link from 'next/link'

interface datalist {
  loading?: boolean
  data?: any
}
const Cards = ({ loading, data }: datalist) => {
  return (
    <Row justify="center" style={{ padding: '4%' }}>
      {loading && (
        <Spinner
          className="m-5"
          color="light"
          style={{ color: '#fff', padding: '4%' }}
        >
          Loading...
        </Spinner>
      )}
      {!loading &&
        data &&
        data.products &&
        data.products.length > 0 &&
        data.products.map((e: any, i: number) => (
          <Col key={i} className="bg-light border">
            <Card color="light" className={styles.cardWrapper}>
              <CardBody>
                <div
                  className={styles.header}
                  style={{ justifyContent: 'space-between' }}
                >
                  <CardTitle
                    color="danger"
                    tag="h5"
                    className={styles.cardWrapperTextTop}
                  >
                    {e.category}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    <CiHeart size="18" />
                  </CardSubtitle>
                </div>
              </CardBody>
              <img
                alt="/headphone.png"
                src={e.images.length > 0 ? e.images[0] : e.images}
                width="100%"
                className={styles.cardWrapperImg}
              />
              <CardBody>
                <CardText className={styles.cardWrapperText}>
                  {e.title.length > 12 ? `${e.title.slice(0, 12)}...` : e.title}
                </CardText>
                <Button color="primary" className={styles.pinkBtn}>
                  <Link href={`product/${e.id}`}>
                    <div className={styles.linkArea}>
                      VIEW <CgArrowRightO size="28" />
                    </div>
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default Cards
