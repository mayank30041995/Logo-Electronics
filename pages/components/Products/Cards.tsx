'use client'
import { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  CardSubtitle,
  Button,
} from 'reactstrap'
import { CiHeart } from 'react-icons/ci'
import { CgArrowRightO } from 'react-icons/cg'

import styles from '@/app/page.module.css'
import { Col, Row } from 'antd'

// const { Meta } = Card

const Cards = () => {
  return (
    <Row justify="center" style={{ padding: '4%' }}>
      {[...Array(20)].map((e, i) => (
        <Col key={i} className="bg-light border">
          <Card
            color="light"
            style={{
              width: 'max-content',
              background: '#FFF',
              borderRadius: '18px',
              fontFamily: 'monospace',
              padding: '16px',
              margin: '32px',
            }}
          >
            <CardBody>
              <div
                className={styles.header}
                style={{ justifyContent: 'space-between' }}
              >
                <CardTitle color="danger" tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  <CiHeart />
                </CardSubtitle>
              </div>
            </CardBody>
            <img
              alt="Card cap"
              src="/headphone.png"
              width="100%"
              style={{
                width: '16em',
                padding: '33px',
                height: '13em',
              }}
            />
            <CardBody>
              <CardText
                style={{
                  fontSize: '24px',
                  textAlign: 'center',
                  fontWeight: 500,
                  fontFamily: 'Poppins-R',
                }}
              >
                Headphone-128K
              </CardText>
              <Button color="primary" className={styles.pinkBtn}>
                <a href="/productdetails">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '24px',
                    }}
                  >
                    VIEW <CgArrowRightO size="28" />
                  </div>{' '}
                </a>
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Cards
