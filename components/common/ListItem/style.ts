import styled from 'styled-components'
import { baseHover } from 'styles/constants'

export const ListItemLayout = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 5px;
  gap: 5px;

  ${baseHover}
`
