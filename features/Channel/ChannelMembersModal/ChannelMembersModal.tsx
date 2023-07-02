import { Avatar } from 'components/common'
import { useChannel } from 'hooks/channel'
import * as S from './style'

const ChannelMemberList = () => {
  const { members } = useChannel()

  return (
    <S.ChannelMembersLayout>
      {members?.map((member) => (
        <Avatar
          key={member._id}
          name={member.name}
          type="user"
          image={member.imageUrl}
          href={`/users/${member._id}`}
        />
      ))}
    </S.ChannelMembersLayout>
  )
}

export default ChannelMemberList
