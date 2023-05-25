import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Spinner from '@/components/common/Spinner/Spinner'
import Layout from '@/components/Layout/Layout'
import HomeTemplate from '@/components/Template/HomeTemplate/HomeTemplate'

const UserChannelCards = dynamic(
  () => import('@/components/Channel/UserChannelCards/UserChannelCards'),
  { ssr: false },
)

const HomePage = () => {
  return (
    <Layout>
      <HomeTemplate>
        <Suspense fallback={<Spinner />}>
          <UserChannelCards />
        </Suspense>
      </HomeTemplate>
    </Layout>
  )
}
export default HomePage
