import { selectorFamily } from 'recoil'
import userIdSelector from './userIdSelector'

const isMeSelector = selectorFamily<boolean, string | undefined>({
  key: 'isMeSelector',
  get:
    (id) =>
    ({ get }) =>
      !!id && id === get(userIdSelector),
})

export default isMeSelector
