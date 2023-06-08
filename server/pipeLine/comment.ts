import { ObjectId } from 'mongodb'

export const commentByIdPipeLine = (id: ObjectId) => [
  {
    $match: { _id: id },
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
    $unwind: { path: '$author' },
  },
  {
    $project: {
      authorId: 0,
      channelId: 0,
      postId: 0,
      'author.password': 0,
    },
  },
]
