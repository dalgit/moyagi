import { selector } from 'recoil'
import { IChannel } from 'types/channel'
import channelAtom from './channelAtom'

const channelSelector = selector<IChannel>({
  key: 'channelSelector',

  get: ({ get }) => get(channelAtom),
  set: ({ set }, channel) => set(channelAtom, channel),
})

export default channelSelector
