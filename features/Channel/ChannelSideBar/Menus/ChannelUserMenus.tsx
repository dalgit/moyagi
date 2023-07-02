import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { useChannel } from 'hooks/channel'
import useLeaveChannel from 'hooks/channel/useLeaveChannel'
import userIdSelector from 'recoil/user/userIdSelector'
import * as S from './style'

const ChannelUserMenus = () => {
  const { mutate } = useLeaveChannel()
  const { _id: channelId } = useChannel()
  const userId = useRecoilValue(userIdSelector)

  const handleLeaveChannel = () => {
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
      mutate({ userId, channelId })
    }
  }

  return (
    <S.MenusLayout>
      <Button onClick={handleLeaveChannel}>탈퇴</Button>
    </S.MenusLayout>
  )
}

export default ChannelUserMenus
