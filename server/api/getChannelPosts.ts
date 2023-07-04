import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { postMatchPipeline } from '../../server/pipeLine/post'

const getChannelPosts = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)

  const posts = await req.db
    .collection('posts')
    .aggregate(postMatchPipeline({ channelId }))
    .toArray()

  res.status(200).json(posts)
}

export default withDB(getChannelPosts)
