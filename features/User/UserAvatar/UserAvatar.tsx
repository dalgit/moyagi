import React from 'react'
import { Avatar } from 'components/common'
import { AvatarProps } from 'components/common/Avatar/Avatar'
import { userDefaultImage } from 'constants/defaultImage'

const UserAvatar = ({
  name,
  image = userDefaultImage,
  ...rest
}: AvatarProps) => {
  return <Avatar name={name} image={image} {...rest} />
}

export default UserAvatar
