import { atomFamily } from 'recoil'

const fileAtom = atomFamily<File | null, string>({
  key: 'fileAtom',
  default: null,
})

export default fileAtom
