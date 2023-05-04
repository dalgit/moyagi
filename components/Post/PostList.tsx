import styled from 'styled-components'
import { useGetMyPosts } from '@/hooks/queries/useGetMyPosts'
import { IPost } from '@/types/post'
import Post from './Post'

interface PostListProps {
  posts: IPost[]
}

export const MyPostList = () => {
  const { data: posts = [] } = useGetMyPosts()
  return <PostList posts={posts} />
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <PostListLayout>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </PostListLayout>
  )
}

const PostListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 550px;
`
