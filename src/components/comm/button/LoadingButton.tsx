import { Button, ButtonProps } from '@chakra-ui/react';
import { useState } from 'react';

function LoadingButton(props: ButtonProps) {
  const [loading, setLoading] = useState(false);

  const _onClick = async (event: any) => {
    try {
      setLoading(true);
      await props.onClick?.(event);
    } finally {
      setLoading(false);
    }
  };
  return <Button {...props} isLoading={loading || props.isLoading} onClick={_onClick} />;
}

export default LoadingButton;
