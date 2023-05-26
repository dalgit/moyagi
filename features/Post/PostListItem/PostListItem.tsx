import { IPost } from 'types/post'
import * as S from './style'
import PostHeader from '../../../Post/PostHeader/PostHeader'
import PostContent from '../PostContent/PostContent'

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
