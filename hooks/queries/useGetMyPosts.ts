import { useQuery } from '@tanstack/react-query'
import { getMyPosts } from '@/utils/api'

export const useGetMyPosts = () => {
  return useQuery(['myPosts'], getMyPosts)
}
