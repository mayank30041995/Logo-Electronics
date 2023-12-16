import React, { ReactElement, useEffect, useState } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import Cards from './Cards'
import { Row } from 'reactstrap'

interface checklist {
  text?: string
}

const Index = ({ text }: checklist): JSX.Element => {
  return <Cards />
}

export default Index
