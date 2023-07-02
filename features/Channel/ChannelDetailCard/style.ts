import styled from 'styled-components'
import { FImage } from 'components/common'

export const ChannelDetailCardLayout = styled.div`
  border: 1px solid #f2f3f5;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  height: fit-content;
  gap: 10px;

  @media ${({ theme }) => theme.device.tablet},
    ${({ theme }) => theme.device.laptop} {
    display: flex;
    flex-direction: column;

    min-width: 180px;
    max-width: 180px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    display: grid;
    width: 100%;
    grid-template-columns: auto 1fr;

    & > Button {
      height: 30px;
    }

    & > :nth-child(1) {
      grid-row: 1 / span 5;
      grid-column: 1 / span 1;
      margin: auto;
    }
  }
`

export const ChannelDetailCardImage = styled(FImage)`
  border-radius: 12px;
  aspect-ratio: 1/1;
  width: 150px;
  margin: 0 auto;
`

export const Title = styled.span`
  font-weight: bolder;
  text-align: center;
`

export const Description = styled.span`
  font-size: 14px;
  line-height: 1.5;
  word-break: break-all;
`

export const Member = styled.span`
  display: flex;
  width: fit-content;
  margin-left: auto;
  font-size: 12px;
  color: gray;
  cursor: pointer;
`
