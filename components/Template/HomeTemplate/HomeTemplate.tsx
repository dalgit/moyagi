import dynamic from 'next/dynamic'
import { ReactNode, Suspense } from 'react'
import { Spinner } from 'components/common'
import * as S from './style'

interface HomeTemplateProps {
  children: ReactNode
}

const RecommendedChannelList = dynamic(
  () =>
    import('features/Channel').then((module) => module.RecommendedChannelList),
  { ssr: false },
)

const HomeTemplate = ({ children }: HomeTemplateProps) => {
  return (
    <S.HomeTemplateLayout>
      <S.StyledSearchBar />
      <Suspense fallback={<Spinner />}>
        <RecommendedChannelList />
        {children}
      </Suspense>
    </S.HomeTemplateLayout>
  )
}

export default HomeTemplate
