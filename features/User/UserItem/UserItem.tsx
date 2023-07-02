import React from 'react'
import { Avatar } from 'components/common'
import { IUser } from 'types/user'

interface UserItemProps {
  user: IUser
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <Avatar
      image={user.imageUrl}
      name={user.name}
      href={`/users/${user._id}`}
      type="user"
    />
  )
}

export default UserItem
