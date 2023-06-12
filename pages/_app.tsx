import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import ModalContainer from 'components/common/ModalContainer/ModalContainer'
import Toast from 'components/common/Toast/ToastList/ToastList'
import { CURRENT_PATH, PREV_PATH } from 'constants/paths'
import { GlobalStyle } from 'styles/global-style'
import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  )

  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prevPath = sessionStorage.getItem(CURRENT_PATH)
      sessionStorage.setItem(PREV_PATH, prevPath ?? '')
      sessionStorage.setItem(CURRENT_PATH, router.asPath)
    }
  }, [router.asPath])

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedProps}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
            <ModalContainer />
            <Toast />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default MyApp
