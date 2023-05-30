import { ModalFrame } from 'components/common'
import UserEditProfile from '../UserEditProfile/UserEditProfile'

interface UserEditProfileModalProps {
  isModalOpen: boolean
  closeModal: () => void
}

const UserEditProfileModal = ({
  isModalOpen,
  closeModal,
  ...rest
}: UserEditProfileModalProps) => {
  return (
    <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
      <h2>프로필 수정</h2>
      <UserEditProfile {...rest} />
    </ModalFrame>
  )
}

export default UserEditProfileModal
