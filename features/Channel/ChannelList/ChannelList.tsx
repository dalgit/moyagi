import ChannelListItem from 'features/Channel/ChannelListItem/ChannelListItem'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelListProps {
  channels: IChannel[]
  onItemClick: (channel: IChannel) => void
}

const ChannelList = ({ channels, onItemClick }: ChannelListProps) => (
  <S.ChannelListLayout>
    {channels?.map((channel) => (
      <ChannelListItem
        key={channel._id}
        channel={channel}
        onClick={() => onItemClick(channel)}
      />
    ))}
  </S.ChannelListLayout>
)

export default ChannelList
