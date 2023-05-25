import { useRouter } from 'next/router'
import { useMyChannels } from '@/hooks/queries/useMyChannels'
import * as S from './style'
import ChannelList from '../ChannelList/ChannelList'
import ChannelListItem from '../ChannelListItem/ChannelListItem'

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
