import styled from 'styled-components'

export const PostListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;

  @media ${({ theme }) => theme.device.laptop} {
    max-width: 550px;
    margin: 0 20px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 20px;
  }
`
