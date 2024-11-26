import { BoxProps, Flex, Icon } from '@chakra-ui/react';
import React, { memo, ReactNode } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

type Props = {
  children: ReactNode;
  href?: string;
} & BoxProps;

const ExternalLink = (props: Props) => {
  const { href, ...rest } = props;
  return (
    <Flex
      display='inline-flex'
      alignItems='center'
      {...rest}
      {...(href
        ? {
            as: 'a',
            href,
            target: '_blank'
          }
        : {
            as: 'span'
          })}
    >
      {props.children}
      <Icon as={MdOutlineArrowOutward} ml='6px' />
    </Flex>
  );
};

export default memo(ExternalLink);
