import { GrClose } from 'react-icons/gr'
import styled from 'styled-components'

export const Blur = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
`

export const ChildrenWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background-color: white;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
`

export const ExitIcon = styled(GrClose)`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 5px;
  right: 5px;

  color: gray;

  :hover {
    cursor: pointer;
  }
`