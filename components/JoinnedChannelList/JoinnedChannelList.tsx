import styled from 'styled-components'
import ListItem from '../common/Ui/ListItem'

const JoinnedChannelList = ({ channels }: any) => {
  return (
    <ListLayout>
      {channels?.map((channel) => (
        <ListItem
          key={channel._id}
          title={channel.name}
          href={`/channels/${channel.address}`}
          imageSrc="/assets/a.jpg"
        />
      ))}
    </ListLayout>
  )
}

export default JoinnedChannelList

const ListLayout = styled.ul`
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  height: 100%;

  li:not(:last-child) {
    border-bottom: 0.5px solid rgba(27, 31, 35, 0.15);
  }
`
