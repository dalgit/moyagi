import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import { getMyPosts } from '@/utils/api'

export const useGetMyPosts = (): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(['myPosts'], getMyPosts)
}
