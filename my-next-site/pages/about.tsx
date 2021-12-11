import NextLink from 'next/link'
import Layout from '../components/templates/Layout'
import {
  VStack,
  Heading,
  Text,
  HStack,
  StackDivider,
  Image
} from '@chakra-ui/react'
import profileImg from '../public/profile.jpeg';

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
        >
          <Text as="p" fontSize="lg">
            ここに色々コンテンツを入れていくよ
            入れる内容：
            ・名前
            ・SNS系アイコン
            ・趣味
            ・技術情報
            ・資格
            ・業務歴
          </Text>
          
        </VStack>
      </HStack>
  </Layout>
)

export default AboutPage
