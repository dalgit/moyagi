import { IChannel } from '@/types/channel'

export const filterChannels = (
  channels: IChannel[],
  userId: string | undefined,
) => {
  console.log(channels)
  return channels?.filter((channel) => {
    return channel.manager._id === userId
  })
}
