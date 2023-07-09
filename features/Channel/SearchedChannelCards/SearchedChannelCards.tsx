import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Spinner } from 'components/common'
import { ViewBoundary } from 'components/common/Boundary/ViewBoundary'
import { CHANNEL_SEARCH_PATH } from 'constants/paths'
import useChannelsByKeword from 'hooks/channel/useChannelsByKeword'
import { useRouterEffect } from 'hooks/common'
import ChannelCards from '../ChannelCards/ChannelCards'

const SearchedChannelCards = () => {
  const [isFetching, setIsFetching] = useState(true)
  const router = useRouter()
  const { keyword } = router.query

  const { data: channels = [] } = useChannelsByKeword(keyword as string, {
    suspense: true,
  })

  useRouterEffect((url) => {
    if (url.startsWith(CHANNEL_SEARCH_PATH)) {
      setIsFetching(true)
    }
  })

  useEffect(() => {
    setIsFetching(false)
  }, [channels])

  if (isFetching) {
    return <Spinner />
  }

  return (
    <ViewBoundary view="searchedChannels" data={channels}>
      <ChannelCards channels={channels} />
    </ViewBoundary>
  )
}

export default SearchedChannelCards
