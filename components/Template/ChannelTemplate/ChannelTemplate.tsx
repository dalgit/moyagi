import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { ApiErrorBoundary } from 'components/common/Boundary'
import { ChannelDetailCard } from 'features/Channel'
import { useChannelQueryBySlug } from 'hooks/channel'
import * as S from './style'

const ChannelPostList = dynamic(
  () => import('features/Channel').then((module) => module.ChannelPostList),
  { ssr: false },
)

const ChannelSideBar = dynamic(
  () => import('features/Channel').then((module) => module.ChannelSideBar),
  { ssr: false },
)

const ChannelTemplate = ({ slug }: { slug: string }) => {
  const { isSuccess } = useChannelQueryBySlug(slug)

  if (!isSuccess) {
    return <></>
  }

  return (
    <S.ChannelTemplateLayout>
      <ChannelDetailCard />
      <ApiErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <ChannelPostList />
        </Suspense>
      </ApiErrorBoundary>
      <ChannelSideBar />
    </S.ChannelTemplateLayout>
  )
}

export default ChannelTemplate
