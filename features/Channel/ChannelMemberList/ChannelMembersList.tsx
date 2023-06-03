import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { UserList } from 'features/User'
import channelAtom from 'recoil/channel/channelAtom'
import { IUser } from 'types/user'

const ChannelMemberList = () => {
  const channel = useRecoilValue(channelAtom)
  const members = channel?.members
  const router = useRouter()

  const handleMemberClick = (user: IUser) => {
    router.push(`/users/${user._id}`)
  }

  return <UserList onItemClick={handleMemberClick} users={members} />
}

export default ChannelMemberList
