import { MouseEventHandler } from 'react'
import { IChannel } from '@/types/channel'
import * as S from './style'
import ChannelListItem from '../ChannelListItem/ChannelListItem'
interface ChannelListProps {
  channels: IChannel[]
  onItemClick?: MouseEventHandler<HTMLDivElement>
}

const ChannelList = ({ channels, onItemClick }: ChannelListProps) => (
  <S.ChannelListLayout>
    {channels?.map((channel) => (
      <ChannelListItem
        key={channel._id}
        title={channel.name}
        image={channel.imageUrl}
        onClick={() => onItemClick(channel)}
      />
    ))}
  </S.ChannelListLayout>
)

export default ChannelList
