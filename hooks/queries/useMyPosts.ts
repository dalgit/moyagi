import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import { getMyPosts } from '@/utils/api'
import { postKeys } from '@/utils/queryKeys/post'

export const useMyPosts = (): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(postKeys.user('me'), getMyPosts)
}
