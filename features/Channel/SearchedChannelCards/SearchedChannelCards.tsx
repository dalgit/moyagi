import { NotificationBox, BoxType, Spinner } from 'components/common'
import useChannelsByKeword from 'hooks/queries/useChannelsByKeword'
import ChannelCards from '../ChannelCards/ChannelCards'

interface SearchedChannelCardsProps {
  keyword: string
}

const SearchedChannelCards = ({ keyword }: SearchedChannelCardsProps) => {
  const { data: channels = [], isLoading } = useChannelsByKeword(keyword)

  if (isLoading) return <Spinner />

  if (!channels.length)
    return (
      <NotificationBox title="검색된 채널이 없습니다." type={BoxType.empty} />
    )

  return <ChannelCards channels={channels} />
}

export default SearchedChannelCards
