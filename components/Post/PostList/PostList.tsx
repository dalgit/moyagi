import { IPost } from '@/types/post'
import * as S from './style'
import PostListItem from '../PostListItem/PostListItem'

interface PostListProps {
  posts: IPost[]
}
const PostList = ({ posts }: PostListProps) => {
  return (
    <S.PostListLayout>
      {posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </S.PostListLayout>
  )
}

export default PostList
