import { useRecoilValue } from 'recoil'
import { UserList } from 'features/User'
import channelAtom from 'recoil/channel/channelAtom'

const ChannelMemberList = () => {
  const channel = useRecoilValue(channelAtom)
  const members = channel?.members

  return <UserList users={members} />
}

export default ChannelMemberList
