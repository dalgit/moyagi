import styled from 'styled-components'

export const Text = styled.span<{ isActive: boolean }>`
  display: block;
  padding: 2px;
  color: red;
  text-align: center;
  font-size: 11px;
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`
