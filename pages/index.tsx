import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Spinner } from 'components/common'
import { HomeTemplate, Layout } from 'components/Template'

const UserChannelCards = dynamic(() =>
  import('features/Channel').then((module) => module.UserChannelCards),
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
