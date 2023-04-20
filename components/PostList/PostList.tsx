import styled from 'styled-components'
import Post from '../Post/Post'

const PostList = ({ posts }: any) => {
  return (
    <PostListLayout>
      {posts?.map((post: any, index: number) => (
        <Post key={index} post={post} />
      ))}
    </PostListLayout>
  )
}

export default PostList

const PostListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
