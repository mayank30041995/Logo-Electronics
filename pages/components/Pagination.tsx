import React, { ReactElement } from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import { CgArrowLeftO, CgArrowRightO } from 'react-icons/cg'
import Router, { withRouter } from 'next/router'

interface checklist {
  page?: number
}

const Pagination = ({ page = 1 }: checklist): JSX.Element => (
  <div className={styles.pageGo}>
    <CgArrowLeftO
      size="35"
      className={styles.pageClk}
      onClick={async () => {
        await Router.push({
          pathname: '/products',
          query: { page: Number(page) !== 1 ? Number(page) - 1 : 1 },
        })
        location.reload()
      }}
    />
    <CgArrowRightO
      size="35"
      className={styles.pageClk}
      onClick={async () => {
        await Router.push({
          pathname: '/products',
          query: { page: page !== 0 ? Number(page) + 1 : 2 },
        })
        location.reload()
      }}
    />
  </div>
)

export default Pagination
