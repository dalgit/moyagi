import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

const getJoinRequests = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const joinRequestCollection = db.collection('joinRequest')

    const joinRequests = await joinRequestCollection
      .aggregate([
        {
          $match: {
            requestorId: userId,
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
            channel: { name: true, description: true },
          },
        },
      ])
      .toArray()

    return res.status(200).json(joinRequests)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await authMiddleware(getJoinRequests)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
