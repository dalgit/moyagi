import { IRegistration } from '@/types/registration'
import RegistrationListItem from '../RegistrationListItem/RegistrationListItem'

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
    </ul>
  )
}

export default RegistrationList
