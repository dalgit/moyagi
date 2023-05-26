import SeacrhedChannelCards from 'components/Channel/SeacrhedChannelCards/SeacrhedChannelCards'
import { useRouter } from 'next/router'
import Layout from 'components/Layout/Layout'
import HomeTemplate from 'components/Template/HomeTemplate/HomeTemplate'
import useDidMount from 'hooks/useDidMount'

const SearchPage = () => {
  const router = useRouter()
  const keyword = router.query.keyword
  const didMount = useDidMount()

  if (!keyword && didMount) {
    router.replace('/')
  }

  return (
    <Layout>
      <HomeTemplate>
        <SeacrhedChannelCards keyword={keyword as string} />
      </HomeTemplate>
    </Layout>
  )
}

export default SearchPage
