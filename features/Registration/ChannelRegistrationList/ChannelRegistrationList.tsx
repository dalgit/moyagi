import { NotificationBox, Spinner } from 'components/common'
import { useChannel } from 'hooks/channel'
import { useChannelRegistrations } from 'hooks/registration'
import * as S from './style'

const ChannelRegistrationList = () => {
  const { _id: channelId } = useChannel()

  const {
    data: registrations = [],
    isLoading,
    isSuccess,
  } = useChannelRegistrations(channelId)

  const isEmpty = isSuccess && !registrations.length

  return (
    <S.ChannelRegistrationListLayout>
      <h2>가입 관리</h2>
      {isLoading && <Spinner />}
      {isEmpty && (
        <NotificationBox
          title="요청된 가입이 존재하지 않습니다."
          type="empty"
        />
      )}
      {isSuccess && !isEmpty && (
        <S.StyledRegistrationList registrations={registrations} />
      )}
    </S.ChannelRegistrationListLayout>
  )
}

export default ChannelRegistrationList
