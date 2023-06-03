import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { useDeleteChannelMember } from 'hooks/channel'
import channelAtom from 'recoil/channel/channelAtom'

interface UserBanButtonProps {
  userId: string
}

const UserBanButton = ({ userId }: UserBanButtonProps) => {
  const { mutate } = useDeleteChannelMember()
  const { _id: channelId } = useRecoilValue(channelAtom)

  const handleButtonClick = () => {
    mutate({ userId, channelId })
  }

  return <Button onClick={handleButtonClick}>추방하기</Button>
}

export default UserBanButton
