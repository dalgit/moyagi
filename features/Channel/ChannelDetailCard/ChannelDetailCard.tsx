import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { USER_PATH } from 'constants/paths'
import { useChannel } from 'hooks/channel'
import { useIsMember } from 'hooks/channel/useChannelData'
import useModal from 'hooks/common/useModal'
import userIdSelector from 'recoil/user/userIdSelector'
import { withChannel } from 'utils/common/withDefaultImage'
import * as S from './style'

const DynamicButton = dynamic(
  () => import('components/common').then((module) => module.Button),
  { ssr: false },
)

const ChannelDetailCard = () => {
  const { description, manager, members, imageUrl, name } = useChannel()
  const { openModal } = useModal()
  const isMember = useIsMember()
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
      <S.ChannelDetailCardImage src={withChannel(imageUrl)} />
      <S.Title>{name}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Member onClick={handleManagerClick}>매니저 {manager?.name}</S.Member>
      <S.Member onClick={handleMembersModalOpen}>
        멤버 {members?.length}명
      </S.Member>
      {isMember ? (
        <DynamicButton onClick={handlePostCreateModalOpen}>
          작성하기
        </DynamicButton>
      ) : (
        <DynamicButton onClick={handleRegistrationModalOpen}>
          가입하기
        </DynamicButton>
      )}
    </S.ChannelDetailCardLayout>
  )
}

export default ChannelDetailCard
