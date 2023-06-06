import styled from 'styled-components'
import { FImage } from 'components/common'
import UserAvatar from 'features/User/UserAvatar/UserAvatar'
import { baseHover } from 'styles/constants'

export const PostCommentItemLayout = styled.div`
  display: flex;
  background-color: #f8f9f9;
  padding: 15px;
  gap: 10px;
`

export const UserIcon = styled(FImage)`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  ${baseHover}
`

export const Usera = styled(UserAvatar)`
  height: 25px;
`

export const Wrapper = styled.div`
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
`
