import styled from 'styled-components'

interface PostContentProps {
  content: string
}

const PostContent = ({ content }: PostContentProps) => {
  return <PostContentLayout dangerouslySetInnerHTML={{ __html: content }} />
}

export default PostContent

const PostContentLayout = styled.div`
  min-height: 50px;

  img {
    max-width: 100%;
    max-height: 400px;
  }
`
