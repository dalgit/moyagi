import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

export const getMyRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registration = await registrationsCollection
      .aggregate([
        {
          $match: {
            requesterId: userId,
          },
        },
        {
          $lookup: {
            from: 'channels',
            localField: 'channelId',
            foreignField: '_id',
            as: 'channel',
          },
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
            channel: true,
          },
        },
      ])
      .toArray()

    return res.status(200).json(registration)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
