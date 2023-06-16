import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { USER_PATH } from 'constants/paths'
import useModal from 'hooks/common/useModal'
import { isMemberSelector } from 'recoil/channel/isMemberSelector'
import userIdSelector from 'recoil/user/userIdSelector'
import { IChannel } from 'types/channel'
import { withChannel } from 'utils/common/withDefaultImage'
import * as S from './style'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelDetailCard = ({ channel }: ChannelInfoProps) => {
  const { description, manager, members } = channel
  const { openModal } = useModal()
  const isMember = useRecoilValue(isMemberSelector)
  const router = useRouter()
  const userId = useRecoilValue(userIdSelector)

  const handlePostCreateModalOpen = () => {
    openModal('PostCreateForm')
  }

  const handleRegistrationModalOpen = () => {
    if (!userId) {
      router.push(`/login`)
    } else {
      openModal('RegistrationForm')
    }
  }

  const handleMembersModalOpen = () => {
    openModal('channelMemberList')
  }

  const handleManagerClick = () => {
    router.push(`${USER_PATH}/${manager._id}`)
  }

  return (
    <S.ChannelDetailCardLayout>
      <S.ChannelDetailCardImage src={withChannel(channel.imageUrl)} />
      <S.Title>{channel.name}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Member onClick={handleManagerClick}>매니저 {manager.name}</S.Member>
      <S.Member onClick={handleMembersModalOpen}>
        멤버 {members?.length}명
      </S.Member>
      {isMember ? (
        <Button onClick={handlePostCreateModalOpen}>작성하기</Button>
      ) : (
        <Button onClick={handleRegistrationModalOpen}>가입하기</Button>
      )}
    </S.ChannelDetailCardLayout>
  )
}

export default ChannelDetailCard
