import { Suspense } from 'react'
import ChannelDetailCard from '@/components/Channel/ChannelDetailCard/ChannelDetailCard'
import ChannelPostList from '@/components/Channel/ChannelPostList/ChannelPostList'
import ChannelSideBar from '@/components/Channel/ChannelSideBar/ChannelSideBar'
import {
  BoxType,
  NotificationBox,
} from '@/components/common/NotificationBox/NotificationBox'
import Spinner from '@/components/common/Spinner/Spinner'
import { IChannel } from '@/types/channel'
import * as S from './style'

interface ChannelTemplateProps {
  channel: IChannel
  shouldFetchPosts: boolean
}

const ChannelTemplate = ({
  channel,
  shouldFetchPosts,
}: ChannelTemplateProps) => {
  return (
    <S.ChannelTemplateLayout>
      <ChannelDetailCard channel={channel} />
      {shouldFetchPosts ? (
        <Suspense fallback={<Spinner />}>
          <ChannelPostList channelId={channel._id} />
        </Suspense>
      ) : (
        <NotificationBox
          title="비공개 채널입니다!"
          description="가입후 이용해주세요"
          type={BoxType.sorry}
        />
      )}
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate
