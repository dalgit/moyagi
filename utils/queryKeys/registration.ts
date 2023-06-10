export const registrationKeys = {
  all: ['registrations'],
  lists: () => [...registrationKeys.all, 'list'],
  list: (channelId: string) => [...registrationKeys.lists(), channelId],
  users: (id: string) => [...registrationKeys.all, 'users', id],
}
