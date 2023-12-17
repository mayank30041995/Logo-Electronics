import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'
import Image from 'next/image'
import { CardText } from 'reactstrap'
import { Row, Col } from 'antd'
import Header from './Header'

const Footer = (): JSX.Element => (
  <div className={styles.footer}>
    <Image
      src="/footer.png"
      alt="/footer.png"
      className={styles.footerImg}
      width={550}
      height={15}
      sizes="100vw"
      style={{ width: '100%', height: '30em', objectFit: 'cover' }}
    />
    <Row className={styles.footerContent} justify="space-around">
      <Col className={styles.footerColA}>
        <Image
          src="/LOGO.png"
          alt="LOGO"
          className={styles.vercelLogo}
          width={100}
          height={34}
          priority
        />
        <CardText className={styles.footerColText}>
          lOGO is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when
        </CardText>
      </Col>
      <Col className={styles.footerColB}>
        <Header
          text="Useful Links"
          color="secondary"
          style={{
            fontSize: '18px',
            letterSpacing: '4px',
            marginBottom: '2em',
          }}
        />
        <CardText className={styles.footerColBText}>HOME</CardText>
        <CardText className={styles.footerColBText}>PRODUCT</CardText>
        <CardText className={styles.footerColBText}>ABOUT US</CardText>
        <CardText className={styles.footerColBText}>CONTACT US</CardText>
      </Col>
      <Col>
        <Header
          text=""
          color="secondary"
          style={{
            fontSize: '18px',
            letterSpacing: '4px',
            marginBottom: '2em',
          }}
        />
        <Image
          src="/follow.png"
          alt="follow"
          className={styles.vercelLogo}
          width={200}
          height={120}
          priority
        />
      </Col>
    </Row>
  </div>
)

export default Footer
