import styled from 'styled-components'

const PostContent = ({ content }: any) => {
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
