import { IPost } from 'types/post'
import * as S from './style'
import PostListItem from '../PostListItem/PostListItem'

interface PostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: PostListProps) => {
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return (
    <S.PostListLayout>
      {sortedPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </S.PostListLayout>
  )
}

export default PostList
