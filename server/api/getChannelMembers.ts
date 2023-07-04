import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getChannelMembers = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)

  const channel = await req.db
    .collection('channels')
    .findOne({ _id: channelId })

  const membersId = channel?.membersId

  const members = await req.db
    .collection('users')
    .find({ _id: { $in: membersId } })
    .project({ password: 0 })
    .toArray()

  return res.status(200).json(members)
}

export default withDB(getChannelMembers)
