export const channelKeys = {
  all: ['channels'],
  details: () => [...channelKeys.all, 'detail'],
  detail: (slug: string) => [...channelKeys.details(), slug],

  search: (keyword: string) => [...channelKeys.all, { search: keyword }],
  me: () => [...channelKeys.all, { user: 'me' }],
}
