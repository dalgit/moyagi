import styled from 'styled-components'
import { IPost } from '@/types/post'
import PostContent from './PostContent/PostContent'
import PostHeader from './PostHeader/PostHeader'

interface PostProps {
  post: IPost
}

const Post = ({ post }: PostProps) => {
  return (
    <PostLayout>
      <PostHeader post={post} />
      <PostContent content={post.content} />
    </PostLayout>
  )
}

export default Post

const PostLayout = styled.div`
  max-width: 550px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f2f3f5;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
