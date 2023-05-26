import { ReactNode } from 'react'
import { FiMoreHorizontal as MoreIcon } from 'react-icons/fi'
import useMenu from 'hooks/useMenu'
import * as S from './style'

interface MoreMenuProps {
  children: ReactNode
}

const MoreMenu = ({ children }: MoreMenuProps) => {
  const { isMenuOpen, handleMenuClick, ref } = useMenu<HTMLDivElement>()

  return (
    <S.MoreMenuLayout ref={ref}>
      <MoreIcon onClick={handleMenuClick} />
      {isMenuOpen && <S.MenuList>{children}</S.MenuList>}
    </S.MoreMenuLayout>
  )
}

export default MoreMenu
