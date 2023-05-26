import { useRouter } from 'next/router'
import { IUser } from 'types/user'
import UserListItem from '../UserListItem/UserListItem'

interface UserListProps {
  users: IUser[]
}

const UserList = ({ users }: UserListProps) => {
  const router = useRouter()

  const handleUserClick = (id: string) => {
    router.push(`/users/${id}`)
  }

  return (
    <div>
      {users.map((user) => (
        <UserListItem
          key={user._id}
          id={user._id}
          onClick={() => handleUserClick(user._id)}
          {...user}
        />
      ))}
    </div>
  )
}

export default UserList
