import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'

const getMyRegistration = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.user?._id)

  const registrations = await req.db
    .collection('registrations')
    .aggregate(registrationMatchPipeline({ requesterId: userId }))
    .toArray()

  return res.status(200).json(registrations)
}

export default withDB(getMyRegistration)
