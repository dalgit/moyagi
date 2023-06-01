import { atomFamily } from 'recoil'
import { Modal, ModalKeys } from './modalTypes'

const modalAtom = atomFamily<Modal, ModalKeys>({
  key: 'modalAtom',
  default: (key) => ({
    key,
    isOpen: false,
    params: null,
  }),
})

export default modalAtom
