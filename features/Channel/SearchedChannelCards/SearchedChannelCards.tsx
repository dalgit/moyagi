import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { NotificationBox, Spinner } from 'components/common'
import { CHANNEL_SEARCH_PATH } from 'constants/paths'
import useChannelsByKeword from 'hooks/channel/useChannelsByKeword'
import { useRouterEffect } from 'hooks/common'
import ChannelCards from '../ChannelCards/ChannelCards'

const SearchedChannelCards = () => {
  const [isFetching, setIsFetching] = useState(true)
  const router = useRouter()
  const { keyword } = router.query
  const isValid = typeof keyword === 'string'

  const { data: channels } = useChannelsByKeword(keyword as string, {
    enabled: isValid,
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

  if (!isValid) {
    return <NotificationBox title="유효한 키워드가 아닙니다." type="sorry" />
  }

  if (!channels?.length) {
    return <NotificationBox title="검색된 채널이 없습니다." type="empty" />
  }

  return <ChannelCards channels={channels} />
}

export default SearchedChannelCards
