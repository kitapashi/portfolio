import { Heading } from '@chakra-ui/react'
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Yuki Kitahashi's Portfolio">
    <Heading as="h1">Hello Next.js 👋</Heading>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
