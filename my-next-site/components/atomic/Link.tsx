import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const MyLink = ({ children, path }: { children: ReactNode, path: string}) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={path}
    isExternal
  >
    {children}
  </Link>
);

export const MyNextLink = ({ children, path }: { children: ReactNode, path: string}) => (
  <NextLink href={path}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Link>
  </NextLink>
);
