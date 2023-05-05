import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { connectToDatabase } from '@/utils/db/db'

export const getRegistrations = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid } = req.query
    const channelId = new ObjectId(cid)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registrations = await registrationsCollection
      .aggregate([
        {
          $match: { channelId },
        },
        {
          $lookup: {
            from: 'users',
            localField: 'requesterId',
            foreignField: '_id',
            as: 'requester',
          },
        },
        {
          $unwind: '$requester',
        },
        {
          $project: {
            _id: true,
            message: true,
            status: true,
            time: true,
            requester: { _id: true, name: true },
          },
        },
      ])
      .toArray()

    return res.status(200).json(registrations)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
