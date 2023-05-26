import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { registrationByIdPipeLine } from '../../server/pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const deleteRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)
    const registrationId = new ObjectId(req.query.registrationId as string)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registration = await registrationsCollection
      .aggregate(registrationByIdPipeLine(registrationId))
      .next()

    await registrationsCollection.deleteOne({
      _id: registrationId,
      channelId,
    })

    return res.status(200).json(registration)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default deleteRegistration
