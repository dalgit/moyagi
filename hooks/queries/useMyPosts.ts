import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from '@/types/post'
import client from '@/utils/axios/axios'
import { postKeys } from '@/utils/queryKeys/post'

export const useMyPosts = (): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(postKeys.me(), getMyPosts)
}

export const getMyPosts = async (): Promise<IPost[]> =>
  await client.get('/users/me/posts').then((res) => res.data)
