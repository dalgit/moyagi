import { Card } from 'components/common'
import { channelDefaultImage } from 'constants/defaultImage'
import { IChannel } from 'types/channel'

interface ChannelCardProps {
  channel: IChannel
}

const ChannelCard = ({ channel }: ChannelCardProps) => (
  <Card
    key={channel._id}
    title={channel.name}
    href={`/channels/${channel.address}`}
    image={channel.imageUrl || channelDefaultImage}
  />
)

export default ChannelCard
