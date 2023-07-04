import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getUserSettings = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.query.id as string)

  const user = await req.db
    .collection('users')
    .findOne({ _id: userId }, { projection: { password: 0 } })

  return res.status(200).json(user)
}

export default withDB(getUserSettings)
