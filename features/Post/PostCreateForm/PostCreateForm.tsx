import { useState } from 'react'
import Quill from 'components/common/Quill/Quill'
import { useChannel } from 'hooks/channel'
import useModal from 'hooks/common/useModal'
import { useCreatePost } from 'hooks/post'
import * as S from './style'

const PostCreateForm = () => {
  const { _id: channelId } = useChannel()
  const { mutate: createPostMutate } = useCreatePost(channelId)
  const [content, setContent] = useState<string>('')
  const { closeModal } = useModal()

  const handleSubmit = async () => {
    if (content === '') return
    createPostMutate({ channelId, content })
    closeModal('PostCreateForm')
  }

  return (
    <S.PostCreateFormLayout>
      <Quill setContent={setContent} />
      <S.EventButton onClick={handleSubmit}>작성하기</S.EventButton>
    </S.PostCreateFormLayout>
  )
}

export default PostCreateForm
