import { useRecoilValue } from 'recoil'
import { isMemberSelector } from 'recoil/channel/isMemberSelector'
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
  const isMember = useRecoilValue(isMemberSelector)

  return (
    <S.PostListItemLayout>
      <PostHeader post={post} />
      <PostContent content={post.content} />
      <PostCommentList postId={post._id} comments={post.comments} />
      {isMember && <PostCommentForm postId={post._id} />}
    </S.PostListItemLayout>
  )
}

export default PostListItem
