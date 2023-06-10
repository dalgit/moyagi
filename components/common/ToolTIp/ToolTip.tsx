import { useState } from 'react'
import { TooltipIconProps } from './style'
import * as S from './style'

interface TooltipProps extends TooltipIconProps {
  content: string
}

const ToolTip = ({ content, type }: TooltipProps) => {
  const [hover, setHover] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <S.TooltipLayout
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.TooltipIcon type={type} alt="tooltip" />
      {hover && <S.StyledContent>{content}</S.StyledContent>}
    </S.TooltipLayout>
  )
}

export default ToolTip
