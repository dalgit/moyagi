import styled from 'styled-components'
import { IChannel } from '@/types/channel'
import Card from '../common/Card'

interface JoinnedChannelCardsProps {
  channels: IChannel[]
}

const JoinnedChannelCards = ({ channels }: JoinnedChannelCardsProps) => {
  return (
    <CardList>
      {channels.map((channel) => (
        <Card
          key={channel._id}
          title={channel.name}
          href={`/channels/${channel.address}`}
          imageSrc="/assets/a.jpg"
        />
      ))}
    </CardList>
  )
}

export default JoinnedChannelCards

const CardList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 55px;
  justify-items: center;
`