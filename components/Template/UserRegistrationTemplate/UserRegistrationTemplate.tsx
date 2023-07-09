import { useRecoilValue } from 'recoil'
import { ViewBoundary } from 'components/common/Boundary/ViewBoundary'
import { RegistrationList } from 'features/Registration'
import { useUserRegsQuery } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const UserRegistrationTemplate = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: registrations = [] } = useUserRegsQuery(userId, {
    suspense: true,
  })

  return (
    <ViewBoundary view="userRegistrations" data={registrations}>
      <S.UserRegistrationTemplateLayout>
        <h2>가입 관리</h2>
        <RegistrationList registrations={registrations} />
      </S.UserRegistrationTemplateLayout>
    </ViewBoundary>
  )
}

export default UserRegistrationTemplate
