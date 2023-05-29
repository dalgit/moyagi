import { useRouter } from 'next/router'
import ChannelList from 'features/Channel/ChannelList/ChannelList'
import ChannelListItem from 'features/Channel/ChannelListItem/ChannelListItem'
import { useMyChannels } from 'hooks/channel'
import * as S from './style'

const ChannelSideBar = () => {
  const { data: channels = [] } = useMyChannels()
  const router = useRouter()

  const handleChannelClick = (address: string) => {
    router.push(`/channels/${address}`)
  }

  return (
    <S.ChannelSideBarLayout>
      <h3>my channels</h3>
      {channels.map((channel) => (
        <ChannelListItem />
      ))}
      <ChannelList channels={channels} />
    </S.ChannelSideBarLayout>
  )
}

export default ChannelSideBar
