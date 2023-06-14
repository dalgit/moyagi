import { useRecoilValue } from 'recoil'
import { Spinner } from 'components/common'
import { RegistrationList } from 'features/Registration'
import { useUserRegistrations } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const UserRegistrationTemplate = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: registrations = [], isLoading } = useUserRegistrations(userId)

  if (isLoading) {
    return <Spinner />
  }

  if (!registrations.length) {
    return (
      <S.NotificationBox title="가입신청서가 존재하지 않습니다." type="empty" />
    )
  }

  return (
    <S.UserRegistrationTemplateLayout>
      <h2>가입 관리</h2>
      <RegistrationList registrations={registrations} />
    </S.UserRegistrationTemplateLayout>
  )
}

export default UserRegistrationTemplate
