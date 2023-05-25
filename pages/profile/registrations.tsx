import { useRecoilValue } from 'recoil'
import Layout from '@/components/Layout/Layout'
import { useUserRegistrations } from '@/components/Registration/hooks/useUserRegistratnions'
import UserRegistrationTemplate from '@/components/Template/UserRegistrationTemplate/UserRegistrationTemplate'
import { userIdSelector } from '@/recoil/user'

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
