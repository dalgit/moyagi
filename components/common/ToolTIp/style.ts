import styled from 'styled-components'
import { question, exclamation } from 'constants/icon'
import FImage from '../FImage/FImage'

type TooltipType = 'info' | 'question'

export interface TooltipIconProps {
  type: TooltipType
}

export const TooltipLayout = styled.div`
  position: relative;
`

export const TooltipIcon = styled(FImage).attrs<TooltipIconProps>(
  ({ type }) => ({
    src: TooltipIconTypes[type],
  }),
)<TooltipIconProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #e1e3e7;

  :hover {
    cursor: pointer;
  }
`

const TooltipIconTypes: Record<TooltipType, string> = {
  info: exclamation,
  question: question,
}

export const StyledContent = styled.span`
  z-index: 10;
  position: absolute;

  top: -100%;
  left: 50%;
  transform: translate(-50%, -100%);

  padding: 15px;

  box-shadow: 0px 0px 6px 0px #00000040;
  border-radius: 5px;

  background-color: white;
  color: gray;

  ::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #ffff;
    z-index: inherit;
    border-radius: inherit;

    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%) rotate(-45deg);
  }
`
