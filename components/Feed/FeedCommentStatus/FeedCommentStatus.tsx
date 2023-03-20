import styled from 'styled-components'

const FeedCommentStatus = () => {
  return (
    <FeedCommentStatusLayout>
      <div>TMP 3</div>
      <div>댓글 5</div>
    </FeedCommentStatusLayout>
  )
}

export default FeedCommentStatus

const FeedCommentStatusLayout = styled.div`
  display: flex;
  gap: 0 20px;
`
