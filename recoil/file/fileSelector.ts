import { DefaultValue, selectorFamily } from 'recoil'
import fileAtom from './fileAtom'

const fileSelector = selectorFamily<File | null, string>({
  key: 'fileSelector',

  get:
    (key) =>
    ({ get }) =>
      get(fileAtom(key)),

  set:
    (key) =>
    ({ set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        reset(fileAtom(key))
      } else {
        set(fileAtom(key), newValue)
      }
    },
})

export default fileSelector
