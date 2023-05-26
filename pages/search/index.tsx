import { useRouter } from 'next/router'
import { HomeTemplate, Layout } from 'components/Template'
import { SearchedChannelCards } from 'features/Channel'
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
        <SearchedChannelCards keyword={keyword as string} />
      </HomeTemplate>
    </Layout>
  )
}

export default SearchPage
