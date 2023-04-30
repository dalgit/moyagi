import styled from 'styled-components'
import bg from '/public/assets/login_page_background.png'
import FImage from '@/components/common/Ui/FImage'
import LoginForm from '@/components/LoginForm/LoginForm'

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
