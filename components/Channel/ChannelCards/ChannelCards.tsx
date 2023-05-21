import styled from 'styled-components'
import { channelDefaultImage } from '@/constants/defaultImage'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import { IChannel } from '@/types/channel'
import Card from '../../common/Card'
import { NotificationBox, BoxType } from '../../common/NotificationBox'

export const MyChannelCards = () => {
  const { data: channels = [] } = useMyChannels({ suspense: true })

  if (!channels) {
    return (
      <NotificationBox
        title="가입된 채널이 없습니다."
        description="새로운 채널을 만들거나, 찾아보세요!"
        type={BoxType.empty}
      />
    )
  }

  return <ChannelCards channels={channels} />
}

export const ChannelCards = ({ channels }: { channels: IChannel[] }) => (
  <CardList>
    {channels.map((channel) => (
      <ChannelCard key={channel._id} channel={channel} />
    ))}
  </CardList>
)

const ChannelCard = ({ channel }: { channel: IChannel }) => (
  <Card
    key={channel._id}
    title={channel.name}
    href={`/channels/${channel.address}`}
    imageSrc={channel?.imageUrl || channelDefaultImage}
  />
)

const CardList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 55px;
  justify-items: center;
`
