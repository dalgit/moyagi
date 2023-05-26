import { IChannel } from 'types/channel'
import * as S from './style'
import ChannelCa
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
