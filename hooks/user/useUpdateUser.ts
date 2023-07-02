import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
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

  return useMutation(updateUser, {
    onMutate: ({ imageUrl, introduction, userId }) => {
      const previousUser = queryClient.getQueryData<IUser>(
        userKeys.detail(userId),
      )

      const updatedUser = {
        ...previousUser,
        imageUrl,
        introduction,
      } as IUser

      queryClient.setQueryData<IUser | undefined>(
        userKeys.detail(userId),
        updatedUser,
      )

      return { previousUser }
    },

    onSuccess: (updatedUser) => {
      setUser(updatedUser)
    },

    onError: (_, { userId }, context) => {
      queryClient.setQueryData<IUser>(
        userKeys.detail(userId),
        context?.previousUser,
      )
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
