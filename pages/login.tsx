import styled from 'styled-components'
import bg from '/public/assets/login_page_background.png'
import LoginForm from '@/components/Auth/LoginForm/LoginForm'
import FImage from '@/components/common/FImage'

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <BackgroundImage src={bg} alt="background" />
      <LoginForm />
    </LoginPageLayout>
  )
}

export default LoginPage

const LoginPageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const BackgroundImage = styled(FImage)`
  position: relative;
  flex: 1;
`
