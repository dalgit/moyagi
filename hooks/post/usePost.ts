import { useRecoilValue } from 'recoil'
import userAtom from 'recoil/user/userAtom'
import useChannelPostsQuery from './useChannelPostsQuery'

export const usePostById = (postId: string) =>
  useChannelPostsQuery({
    select: (posts) => posts.find((post) => post._id === postId),
  })

export const useCheckMyPost = (postId: string) => {
  const { _id: userId } = useRecoilValue(userAtom)
  const { data: post } = usePostById(postId)

  return userId === post?.author?._id
}
