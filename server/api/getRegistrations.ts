import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'

const getRegistrations = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)

  const registrations = await req.db
    .collection('registrations')
    .aggregate(registrationMatchPipeline({ channelId }))
    .toArray()

  return res.status(200).json(registrations)
}

export default withDB(getRegistrations)
