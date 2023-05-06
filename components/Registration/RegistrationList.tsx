import { useChannelRegistrations } from '@/hooks/queries/useChannelRegistrations'
import { useMyRegistrations } from '@/hooks/queries/useMyRegistrations'
import { IRegistration } from '@/types/registration'
import { Registration } from './Registration'

interface RegistrationListProps {
  registrations: IRegistration[]
}

export const MyRegistrationList = () => {
  const { data: registrations = [] } = useMyRegistrations()

  return <RegistrationList registrations={registrations} />
}

export const ChannelRegistrationList = ({
  channelId,
}: {
  channelId: string
}) => {
  const { data: registrations = [] } = useChannelRegistrations(channelId)

  return <RegistrationList registrations={registrations} />
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
