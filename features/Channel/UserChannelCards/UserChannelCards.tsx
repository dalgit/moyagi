import { useRecoilValue } from 'recoil'
import { NotificationBox } from 'components/common'
import ChannelCards from 'features/Channel/ChannelCards/ChannelCards'
import { useUserChannels } from 'hooks/channel'
import userIdSelector from 'recoil/user/userIdSelector'
import { config } from './config'

const UserChannelCards = () => {
  const userId = useRecoilValue(userIdSelector)

  const { data: channels } = useUserChannels(userId, {
    suspense: true,
  })

  if (!userId) {
    return <NotificationBox {...config.noUser} />
  }

  if (!channels?.length) {
    return <NotificationBox {...config.noChannel} />
  }

  return <ChannelCards channels={channels} />
}
export default UserChannelCards
