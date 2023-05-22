import { useRecoilValue } from 'recoil'
import { useUserRegistrations } from '@/components/Registration/hooks/useUserRegistratnions'
import RegistrationList from '@/components/Registration/RegistrationList/RegistrationList'
import { userIdSelector } from '@/recoil/user'

const UserRegistrationsPage = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: registrations = [] } = useUserRegistrations(userId || '')

  if (!registrations.length) return null

  return (
    <div>
      <h2>가입 관리</h2>
      <RegistrationList registrations={registrations} />
    </div>
  )
}

export default UserRegistrationsPage
