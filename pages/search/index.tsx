import dynamic from 'next/dynamic'
import { HomeTemplate, Layout, MainHeader } from 'components/Template'

const SearchedChannelCards = dynamic(
  () =>
    import('features/Channel').then((module) => module.SearchedChannelCards),
  { ssr: false },
)

const SearchPage = () => {
  return (
    <Layout>
      <MainHeader />
      <HomeTemplate>
        <SearchedChannelCards />
      </HomeTemplate>
    </Layout>
  )
}

export default SearchPage
