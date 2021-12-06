import { Heading, Box, Stack, VStack, Text, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/Layout';
import TopCard from '../components/TopCard';
import topPic from '../public/top.png';
import top2Pic from '../public/top2.png';
import top3Pic from '../public/top3.png';

interface IndexPicPageProps {
  image: StaticImageData,
  reverse?: boolean,
  title: string,
  description: string,
  link: string,
  button: string,
  buttonColor: string
}

const IndexPicPage = (props: IndexPicPageProps) => {
  return (
    <>
      <Box 
        bgImage={props.image.src}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        mx={2}
        mb={1}
        h="700px"
        className="fadein"
        textAlign="center"
        opacity="0.9"
      >
        <Flex
          flex={1}
          align={'center'}
          justifyContent={props.reverse? "flex-end": "flex-start"}
          // flexDirection={reverse? "row-reverse": "row"}
          position={'relative'}
          w="100vw"
          minH="700px"
        >
          {props.reverse? <></>: <Box w="15vw" />}
          <TopCard title={props.title}>
            <VStack w="100%">
              <Text textAlign="center">
                {props.description}
              </Text>
              <NextLink href={props.link}>
                <Button bgColor={props.buttonColor}>
                  <Text>About</Text>
                  <ChevronRightIcon />
                </Button>
              </NextLink>
            </VStack>
          </TopCard>
          {!props.reverse? <></>: <Box w="15vw" />}
        </Flex>
      </Box>
      <style>
      {`
        .fadein {
          animation: fadeIn 1.5s ease 0s 1 normal;
          -webkit-animation: fadeIn 1.5s ease 0s 1 normal;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}
      </style>
    </>
  )
}

const IndexPage = () => {
  return (
    <Layout title="Home | Yuki Kitahashi's Portfolio">
      <IndexPicPage image={topPic} 
        title="Yuki Kitahashi" 
        description="
        Brother Industries, Ltd.
        Software Engineer
        "
        link="/about"
        button="About"
        buttonColor="aqua"
        />
      <IndexPicPage image={top2Pic} reverse={true}
        title="Works" 
        description="エンジニアリング、写真、記事執筆等"
        link="/works"
        button="Works"
        buttonColor="khaki"
        />
      <IndexPicPage image={top3Pic}
        title="(仮)音楽レビューサイト" 
        description="製作中"
        link="https://google.com"
        button="Site"
        buttonColor="palegreen"
      />
    </Layout>
  )
}

export default IndexPage
