import UserItem from 'features/User/UserItem/UserItem'
import { useChannel } from 'hooks/channel'
import * as S from './style'

const ChannelMembersModal = () => {
  const { members } = useChannel()

  return (
    <S.ChannelMembersLayout>
      {members?.map((member) => (
        <UserItem key={member._id} user={member} />
      ))}
    </S.ChannelMembersLayout>
  )
}

export default ChannelMembersModal
