import { useGetChannelJoinRequests } from '@/hooks/queries/useGetChannelJoinRequests'
import { useGetMyJoinRequests } from '@/hooks/queries/useGetMyJoinRequests'
import { IJoinRequest } from '@/types/joinRequest'
import { Registration } from './Registration'

interface RegistrationListProps {
  registrations: IJoinRequest[]
}

export const MyRegistrationList = () => {
  const { data: registrations = [] } = useGetMyJoinRequests()

  return <RegistrationList registrations={registrations} />
}

export const ChannelRegistrationList = ({
  channelId,
}: {
  channelId: string
}) => {
  const { data: registrations = [] } = useGetChannelJoinRequests(channelId)

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
