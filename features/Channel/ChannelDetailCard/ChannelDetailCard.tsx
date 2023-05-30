import { useState } from 'react'
import { Card } from 'components/common'
import { channelDefaultImage } from 'constants/defaultImage'
import { useMember } from 'hooks/channel'
import { IChannel } from 'types/channel'
import ButtonWithModal from './ButtonWithModal/ButtonWithModal'
import * as S from './style'
import ChannelMembersModal from '../ChannelMembersModal/ChannelMembersModal'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelDetailCard = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, isPublic, members, imageUrl } =
    channel
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)
  const isMember = useMember(channel)
  const toggleModal = () => setIsModalActive(!isModalOpen)

  return (
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
      <S.Member onClick={toggleModal}>멤버 {members?.length}명</S.Member>
      <ChannelMembersModal
        members={members}
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
      />
      <ButtonWithModal
        isMember={isMember}
        channelId={channel._id}
        isPublic={isPublic}
      />
    </S.ChannelDetailCardLayout>
  )
}

export default ChannelDetailCard
