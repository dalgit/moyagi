import { useRecoilValue } from 'recoil'
import { BoxType, NotificationBox } from 'components/common'
import ChannelCards from 'features/Channel/ChannelCards/ChannelCards'
import { useUserChannels } from 'hooks/channel'
import { userIdSelector } from 'recoil/user'

const UserChannelCards = () => {
  const userId = useRecoilValue(userIdSelector) || ''
  const { data: channels } = useUserChannels(userId, { suspense: true })

  if (!channels?.length) {
    return (
      <NotificationBox
        title="가입된 채널이 없습니다."
        description="새로운 채널을 만들거나, 찾아보세요!"
        type={BoxType.empty}
      />
    )
  }

  return <ChannelCards channels={channels} />
}
export default UserChannelCards
