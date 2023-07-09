import { Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import CustomQueryProvider from 'components/common/CustomQueryProvider/CustomQueryProvider'
import ModalContainer from 'components/common/ModalContainer/ModalContainer'
import Toast from 'components/common/Toast/ToastList/ToastList'
import { CURRENT_PATH, PREV_PATH } from 'constants/paths'
import SEO from 'seo.config'
import { GlobalStyle } from 'styles/global-style'
import theme from 'styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <CustomQueryProvider>
        <Hydrate state={pageProps.dehydratedProps}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
            <ModalContainer />
            <Toast />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </CustomQueryProvider>
    </RecoilRoot>
  )
}

export default MyApp
