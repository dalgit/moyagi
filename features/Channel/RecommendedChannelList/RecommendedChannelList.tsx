import Link from 'next/link'
import InfiniteList from 'components/common/InfiniteList/InfiniteList'
import ToolTip from 'components/common/ToolTIp/ToolTip'
import useRecommendedChannels from 'hooks/channel/useRecommendedChannels'
import { IChannel } from 'types/channel'
import * as S from './style'

const RecommendedChannelList = () => {
  const { data: channels = [] } = useRecommendedChannels({
    suspense: true,
  })

  const channelItem = (channel: IChannel) => (
    <Link href={`/channels/${channel.address}`} key={channel._id}>
      {channel.name}
    </Link>
  )

  return (
    <S.RecommendedChannelListLayout>
      <S.Wrapper>
        <ToolTip type="question" content="멤버가 많은 채널들을 추천해드려요" />
        <span>추천</span>
      </S.Wrapper>
      <InfiniteList items={channels.map(channelItem)} />
    </S.RecommendedChannelListLayout>
  )
}

export default RecommendedChannelList