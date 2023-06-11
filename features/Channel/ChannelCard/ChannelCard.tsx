import { Card, ChannelLink } from 'components/common'
import { CardStyle } from 'components/common/Card/Card'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'

interface ChannelCardProps extends CardStyle {
  channel: IChannel
}

const ChannelCard = ({ channel, ...rest }: ChannelCardProps) => (
  <ChannelLink href={channel.address}>
    <Card
      title={channel.name}
      image={withChannel(channel.imageUrl)}
      {...rest}
    />
  </ChannelLink>
)

export default ChannelCard
