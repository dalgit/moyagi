import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { IUser } from 'types/user'
import client from 'utils/axios/axios'
import { userKeys } from 'utils/queryKeys/user'

interface updateUserArgs {
  imageUrl?: string
  introduction: string
}

const useUpdateUser = (): UseMutationResult<
  IUser,
  AxiosError,
  updateUserArgs
> => {
  const queryClient = useQueryClient()

  return useMutation(updateUser, {
    onSuccess: (updatedUser) => {
      queryClient.setQueryData<IUser>(userKeys.me(), updatedUser)
      alert('프로필이 업데이트 되었습니다.')
    },
  })
}

export default useUpdateUser

const updateUser = async ({
  imageUrl,
  introduction,
}: updateUserArgs): Promise<IUser> =>
  await client
    .patch('/users/me', {
      imageUrl,
      introduction,
    })
    .then((res) => res.data)
