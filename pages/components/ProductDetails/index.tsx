import React, { ReactElement } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import { Col, Row } from 'antd'
import { CardHeader, CardText } from 'reactstrap'

interface checklist {
  text?: string
}

const Index = ({ text }: checklist): JSX.Element => (
  <>
    <Row justify="center">
      <Row
        style={{
          padding: '1.5%',
          justifyContent: 'space-around',
          background: 'lavender',
          margin: '65px 12px',
          borderRadius: '16px',
          border: '2px solid coral',
        }}
      >
        <Col>
          {' '}
          <Image
            src="/headphone.png"
            alt="LOGO"
            className={styles.vercelLogo}
            width={50}
            height={200}
            sizes="100vw"
            style={{
              border: '2px solid coral',
              width: '85%',
              objectFit: 'cover',
            }}
            priority
          />
        </Col>
        <Col style={{ width: '35em' }}>
          <CardHeader
            style={{
              marginTop: '12px',
              fontSize: '18px',
              textAlign: 'start',

              fontFamily: 'Poppins-R',
            }}
          >
            Headphone-128K
          </CardHeader>
          <CardText
            style={{
              marginTop: '12px',
              fontSize: '12px',
              textAlign: 'start',

              fontFamily: 'Poppins-R',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </CardText>
          <CardHeader
            style={{
              marginTop: '12px',
              fontSize: '18px',
              textAlign: 'start',

              fontFamily: 'Poppins-R',
            }}
          >
            {text}
          </CardHeader>
          <CardHeader
            style={{
              marginTop: '12px',
              fontSize: '18px',
              textAlign: 'start',
              fontWeight: 500,
              fontFamily: 'Poppins-R',
            }}
          >
            Headphone-128K
          </CardHeader>
        </Col>
      </Row>
    </Row>{' '}
    <Row justify="center">
      <Col>
        {' '}
        <Image
          src="/headphone.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={50}
          height={200}
          sizes="100vw"
          style={{
            border: '2px solid coral',
            width: '85%',
            objectFit: 'cover',
            background: 'lavender',
          }}
          priority
        />
      </Col>{' '}
      <Col>
        {' '}
        <Image
          src="/headphone.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={50}
          height={200}
          sizes="100vw"
          style={{
            border: '2px solid coral',
            width: '85%',
            objectFit: 'cover',
            background: 'lavender',
          }}
          priority
        />
      </Col>{' '}
      <Col>
        {' '}
        <Image
          src="/headphone.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={50}
          height={200}
          sizes="100vw"
          style={{
            border: '2px solid coral',
            width: '85%',
            objectFit: 'cover',
            background: 'lavender',
          }}
          priority
        />
      </Col>{' '}
      <Col>
        {' '}
        <Image
          src="/headphone.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={50}
          height={200}
          sizes="100vw"
          style={{
            border: '2px solid coral',
            width: '85%',
            objectFit: 'cover',
            background: 'lavender',
          }}
          priority
        />
      </Col>{' '}
    </Row>
  
  </>
)

export default Index
