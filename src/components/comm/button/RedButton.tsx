import React from 'react';
import LoadingButton from './LoadingButton';

type Props = React.ComponentProps<typeof LoadingButton>;

const RedButton = (props: Props) => {
  return (
    <LoadingButton
      rounded='full'
      borderWidth='2px'
      borderColor='priRed.500'
      color='priRed.500'
      _hover={{
        bgColor: 'priRed.500',
        color: 'white'
      }}
      {...props}
      colorScheme='priRed'
      variant='outline'
    />
  );
};

export default RedButton;
