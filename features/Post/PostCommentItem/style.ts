import styled from 'styled-components'
import { FImage } from 'components/common'
import { baseHover } from 'styles/constants'

export const PostCommentItemLayout = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f8f9f9;
  padding: 15px;
  gap: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const UserIcon = styled(FImage)`
  min-width: 30px;
  height: 30px;
  border-radius: 50%;

  ${baseHover}
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

export const AtuhorName = styled.span`
  font-weight: bolder;
  font-size: 13px;
`

export const StyledComment = styled.span`
  font-size: 14px;
  white-space: pre-line;
`

export const CommentDate = styled.span`
  color: gray;
  font-size: 11px;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  min-width: fit-content;

  button {
    font-size: 11px;
  }
`
