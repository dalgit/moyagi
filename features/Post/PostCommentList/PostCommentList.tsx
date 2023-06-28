import { useChannel } from 'hooks/channel'
import useCommentsQuery from 'hooks/post/useCommentsQuery'
import { IPost } from 'types/post'
import * as S from './style'
import PostCommentItem from '../PostCommentItem/PostCommentItem'

type PostCommentListProps = Pick<IPost, 'postId'>

const PostCommentList = ({ postId }: PostCommentListProps) => {
  const { _id: channelId } = useChannel()
  const { data: comments } = useCommentsQuery(channelId, postId)

  return (
    <S.PostCommentListLayout>
      {comments?.map((comment) => (
        <PostCommentItem key={comment._id} postId={postId} comment={comment} />
      ))}
    </S.PostCommentListLayout>
  )
}

export default PostCommentList
