import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'

const deleteRegistration = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const registrationId = new ObjectId(req.query.registrationId as string)

  const registrationsCollection = req.db.collection('registrations')

  const registration = await req.db
    .collection('registrations')
    .aggregate(registrationMatchPipeline({ _id: registrationId }))
    .next()

  await registrationsCollection.deleteOne({
    _id: registrationId,
  })

  return res.status(200).json(registration)
}

export default withDB(deleteRegistration)
