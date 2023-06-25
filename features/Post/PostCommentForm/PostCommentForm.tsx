import { useState, ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import TextArea from 'components/common/TextArea/TextArea'
import { send } from 'constants/icon'
import { useChannel } from 'hooks/channel'
import useCreateComment from 'hooks/post/useCreateComment'
import userAtom from 'recoil/user/userAtom'
import { withUser } from 'utils/common/withDefaultImage'
import * as S from './style'

interface PostCommentProps {
  postId: string
}

const PostCommentForm = ({ postId }: PostCommentProps) => {
  const [comment, setComment] = useState<string>('')
  const { mutate: commentMutate } = useCreateComment()
  const { imageUrl } = useRecoilValue(userAtom)
  const { _id: channelId } = useChannel()

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = () => {
    if (comment === '') return
    commentMutate({ channelId, postId, content: comment })
    setComment('')
  }

  return (
    <S.PostCommentLayout>
      <S.UserIcon src={withUser(imageUrl)} />
      <TextArea value={comment} onChange={handleCommentChange} />
      <S.Send onClick={handleCommentSubmit} src={send} />
    </S.PostCommentLayout>
  )
}

export default PostCommentForm
