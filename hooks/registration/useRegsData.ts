import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import userAtom from 'recoil/user/userAtom'
import { IRegistration } from 'types/registration'
import { registrationKeys } from 'utils/queryKeys/registration'

export const useReg = (regId: string): IRegistration => {
  const queryClient = useQueryClient()
  return queryClient.getQueryData(
    registrationKeys.detail(regId),
  ) as IRegistration
}

export const useCheckMyReg = (regId: string) => {
  const { _id: userId } = useRecoilValue(userAtom)
  const reg = useReg(regId)

  return userId === reg?.requester._id
}

export const cacheRegs = (queryClient: QueryClient, regs: IRegistration[]) => {
  regs?.forEach((reg) => cacheReg(queryClient, reg))
}

export const cacheReg = (queryClient: QueryClient, reg: IRegistration) => {
  queryClient.setQueryData(registrationKeys.detail(reg._id), reg)
}
