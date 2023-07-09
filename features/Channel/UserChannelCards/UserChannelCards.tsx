import { useRecoilValue } from 'recoil'
import { ViewBoundary } from 'components/common/Boundary'
import ChannelCards from 'features/Channel/ChannelCards/ChannelCards'
import { useUserChannels } from 'hooks/channel'
import userIdSelector from 'recoil/user/userIdSelector'

const UserChannelCards = () => {
  const userId = useRecoilValue(userIdSelector)

  const { data: channels = [] } = useUserChannels(userId, {
    suspense: true,
  })

  return (
    <ViewBoundary view="userChannels" data={channels} enabled={!!userId}>
      <ChannelCards channels={channels} />
    </ViewBoundary>
  )
}
export default UserChannelCards
