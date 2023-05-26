import styled from 'styled-components'
import { FImage } from 'components/common'
import { baseHover } from 'styles/constants'

export const UserListItemLayout = styled.li`
  display: flex;
  background-color: white;
  padding: 5px;
  gap: 5px;

  ${baseHover}
`

export const Name = styled.span`
  padding: 5px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const ProfileImage = styled(FImage)`
  border-radius: 50%;
  min-width: 30px;
  height: 30px;
`
