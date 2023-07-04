import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import authMiddleware from 'server/utils/authMiddleware'
import withDB from 'server/utils/withDB'
import { registrationMatchPipeline } from '../../server/pipeLine/registration'

const getUserRegistrations = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.query.id as string)

  const registrations = await req.db
    .collection('registrations')
    .aggregate(registrationMatchPipeline({ requesterId: userId }))
    .toArray()

  return res.status(200).json(registrations)
}

export default authMiddleware(withDB(getUserRegistrations))
