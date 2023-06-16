import { IUser } from 'types/user'
import * as S from './style'
import UserListItem from '../UserListItem/UserListItem'

interface UserListProps {
  users: IUser[]
  onItemClick: (user: IUser) => void
}

const UserList = ({ users, onItemClick }: UserListProps) => {
  return (
    <S.UserListLayout>
      {users.map((user) => (
        <UserListItem
          key={user._id}
          onClick={() => onItemClick(user)}
          {...user}
        />
      ))}
    </S.UserListLayout>
  )
}

export default UserList
