import { selector } from 'recoil'
import userAtom from './atom'

const userIdSelector = selector<string | null>({
  key: 'userIdSelector',
  get: ({ get }) => get(userAtom)._id ?? '',
})

export default userIdSelector
