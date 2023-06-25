export const registrationKeys = {
  all: ['registrations'],
  channels: (channelId: string) => ['registrations', 'channels', channelId],
  users: (userId: string) => ['registrations', 'users', userId],
}
