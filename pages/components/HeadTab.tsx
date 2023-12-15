import React, { ReactElement } from 'react'
import Head from 'next/head'

function HeadTab({ children }: { children: ReactElement }) {
  return (
    <>
      <Head>
        <title>LOGO-ELECTRONICS</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      {children}
    </>
  )
}

export default HeadTab