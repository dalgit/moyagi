import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { RecoilState, useSetRecoilState } from 'recoil'

const useRecoilQuery = <T>(
  recoilState: RecoilState<T>,
  key: Array<string | object>,
  func: () => Promise<T>,
) => {
  const setState = useSetRecoilState(recoilState)
  const result = useQuery<T, AxiosError>(key, func)

  useEffect(() => {
    if (result.isSuccess) {
      setState(result.data)
    }
  }, [result.data, result.isSuccess, setState])

  return result
}

export default useRecoilQuery
