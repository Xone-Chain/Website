import { ColorMode, extendTheme, localStorageManager } from '@chakra-ui/react';

export const Theme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        width: '100%',
        mx: 'auto',
        maxW: {
          base: '100%', // 在最小断点下（base）宽度为100%
          sm: '640px', // 在sm断点及以上宽度为640px
          md: '768px', // 在md断点及以上宽度为768px
          lg: '1024px', // 在lg断点及以上宽度为1024px
          xl: '1280px', // 在xl断点及以上宽度为1280px
          '2xl': '1536px' // 在2xl断点及以上宽度为1536px
        }
      }
    }
  }
});

export const customColorModeManager = {
  ...localStorageManager,
  get: (): ColorMode => 'dark'
};
