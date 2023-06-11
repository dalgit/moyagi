import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { ChannelDetailCard, ChannelSideBar } from 'features/Channel'
import { useChannel } from 'hooks/channel'
import { IChannel } from 'types/channel'
import * as S from './style'

const ChannelPostList = dynamic(
  () => import('features/Channel').then((module) => module.ChannelPostList),
  { ssr: false },
)

const ChannelTemplate = () => {
  const { query } = useRouter()
  const { data: channel = {} as IChannel } = useChannel(query.slug as string)

  return (
    <S.ChannelTemplateLayout>
      <ChannelDetailCard channel={channel} />
      <Suspense fallback={<Spinner />}>
        <ChannelPostList />
      </Suspense>
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate
