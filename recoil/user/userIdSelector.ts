import { selector } from 'recoil'
import userAtom from './userAtom'

const userIdSelector = selector<string>({
  key: 'userIdSelector',
  get: ({ get }) => get(userAtom)._id,
})

export default userIdSelector
