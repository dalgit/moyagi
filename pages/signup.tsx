import styled from 'styled-components'
import bg from '/public/assets/login_page_background.png'
import SignUpForm from '@/components/Auth/SignUpForm/SignUpForm'
import FImage from '@/components/common/FImage'

const SignUpPage = () => {
  return (
    <LoginPageLayout>
      <BackgroundImage src={bg} alt="background" />
      <SignUpForm />
    </LoginPageLayout>
  )
}

export default SignUpPage

const LoginPageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const BackgroundImage = styled(FImage)`
  position: relative;
  flex: 1;
`
