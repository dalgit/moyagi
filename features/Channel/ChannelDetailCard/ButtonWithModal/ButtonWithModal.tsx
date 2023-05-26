import PostCreateModal from 'components/Features/Post/PostCreateModal/PostCreateModal'
import React, { useState } from 'react'
import Button from 'components/common/Button/Button'
import RegistrationModal from 'features/Registration/RegistrationModal/RegistrationModal'
import { ChannelCards } from '../../index'

interface ButtonWithModalProps {
  isMember: boolean
  channelId: string
  isPublic: boolean
}

const ButtonWithModal = ({
  isMember,
  channelId,
  isPublic,
}: ButtonWithModalProps) => {
  const buttonTitle = isMember ? '작성하기' : '가입하기'
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const Modal = isMember ? PostCreateModal : RegistrationModal

  return (
    <>
      <Button onClick={toggleModal}>{buttonTitle}</Button>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={toggleModal}
        channelId={channelId}
        isPublic={isPublic}
      />
    </>
  )
}

export default ButtonWithModal
