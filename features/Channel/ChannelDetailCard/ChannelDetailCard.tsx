import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Button } from 'components/common'
import { channelDefaultImage } from 'constants/defaultImage'
import useModal from 'hooks/common/useModal'
import { isMemberSelector } from 'recoil/channel/isMemberSelector'
import userAtom from 'recoil/user/userAtom'
import userIdSelector from 'recoil/user/userIdSelector'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelDetailCard = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, members, imageUrl } = channel
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
    router.push(`/users/${manager._id}`)
  }

  return (
    <div>
      <S.ChannelDetailCardLayout>
        <S.StyledCard
          title={name}
          href={address}
          image={imageUrl || channelDefaultImage}
          hasBoxShadow={false}
        />
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
    </div>
  )
}

export default ChannelDetailCard
