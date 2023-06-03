import { useRecoilValue } from 'recoil'
import userIdSelector from 'recoil/user/userIdSelector'
import { IChannel } from 'types/channel'
import useUserChannels from './useUserChannels'

const useManagedChannels = () => {
  const userId = useRecoilValue(userIdSelector)

  const filterChannels = (channels: IChannel[], userId: string) =>
    channels.filter((channel) => channel.manager._id === userId)

  return useUserChannels(userId, {
    select: (channels) => filterChannels(channels, userId),
  })
}

export default useManagedChannels
