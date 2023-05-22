import ModalFrame from '@/components/common/Modal/ModalFrame'
import PostCreateForm from './PostCreateForm'

interface PostCreateModal {
  isModalOpen: boolean
  closeModal: () => void
}

const PostCreateModal = ({
  isModalOpen,
  closeModal,
  ...rest
}: PostCreateModal) => {
  return (
    <>
      <ModalFrame isModalOpen={isModalOpen} closeModal={closeModal}>
        <PostCreateForm {...rest} />
      </ModalFrame>
    </>
  )
}

export default PostCreateModal
