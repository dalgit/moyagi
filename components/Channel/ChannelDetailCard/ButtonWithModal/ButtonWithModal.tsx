import React, { useState } from 'react'
import Button from '@/components/common/Button'
import PostCreateModal from '@/components/Post/PostCreateModal/PostCreateModal'
import RegistrationModal from '@/components/Registration/RegistrationModal/RegistrationModal'

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
