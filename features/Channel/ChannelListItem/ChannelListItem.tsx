import { Avatar, ListItem, ListItemProps } from 'components/common'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'

interface ChannelListItemProps extends ListItemProps {
  channel: IChannel
}

const ChannelListItem = ({ channel, ...rest }: ChannelListItemProps) => (
  <ListItem {...rest}>
    <Avatar image={withChannel(channel.imageUrl)} name={channel.name} />
  </ListItem>
)

export default ChannelListItem
