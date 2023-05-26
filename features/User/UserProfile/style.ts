import styled from 'styled-components'
import FImage from 'components/common/FImage/FImage'

export const UserProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export const ProfileImage = styled(FImage)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`
