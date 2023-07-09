import { Suspense } from 'react'
import useModal from 'hooks/common/useModal'
import useRouterEffect from 'hooks/common/useRouterEffect'
import { ModalKeys } from 'recoil/modal/modalTypes'
import Portal from './Portal'
import * as S from './style'
import Spinner from '../Spinner/Spinner'

interface ModalFrameProps {
  children: React.ReactNode
  modalKey: ModalKeys
}

const ModalFrame = ({ children, modalKey }: ModalFrameProps) => {
  const { closeModal } = useModal()

  const handleModalClose = () => {
    closeModal(modalKey)
  }

  useRouterEffect(() => {
    handleModalClose()
  })

  return (
    <Portal>
      <S.Blur onClick={handleModalClose} />
      <S.ChildrenWrapper>
        <Suspense fallback={<Spinner />}>
          {children}
          <S.ExitIcon onClick={handleModalClose} />
        </Suspense>
      </S.ChildrenWrapper>
    </Portal>
  )
}

export default ModalFrame
