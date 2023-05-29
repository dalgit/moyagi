import { useRouter } from 'next/router'
import { HomeTemplate, Layout } from 'components/Template'
import { SearchedChannelCards } from 'features/Channel'
import { useDidMount } from 'hooks/common'

const SearchPage = () => {
  const router = useRouter()
  const didMount = useDidMount()
  const keyword = router.query.keyword

  if (!keyword && didMount) {
    router.replace('/')
  }

  return (
    <Layout>
      <HomeTemplate>
        <SearchedChannelCards keyword={keyword as string} />
      </HomeTemplate>
    </Layout>
  )
}

export default SearchPage
