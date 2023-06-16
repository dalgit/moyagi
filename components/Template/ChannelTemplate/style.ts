import styled from 'styled-components'
import { Button } from 'components/common'

export const ChannelTemplateLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 50px 0;
  min-height: 100%;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start;
    align-items: center;
  }
`

export const SubButton = styled(Button)`
  display: flex;
  margin: 0 auto;
`
