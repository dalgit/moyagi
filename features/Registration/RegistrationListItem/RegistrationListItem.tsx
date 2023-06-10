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
    createdAt,
    channel,
    requester,
  } = registration

  return (
    <S.RegistrationLayout status={status}>
      <RegistrationListItemHeader
        name={channel.name}
        status={status}
        date={createdAt}
      />
      <S.Message>{message}</S.Message>
      <RegistrationListItemFooter
        registrationId={registrationId}
        status={status}
        requester={requester}
      />
    </S.RegistrationLayout>
  )
}

export default RegistrationListItem
