import { DefaultValue, selectorFamily } from 'recoil'
import activeModalListAtom from './activeModalListAtom'
import modalState from './modalAtom'
import { Modal, ModalKeys } from './modalTypes'

const modalSelector = selectorFamily<Modal, ModalKeys>({
  key: 'modalSelector',

  get:
    (key) =>
    ({ get }) =>
      get(modalState(key)),

  set:
    (key) =>
    ({ get, set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(activeModalListAtom, (prev) =>
          prev.filter((modalKey) => modalKey !== key),
        )
        reset(modalState(key))
        return
      }

      if (!get(activeModalListAtom).includes(newValue.key)) {
        set(activeModalListAtom, (prev) => [...prev, newValue.key])
      }

      set(modalState(key), newValue)
    },
})

export default modalSelector
