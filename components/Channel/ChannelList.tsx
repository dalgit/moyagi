import { useRecoilValue } from 'recoil'
import { channelDefaultImage } from '@/constants/defaultImage'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import List from '../common/List'
import ListItem from '../common/ListItem'
import { NotificationBox, BoxType } from '../common/NotificationBox'
import Spinner from '../common/Spinner'

interface ChannelListProps {
  channels: IChannel[]
}

const MyChannelList = () => {
  const { data: channels = [], isLoading } = useMyChannels({
    select: (channels) => filterSubscribedChannels(channels, user?._id),
  })
}
export const ManagedChannelList = () => {
  const user = useRecoilValue(userSelector)
  const { data: channels = [], isLoading } = useMyChannels({
    select: (channels) => filterManagedChannels(channels, user?._id),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (!!channels) {
    return <EmptyBox title="관리중인 채널이 없습니다." />
  }

  return <ChannelList channels={channels} />
}

export const SubscribedChannels = () => {
  const user = useRecoilValue(userSelector)

  const { data: channels = [], isLoading } = useMyChannels({
    select: (channels) => filterSubscribedChannels(channels, user?._id),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (!channels.length) {
    return (
      <NotificationBox title="가입한 채널이 없습니다." type={BoxType.empty} />
    )
  }

  return <ChannelList channels={channels} />
}

const ChannelList = ({ channels }: ChannelListProps) => (
  <List>
    {channels.map((channel) => (
      <ChannelItem key={channel._id} channel={channel} />
    ))}
  </List>
)

const ChannelItem = ({ channel }: { channel: IChannel }) => (
  <ListItem
    key={channel._id}
    title={channel.name}
    href={`/channels/${channel.address}`}
    imageSrc={channel.imageUrl || channelDefaultImage}
  />
)

const filterManagedChannels = (
  channels: IChannel[],
  userId: string | undefined,
) => channels.filter((channel) => channel.manager._id === userId)

const filterSubscribedChannels = (
  channels: IChannel[],
  userId: string | undefined,
) => channels.filter((channel) => channel.manager._id !== userId)
