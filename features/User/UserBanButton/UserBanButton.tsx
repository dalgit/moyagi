import { Button } from 'components/common'
import { useChannel, useDeleteChannelMember } from 'hooks/channel'

interface UserBanButtonProps {
  userId: string
}

const UserBanButton = ({ userId }: UserBanButtonProps) => {
  const { mutate } = useDeleteChannelMember()
  const { _id: channelId } = useChannel()

  const handleButtonClick = () => {
    mutate({ userId, channelId })
  }

  return <Button onClick={handleButtonClick}>추방하기</Button>
}

export default UserBanButton
