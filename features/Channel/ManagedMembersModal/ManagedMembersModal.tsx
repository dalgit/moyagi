import { Avatar, Button, NotificationBox } from 'components/common'
import { useChannel, useDeleteChannelMember } from 'hooks/channel'
import { useManagedMembers } from 'hooks/channel/useChannelData'
import * as S from './style'

const ManagedMembersModal = () => {
  const managedMembers = useManagedMembers()
  const { mutate } = useDeleteChannelMember()
  const { _id: channelId } = useChannel()

  const handleButtonClick = (userId: string) => mutate({ userId, channelId })

  if (!managedMembers.length) {
    return <NotificationBox title="관리중인 멤버가 없습니다." type="empty" />
  }

  return (
    <S.ManagedMembersModalLayout>
      {managedMembers?.map((member) => (
        <li key={member._id}>
          <Avatar
            image={member.imageUrl}
            name={member.name}
            type="user"
            href={`/users/${member._id}`}
          />
          <Button onClick={() => handleButtonClick(member._id)}>추방</Button>
        </li>
      ))}
    </S.ManagedMembersModalLayout>
  )
}

export default ManagedMembersModal
