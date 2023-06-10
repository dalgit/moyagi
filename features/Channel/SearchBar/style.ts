import { RxReset } from 'react-icons/rx'
import styled from 'styled-components'

export const ResetIcon = styled(RxReset)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
export const InputWrapper = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  font-size: 16px;

  input {
    width: 100%;
    height: 100%;
    padding: 0 16px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    border-radius: 5px;

    ::placeholder {
      color: #b5b5b5;
      font-weight: lighter;
    }
  }
`

export const SearchBarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  height: 50px;
  max-width: 100%;

  button {
    width: 60px;
    height: 50px;
    font-size: 16px;
  }
`
