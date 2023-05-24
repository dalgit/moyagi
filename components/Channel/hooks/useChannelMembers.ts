import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from '@/types/user'
import client from '@/utils/axios/axios'

const useChannelMembers = (
  channelId: string,
): UseQueryResult<IUser[], AxiosError> => {
  return useQuery([channelId], () => getChannelMembers(channelId))
}

export default useChannelMembers

const getChannelMembers = async (channelId: string): Promise<IUser[]> =>
  await client.get(`/channels/${channelId}/users`).then((res) => res.data)
