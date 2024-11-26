import { Box, Center, Flex, Heading, Img, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  return (
    <Box>
      <Flex alignItems='center'>
        <Flex alignItems='center'>
          <Center>
            <Img src='' />
          </Center>
          <Heading fontSize='xl'>MANGO</Heading>
        </Flex>
      </Flex>
    </Box>
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
