import Avatar from '@/components/common/Avatar/Avatar'
import ListItem from '@/components/common/ListItem/ListItem'
import { channelDefaultImage } from '@/constants/defaultImage'

interface ChannelListItemProps {
  title: string
  image?: string
  onClick?: () => void
}

const ChannelListItem = ({
  title,
  image = channelDefaultImage,
  onClick,
}: ChannelListItemProps) => (
  <ListItem onClick={onClick}>
    <Avatar image={image} name={title} />
  </ListItem>
)

export default ChannelListItem
