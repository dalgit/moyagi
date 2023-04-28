import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { connectToDatabase } from '@/utils/db/db'

export const getJoinRequests = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid } = req.query
    const channelId = new ObjectId(cid)

    const db = await connectToDatabase()
    const joinRequestCollection = db.collection('joinRequest')

    const joinRequests = await joinRequestCollection
      .aggregate([
        {
          $match: { channelId },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'requestorId',
            foreignField: '_id',
            as: 'requestor',
          },
        },
        {
          $unwind: '$requestor',
        },
        {
          $project: {
            _id: true,
            message: true,
            status: true,
            time: true,
            requestor: { _id: true, name: true },
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
