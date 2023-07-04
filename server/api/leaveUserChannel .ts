import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const deleteChannelUser = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)
  const userId = new ObjectId(req.query.userId as string)

  const deletedUser = await req.db.collection('channels').findOneAndDelete({
    membersId: userId,
    channelId,
  })

  return res.status(200).json(deletedUser)
}

export default withDB(deleteChannelUser)
