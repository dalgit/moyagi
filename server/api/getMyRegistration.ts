import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const getMyRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const userId = new ObjectId(req.user?._id)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registrations = await registrationsCollection
      .aggregate(registrationMatchPipeline({ requesterId: userId }))
      .toArray()

    return res.status(200).json(registrations)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getMyRegistration
