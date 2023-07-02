import { Children, cloneElement, ReactElement, ElementType } from 'react'
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi'
import { useMenu } from 'hooks/common'
import * as S from './style'

interface MoreMenuProps {
  children: ReactElement | ReactElement[]
  Icon?: ElementType
}

const MoreMenu = ({ children, Icon = MoreIcon }: MoreMenuProps) => {
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()

  const handleChildClick = (child: ReactElement) => {
    child.props?.onClick?.()
    handleMenuClick()
  }

  return (
    <S.MoreMenuLayout ref={ref}>
      <div onClick={handleMenuClick}>
        <Icon />
      </div>
      {isMenuOpen && (
        <ul>
          {Children?.map(children, (child) =>
            cloneElement(child, {
              onClick: () => handleChildClick(child),
            }),
          )}
        </ul>
      )}
    </S.MoreMenuLayout>
  )
}

export default MoreMenu
