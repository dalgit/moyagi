import React, { useCallback, useState } from 'react'
import ModalFrame from 'components/common/Modal/ModalFrame'

export const useModal2 = (Component: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    setIsOpen(() => true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(() => false)
  }, [])

  const Modal = (
    <ModalFrame isModalOpen={isOpen} closeModal={close}>
      <Component />
    </ModalFrame>
  )

  return {
    Modal,
    open,
    close,
    isOpen,
  }
}
