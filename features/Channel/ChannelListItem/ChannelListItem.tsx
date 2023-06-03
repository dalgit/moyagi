import { Avatar, ListItem, ListItemProps } from 'components/common'
import { channelDefaultImage } from 'constants/defaultImage'
import { IChannel } from 'types/channel'

interface ChannelListItemProps extends ListItemProps {
  channel: IChannel
}

const ChannelListItem = ({ channel, ...rest }: ChannelListItemProps) => {
  const { name, imageUrl } = channel
  const channelImage = imageUrl || channelDefaultImage

  return (
    <ListItem {...rest}>
      <Avatar image={channelImage} name={name} />
    </ListItem>
  )
}

export default ChannelListItem
