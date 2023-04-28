import { useQuery } from '@tanstack/react-query'
import { IPost } from '@/types/post'
import { getMyPosts } from '@/utils/api'

export const useGetMyPosts = () => {
  return useQuery<IPost[], Error>(['myPosts'], getMyPosts)
}
