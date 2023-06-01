import { selector } from 'recoil'
import channelAtom from './channelAtom'
import { isMemberSelector } from './isMemberSelector'

const shouldFetchPostsSelector = selector<boolean>({
  key: 'shouldFetchPostsSelector',
  get: ({ get }) => {
    const { isPublic } = get(channelAtom)
    const isMember = get(isMemberSelector)
    return isPublic || isMember
  },
})

export default shouldFetchPostsSelector
