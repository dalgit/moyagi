import RegistrationList from '@/components/Registration/RegistrationList/RegistrationList'
import * as S from './style'

const UserRegistrationTemplate = ({ registrations }: any) => {
  return (
    <S.UserRegistrationTemplateLayout>
      <h2>가입 관리</h2>
      <RegistrationList registrations={registrations} />
    </S.UserRegistrationTemplateLayout>
  )
}

export default UserRegistrationTemplate
