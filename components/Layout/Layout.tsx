import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { IconContext } from 'react-icons'
import styled from 'styled-components'
import { iconStyles } from '@/styles/icons'
import Header from './Header/Header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { asPath } = useRouter()
  const isLoginPage = asPath === '/login' || asPath === '/signup'

  return (
    <BaseLayout>
      <IconContext.Provider value={iconStyles}>
        {!isLoginPage && <Header />}
        <ChildrenWrapper isLoginPage={isLoginPage}>{children}</ChildrenWrapper>
      </IconContext.Provider>
    </BaseLayout>
  )
}

export default Layout

const BaseLayout = styled.div`
  height: 100vh;
`

const ChildrenWrapper = styled.div<{ isLoginPage: boolean }>`
  padding: ${({ isLoginPage }) => (isLoginPage ? '0' : '55px 180px 0 180px')};

  height: 100%;
`
