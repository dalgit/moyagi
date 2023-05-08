import { ObjectId } from 'mongodb'

export const channelsByAddressPipeLine = (address: string) => [
  {
    $match: { address: address },
  },
  ...channelBasePipeline,
]

export const channelsByUserIdPipeLine = (userId: ObjectId) => [
  {
    $match: { membersId: userId },
  },
  ...channelBasePipeline,
]

const channelBasePipeline = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'membersId',
      as: 'members',
    },
  },
  {
    $lookup: {
      from: 'users',
      localField: 'managerId',
      foreignField: '_id',
      as: 'manager',
    },
  },
  {
    $unwind: '$manager',
  },
  {
    $project: {
      _id: true,
      name: true,
      address: true,
      description: true,
      isPublic: true,
      manager: { _id: true, name: true },
      members: { _id: true, name: true },
    },
  },
]
