import { ReactNode } from 'react';
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaHome, FaUser, FaFolderOpen } from 'react-icons/fa';

interface LinkProps {
  "name": string,
  "path": string,
  "icon": ReactNode
}

const Links:LinkProps[]  = [
  {"name":'Home', "path": "/", "icon": (<FaHome/>)},
  {"name":'About', "path": "/about", "icon": (<FaUser/>)},
  {"name":'Works', "path": "/works", "icon": (<FaFolderOpen/>)},
];

const NavLink = ({ children, path }: { children: ReactNode, path: string}) => (
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

export default function Simple() {
  return (
    <>
      <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        px={4} 
        width="100%" 
        position="fixed" 
        opacity="0.9"
        boxShadow="xl"
        zIndex={1}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Avatar
                size={'sm'}
                src={
                  'https://avatars.githubusercontent.com/u/37526979?v=4'
                }
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  <HStack>
                    {link.icon}
                    <Box>
                      {link.name}
                    </Box>
                  </HStack>
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Box h="80px"></Box>
    </>
  );
}