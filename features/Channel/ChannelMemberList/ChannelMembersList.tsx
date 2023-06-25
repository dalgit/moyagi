import { useRouter } from 'next/router'
import { UserList } from 'features/User'
import { useChannel } from 'hooks/channel'
import { IUser } from 'types/user'

const ChannelMemberList = () => {
  const { members } = useChannel()

  const router = useRouter()

  const handleMemberClick = (user: IUser) => {
    router.push(`/users/${user._id}`)
  }

  return (
    <>
      <h2>Members</h2>
      <UserList onItemClick={handleMemberClick} users={members} />
    </>
  )
}

export default ChannelMemberList
