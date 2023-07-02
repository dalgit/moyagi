import { Card } from 'components/common'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'
import * as S from './style'

interface ChannelCardsProps {
  channels: IChannel[]
}

const ChannelCards = ({ channels }: ChannelCardsProps) => (
  <S.ChannelCardsLayout>
    {channels.map((channel) => (
      <Card
        key={channel._id}
        image={withChannel(channel.imageUrl)}
        title={channel.name}
        href={`/channels/${channel.address}`}
      />
    ))}
  </S.ChannelCardsLayout>
)

export default ChannelCards
