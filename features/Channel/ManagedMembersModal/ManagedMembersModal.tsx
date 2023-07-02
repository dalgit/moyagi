import { Button, ListItem, NotificationBox } from 'components/common'
import UserItem from 'features/User/UserItem/UserItem'
import { useChannel, useDeleteChannelMember } from 'hooks/channel'
import { useManagedMembers } from 'hooks/channel/useChannelData'
import * as S from './style'

const ManagedMembersModal = () => {
  const managedMembers = useManagedMembers()

  if (!managedMembers.length) {
    return <NotificationBox title="관리중인 멤버가 없습니다." type="empty" />
  }

  return (
    <S.ManagedMembersModalLayout>
      {managedMembers?.map((member) => (
        <ListItem key={member._id} Right={EventButton}>
          <UserItem user={member} />
        </ListItem>
      ))}
    </S.ManagedMembersModalLayout>
  )
}

const EventButton = ({ _id: userId }: { _id: string }) => {
  const { mutate } = useDeleteChannelMember()
  const { _id: channelId } = useChannel()

  const handleButtonClick = () => mutate({ userId, channelId })

  return <Button onClick={handleButtonClick}>추방</Button>
}

export default ManagedMembersModal
