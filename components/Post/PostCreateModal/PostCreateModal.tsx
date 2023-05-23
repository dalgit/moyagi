import ModalFrame from '@/components/common/Modal/ModalFrame'
import PostCreateForm from './PostCreateForm'

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
