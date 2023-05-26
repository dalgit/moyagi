import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { registrationByIdPipeLine } from '../pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const updateRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)
    const registrationId = new ObjectId(req.query.registrationId as string)

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')

    const { status } = req.body

    await registrationsCollection.updateOne(
      {
        _id: registrationId,
        channelId,
      },
      { $set: { status } },
    )

    const registration = await registrationsCollection
      .aggregate(registrationByIdPipeLine(registrationId))
      .next()

    return res.status(200).json(registration)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
export default updateRegistration
