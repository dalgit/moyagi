import { useState } from 'react'
import { channelDefaultImage } from '@/constants/defaultImage'
import { IChannel } from '@/types/channel'
import * as S from './style'
import Card from '../../common/Card'
import ChannelMembersModal from '../ChannelMembersModal/ChannelMembersModal'

interface ChannelInfoProps {
  channel: IChannel
}

const ChannelDetailCard = ({ channel }: ChannelInfoProps) => {
  const { name, description, manager, address, members, imageUrl } = channel
  const memberCount = members?.length
  const [isModalOpen, setIsModalActive] = useState<boolean>(false)
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
      <S.Member onClick={toggleModal}>멤버 {memberCount}명</S.Member>

      <ChannelMembersModal
        members={members}
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
      />
    </S.ChannelDetailCardLayout>
  )
}

export default ChannelDetailCard
