import styled from 'styled-components'

export const ChannelListLayout = styled.ul`
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  overflow: auto;
  li:not(:last-child) {
    border-bottom: 0.5px solid rgba(27, 31, 35, 0.15);
  }
`
