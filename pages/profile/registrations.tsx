import { useRecoilValue } from 'recoil'
import { Spinner } from 'components/common'
import { Layout, UserRegistrationTemplate } from 'components/Template'
import { useUserRegistrations } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'

const UserRegistrationsPage = () => {
  const userId = useRecoilValue(userIdSelector)
  const {
    data: registrations = [],
    isLoading,
    isSuccess,
  } = useUserRegistrations(userId)

  return (
    <Layout>
      {isLoading && <Spinner />}
      {isSuccess && <UserRegistrationTemplate registrations={registrations} />}
    </Layout>
  )
}

export default UserRegistrationsPage
