import SocialLoginButtons from 'components/common/SocialLogins/SocialLogins'
import { LoginForm } from 'features/Auth'
import { StyledLine } from 'styles/tags'
import * as S from './style'

const LoginTemplate = () => {
  return (
    <S.LoginTemplateLayout>
      <LoginForm />
      <StyledLine>OR</StyledLine>
      <SocialLoginButtons />
    </S.LoginTemplateLayout>
  )
}

export default LoginTemplate
