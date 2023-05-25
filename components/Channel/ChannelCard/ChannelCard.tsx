import Card from '@/components/common/Card/Card'
import { channelDefaultImage } from '@/constants/defaultImage'
import { IChannel } from '@/types/channel'

interface ChannelCardProps {
  channel: IChannel
}

const ChannelCard = ({ channel }: ChannelCardProps) => (
  <Card
    key={channel._id}
    title={channel.name}
    href={`/channels/${channel.address}`}
    imageSrc={channel.imageUrl || channelDefaultImage}
  />
)

export default ChannelCard
