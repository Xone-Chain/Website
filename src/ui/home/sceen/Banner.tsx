import React from 'react';
import IMG_bg from '@/assets/imgs/home/bg-pc.png';
import { Box, Button, Container, Flex, Heading, Text } from '@chakra-ui/react';
import ExternalLink from '@/components/comm/ExternalLink';

type Props = {};

const Banner = (props: Props) => {
  return (
    <Box
      aspectRatio={{ base: '374 / 557', md: '1440 / 800' }}
      bg={{
        base: `url(${IMG_bg}) center bottom / 100% auto no-repeat #ECEFFF`,
        md: `url(${IMG_bg}) 0 0 / 100% 100%`
      }}
    >
      <Container pt='80px' textAlign={{ base: 'center', md: 'left' }}>
        <Heading fontSize='48px'>
          Uniting Global
          <Box as='br' /> Innovation and Opportunity
        </Heading>
        <Text mt='20px'>Empowering Connections, Building Together, Winning as One</Text>
        <Flex alignItems='center' mt='30px' justifyContent={{ base: 'center', md: 'initial' }}>
          <Button colorScheme='priBlack' rounded='full' h='64px' px='24px'>
            Start Building
          </Button>

          <Button ml='20px' colorScheme='priBlack' rounded='full' h='64px' px='24px'>
            <ExternalLink>Bridge</ExternalLink>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;
