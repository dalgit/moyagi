import { selector } from 'recoil'
import channelAtom from './channelAtom'

const channelIdSelector = selector<string>({
  key: 'channelIdSelector',
  get: ({ get }) => get(channelAtom)?._id,
})

export default channelIdSelector
