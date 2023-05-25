import { atom } from 'recoil'
import { IUser } from '@/types/user'
import sessionStorageEffect from './effect'

const userAtom = atom<IUser | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [sessionStorageEffect('user')],
})

export default userAtom
