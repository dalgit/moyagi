import { ObjectId } from 'mongodb'

export const registrationByIdPipeLine = (id: ObjectId) => [
  {
    $match: { _id: id },
  },
  ...registrationBasePipeline,
]

export const registrationByUserIdPipeLine = (userId: ObjectId) => [
  {
    $match: { requesterId: userId },
  },
  ...registrationBasePipeline,
]

export const registrationByChannelIdPipeLine = (channelId: ObjectId) => [
  {
    $match: { channelId },
  },
  ...registrationBasePipeline,
]

const registrationBasePipeline = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'requesterId',
      as: 'requester',
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
    $unwind: '$requester',
  },
  {
    $unwind: '$channel',
  },
  {
    $project: {
      _id: true,
      message: true,
      status: true,
      time: true,
      requester: { _id: true, name: true },
      channel: true,
    },
  },
]
