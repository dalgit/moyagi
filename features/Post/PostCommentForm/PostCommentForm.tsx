import { useRecoilValue } from 'recoil'
import { Avatar } from 'components/common'
import TextArea from 'components/common/TextArea/TextArea'
import { send } from 'constants/icon'
import { useChannel } from 'hooks/channel'
import useContent from 'hooks/common/useContent'
import useCreateComment from 'hooks/post/useCreateComment'
import userAtom from 'recoil/user/userAtom'
import * as S from './style'

interface PostCommentProps {
  postId: string
}

const PostCommentForm = ({ postId }: PostCommentProps) => {
  const { handleContentChange, content, handleContentSubmit } = useContent()
  const { mutate: commentMutate } = useCreateComment()
  const { imageUrl } = useRecoilValue(userAtom)
  const { _id: channelId } = useChannel()

  const handleClickSend = () =>
    handleContentSubmit(() => commentMutate({ channelId, postId, content }))

  return (
    <S.PostCommentLayout>
      <Avatar image={imageUrl} type="user" size={25} />
      <TextArea value={content} onChange={handleContentChange} />
      <S.Send onClick={handleClickSend} src={send} />
    </S.PostCommentLayout>
  )
}

export default PostCommentForm
