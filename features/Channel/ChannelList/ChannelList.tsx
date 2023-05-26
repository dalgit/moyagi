import { IChannel } from 'types/channel'
import * as S from './style'
import ChannelListItem from '../../../../features/Channel/ChannelListItem/ChannelListItem'
interface ChannelListProps {
  channels: IChannel[]
  onItemClick?: (channelId: string) => void
}

const ChannelList = ({ channels, onItemClick }: ChannelListProps) => (
  <S.ChannelListLayout>
    {channels?.map((channel) => (
      <ChannelListItem
        key={channel._id}
        {...channel}
        onClick={() => onItemClick?.(channel._id)}
      />
    ))}
  </S.ChannelListLayout>
)

export default ChannelList
