import { Avatar } from 'components/common'
import { EStatus, IRegistration } from 'types/registration'
import getFormattedDate from 'utils/common/getFormattedDate'
import AdminMenus from './AdminMenus/AdminMenus'
import * as S from './style'

interface RegistrationListItemProps {
  registration: IRegistration
}

const AdminRegistration = ({ registration }: RegistrationListItemProps) => {
  const {
    _id: registrationId,
    message,
    status,
    createdAt,
    requester,
  } = registration

  const isPending = status === EStatus.PENDING

  return (
    <S.RegistrationLayout status={status}>
      <S.RegistrationHeader>
        <Avatar
          name={requester.name}
          image={requester.imageUrl}
          href={`/users/${requester._id}`}
          type="user"
        />
        <S.Wrapper>
          <span>{statusText[status]}</span>
          <span>{getFormattedDate(createdAt)}</span>
          {isPending && <AdminMenus registrationId={registrationId} />}
        </S.Wrapper>
      </S.RegistrationHeader>
      <S.Message>{message}</S.Message>
    </S.RegistrationLayout>
  )
}

export default AdminRegistration

const statusText = {
  [EStatus.PENDING]: '대기',
  [EStatus.APPROVE]: '승인',
  [EStatus.REJECT]: ' 거절',
}
