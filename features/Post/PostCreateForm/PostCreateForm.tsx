import Quill from 'components/common/Quill/Quill'
import { useChannel } from 'hooks/channel'
import useContent from 'hooks/common/useContent'
import useModal from 'hooks/common/useModal'
import { useCreatePost } from 'hooks/post'
import * as S from './style'

const PostCreateForm = () => {
  const { _id: channelId } = useChannel()
  const { mutate: createPostMutate } = useCreatePost()
  const { content, setContent, handleContentSubmit } = useContent()
  const { closeModal } = useModal()

  const handleClickButton = () => {
    handleContentSubmit(() => {
      createPostMutate({ channelId, content })
      closeModal('PostCreateForm')
    })
  }

  return (
    <S.PostCreateFormLayout>
      <Quill setContent={setContent} />
      <S.EventButton onClick={handleClickButton}>작성하기</S.EventButton>
    </S.PostCreateFormLayout>
  )
}

export default PostCreateForm
