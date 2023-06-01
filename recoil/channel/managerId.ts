import { selector } from 'recoil'
import channelAtom from './channelAtom'

const channelManagerIdSelector = selector<string>({
  key: 'channelManagerIdSelector',
  get: ({ get }) => {
    const { manager } = get(channelAtom)
    return manager?._id
  },
})

export default channelManagerIdSelector
