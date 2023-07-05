import { withAuth } from 'components/common'
import SimpleHeader from 'components/Layout/Header/SimpleHeader'
import { Layout, LoginTemplate } from 'components/Template'

const LoginPage = () => {
  return (
    <Layout>
      <SimpleHeader />
      <LoginTemplate />
    </Layout>
  )
}

export default withAuth(LoginPage, {
  redirectType: 'authenticated',
  path: '/',
})
