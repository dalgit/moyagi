import MODAL_COMPONENTS from 'components/common/ModalContainer/modalComponents'

export type ModalKeys = keyof typeof MODAL_COMPONENTS

export type ModalParams = Record<string, unknown> | null | object[]

export type Modal = {
  key: ModalKeys
  isOpen: boolean
  params: ModalParams
}
