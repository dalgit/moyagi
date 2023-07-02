import styled from 'styled-components'
import { Avatar } from 'components/common'

export const UserNavLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const UserAvatar = styled(Avatar)`
  flex-direction: row-reverse;
  font-weight: lighter;
`
