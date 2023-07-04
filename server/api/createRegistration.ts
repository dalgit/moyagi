import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import authMiddleware from 'server/utils/authMiddleware'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'

const createRegistration = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const registrationsCollection = req.db.collection('registrations')

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
    const channelsCollection = req.db.collection('channels')

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
}

export default authMiddleware(withDB(createRegistration))
