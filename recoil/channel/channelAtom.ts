import { atom } from 'recoil'
import { IChannel } from 'types/channel'

const channelAtom = atom<IChannel>({
  key: 'channelAtom',
  default: {} as IChannel,
})

export default channelAtom
