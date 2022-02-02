import { Box, VStack, Text, Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import TopCard from './TopCard';

interface HeroProps {
  image: StaticImageData,
  reverse?: boolean,
  title: string,
  description: string,
  link: string,
  button: string,
  buttonColor: string
}

const Hero = (props: HeroProps) => {
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
          {props.reverse? <></>: <Box w={["7vw","15vw"]} />}
          <TopCard title={props.title}>
            <VStack w="100%">
              <Text textAlign="center">
                {props.description}
              </Text>
              <NextLink href={props.link}>
                <Button bgColor={props.buttonColor}>
                  <Text>{props.button}</Text>
                  <ChevronRightIcon />
                </Button>
              </NextLink>
            </VStack>
          </TopCard>
          {!props.reverse? <></>: <Box w={["17vw","15vw"]} />}
        </Flex>
      </Box>
    </>
  )
}

export default Hero;