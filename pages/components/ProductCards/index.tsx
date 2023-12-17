import React, { ReactElement, useEffect, useState } from 'react'
import Cards from './Cards'
interface checklist {
  loading?: boolean
  data: object
}

const Products = ({ loading, data }: checklist): JSX.Element => {
  return <Cards loading={loading} data={data} />
}

export default Products
