import { useRecoilValue } from 'recoil'
import { useUserChannels } from '@/hooks/queries/useUserChannels'
import { userIdSelector } from '@/recoil/user'
import { IChannel } from '@/types/channel'

const useManagedChanneles = () => {
  const userId = useRecoilValue(userIdSelector) || ''

  const filterChannels = (channels: IChannel[], userId: string) =>
    channels?.filter((channel) => channel.manager._id === userId)

  const { data: channels } = useUserChannels(userId, {
    select: (channels) => filterChannels(channels, userId),
  })

  return [channels]
}

export default useManagedChanneles
