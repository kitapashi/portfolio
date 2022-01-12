import React from "react";
import {
  VStack,
  Text,
  HStack
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

import SocialButton from '../../components/atomic/SocialButton';


const SocialLink: React.FC = () => {
  return (
    <HStack spacing={6}>
      <VStack>
        <SocialButton label={'Twitter'} href={'https://twitter.com/kitapashi'}>
          <FaTwitter />
        </SocialButton>
        <Text>Twitter(Main)</Text>
      </VStack>
      <VStack>
        <SocialButton label={'Twitter'} href={'https://twitter.com/folky_records'}>
          <FaTwitter />
        </SocialButton>
        <Text>Twitter(Engineering)</Text>
      </VStack>
      <VStack>
        <SocialButton label={'GitHub'} href={'https://github.com/kitapashi'}>
          <FaGithub />
        </SocialButton>
        <Text>GitHub</Text>
      </VStack>
      <VStack>
        <SocialButton label={'Instagram'} href={'https://www.instagram.com/kitapashi'}>
          <FaInstagram />
        </SocialButton>
        <Text>Instagram</Text>
      </VStack>
    </HStack>
  );
};

export default SocialLink; 