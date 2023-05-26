import { Button } from 'components/common'
import useDeleteChannelMember from 'features/Channel/hooks/useDeleteChannelMember'

interface UserBanButtonProps {
  userId: string
  channelId: string
}
const UserBanButton = ({ userId, channelId }: UserBanButtonProps) => {
  const { mutate } = useDeleteChannelMember()

  const handleButtonClick = () => {
    mutate({ userId, channelId })
  }

  return <Button onClick={handleButtonClick}>추방하기</Button>
}

export default UserBanButton
