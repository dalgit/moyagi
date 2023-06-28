import { useIsMember } from 'hooks/channel/useChannelData'
import { IPost } from 'types/post'
import * as S from './style'
import PostCommentForm from '../PostCommentForm/PostCommentForm'
import PostCommentList from '../PostCommentList/PostCommentList'
import PostContent from '../PostContent/PostContent'
import PostHeader from '../PostHeader/PostHeader'

interface PostProps {
  post: IPost
}

const PostListItem = ({ post }: PostProps) => {
  const { _id: postId, author, createdAt, content } = post
  const isMember = useIsMember()

  return (
    <S.PostListItemLayout>
      <PostHeader postId={postId} author={author} createdAt={createdAt} />
      <PostContent content={content} />
      <PostCommentList postId={postId} />
      {isMember && <PostCommentForm postId={postId} />}
    </S.PostListItemLayout>
  )
}

export default PostListItem
