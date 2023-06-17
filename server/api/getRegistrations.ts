import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const getRegistrations = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const registrations = await registrationsCollection
      .aggregate(registrationMatchPipeline({ channelId }))
      .toArray()

    return res.status(200).json(registrations)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getRegistrations
