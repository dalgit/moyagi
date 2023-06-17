import { Children, cloneElement, ReactElement } from 'react'
import { useMenu } from 'hooks/common'
import * as S from './style'

interface MoreMenuProps {
  children: ReactElement | ReactElement[]
}

const MoreMenu = ({ children }: MoreMenuProps) => {
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()

  const handleChildClick = (child: ReactElement) => {
    child.props?.onClick?.()
    handleMenuClick()
  }

  return (
    <S.MoreMenuLayout ref={ref}>
      <S.MoreIcon onClick={handleMenuClick} />
      {isMenuOpen && (
        <S.MenuList>
          {Children?.map(children, (child) =>
            cloneElement(child, {
              onClick: () => handleChildClick(child),
            }),
          )}
        </S.MenuList>
      )}
    </S.MoreMenuLayout>
  )
}

export default MoreMenu
