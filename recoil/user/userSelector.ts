import { selector } from 'recoil'
import { IUser } from 'types/user'
import userAtom from './userAtom'

const userSelector = selector<IUser>({
  key: 'userSelector',

  get: ({ get }) => get(userAtom),
  set: ({ set }, user) => set(userAtom, user),
})

export default userSelector
