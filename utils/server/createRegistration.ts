import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import { registrationByIdPipeLine } from './pipeLine/registration'

export const createRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const { user } = req
    const userId = new ObjectId(user?.id)

    const { message, isPublic } = req.body

    const { channelId: cid } = req.query
    const channelId = new ObjectId(cid)

    const status = isPublic ? 'approved' : 'pending'
    const time = new Date()

    if (isPublic) {
      const channelsCollection = db.collection('channels')

      await channelsCollection.updateOne(
        { _id: channelId },
        { $push: { membersId: userId } },
      )
    }

    const { insertedId } = await registrationsCollection.insertOne({
      requesterId: userId,
      channelId,
      message,
      status,
      time,
    })

    const registration = await registrationsCollection
      .aggregate(registrationByIdPipeLine(insertedId))
      .next()

    return res.status(200).json(registration)
  } catch {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
