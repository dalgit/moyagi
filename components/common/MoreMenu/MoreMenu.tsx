import { ReactNode } from 'react'
import { useMenu } from 'hooks/common'
import * as S from './style'

interface MoreMenuProps {
  children: ReactNode
}

const MoreMenu = ({ children }: MoreMenuProps) => {
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()

  return (
    <S.MoreMenuLayout ref={ref}>
      <S.MoreIcon onClick={handleMenuClick} />
      {isMenuOpen && <S.MenuList>{children}</S.MenuList>}
    </S.MoreMenuLayout>
  )
}

export default MoreMenu
