import { ReactNode } from 'react'
import * as S from './style'
import bg from '/public/assets/login_page_background.png'

interface AuthTemplateProps {
  children: ReactNode
}

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <S.AuthTemplateLayout>
      <S.Background src={bg} alt="background" />
      {children}
    </S.AuthTemplateLayout>
  )
}

export default AuthTemplate
