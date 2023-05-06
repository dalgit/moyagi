import styled from 'styled-components'
import { useChannelPosts } from '@/hooks/queries/useChannelPosts'
import { useMyPosts } from '@/hooks/queries/useMyPosts'
import { IPost } from '@/types/post'
import Post from './Post'

interface PostListProps {
  posts: IPost[]
}

interface ChannelPostListProps {
  channelId: string
}

export const ChannelPostList = ({ channelId }: ChannelPostListProps) => {
  const { data: posts = [] } = useChannelPosts(channelId)
  return <PostList posts={posts} />
}

export const MyPostList = () => {
  const { data: posts = [] } = useMyPosts()
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
