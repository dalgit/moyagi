import { RegistrationListItem } from 'features/Registration'
import { IRegistration } from 'types/registration'
import { useChannelRegistrations } from '..'
interface RegistrationListProps {
  registrations: IRegistration[]
}

const RegistrationList = ({ registrations }: RegistrationListProps) => {
  return (
    <ul>
      {registrations?.map((registration) => (
        <RegistrationListItem
          key={registration._id}
          registration={registration}
        />
      ))}
      {registrations?.map((registration) => (
        <RegistrationListItem
          key={registration._id}
          registration={registration}
        />
      ))}
    </ul>
  )
}

export default RegistrationList
