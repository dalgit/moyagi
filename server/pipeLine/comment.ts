import { TFilter } from 'server/types/pipeline'

export const commentMatchPipeline = (filter: TFilter) => [
  {
    $match: filter,
  },
  ...commentPipeLine,
]

const commentPipeLine = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'authorId',
      as: 'author',
    },
  },
  {
    $unwind: '$author',
  },
  {
    $project: {
      authorId: 0,
      author: { password: 0 },
      channelId: 0,
      postId: 0,
    },
  },
]
