import { useRouter } from 'next/router'
import { USER_PATH } from 'constants/paths'
import { useChannel } from 'hooks/channel'
import useModal from 'hooks/common/useModal'
import { withChannel } from 'utils/common/withDefaultImage'
import ChannelDetailCardButton from './Button'
import * as S from './style'

const ChannelDetailCard = () => {
  const { description, manager, members, imageUrl, name } = useChannel()
  const { openModal } = useModal()
  const router = useRouter()

  const handleMembersClick = () => {
    openModal('channelMemberList')
  }

  const handleManagerClick = () => {
    router.push(`${USER_PATH}/${manager._id}`)
  }

  return (
    <S.ChannelDetailCardLayout>
      <S.ChannelDetailCardImage src={withChannel(imageUrl)} />
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Member onClick={handleManagerClick}>매니저 {manager?.name}</S.Member>
      <S.Member onClick={handleMembersClick}>멤버 {members?.length}명</S.Member>
      <ChannelDetailCardButton />
    </S.ChannelDetailCardLayout>
  )
}

export default ChannelDetailCard
