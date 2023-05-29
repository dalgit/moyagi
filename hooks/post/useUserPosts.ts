import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IPost } from 'types/post'
import client from 'utils/axios/axios'
import { postKeys } from 'utils/queryKeys/post'

const useUserPosts = (id: string): UseQueryResult<IPost[], AxiosError> => {
  return useQuery(postKeys.me(), () => getUserPosts(id))
}

export default useUserPosts

const getUserPosts = async (id: string): Promise<IPost[]> =>
  await client.get(`/users/${id}/posts`).then((res) => res.data)
