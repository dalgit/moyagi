import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import Quill from 'components/common/Quill/Quill'
import { useCreatePost } from 'hooks/post'
import channelAtom from 'recoil/channel/channelAtom'
import * as S from './style'

const PostCreateForm = () => {
  const { _id: channelId } = useRecoilValue(channelAtom)
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
