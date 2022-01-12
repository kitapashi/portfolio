import NextLink from 'next/link'
import Layout from '../components/templates/Layout'
import {
  VStack,
  Heading,
  HStack,
  StackDivider,
  Image
} from '@chakra-ui/react'
import profileImg from '../public/profile.jpeg';
import AboutText from '../components/atomic/AboutText';
import Hobby from '../contents/about/Hobby';
import Certification from '../contents/about/Certification';
import Skill from '../contents/about/Skill';
import Career from '../contents/about/Career';
import SocialLink from '../contents/about/SocialLink';

const AboutPage = () => (
  <Layout title="About | Yuki Kitahashi's Portfolio">
    <Heading as="h1" size="3xl" my={6}>About @kitapashi</Heading>
    <HStack spacing={10} px={8} alignItems={'flex-start'}>
      <Image src={profileImg.src}
        fit={'contain'}
        p={10}
        maxH={'800px'}
        className='fadein'
      />
      <VStack
        divider={<StackDivider borderColor='gray.200'/>}
        className='fadein'
        w={"100%"}
        maxH={"1000px"}
        px={5}
        overflow={"scroll"}
        alignItems={"left"}
      >
        <AboutText title='Name'>Yuki Kitahashi (北橋 祐貴)</AboutText>
        <SocialLink />
        <Hobby />
        <Skill />
        <Certification />
        <Career />
      </VStack>
    </HStack>
  </Layout>
)

export default AboutPage
