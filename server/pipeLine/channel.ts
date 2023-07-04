import { TFilter } from 'server/types/pipeline'

export const channelMatchPipeline = (filter: TFilter) => [
  {
    $match: filter,
  },
  ...managerPipeline,
  ...membersPipeline,
]

export const managerPipeline = [
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
      manager: { password: 0 },
    },
  },
]

export const membersPipeline = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'membersId',
      as: 'members',
    },
  },
  {
    $project: {
      membersId: 0,
      members: { email: 0, password: 0 },
    },
  },
]
