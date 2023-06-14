import { ReactNode } from 'react'
import * as S from './style'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <S.ChildrenLayout>{children}</S.ChildrenLayout>
}

export default Layout
