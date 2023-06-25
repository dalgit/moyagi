export const channelKeys = {
  all: ['channels'],
  detail: (slug: string) => ['channels', 'detail', slug],
  users: (userId: string) => ['channels', 'users', userId],
  search: (keyword: string) => ['channels', { search: keyword }],
  recommended: () => ['channels', 'recommended'],
}
