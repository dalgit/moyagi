import { RecoilEnv, AtomEffect } from 'recoil'
import { IUser } from 'types/user'

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const sessionStorageEffect =
  (key: string): AtomEffect<IUser> =>
  ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      const savedValue = sessionStorage.getItem(key)
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue))
      }
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? sessionStorage.removeItem(key)
        : sessionStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export default sessionStorageEffect
