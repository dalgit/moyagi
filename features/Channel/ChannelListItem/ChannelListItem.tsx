import { LiHTMLAttributes } from 'react'
import Avatar from 'components/common/Avatar/Avatar'
import ListItem from 'components/common/ListItem/ListItem'
import { channelDefaultImage } from 'constants/defaultImage'

interface ChannelListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  name: string
  image?: string
  onClick?: () => void
}

const ChannelListItem = ({ name, image, onClick }: ChannelListItemProps) => {
  const channelImage = image || channelDefaultImage

  return (
    <ListItem onClick={onClick}>
      <Avatar image={channelImage} name={name} />
    </ListItem>
  )
}

export default ChannelListItem
