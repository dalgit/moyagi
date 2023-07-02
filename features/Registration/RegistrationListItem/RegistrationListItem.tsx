import { Avatar } from 'components/common'
import { EStatus, IRegistration } from 'types/registration'
import getFormattedDate from 'utils/common/getFormattedDate'
import * as S from './style'
import useRegItem from './useRegItem'

interface RegistrationListItemProps {
  registration: IRegistration
}

const RegistrationListItem = ({ registration }: RegistrationListItemProps) => {
  const { _id, message, status, createdAt } = registration
  const { avatarProps, Menus } = useRegItem(_id)

  return (
    <S.RegistrationLayout status={status}>
      <S.RegistrationHeader>
        <Avatar {...avatarProps} />
        <S.Wrapper>
          <span>{statusText[status]}</span>
          <span>{getFormattedDate(createdAt)}</span>
          <Menus />
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
