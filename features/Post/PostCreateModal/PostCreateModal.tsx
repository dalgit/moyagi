import { ModalFrame } from 'components/common'
import PostCreateForm from './Components/PostCreateForm'

interface PostCreateModalProps {
  isModalOpen: boolean
  closeModal: () => void
  channelId: string
}

const PostCreateModal = ({
  isModalOpen,
  closeModal,
  ...rest
}: PostCreateModalProps) => {
  return (
    <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
      <PostCreateForm {...rest} />
    </ModalFrame>
  )
}

export default PostCreateModal
