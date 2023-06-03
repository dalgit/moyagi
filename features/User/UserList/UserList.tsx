import { IUser } from 'types/user'
import UserListItem from '../UserListItem/UserListItem'

interface UserListProps {
  users: IUser[]
  onItemClick: (user: IUser) => void
}

const UserList = ({ users, onItemClick }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserListItem
          key={user._id}
          onClick={() => onItemClick(user)}
          {...user}
        />
      ))}
    </div>
  )
}

export default UserList
