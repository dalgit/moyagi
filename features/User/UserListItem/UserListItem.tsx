import React, { LiHTMLAttributes, ReactNode } from 'react'
import { Avatar, ListItem } from 'components/common'
import { withUser } from 'utils/common/withDefaultImage'

interface UserListItemLayoutProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string
  image?: string
  right?: ReactNode
}

const UserListItem = ({ name, image, ...props }: UserListItemLayoutProps) => (
  <ListItem {...props}>
    <Avatar image={withUser(image)} name={name} />
  </ListItem>
)

export default UserListItem
