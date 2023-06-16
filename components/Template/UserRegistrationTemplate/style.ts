import styled from 'styled-components'
import { NotificationBox as Box } from 'components/common'

export const UserRegistrationTemplateLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 0;
  margin: auto;
  max-width: 700px;
`

export const NotificationBox = styled(Box)`
  height: 100%;
`
