import styled from 'styled-components'

export const ChannelCardsLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  grid-gap: 55px;
  justify-items: center;

  margin: 40px 0;

  @media ${({ theme }) => theme.device.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 55px;
    padding: 30px;
  }
`
