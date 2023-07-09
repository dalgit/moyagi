import { Spinner } from 'components/common'
import { ViewBoundary } from 'components/common/Boundary/ViewBoundary'
import { useChannel } from 'hooks/channel'
import { useChannelRegsQuery } from 'hooks/registration'
import * as S from './style'

const ChannelRegsModal = () => {
  const { _id: channelId } = useChannel()
  const { data: registrations = [], isLoading } = useChannelRegsQuery(channelId)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <ViewBoundary view="ChannelRegistrations" data={registrations}>
      <S.ChannelRegsLayout>
        <h2>가입 관리</h2>
        <S.StyledRegistrationList registrations={registrations} />
      </S.ChannelRegsLayout>
    </ViewBoundary>
  )
}

export default ChannelRegsModal
