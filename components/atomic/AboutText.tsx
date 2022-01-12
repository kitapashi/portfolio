import {Heading, Box} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export interface AboutTextProps {
  children?: ReactNode;
  title: string;
}


const AboutText: React.FC<AboutTextProps> = ({children, title}: AboutTextProps) => {
  return  (
    <Box 
      w="100%"
      textAlign={"left"} 
      fontSize={"xl"}
    >
      <Heading as="h2" size={"xl"} pt={4}>{title}:</Heading>
      <Box pl={6} py={4}>
        {children}
      </Box>
    </Box>
  )
};

export default AboutText;