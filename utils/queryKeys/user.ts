export const userKeys = {
  all: ['users'],
  lists: () => [...userKeys.all, 'list'],
  list: (id: string) => [...userKeys.lists(), id],
}
