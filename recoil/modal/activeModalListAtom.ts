import { atom } from 'recoil'
import { ModalKeys } from './modalTypes'

const activeModalListAtom = atom<ModalKeys[]>({
  key: 'activeModalListAtom',
  default: [],
})

export default activeModalListAtom
