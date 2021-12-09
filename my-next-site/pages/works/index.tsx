import { GetStaticProps } from 'next'
import { Grid, Heading, Box } from '@chakra-ui/react'

import { User } from '../../interfaces'
import Layout from '../../components/templates/Layout'
import WorksCard from '../../components/molecules/WorksCard'
import PhotoCarousel from '../../components/molecules/PhotoCarousel'
import worksData from '../../contents/works/worksData'
import {MyLink} from  '../../components/atomic/Link';

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Works | Yuki Kitahashi's Portfolio">
    <Heading as="h1" size="3xl" my={6}>Works</Heading>
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)", 
        md: "repeat(2, 1fr)", 
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)"
      }}
      gap={10}
      px={20}
      pb={10}
      className="fadein"
    >
      {
        worksData.map((data, i) => (
          <MyLink path={data.link} key={i}>
            <WorksCard
              title={data.title}
              description={data.description}
              imageSrc={data.imageSrc}
              type={data.type}
            />
          </MyLink>
        ))
      }
    </Grid>
    <Heading as="h2" my={6}>Photo</Heading>
    <Box px={20} pb={10} className="fadein">
      <PhotoCarousel /> 
    </Box>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = []
  return { props: { items } }
}

export default WithStaticProps
