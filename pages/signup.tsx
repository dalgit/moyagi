import Image from 'next/image'
import styled from 'styled-components'
import bg from '/public/assets/login_page_background.png'
import SignUpForm from '@/components/SignUpForm/SignUpForm'

const SignUpPage = () => {
  return (
    <LoginPageLayout>
      <BackgroundWrapper>
        <Image src={bg} alt="background" fill />
      </BackgroundWrapper>
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

const BackgroundWrapper = styled.div`
  position: relative;
  flex: 1;
`
