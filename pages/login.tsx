import Image from 'next/image'
import styled from 'styled-components'
import bg from '/public/assets/login_page_background.png'

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <BackgroundWrapper>
        <Image src={bg} alt="background" fill />
      </BackgroundWrapper>
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

const BackgroundWrapper = styled.div`
  position: relative;
  flex: 1;
`
const LoginForm = styled.div`
  width: 450px;
`
