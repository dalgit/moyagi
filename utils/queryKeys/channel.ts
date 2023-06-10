export const channelKeys = {
  all: ['channels'],
  details: () => [...channelKeys.all, 'detail'],
  detail: (slug: string) => [...channelKeys.details(), slug],
  lists: () => [...channelKeys.all, 'list'],
  list: (userId: string) => [...channelKeys.lists(), userId],
  search: (keyword: string) => [...channelKeys.all, { search: keyword }],
  recommended: () => [...channelKeys.all, 'recommended'],
}
