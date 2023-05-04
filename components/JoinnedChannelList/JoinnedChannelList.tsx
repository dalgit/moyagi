import { useGetJoinnedChannels } from '@/hooks/queries/useGetJoinnedChannels'
import List from '../common/Ui/List'
import ListItem from '../common/Ui/ListItem'

const JoinnedChannelList = () => {
  const { data: channels = [] } = useGetJoinnedChannels()

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

export default JoinnedChannelList
