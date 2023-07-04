import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const deleteChannelUser = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)
  const userId = new ObjectId(req.query.id as string)

  const updatedChannel = await req.db
    .collection('channels')
    .updateOne({ _id: channelId }, { $pull: { membersId: userId } })

  return res.status(200).json(updatedChannel)
}

export default withDB(deleteChannelUser)
