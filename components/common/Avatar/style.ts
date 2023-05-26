import styled from 'styled-components'
import { baseHover } from 'styles/constants'
import FImage from '../FImage/FImage'

export const AvatarLayout = styled.div`
  display: flex;
  background-color: white;
  padding: 5px;
  gap: 5px;

  ${baseHover}
`

export const AvatarImage = styled(FImage)`
  border-radius: 50%;
  min-width: 30px;
  height: 30px;
`

export const AvatarName = styled.span`
  padding: 5px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
