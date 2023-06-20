import { TFilter } from 'server/type/pipeline'

export const postMatchPipeline = (filter: TFilter) => [
  {
    $match: filter,
  },
  ...authorPipeline,
  ...channelPipeline,
  ...postCommentsPipeline,
]

const authorPipeline = [
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
    },
  },
]

const channelPipeline = [
  {
    $lookup: {
      from: 'channels',
      foreignField: '_id',
      localField: 'channelId',
      as: 'channel',
    },
  },
  {
    $unwind: '$channel',
  },
  {
    $project: {
      channelId: 0,
    },
  },
]

const postCommentsPipeline = [
  {
    $lookup: {
      from: 'comments',
      let: { postId: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$postId', '$$postId'] },
          },
        },
        {
          $lookup: {
            from: 'users',
            foreignField: '_id',
            localField: 'authorId',
            as: 'author',
          },
        },
        {
          $unwind: {
            path: '$author',
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            authorId: 0,
            channelId: 0,
            postId: 0,
            'author.password': 0,
          },
        },
      ],
      as: 'comments',
    },
  },
]
