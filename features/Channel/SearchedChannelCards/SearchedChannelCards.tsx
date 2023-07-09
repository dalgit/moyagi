import { useRouter } from 'next/router'
import { ViewBoundary } from 'components/common/Boundary/ViewBoundary'
import useChannelsByKeword from 'hooks/channel/useChannelsByKeword'
import ChannelCards from '../ChannelCards/ChannelCards'

const SearchedChannelCards = () => {
  const keyword = useKeyword()

  const { data: channels = [] } = useChannelsByKeword(keyword as string, {
    suspense: true,
    enabled: !!keyword,
  })

  return (
    <ViewBoundary view="searchedChannels" data={channels}>
      <ChannelCards channels={channels} />
    </ViewBoundary>
  )
}

export default SearchedChannelCards

const useKeyword = () => {
  const router = useRouter()
  const { keyword } = router.query

  return keyword
}
