import ChannelCard from 'features/Channel/ChannelCard/ChannelCard'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelCardsProps {
  channels: IChannel[]
}

const ChannelCards = ({ channels }: ChannelCardsProps) => (
  <S.ChannelCardsLayout>
    {channels.map((channel) => (
      <ChannelCard key={channel._id} channel={channel} />
    ))}
  </S.ChannelCardsLayout>
)

export default ChannelCards
