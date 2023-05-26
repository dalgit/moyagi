import styled from 'styled-components'
import Button from 'components/common/Button/Button'

export const RegistrationLayout = styled.div<{ status: string }>`
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 0.5px solid rgba(27, 31, 35, 0.15);
  opacity: ${({ status }) => status !== 'pending' && 0.3};

  position: relative;
`

export const Message = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`

export const Buttons = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`

export const CancleButton = styled(Button)`
  width: 40px;
  font-size: 10px;

  position: absolute;
  right: 5px;
  bottom: 5px;
`
