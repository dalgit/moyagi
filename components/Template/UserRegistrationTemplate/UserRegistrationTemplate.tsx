import { useRecoilValue } from 'recoil'
import { Spinner } from 'components/common'
import { RegistrationList } from 'features/Registration'
import { useUserRegsQuery } from 'hooks/registration'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const UserRegistrationTemplate = () => {
  const userId = useRecoilValue(userIdSelector)
  const { data: registrations = [], isLoading } = useUserRegsQuery(userId)

  if (isLoading) {
    return <Spinner />
  }

  if (!registrations.length) {
    return <S.NotificationBox title="요청한 가입이 없습니다." type="empty" />
  }

  return (
    <S.UserRegistrationTemplateLayout>
      <h2>가입 관리</h2>
      <RegistrationList registrations={registrations} />
    </S.UserRegistrationTemplateLayout>
  )
}

export default UserRegistrationTemplate
