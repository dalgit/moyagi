import { BoxType, NotificationBox } from '@/components/common/NotificationBox'
import { useChannelRegistrations } from '../hooks/useChannelRegistrations'
import RegistrationList from '../RegistrationList/RegistrationList'

interface ChannelRegistrationListProps {
  channelId: string
}
const ChannelRegistrationList = ({
  channelId,
}: ChannelRegistrationListProps) => {
  const { data: registrations = [] } = useChannelRegistrations(channelId)

  if (!registrations.length) {
    return (
      <NotificationBox
        title="채널의 가입신청서가 존재하지 않습니다."
        type={BoxType.sorry}
      />
    )
  }

  return <RegistrationList registrations={registrations} />
}

export default ChannelRegistrationList
