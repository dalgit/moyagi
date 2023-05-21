import { useChannelRegistrations } from '@/hooks/queries/useChannelRegistrations'
import { useMyRegistrations } from '@/hooks/queries/useMyRegistrations'
import { IRegistration } from '@/types/registration'

interface RegistrationListProps {
  registrations: IRegistration[]
}

const RegistrationList = ({ registrations }: RegistrationListProps) => {
  return (
    <div>
      {registrations.map((registration) => {
        return (
          <Registration key={registration._id} registration={registration} />
        )
      })}
    </div>
  )
}

export default RegistrationList
