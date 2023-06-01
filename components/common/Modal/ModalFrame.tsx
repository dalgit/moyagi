import useModal from 'hooks/common/useModal'
import { ModalKeys } from 'recoil/modal/modalTypes'
import Portal from './Portal'
import * as S from './style'

interface ModalFrameProps {
  children: React.ReactNode
  modalKey: ModalKeys
}

const ModalFrame = ({ children, modalKey }: ModalFrameProps) => {
  const { closeModal } = useModal()

  const handleModalClose = () => {
    closeModal(modalKey)
  }
  return (
    <Portal>
      <S.Blur onClick={handleModalClose} />
      <S.ChildrenWrapper>
        {children}
        <S.ExitIcon onClick={handleModalClose} />
      </S.ChildrenWrapper>
    </Portal>
  )
}

export default ModalFrame
