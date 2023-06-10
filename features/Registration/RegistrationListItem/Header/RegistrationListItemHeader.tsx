import { EStatus } from 'types/registration'
import getFormattedDate from 'utils/common/getFormattedDate'
import * as S from './style'

interface RegistrationHeaderProps {
  name: string
  date: Date
  status: string
}

const RegistrationListItemHeader = ({
  name,
  date,
  status,
}: RegistrationHeaderProps) => {
  const FormattedDate = getFormattedDate(date)

  const statusText = {
    [EStatus.PENDING]: '대기',
    [EStatus.APPROVE]: '승인',
    [EStatus.REJECT]: ' 거절',
  }[status]

  return (
    <S.RegistrationHeaderLayout>
      <h3>{name}</h3>
      <S.Wrapper>
        <span>{statusText}</span>
        <span>{FormattedDate}</span>
      </S.Wrapper>
    </S.RegistrationHeaderLayout>
  )
}

export default RegistrationListItemHeader
