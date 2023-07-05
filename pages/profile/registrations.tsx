import { withAuth } from 'components/common'
import {
  Layout,
  MainHeader,
  UserRegistrationTemplate,
} from 'components/Template'

const UserRegistrationsPage = () => {
  return (
    <Layout>
      <MainHeader />
      <UserRegistrationTemplate />
    </Layout>
  )
}

export default withAuth(UserRegistrationsPage, {
  redirectType: 'unAuthenticated',
  path: '/login',
})
