import { Grid, Heading, Box } from '@chakra-ui/react'

import Layout from '../components/templates/Layout'
import WorksCard from '../components/molecules/WorksCard'
import PhotoCarousel from '../components/molecules/PhotoCarousel'
import worksData from '../contents/works/worksData'

const WorksPage = () => (
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
          <WorksCard
            title={data.title}
            description={data.description}
            imageSrc={data.imageSrc}
            type={data.type}
            path={data.path}
          />
        ))
      }
    </Grid>
    <Heading as="h2" size="2xl" my={6}>Photo</Heading>
    <Box px={20} pb={10} className="fadein">
      <PhotoCarousel /> 
    </Box>
  </Layout>
)

export default WorksPage;
