import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { connectToDatabase } from '@/utils/db/db'
import { registrationByChannelIdPipeLine } from './pipeLine/registration'

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
      .aggregate(registrationByChannelIdPipeLine(channelId))
      .toArray()

    return res.status(200).json(registrations)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
