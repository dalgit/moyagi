import { AuthTemplate } from 'components/Template'
import { LoginForm } from 'features/Auth'

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  )
}

export default LoginPage
