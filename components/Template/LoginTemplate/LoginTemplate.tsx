import { LoginForm } from 'features/Auth'
import * as S from './style'

const LoginTemplate = () => {
  return (
    <S.LoginTemplateLayout>
      <LoginForm />
    </S.LoginTemplateLayout>
  )
}

export default LoginTemplate
