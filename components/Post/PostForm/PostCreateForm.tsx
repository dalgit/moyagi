import { useState } from 'react'
import styled from 'styled-components'
import Quill from '@/components/CustomQuill/Quill'
import { useCreatePost } from '@/hooks/mutations/useCreaetePost'

const PostCreateForm = ({ channelId }: { channelId: string }) => {
  const { mutate: createPostMutate } = useCreatePost(channelId)
  const [content, setContent] = useState<string>('')

  const handleSubmit = async () => {
    createPostMutate({ channelId, content })
  }

  return (
    <QuillRayout>
      <Quill setContent={setContent} />
      <button onClick={handleSubmit}>작성하기</button>
    </QuillRayout>
  )
}

export default PostCreateForm

const QuillRayout = styled.div`
  width: 600px;
  height: 600px;
`
