import { useRecoilValue } from 'recoil'
import { Button, Card } from 'components/common'
import { channelDefaultImage } from 'constants/defaultImage'
import useModal from 'hooks/common/useModal'
import { isMemberSelector } from 'recoil/channel/isMemberSelector'
import { IChannel } from 'types/channel'
import * as S from './style'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelDetailCard = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, members, imageUrl } = channel
  const isMember = useRecoilValue(isMemberSelector)
  const { openModal } = useModal()

  const handlePostCreateModalOpen = () => {
    openModal('PostCreateForm')
  }

  const handleRegistrationModalOpen = () => {
    openModal('RegistrationForm')
  }

  const handleMembersModalOpen = () => {
    openModal('channelMemberList')
  }

  return (
    <div>
      <S.ChannelDetailCardLayout>
        <Card
          width="100%"
          title={name}
          href={address}
          imageSrc={imageUrl || channelDefaultImage}
          hasBoxShadow={false}
        />
        <S.Description>{description}</S.Description>
        <S.Member>매니저 {manager.name}</S.Member>
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
