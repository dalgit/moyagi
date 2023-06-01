import { atom } from 'recoil'
import { IUser } from 'types/user'
import sessionStorageEffect from './effect'

const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {} as IUser,
  effects_UNSTABLE: [sessionStorageEffect('user')],
})

export default userAtom
