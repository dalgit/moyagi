import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import { registrationByIdPipeLine } from './pipeLine/registration'

export const deleteRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid, registrationId: rid } = req.query
    const channelId = new ObjectId(cid)
    const registrationId = new ObjectId(rid)

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
