import { useState, ChangeEvent } from 'react'
import { useRecoilValue } from 'recoil'
import TextArea from 'components/common/TextArea/TextArea'
import { userDefaultImage } from 'constants/defaultImage'
import { send } from 'constants/icon'
import useCreateComment from 'hooks/post/useCreateComment'
import channelIdSelector from 'recoil/channel/channelIdSelector'
import userSelector from 'recoil/user/userSelector'
import * as S from './style'

interface PostCommentProps {
  postId: string
}

const PostCommentForm = ({ postId }: PostCommentProps) => {
  const [comment, setComment] = useState<string>('')
  const { mutate: commentMutate } = useCreateComment()
  const { imageUrl } = useRecoilValue(userSelector)
  const channelId = useRecoilValue(channelIdSelector)

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = () => {
    commentMutate({ channelId, postId, content: comment })
  }

  return (
    <S.PostCommentLayout>
      <S.UserIcon alt="userImage" src={imageUrl || userDefaultImage} />
      <TextArea value={comment} onChange={handleCommentChange} />
      <S.Send onClick={handleCommentSubmit} src={send} />
    </S.PostCommentLayout>
  )
}

export default PostCommentForm
