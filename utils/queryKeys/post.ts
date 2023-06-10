export const postKeys = {
  all: ['posts'],
  lists: () => [...postKeys.all, 'channel'],
  list: (id: string) => [...postKeys.lists(), id],
}
