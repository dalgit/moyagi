import { useUserRegistrations } from 'components/Features/Registration/hooks/useUserRegistratnions'
import { useRecoilValue } from 'recoil'
import Layout from 'components/Layout/Layout'
import UserRegistrationTemplate from 'components/Template/UserRegistrationTemplate/UserRegistrationTemplate'
import { userIdSelector } from 'recoil/user'

const UserRegistrationsPage = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: registrations = [] } = useUserRegistrations(userId || '')

  if (!registrations.length) return null

  return (
    <Layout>
      <UserRegistrationTemplate registrations={registrations} />
    </Layout>
  )
}

export default UserRegistrationsPage
