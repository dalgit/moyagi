export const postKeys = {
  all: ['posts'],
  channels: (id: string) => ['posts', 'channels', id],
}

export const commentKeys = {
  all: ['comments'],
  posts: (id: string) => ['comments', 'posts', id],
}
