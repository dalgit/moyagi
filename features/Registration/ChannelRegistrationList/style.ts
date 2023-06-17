import styled from 'styled-components'
import RegistrationList from '../RegistrationList/RegistrationList'

export const ChannelRegistrationListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: auto;
  max-width: 500px;
  min-width: 300px;
`

export const StyledRegistrationList = styled(RegistrationList)`
  overflow: auto;
  max-height: 350px;
  padding-right: 5px;
`
