import { useRecoilValue } from 'recoil'
import { Avatar } from 'components/common'
import isMeSelector from 'recoil/user/isMe'
import { EStatus, IRegistration } from 'types/registration'
import getFormattedDate from 'utils/common/getFormattedDate'
import { withChannel, withUser } from 'utils/common/withDefaultImage'
import AdminMenus from './AdminMenus/AdminMenus'
import RequesterMenus from './RequesterMenus/RequesterMenus'
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

  const isRequester = useRecoilValue(isMeSelector(requester._id))
  const isPending = status === EStatus.PENDING

  const avatarProps = isRequester
    ? { name: channel.name, image: withChannel(channel.imageUrl) }
    : { name: requester.name, image: withUser(requester.imageUrl) }

  const EventButtons = isRequester ? RequesterMenus : AdminMenus

  return (
    <S.RegistrationLayout status={status}>
      <S.RegistrationHeader>
        <Avatar {...avatarProps} />
        <S.Wrapper>
          <span>{statusText[status]}</span>
          <span>{getFormattedDate(createdAt)}</span>
          {isPending && <EventButtons registrationId={registrationId} />}
        </S.Wrapper>
      </S.RegistrationHeader>
      <S.Message>{message}</S.Message>
    </S.RegistrationLayout>
  )
}

export default RegistrationListItem

const statusText = {
  [EStatus.PENDING]: '대기',
  [EStatus.APPROVE]: '승인',
  [EStatus.REJECT]: ' 거절',
}
