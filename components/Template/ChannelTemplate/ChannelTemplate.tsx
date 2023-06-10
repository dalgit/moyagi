import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { ChannelDetailCard, ChannelSideBar } from 'features/Channel'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelTemplateProps {
  channel: IChannel
}

const ChannelPostList = dynamic(
  () => import('features/Channel').then((module) => module.ChannelPostList),
  { ssr: false },
)

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
