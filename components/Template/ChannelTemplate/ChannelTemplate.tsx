import { Suspense } from 'react'
import { Spinner } from 'components/common'
import {
  ChannelDetailCard,
  ChannelPostList,
  ChannelSideBar,
} from 'features/Channel'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelTemplateProps {
  channel: IChannel
}

const ChannelTemplate = ({ channel }: ChannelTemplateProps) => {
  return (
    <S.ChannelTemplateLayout>
      <ChannelDetailCard channel={channel} />
      <Suspense fallback={<Spinner />}>
        <ChannelPostList channelId={channel._id} />
      </Suspense>
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate
