import { useRecoilValue } from 'recoil'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import List from '../common/List'
import ListItem from '../common/ListItem'
import DropDownItem from '../common/Tab/DropDownItem'
import { ChannelRegistrationList } from '../Registration/RegistrationList'

interface ChannelListProps {
  channels: IChannel[]
}

export const MyChannelList = () => {
  const { data: channels = [] } = useMyChannels()

  return (
    <List>
      {channels.map((channel) => (
        <ListItem
          key={channel._id}
          title={channel.name}
          href={`/channels/${channel.address}`}
          imageSrc="/assets/a.jpg"
        />
      ))}
    </List>
  )
}

export const ManagedChannelList = () => {
  const user = useRecoilValue(userSelector)
  const { data: channels } = useMyChannels({
    select: (channels) => filterManagedChannels(channels, user?._id),
  })

  return (
    <List>
      {channels?.map((channel) => (
        <DropDownItem
          render={() => <ChannelRegistrationList channelId={channel._id} />}
          key={channel._id}
        >
          <ListItem title={channel.name} imageSrc="/assets/a.jpg" />
        </DropDownItem>
      ))}
    </List>
  )
}

export const SubscribedChannels = () => {
  const user = useRecoilValue(userSelector)
  const { data: channels } = useMyChannels({
    select: (channels) => filterSubscribedChannels(channels, user?._id),
  })

  return (
    <List>
      {channels?.map((channel) => (
        <ListItem
          key={channel._id}
          title={channel.name}
          imageSrc="/assets/a.jpg"
        />
      ))}
    </List>
  )
}

export const ChannelList = ({ channels }: ChannelListProps) => {
  return (
    <List>
      {channels.map((channel) => (
        <ListItem
          key={channel._id}
          title={channel.name}
          href={`/channels/${channel.address}`}
          imageSrc="/assets/a.jpg"
        />
      ))}
    </List>
  )
}

const filterManagedChannels = (
  channels: IChannel[],
  userId: string | undefined,
) => {
  return channels.filter((channel) => channel.manager._id === userId)
}

const filterSubscribedChannels = (
  channels: IChannel[],
  userId: string | undefined,
) => {
  return channels.filter((channel) => channel.manager._id !== userId)
}
