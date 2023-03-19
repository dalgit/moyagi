import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'
import { GlobalStyle } from '@/styles/global-style'
import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
