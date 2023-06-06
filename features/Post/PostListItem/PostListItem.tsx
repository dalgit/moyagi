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
  return (
    <S.PostListItemLayout>
      <PostHeader post={post} />
      <PostContent content={post.content} />
      <PostCommentList comments={post.comments} />
      <PostCommentForm postId={post._id} />
    </S.PostListItemLayout>
  )
}

export default PostListItem
