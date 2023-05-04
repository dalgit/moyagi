import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

export const getMyJoinedChannels = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const joinedChannels = await channelsCollection
      .aggregate([
        {
          $match: {
            membersId: userId,
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
      .toArray()

    res.status(200).json(joinedChannels)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
