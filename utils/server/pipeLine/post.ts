import { ObjectId } from 'mongodb'

export const postByIdPipeLine = (id: ObjectId) => [
  {
    $match: { _id: id },
  },
  ...postBasePipeline,
]

export const postByChannelIdPipeLine = (channelId: ObjectId) => [
  {
    $match: { channelId },
  },
  ...postBasePipeline,
]

export const postByUserIdPipeLine = (userId: ObjectId) => [
  {
    $match: { authorId: userId },
  },
  ...postBasePipeline,
]

const postBasePipeline = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'authorId',
      as: 'author',
    },
  },
  {
    $lookup: {
      from: 'channels',
      foreignField: '_id',
      localField: 'channelId',
      as: 'channel',
    },
  },
  {
    $unwind: '$author',
  },
  {
    $unwind: '$channel',
  },
  {
    $project: {
      author: { _id: true, name: true },
      content: true,
      channel: true,
    },
  },
]
