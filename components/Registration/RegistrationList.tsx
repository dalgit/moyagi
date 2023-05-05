import { useGetChannelRegistrations } from '@/hooks/queries/useGetChannelRegistrations'
import { useGetMyRegistrations } from '@/hooks/queries/useGetMyRegistrations'
import { IRegistration } from '@/types/registration'
import { Registration } from './Registration'

interface RegistrationListProps {
  registrations: IRegistration[]
}

export const MyRegistrationList = () => {
  const { data: registrations = [] } = useGetMyRegistrations()

  return <RegistrationList registrations={registrations} />
}

export const ChannelRegistrationList = ({
  channelId,
}: {
  channelId: string
}) => {
  const { data: registrations = [] } = useGetChannelRegistrations(channelId)

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
