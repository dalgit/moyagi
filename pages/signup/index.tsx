import { withAuth } from 'components/common'
import { Layout, SignUpTemplate, SimpleHeader } from 'components/Template'

const SignUpPage = () => {
  return (
    <Layout>
      <SimpleHeader />
      <SignUpTemplate />
    </Layout>
  )
}

export default withAuth(SignUpPage, {
  redirectType: 'authenticated',
  path: '/',
})
