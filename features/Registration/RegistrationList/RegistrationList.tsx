import { IRegistration } from 'types/registration'
import * as S from './style'
import RegistrationListItem from '../RegistrationListItem/RegistrationListItem'

interface RegistrationListProps {
  registrations: IRegistration[]
}

const RegistrationList = ({ registrations }: RegistrationListProps) => {
  return (
    <S.RegistrationListLayout>
      {registrations?.map((registration) => (
        <RegistrationListItem
          key={registration._id}
          registration={registration}
        />
      ))}
    </S.RegistrationListLayout>
  )
}

export default RegistrationList
