import { useRecoilValue } from 'recoil'
import { NotificationBox } from 'components/common'
import ChannelCards from 'features/Channel/ChannelCards/ChannelCards'
import { useUserChannels } from 'hooks/channel'
import userIdSelector from 'recoil/user/userIdSelector'

const UserChannelCards = () => {
  const userId = useRecoilValue(userIdSelector)

  const { data: channels } = useUserChannels(userId, {
    suspense: true,
    enabled: Boolean(userId),
  })

  if (!userId) {
    return (
      <NotificationBox title="로그인 후, 채널에 참여해 주세요." type="empty" />
    )
  }

  if (!channels?.length) {
    return (
      <NotificationBox
        title="가입된 채널이 없습니다."
        description="새로운 채널을 만들거나, 찾아보세요!"
        type="empty"
      />
    )
  }

  return <ChannelCards channels={channels} />
}
export default UserChannelCards
