import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import HomeTemplate from '@/components/Template/HomeTemplate/HomeTemplate'
import useDidMount from '@/hooks/useDidMount'

const SeacrhedChannelCards = dynamic(
  () =>
    import('@/components/Channel/SeacrhedChannelCards/SeacrhedChannelCards'),
  { ssr: false },
)

const SearchPage = () => {
  const router = useRouter()
  const keyword = router.query.keyword
  const didMount = useDidMount()

  if (!keyword && didMount) {
    router.replace('/')
  }

  return (
    <HomeTemplate>
      <SeacrhedChannelCards keyword={keyword as string} />
    </HomeTemplate>
  )
}

export default SearchPage
