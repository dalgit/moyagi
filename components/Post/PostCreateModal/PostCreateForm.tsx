import { useState } from 'react'
import styled from 'styled-components'
import Button from '@/components/common/Button'
import Quill from '@/components/common/Quill/Quill'
import { useCreatePost } from '@/hooks/mutations/useCreaetePost'
import { quillModal } from '@/styles/constants'

const PostCreateForm = ({ channelId }: { channelId: string }) => {
  const { mutate: createPostMutate } = useCreatePost(channelId)
  const [content, setContent] = useState<string>('')

  const handleSubmit = async () => {
    createPostMutate({ channelId, content })
  }

  return (
    <PostCreateFormLayout>
      <Quill setContent={setContent} />
      <EventButton onClick={handleSubmit}>작성하기</EventButton>
    </PostCreateFormLayout>
  )
}

export default PostCreateForm

const PostCreateFormLayout = styled.div`
  ${quillModal}
`

const EventButton = styled(Button)`
  width: 100%;
`
