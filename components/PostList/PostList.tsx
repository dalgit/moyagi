import styled from 'styled-components'
import { IPost } from '@/types/post'
import Post from '../Post/Post'

interface PostListProps {
  posts: IPost[]
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <PostListLayout>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </PostListLayout>
  )
}

export default PostList

const PostListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 550px;
`
