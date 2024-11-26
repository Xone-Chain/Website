import { Box, Container, Flex, Icon, Img, Text } from '@chakra-ui/react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import IconButton from '../comm/button/IconButton';
import { FiYoutube } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaGithub } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box as='footer' bgColor='#000000'>
      <Container
        display='flex'
        alignItems='center'
        h={{ base: 'auto', lg: '140px' }}
        py={{ base: '40px', lg: '0' }}
      >
        <Flex gap='8' flexDir={{ base: 'column', lg: 'row' }} w='full' alignItems='center'>
          <Box>
            <Img src='/imgs/logo-text-white.png' w='130px' mx={{ base: 'auto', lg: undefined }} />
          </Box>
          <Box color='white' ml={{ lg: 'auto' }} textAlign='center'>
            <Flex
              justifyContent={{ base: 'center', lg: 'initial' }}
              as='a'
              href='https://docs.xone.plus/study/service'
              target='_blank'
              alignItems='center'
              gap='1'
            >
              <Text>Terms of Service</Text>
              <Icon as={MdOutlineArrowOutward} fontSize='16px' />
            </Flex>
            <Flex
              as='a'
              justifyContent={{ base: 'center', lg: 'initial' }}
              href='https://docs.xone.plus/study/privacy'
              target='_blank'
              alignItems='center'
              mt='2'
              gap='1'
            >
              <Text>Privacy Policy</Text>
              <Icon as={MdOutlineArrowOutward} fontSize='16px' />
            </Flex>
          </Box>

          <Box ml={{ lg: 'auto' }} textAlign={{ base: 'center', lg: 'initial' }}>
            <Text color='#808080'>Follow Us</Text>
            <Flex
              alignItems='center'
              justifyContent={{ base: 'center', lg: 'initial' }}
              mt='3'
              gap='4'
            >
              <IconButton as={FaXTwitter} href='https://x.com/xone_chain' />
              <IconButton as={PiTelegramLogo} href='https://t.me/Xone_Group' />
              <IconButton as={FaGithub} href='https://github.com/huione-labs/docs' />
              <IconButton as={FiYoutube} href='https://www.youtube.com/@HelloXone' />
              <IconButton as={SiMedium} href='https://medium.com/@xone_chain' />
            </Flex>
          </Box>
          <Box ml={{ lg: 'auto' }} textAlign={{ base: 'center', lg: 'right' }}>
            <Text color='whiteAlpha.500'>&copy; 2024 Xone.</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
