import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import Layout from '@/components/Layout/Layout'
import { GlobalStyle } from '@/styles/global-style'
import theme from '@/styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
