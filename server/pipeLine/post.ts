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
      foreignField: 'postId',
      localField: '_id',
      as: 'comments',
    },
  },
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'comments.authorId',
      as: 'commentsAuthor',
    },
  },
  {
    $unwind: {
      path: '$commentsAuthor',
      preserveNullAndEmptyArrays: true,
    },
  },
  {
    $addFields: {
      'comments.author': '$commentsAuthor',
    },
  },
  {
    $project: {
      commentsAuthor: 0,
      'comments.authorId': 0,
      'comments.channelId': 0,
      'comments.postId': 0,
      'comments.author.password': 0,
    },
  },
]
