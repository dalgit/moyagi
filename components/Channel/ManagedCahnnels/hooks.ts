import { useRecoilValue } from 'recoil'
import { useUserChannels } from '@/hooks/queries/useUserChannels'
import { userIdSelector } from '@/recoil/user'
import { filterChannels } from './utils'

const useManagedChanneles = () => {
  const userId = useRecoilValue(userIdSelector)

  const { data: channels } = useUserChannels(userId, {
    select: (channels) => filterChannels(channels, userId),
  })

  return { channels }
}

export default useManagedChanneles
