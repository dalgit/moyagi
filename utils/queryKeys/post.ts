export const postKeys = {
  all: ['posts'],
  channels: () => [...postKeys.all, 'channel'],
  channel: (channelId: string) => [...postKeys.channels(), channelId],
  user: (userId: string) => [...postKeys.all, 'users', userId],
}
