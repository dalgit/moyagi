import { NotificationBox, Spinner } from 'components/common'
import useChannelsByKeword from 'hooks/channel/useChannelsByKeword'
import ChannelCards from '../ChannelCards/ChannelCards'

interface SearchedChannelCardsProps {
  keyword: string
}

const SearchedChannelCards = ({ keyword }: SearchedChannelCardsProps) => {
  const { data: channels = [], isLoading } = useChannelsByKeword(keyword)

  if (isLoading) return <Spinner />

  if (!channels.length)
    return <NotificationBox title="검색된 채널이 없습니다." type="empty" />

  return <ChannelCards channels={channels} />
}

export default SearchedChannelCards
