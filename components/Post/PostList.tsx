import styled from 'styled-components'
import { useChannelPosts } from '@/hooks/queries/useChannelPosts'
import { useMyPosts } from '@/hooks/queries/useMyPosts'
import { IPost } from '@/types/post'
import Post from './Post'
import { EmptyBox } from '../common/EmptyBox'

interface PostListProps {
  posts: IPost[]
}

interface ChannelPostListProps {
  channelId: string
}

export const ChannelPostList = ({ channelId }: ChannelPostListProps) => {
  const { data: posts = [] } = useChannelPosts(channelId, { suspense: true })

  if (!posts.length) {
    return (
      <EmptyBox
        title="작성된 게시물이 없습니다."
        description="첫 글을 작성해보세요"
      />
    )
  }

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
