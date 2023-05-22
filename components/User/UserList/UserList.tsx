import { IUser } from '@/types/user'
import UserListItem from '../UserListItem/UserListItem'

interface UserListProps {
  users: IUser[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserListItem
          key={user._id}
          id={user._id}
          name={user.name}
          image={user.imageUrl}
        />
      ))}
    </div>
  )
}

export default UserList
