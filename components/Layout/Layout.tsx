import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter()
  const isLoginPage = asPath === '/login' || asPath === '/signup'

  return (
    <BaseLayout>
      {!isLoginPage && <Header />}
      <ChildrenWrapper isLoginPage={isLoginPage}>{children}</ChildrenWrapper>
    </BaseLayout>
  )
}

export default Layout

const BaseLayout = styled.div`
  width: 100wh;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

const ChildrenWrapper = styled.div<{ isLoginPage: boolean }>`
  /* padding-top: ${({ isLoginPage }) => (isLoginPage ? '0' : '55px')}; */
  padding: ${({ isLoginPage }) => (isLoginPage ? '0' : '55px 180px 0 180px')};

  width: 100%;
  height: 100%;
`
