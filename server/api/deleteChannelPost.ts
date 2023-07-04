import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { postMatchPipeline } from '../../server/pipeLine/post'

const deleteChannelPost = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const channelId = new ObjectId(req.query.channelId as string)
  const postId = new ObjectId(req.query.postId as string)

  const postsCollection = req.db.collection('posts')

  const post = await postsCollection
    .aggregate(postMatchPipeline({ _id: postId }))
    .next()

  await postsCollection.deleteOne({
    _id: postId,
    channelId,
  })

  return res.status(200).json(post)
}

export default withDB(deleteChannelPost)
