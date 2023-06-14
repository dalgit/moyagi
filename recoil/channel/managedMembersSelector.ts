import { selector } from 'recoil'
import { IUser } from 'types/user'
import channelAtom from './channelAtom'
import channelManagerIdSelector from './managerId'

const managedMembersSelector = selector<IUser[]>({
  key: 'channelMembersSelector',

  get: ({ get }) => {
    const { members } = get(channelAtom)
    const managerId = get(channelManagerIdSelector)

    return members.filter((member) => member._id !== managerId)
  },
})

export default managedMembersSelector
