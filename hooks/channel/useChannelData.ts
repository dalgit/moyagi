import { useRecoilValue } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import useChannel from './useChannel'

export const useIsMember = () => {
  const members = useChannel((data) => data.members)
  const userId = useRecoilValue(userIdSelector)
  return members?.some((member) => member._id === userId)
}

export const useShouldFetchPosts = () => {
  const isPublic = useChannel((data) => data.isPublic)
  const isMember = useIsMember()
  return isPublic || isMember
}

export const useIsManager = () => {
  const manager = useChannel((data) => data.manager)
  const userId = useRecoilValue(userIdSelector)
  return manager._id === userId
}

export const useManagedMembers = () => {
  const { members, manager } = useChannel()
  return members.filter((member) => member._id !== manager._id)
}
