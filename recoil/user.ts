import { atom, selector, RecoilEnv, AtomEffect } from 'recoil'
import { IUser } from '@/types/user'
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

const sessionStorageEffect =
  (key: string): AtomEffect<IUser | null> =>
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

export const userState = atom<IUser | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [sessionStorageEffect('user')],
})

export const userSelector = selector<IUser | null>({
  key: 'userSelector',

  get: ({ get }) => {
    const user = get(userState)
    return user
  },
  set: ({ set }, user) => set(userState, user),
})

export const userIdSelector = selector<string | null>({
  key: 'userIdSelector',
  get: ({ get }) => {
    const user = get(userState)
    return user?._id || null
  },
})
