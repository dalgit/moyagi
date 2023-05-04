import { useRecoilValue } from 'recoil'
import { useGetJoinnedChannels } from '@/hooks/queries/useGetJoinnedChannels'
import { userSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'
import List from '../common/Ui/List'
import ListItem from '../common/Ui/ListItem'
import DropDownItem from '../common/Ui/Tab/DropDownItem'
import { ChannelRegistrationList } from '../Registration/RegistrationList'

interface ChannelListProps {
  channels: IChannel[]
}

export const ManagedChannelList = () => {
  const user = useRecoilValue(userSelector)
  const { data: channels } = useGetJoinnedChannels({
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
  const { data: channels } = useGetJoinnedChannels({
    select: (channels) => filterSubscribedChannels(channels, user?.id),
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
  return channels.filter((channel) => channel.manager._id === userId)
}