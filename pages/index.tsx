import dynamic from 'next/dynamic'
import { HomeTemplate, Layout } from 'components/Template'

const UserChannelCards = dynamic(
  () => import('features/Channel').then((module) => module.UserChannelCards),
  { ssr: false },
)

const HomePage = () => {
  return (
    <Layout>
      <HomeTemplate>
        <UserChannelCards />
      </HomeTemplate>
    </Layout>
  )
}

export default HomePage
