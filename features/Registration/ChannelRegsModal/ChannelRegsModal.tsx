import { NotificationBox, Spinner } from 'components/common'
import { useChannel } from 'hooks/channel'
import { useChannelRegsQuery } from 'hooks/registration'
import * as S from './style'

const ChannelRegsModal = () => {
  const { _id: channelId } = useChannel()
  const { data: registrations, isLoading } = useChannelRegsQuery(channelId)

  if (isLoading) {
    return <Spinner />
  }

  if (!registrations?.length) {
    return (
      <NotificationBox title="요청된 가입이 존재하지 않습니다." type="empty" />
    )
  }

  return (
    <S.ChannelRegsLayout>
      <h2>가입 관리</h2>
      <S.StyledRegistrationList registrations={registrations} />
    </S.ChannelRegsLayout>
  )
}

export default ChannelRegsModal
