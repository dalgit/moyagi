import { IRegistration } from 'types/registration'
import RegistrationListItemFooter from './Footer/RegistrationListItemFooter'
import RegistrationListItemHeader from './Header/RegistrationListItemHeader'
import * as S from './style'

interface RegistrationListItemProps {
  registration: IRegistration
}

const RegistrationListItem = ({ registration }: RegistrationListItemProps) => {
  const {
    _id: registrationId,
    message,
    status,
    time,
    channel,
    requester,
  } = registration
  const { _id: channelId } = channel

  return (
    <S.RegistrationLayout status={status}>
      <RegistrationListItemHeader
        name={channel.name}
        status={status}
        date={time}
      />
      <S.Message>{message}</S.Message>
      <RegistrationListItemFooter
        registrationId={registrationId}
        channelId={channelId}
        status={status}
        requester={requester}
      />
    </S.RegistrationLayout>
  )
}

export default RegistrationListItem
