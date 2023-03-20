import styled from 'styled-components'
import FeedHeader from './FeedHeader/FeedHeader'
import FeedContent from './FeedContent/FeedContent'
import FeedComment from './FeedCommentBox/FeedCommentBox'
import FeedCommentStatus from './FeedCommentStatus/FeedCommentStatus'

const Feed = () => {
  return (
    <FeedLayout>
      <FeedHeader />
      <FeedContent />
      <FeedCommentStatus />
      <FeedComment />
    </FeedLayout>
  )
}

export default Feed

const FeedLayout = styled.div`
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
