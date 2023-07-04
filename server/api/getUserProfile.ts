import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getUserProfile = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.query.id as string)
  const usersCollection = req.db.collection('users')

  const user = await usersCollection.findOne(
    { _id: userId },
    { projection: { password: 0 } },
  )

  if (!user) {
    return res.status(404).json({ message: '해당 유저를 찾을 수 없습니다.' })
  }

  return res.status(200).json(user)
}

export default withDB(getUserProfile)
