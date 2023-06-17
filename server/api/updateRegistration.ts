import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { registrationMatchPipeline } from '../pipeLine/registration'
import connectToDatabase from '../utils/connectToDatabase'

const updateRegistration = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)
    const registrationId = new ObjectId(req.query.registrationId as string)
    const { status } = req.body

    const db = await connectToDatabase()
    const registrationsCollection = db.collection('registrations')
    const channelsCollection = db.collection('channels')

    const result = await registrationsCollection.findOneAndUpdate(
      {
        _id: registrationId,
        channelId,
      },
      { $set: { status } },
    )

    if (status === 'approved') {
      channelsCollection.updateOne(
        { _id: channelId },
        { $push: { membersId: result.value?.requesterId } },
      )
    }

    const registration = await registrationsCollection
      .aggregate(registrationMatchPipeline({ _id: registrationId }))
      .next()

    return res.status(200).json(registration)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
export default updateRegistration
