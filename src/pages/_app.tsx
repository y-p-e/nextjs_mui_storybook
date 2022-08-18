import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SWRConfig } from 'swr'
import { fetcher } from '../utils';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      background: {
        default: '#e2e2e2',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SWRConfig
          value={{
            shouldRetryOnError: false,
            fetcher,
          }}
        >
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
