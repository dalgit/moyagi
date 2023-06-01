import { useCallback } from 'react'
import { useRecoilCallback } from 'recoil'
import modalSelector from 'recoil/modal/modalSelector'
import { Modal, ModalParams, ModalKeys } from 'recoil/modal/modalTypes'

const useModal = () => {
  const setModal = useRecoilCallback(
    ({ set }) =>
      (key: ModalKeys, value: Modal) => {
        set(modalSelector(key), value)
      },
    [],
  )

  const closeModal = useRecoilCallback(
    ({ reset }) =>
      (key: ModalKeys) => {
        reset(modalSelector(key))
      },
    [],
  )

  const openModal = useCallback(
    (key: ModalKeys, params: ModalParams = null) => {
      const value = { key, isOpen: true, params }

      setModal(key, value)
    },
    [setModal],
  )

  return { openModal, closeModal }
}

export default useModal
