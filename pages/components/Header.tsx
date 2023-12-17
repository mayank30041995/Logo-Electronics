import React, { ReactElement } from 'react'
import styles from '../../src/app/page.module.css'

interface checklist {
  text: string
  color: string
}

const Header = ({ text, color }: checklist): JSX.Element => {
  const colorStl = color === 'primary' ? '#FFFFFF' : '#F903AA'
  const fntSize = color === 'primary' ? '24px' : '38px'
  const fntWt = color === 'primary' ? 200 : 500
  return (
    <div className={styles.header}>
      <h1
        style={{
          fontFamily: 'Routhem',
          color: colorStl,
          fontSize: fntSize,
          width: 'max-content',
          fontWeight: fntWt,
        }}
      >
        {text}
      </h1>
    </div>
  )
}

export default Header
