import { Box, BoxProps, Center, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';

type Props = {} & BoxProps;

const MobilerMenuButton = (props: Props) => {
  return (
    <Box display={{ base: 'block', lg: 'none' }} {...props}>
      <Center as='button' rounded='full' boxSize='44px' bgColor='black'>
        <Icon as={IoMenuSharp} color='white' fontSize='30px' />
      </Center>
    </Box>
  );
};

export default MobilerMenuButton;
