import styled from 'styled-components'
import { channelDefaultImage } from '@/constants/defaultImage'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import List from '../../common/List'
import ListItem from '../../common/ListItem'

export const ChannelSideBar = () => {
  const { data: channels = [] } = useMyChannels()

  return (
    <ChannelSideBarLayout>
      <h3>my channels</h3>
      <StyledList>
        {channels.map((channel) => (
          <ListItem
            key={channel._id}
            title={channel.name}
            href={`/channels/${channel.address}`}
            imageSrc={channel.imageUrl || channelDefaultImage}
          />
        ))}
      </StyledList>
    </ChannelSideBarLayout>
  )
}

const ChannelSideBarLayout = styled.div`
  height: 450px;

  h3 {
    text-align: center;
    color: gray;
  }
`

const StyledList = styled(List)`
  width: 160px;
  max-height: 500px;
  font-size: 12px;
`
