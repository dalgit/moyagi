import { ReactNode } from 'react'
import Header from '@/components/Layout/Header/Header'
import * as S from './style'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.ChildrenLayout>{children}</S.ChildrenLayout>
    </>
  )
}

export default Layout
