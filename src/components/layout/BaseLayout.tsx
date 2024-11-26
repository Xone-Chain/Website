import { Box, Center, Spinner } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router';

type Props = {};

const BaseLayout = (props: Props) => {
  return (
    <Box>
      <Header />
      <Box as='main'>
        <Suspense
          fallback={
            <Center h='400px'>
              <Spinner boxSize='32px' />
            </Center>
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default BaseLayout;
