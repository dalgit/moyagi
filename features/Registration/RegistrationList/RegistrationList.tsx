import { IRegistration } from 'types/registration'
import * as S from './style'
import RegistrationListItem from '../RegistrationListItem/RegistrationListItem'

interface RegistrationListProps {
  registrations: IRegistration[]
}

const RegistrationList = ({
  registrations,
  ...rest
}: RegistrationListProps) => {
  const sortedRegistrations = registrations.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return (
    <S.RegistrationListLayout {...rest}>
      {sortedRegistrations?.map((registration) => (
        <RegistrationListItem
          key={registration._id}
          registration={registration}
        />
      ))}
    </S.RegistrationListLayout>
  )
}

export default RegistrationList
