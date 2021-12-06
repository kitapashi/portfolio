import { Box, VStack, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface TopCardProps {
  children?: ReactNode
  title: string
}

const TopCard: React.FC<TopCardProps> = ({children, title}: TopCardProps) => {
  return (
    <Box
      position="relative"
      bg="gray.50"
      px={12}
      py={9}
      maxW="400px"
      boxShadow="xl"
      rounded="2xl"
      opacity="0.8"
    >
      <VStack spacing="2" w="100%">
        <Heading as="h2">{title}</Heading>
        <>
          {children}
        </>
      </VStack>
    </Box>
  )
};

export default TopCard;