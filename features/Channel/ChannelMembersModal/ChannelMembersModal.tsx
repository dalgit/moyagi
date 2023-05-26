import { ModalFrame } from 'components/common'
import { UserList } from 'features/User'
import { IUser } from 'types/user'

interface ChannelMembersModalProps {
  members: IUser[]
  isModalOpen: boolean
  closeModal: any
}

const ChannelMembersModal = ({
  members,
  isModalOpen,
  closeModal,
}: ChannelMembersModalProps) => {
  return (
    <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
      <h2>Members</h2>
      <UserList users={members} />
    </ModalFrame>
  )
}

export default ChannelMembersModal
