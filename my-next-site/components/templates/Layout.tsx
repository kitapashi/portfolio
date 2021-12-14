import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar';
import Footer from './Footer';
import {Box} from '@chakra-ui/react';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <Box px={5}>
        {children}
      </Box>
        <Footer />
    </div>
  </>
)

export default Layout
