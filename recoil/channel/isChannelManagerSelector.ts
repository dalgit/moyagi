import { selector } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import channelManagerIdSelector from './managerId'

export const isChannelManagerSelector = selector({
  key: 'isChannelManagerSelector',
  get: ({ get }) => {
    const userId = get(userIdSelector)
    const managerId = get(channelManagerIdSelector)
    return userId === managerId
  },
})
