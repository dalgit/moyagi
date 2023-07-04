import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../pipeLine/registration'

const updateRegistration = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)
  const registrationId = new ObjectId(req.query.registrationId as string)
  const { status } = req.body

  const registrationsCollection = req.db.collection('registrations')
  const channelsCollection = req.db.collection('channels')

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
}

export default withDB(updateRegistration)
