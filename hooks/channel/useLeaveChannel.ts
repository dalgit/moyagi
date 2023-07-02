import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/client'
import { channelKeys } from 'utils/queryKeys/channel'
import useChannel from './useChannel'

interface deleteChannelMemberArgs {
  channelId: string
  userId: string
}

const useLeaveChannel = (): UseMutationResult<
  IUser,
  AxiosError,
  deleteChannelMemberArgs
> => {
  const queryClient = useQueryClient()
  const { address } = useChannel()

  return useMutation(leaveChannel, {
    onSuccess: (_, { userId }) => {
      alert('탈퇴가 완료되었습니다.')

      queryClient.invalidateQueries(channelKeys.detail(address))

      queryClient.invalidateQueries(channelKeys.users(userId))
    },
  })
}

export default useLeaveChannel

const leaveChannel = async ({
  channelId,
  userId,
}: deleteChannelMemberArgs): Promise<IUser> =>
  await client
    .delete(`/users/${userId}/channels/${channelId}`)
    .then((res) => res.data)
