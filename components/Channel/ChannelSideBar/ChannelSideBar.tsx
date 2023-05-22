import { useMyChannels } from '@/hooks/queries/useMyChannels'
import * as S from './style'
import ChannelList from '../ChannelList/ChannelList'

export const ChannelSideBar = () => {
  const { data: channels = [] } = useMyChannels()

  return (
    <S.ChannelSideBarLayout>
      <h3>my channels</h3>
      <ChannelList channels={channels} />
    </S.ChannelSideBarLayout>
  )
}
