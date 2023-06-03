import React, { LiHTMLAttributes, ReactNode } from 'react'
import { Avatar, ListItem } from 'components/common'
import { userDefaultImage } from 'constants/defaultImage'

interface UserListItemLayoutProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string
  image?: string
  right?: ReactNode
}

const UserListItem = ({ name, image, ...props }: UserListItemLayoutProps) => {
  const profileImage = image || userDefaultImage

  return (
    <ListItem {...props}>
      <Avatar image={profileImage} name={name} />
    </ListItem>
  )
}

export default UserListItem
