import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner'
import HomeTemplate from '@/components/Template/HomeTemplate/HomeTemplate'

const UserChannelCards = dynamic(
  () => import('@/components/Channel/UserChannelCards/UserChannelCards'),
  { ssr: false },
)

const HomePage = () => {
  return (
    <HomeTemplate>
      <Suspense fallback={<Spinner />}>
        <UserChannelCards />
      </Suspense>
    </HomeTemplate>
  )
}
export default HomePage
