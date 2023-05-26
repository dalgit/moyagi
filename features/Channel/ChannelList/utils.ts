import { IChannel } from 'types/channel'

export const filterChannels = (
  channels: IChannel[],
  userId: string | undefined,
) =>
  channels.filter((channel) => {
    return channel.manager._id === userId
  })
