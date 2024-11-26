import { Box } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { RenderRoutes } from './routes/router';
import { Suspense } from 'react';
import { wagmiConfig } from './config/wallet/wagmiClient';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Box>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense>
              <RenderRoutes />
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </Box>
  );
}

export default App;