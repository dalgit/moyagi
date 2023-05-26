import { ModalFrame } from 'components/common'
import RegistrationForm from './RegistrationForm'

interface RegistrationModalProps {
  isModalOpen: boolean
  closeModal: () => void
  channelId: string
  isPublic: boolean
}

const RegistrationModal = ({
  isModalOpen,
  closeModal,
  ...rest
}: RegistrationModalProps) => {
  return (
    <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
      <RegistrationForm {...rest} />
    </ModalFrame>
  )
}

export default RegistrationModal
