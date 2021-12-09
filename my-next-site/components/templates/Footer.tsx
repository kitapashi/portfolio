import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

import SocialButton from '../atomic/SocialButton';

const Footer = () => {
  const date = new Date();

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'8xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text>© {date.getFullYear()} Yuki Kitahashi. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'https://twitter.com/folky_records'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/kitapashi'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/kitapashi'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;