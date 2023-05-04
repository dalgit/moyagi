import React, { useCallback, useState, ReactNode } from 'react'
import ModalFrame from '@/components/Modal/ModalFrame'

//컴포넌트 펑션으로 만들면 될듯?

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
