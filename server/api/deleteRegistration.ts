import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const deleteRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const registrationId = new ObjectId(req.query.registrationId as string)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registration = await registrationsCollection
      .aggregate(registrationMatchPipeline({ _id: registrationId }))
      .next()

    await registrationsCollection.deleteOne({
      _id: registrationId,
    })

    return res.status(200).json(registration)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default deleteRegistration
