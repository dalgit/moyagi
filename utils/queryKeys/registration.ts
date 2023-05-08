export const registrationKeys = {
  all: ['registrations'],
  lists: () => [...registrationKeys.all, 'list'],
  list: (channelId: string) => [...registrationKeys.lists(), channelId],

  me: () => [...registrationKeys.all, { user: 'me' }],
}
