import styled from 'styled-components'
import { IPost } from '@/types/post'
import PostCommentBox from './PostCommentBox/PostCommentBox'
import PostCommentStatus from './PostCommentStatus/PostCommentStatus'
import PostContent from './PostContent/PostContent'
import PostHeader from './PostHeader/PostHeader'

interface PostProps {
  post: IPost
}

const Post = ({ post }: PostProps) => {
  return (
    <PostLayout>
      <PostHeader author={post.author} />
      <PostContent content={post.content} />
      <PostCommentStatus />
      <PostCommentBox />
    </PostLayout>
  )
}

export default Post

const PostLayout = styled.div`
  max-width: 550px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
