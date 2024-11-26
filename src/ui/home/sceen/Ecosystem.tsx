import RedButton from '@/components/comm/button/RedButton';
import { Box, Container, Flex, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react';

type Props = {};

const Ecosystem = (props: Props) => {
  const images = useMemo(() => {
    return import.meta.glob('@/assets/imgs/partners/*', { eager: true }) as Record<
      string,
      { default: string }
    >;
  }, []);
  console.log(images);

  return (
    <Box py='60px'>
      <Container>
        <Box display={{ md: 'flex' }} alignItems='center'>
          <Box flex='1'>
            <Heading fontSize='32px'>Explore the ecosystem</Heading>
            <Text color='gray.500' mt='1'>
              Discover an ecosystem with a mission — open, adaptable, and committed to advancing the
              future of blockchain.
            </Text>
          </Box>
          <RedButton ml={{ md: '5' }} mt={{ base: '10', md: '0' }}>
            Get started
          </RedButton>
        </Box>
        <Box mt='40px'>
          <SimpleGrid
            columns={{ base: 2, md: 3, lg: 5, xl: 7 }}
            gap='30px 12px'
            justifyItems={{ md: 'center' }}
            alignItems='center'
          >
            {Object.keys(images).map((key) => {
              return <Img key={key} src={images[key].default} />;
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Ecosystem;
