import { atom } from 'recoil'

export const fileAtom = atom<File | null>({
  key: 'fileAtom',
  default: null,
})
