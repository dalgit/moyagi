import { TFilter } from 'server/type/pipeline'

export const registrationMatchPipeline = (filter: TFilter) => [
  {
    $match: filter,
  },
  ...requesterPipeline,
  ...channelIdPipeline,
]

const requesterPipeline = [
  {
    $lookup: {
      from: 'users',
      foreignField: '_id',
      localField: 'requesterId',
      as: 'requester',
    },
  },
  {
    $unwind: '$requester',
  },
  {
    $project: {
      requester: { password: 0 },
    },
  },
]

const channelIdPipeline = [
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
]
