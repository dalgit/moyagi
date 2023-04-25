import { atom, selector, RecoilEnv } from 'recoil'
import { IUser } from '@/types/types'
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false

export const userState = atom<IUser | null>({
  key: 'userState',
  default: null,
})

export const userSelector = selector<IUser | null>({
  key: 'userSelector',
  get: ({ get }) => {
    const user = get(userState)
    return user
  },
  set: ({ set }, user) => set(userState, user),
})
