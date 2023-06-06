import styled from 'styled-components'
import { FImage } from 'components/common'

export const PostCommentLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  textarea {
    border: 1px solid #e2e3e7;
    font-size: 14px;
  }
`

export const Send = styled(FImage)`
  margin-top: 8px;
  min-width: 25px;
  height: 25px;
  cursor: pointer;
`

export const UserIcon = styled(Send)`
  border-radius: 50%;
`
