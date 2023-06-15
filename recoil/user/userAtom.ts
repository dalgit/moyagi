import { atom } from 'recoil'
import { IUser } from 'types/user'
import localStorageEffect from './effect'

const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {} as IUser,
  effects: [localStorageEffect('user')],
})

export default userAtom
