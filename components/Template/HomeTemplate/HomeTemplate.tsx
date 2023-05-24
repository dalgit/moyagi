import { ReactNode } from 'react'
import SearchBar from '@/components/Channel/SearchBar/SearchBar'
import * as S from './style'

interface HomeTemplateProps {
  children: ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <S.HomeTemplateLayout>
      <SearchBar />
      {children}
    </S.HomeTemplateLayout>
  )
}

export default HomeTemplate
