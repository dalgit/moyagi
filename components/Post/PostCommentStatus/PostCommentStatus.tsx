import styled from 'styled-components'

const PostCommentStatus = () => {
  return (
    <PostCommentStatusLayout>
      <div>TMP 3</div>
      <div>댓글 5</div>
    </PostCommentStatusLayout>
  )
}

export default PostCommentStatus

const PostCommentStatusLayout = styled.div`
  display: flex;
  gap: 0 20px;
`
