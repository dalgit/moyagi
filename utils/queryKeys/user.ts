export const userKeys = {
  all: ['user'],
  details: () => [...userKeys.all, 'detail'],
  detail: (id: string) => [...userKeys.details(), id],
}
