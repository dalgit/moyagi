import styled from 'styled-components'
import { useGetChannelPosts } from '@/hooks/queries/useGetChannelPosts'
import Post from '../Post/Post'

interface PostListProps {
  channelId: string
}

const PostList = ({ channelId }: PostListProps) => {
  const { data: posts = [] } = useGetChannelPosts(channelId)

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
