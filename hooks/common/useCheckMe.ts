import { useRecoilValue } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'

const useCheckMe = (id: string) => {
  const userId = useRecoilValue(userIdSelector)
  return id === userId
}

export default useCheckMe
