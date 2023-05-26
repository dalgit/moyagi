import React from 'react'
import {
  BoxType,
  NotificationBox,
} from 'components/common/NotificationBox/NotificationBox'
import Spinner from 'components/common/Spinner/Spinner'
import useChannelsByKeword from 'hooks/queries/useChannelsByKeword'
import ChannelCards from '../../../../features/Channel/ChannelCards/ChannelCards'

interface SeacrhedChannelCardsProps {
  keyword: string
}

const SeacrhedChannelCards = ({ keyword }: SeacrhedChannelCardsProps) => {
  const { data: channels = [], isLoading } = useChannelsByKeword(keyword)

  if (isLoading) return <Spinner />

  if (!channels.length)
    return (
      <NotificationBox title="검색된 채널이 없습니다." type={BoxType.empty} />
    )

  return <ChannelCards channels={channels} />
}

export default SeacrhedChannelCards
