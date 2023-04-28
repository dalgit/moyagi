import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

export const getChannelBySlug = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const { channelAddress } = req.query

    const channel = await channelsCollection
      .aggregate([
        {
          $match: {
            address: channelAddress,
          },
        },
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
      ])
      .next()

    return res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
