import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { ChannelDetailCard, ChannelSideBar } from 'features/Channel'
import * as S from './style'

const ChannelPostList = dynamic(
  () => import('features/Channel').then((module) => module.ChannelPostList),
  { ssr: false },
)

const ChannelTemplate = () => {
  return (
    <S.ChannelTemplateLayout>
      <ChannelDetailCard />
      <Suspense fallback={<Spinner />}>
        <ChannelPostList />
      </Suspense>
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate
