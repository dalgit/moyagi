import styled from 'styled-components'

export const ChildrenLayout = styled.div`
  padding: 55px 180px 0 180px;
  height: 100%;

  @media ${({ theme }) => theme.device.tabletMax} {
    padding: 55px 10px 0 10px;
  }
`
