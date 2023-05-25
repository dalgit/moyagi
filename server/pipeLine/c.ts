export const userLookupPipeline = [
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
      password: 0,
    },
  },
]

export const channelLookupPipeline = [
  {
    $lookup: {
      from: 'channels',
      foreignField: '_id',
      localField: 'channelId',
      as: 'channel',
    },
  },
  { $unwind: '$channel' },
  {
    $project: {
      channelId: 0,
    },
  },
]

export const user = [
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
      password: 0,
    },
  },
]
