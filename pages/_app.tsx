import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { GlobalStyle } from '@/styles/global-style'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
