import Portal from './Portal'
import * as S from './style'

interface ModalFrameProps {
  children: React.ReactNode
  isModalOpen: boolean
  closeModal: () => void
}

const ModalFrame = ({ children, isModalOpen, closeModal }: ModalFrameProps) => {
  if (!isModalOpen) return null

  return (
    <Portal>
      <S.Blur onClick={closeModal} />
      <S.ChildrenWrapper>
        {children}
        <S.ExitIcon onClick={closeModal} />
      </S.ChildrenWrapper>
    </Portal>
  )
}

export default ModalFrame
