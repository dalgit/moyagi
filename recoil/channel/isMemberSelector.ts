import { selector } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import channelAtom from './channelAtom'

export const isMemberSelector = selector({
  key: 'isMemberSelector',
  get: ({ get }) => {
    const userId = get(userIdSelector)
    const channel = get(channelAtom)
    return channel?.members?.some((member) => member._id === userId)
  },
})
