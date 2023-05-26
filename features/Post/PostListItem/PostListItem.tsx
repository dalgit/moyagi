import { IPost } from 'types/post'
import * as S from './style'
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
    </S.PostListItemLayout>
  )
}

export default PostListItem
