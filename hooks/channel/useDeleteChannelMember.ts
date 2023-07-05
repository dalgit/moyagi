import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/client'

interface DeleteChannelMemberParams {
  channelId: string
  userId: string
}

const useDeleteChannelMember = (): UseMutationResult<
  IUser,
  AxiosError,
  DeleteChannelMemberParams
> => {
  return useMutation(deleteChannelMember, {
    onSuccess: () => {
      alert('삭제가 완료되었습니다.')
    },
  })
}

export default useDeleteChannelMember

const deleteChannelMember = async ({
  channelId,
  userId,
}: DeleteChannelMemberParams): Promise<IUser> =>
  await client
    .delete(`/channels/${channelId}/users/${userId}`)
    .then((res) => res.data)
