import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import authMiddleware from 'server/utils/authMiddleware'
import { NextApiRequestWithUser } from 'types/types'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const createRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const userId = new ObjectId(req.user?._id)
    const channelId = new ObjectId(req.query.channelId as string)

    const { message, isPublic } = req.body

    const status = isPublic ? 'approved' : 'pending'

    const existingRegistration = await registrationsCollection.findOne({
      requesterId: userId,
      channelId,
    })

    if (existingRegistration?.status === 'pending') {
      return res.status(409).json({ message: '이미 가입을 심사중입니다.' })
    }

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
      createdAt: new Date(),
    })

    const registration = await registrationsCollection
      .aggregate(registrationMatchPipeline({ _id: insertedId }))
      .next()

    return res.status(200).json(registration)
  } catch {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default authMiddleware(createRegistration)
