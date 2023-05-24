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

export const channelMembersPipeLine = (channelId: ObjectId) => [
  {
    $match: { _id: channelId },
  },
  {
    $loopup: {
      from: 'users',
      foreignField: '_id',
      localField: 'membersId',
      as: 'members',
    },
  },
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
      managerId: 0,
      membersId: 0,
      members: { email: 0, password: 0 },
      manager: { email: 0, password: 0 },
    },
  },
]
