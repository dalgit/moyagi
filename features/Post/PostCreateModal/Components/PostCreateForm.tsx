import { useState } from 'react'
import Quill from 'components/common/Quill/Quill'
import { useCreatePost } from 'hooks/mutations/useCreaetePost'
import * as S from '../style'

const PostCreateForm = ({ channelId }: { channelId: string }) => {
  const { mutate: createPostMutate } = useCreatePost(channelId)
  const [content, setContent] = useState<string>('')

  const handleSubmit = async () => {
    createPostMutate({ channelId, content })
  }

  return (
    <S.PostCreateFormLayout>
      <Quill setContent={setContent} />
      <S.EventButton onClick={handleSubmit}>작성하기</S.EventButton>
    </S.PostCreateFormLayout>
  )
}

export default PostCreateForm
