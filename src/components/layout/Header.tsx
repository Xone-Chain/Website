import { Box, Button, Center, Container, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import NavMenuButton from './components/NavMenuButton';
import MobilerMenuButton from './components/MobilerMenuButton';

type Props = {};

const Header = (props: Props) => {
  return (
    <Flex h={{ base: '66px', lg: '88px' }} alignItems='center'>
      <Container>
        <Flex alignItems='center'>
          <Center>
            <Img src='/imgs/logo-text.png' h='40px' />
          </Center>

          <Box
            display={{ base: 'none', lg: 'flex' }}
            alignItems='center'
            flex='1'
            maxW='640px'
            px='20px'
            mx='auto'
          >
            <NavMenuButton text='Build' />
          </Box>

          <Button ml='auto' colorScheme='priRed' rounded='full' size='lg'>
            Get Rearded
          </Button>
          <MobilerMenuButton ml='5' />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;

const NavItem = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      as={Link}
      to=''
      cursor='pointer'
      color='whiteAlpha.600'
      transition='color .3s ease-in-out'
      _hover={{
        color: 'white'
      }}
    >
      {children}
    </Text>
  );
};
