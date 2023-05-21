import { channelDefaultImage } from '@/constants/defaultImage'
import * as S from './style'

interface ChannelListItemProps {
  title: string
  image?: string
}

const ChannelListItem = ({
  title,
  image = channelDefaultImage,
}: ChannelListItemProps) => (
  <S.ChannelListItemLayout>
    <S.ChannelImage src={image} />
    <S.Title>{title}</S.Title>
  </S.ChannelListItemLayout>
)

export default ChannelListItem
