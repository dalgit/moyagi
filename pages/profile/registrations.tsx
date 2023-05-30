import { useRecoilValue } from 'recoil'
import { Layout, UserRegistrationTemplate } from 'components/Template'
import { useUserRegistrations } from 'hooks/registration'
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
