import { RegistrationList } from 'features/Registration'
import { IRegistration } from 'types/registration'
import * as S from './style'

interface IProps {
  registrations: IRegistration[]
}

const UserRegistrationTemplate = ({ registrations }: IProps) => {
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
