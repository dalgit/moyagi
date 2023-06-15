import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { useToast } from 'hooks/common'
import userAtom from 'recoil/user/userAtom'
import { IUser } from 'types/user'
import client from 'utils/axios/client'
import { userKeys } from 'utils/queryKeys/user'

interface updateUserArgs {
  imageUrl?: string
  introduction?: string
  userId: string
}

const useUpdateUser = (): UseMutationResult<
  IUser,
  AxiosError,
  updateUserArgs
> => {
  const queryClient = useQueryClient()
  const setUser = useSetRecoilState(userAtom)
  const { onToast } = useToast()

  return useMutation(updateUser, {
    onSuccess: (updatedUser, { userId }) => {
      queryClient.setQueryData<IUser>(userKeys.list(userId), updatedUser)
      setUser(updatedUser)
      onToast({ content: '프로필이 업데이트 되었습니다.', type: 'success' })
    },
  })
}

export default useUpdateUser

const updateUser = async ({
  imageUrl,
  introduction,
  userId,
}: updateUserArgs): Promise<IUser> =>
  await client
    .patch(`/users/${userId}`, {
      imageUrl,
      introduction,
    })
    .then((res) => res.data)
