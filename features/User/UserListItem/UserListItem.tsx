import React, { LiHTMLAttributes, ReactNode } from 'react'
import Avatar from 'components/common/Avatar/Avatar'
import ListItem from 'components/common/ListItem/ListItem'
import { userDefaultImage } from 'constants/defaultImage'

interface UserListItemLayoutProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string
  image?: string
  right?: ReactNode
  onClick?: () => void
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
