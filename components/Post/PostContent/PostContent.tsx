import styled from 'styled-components'

interface PostContentProps {
  content: string
}

const PostContent = ({ content }: PostContentProps) => {
  return (
    <PostContentLayout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostContentLayout>
  )
}

export default PostContent

const PostContentLayout = styled.div`
  min-height: 50px;
`
